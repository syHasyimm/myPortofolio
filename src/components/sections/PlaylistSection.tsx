import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  HeartIcon as HeartIconSolid,
} from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

// ──────────────────────────────────────────────
// Data playlist — file MP3 taruh di public/music/
// ──────────────────────────────────────────────
const playlist = [
  {
    id: 1,
    title: "Anti Hero",
    artist: "Mighfar Suganda",
    album: "Mighfar Suganda",
    cover: "https://i.scdn.co/image/ab67616d00001e023c93274728447b23b933709a",
    src: "/music/antihero.mp3",
    isLiked: true,
  },
  {
    id: 2,
    title: "Gemuruh Riuh",
    artist: "Mighfar Suganda",
    album: "Mighfar Suganda",
    cover: "https://i.scdn.co/image/ab67616d0000b27388ea23ebe6a128d85f927ca1",
    src: "/music/gemuruhriuh.mp3",
    isLiked: true,
  },
  {
    id: 3,
    title: "Cipher Naught",
    artist: "Mighfar Suganda",
    album: "Mighfar Suganda",
    cover: "https://i.scdn.co/image/ab67616d0000b273f9acba2018b44e6ec495ce05",
    src: "/music/ciphernaught.mp3",
    isLiked: true,
  },
  {
    id: 4,
    title: "Broken Beautiful Blue Ruin",
    artist: "Mighfar Suganda",
    album: "Mighfar Suganda",
    cover:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/4e/9b/e3/4e9be313-8e4a-924b-80ad-c25f47cc7916/3617050737311_cover.jpg/486x486bb.png",
    src: "/music/blueruin.mp3",
    isLiked: true,
  },
];

// Format seconds → m:ss
const fmt = (s: number) => {
  if (!s || !isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

export const PlaylistSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [likedSongs, setLikedSongs] = useState<Record<number, boolean>>(
    playlist.reduce((acc, song) => ({ ...acc, [song.id]: song.isLiked }), {}),
  );

  const currentSong = playlist[currentIndex];

  // Sync audio element when song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = currentSong.src;
    audio.load();
    setCurrentTime(0);
    setDuration(0);

    if (isPlaying) {
      audio.play().catch(() => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Attach audio event listeners
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => setDuration(audio.duration);
    const onEnded = () => handleNext();

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(() => {});
      setIsPlaying(true);
    }
  }, [isPlaying]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  }, []);

  const handlePrev = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      return;
    }
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  }, []);

  const playSong = useCallback(
    (song: (typeof playlist)[0]) => {
      const idx = playlist.findIndex((s) => s.id === song.id);
      if (idx === currentIndex) {
        togglePlay();
      } else {
        setCurrentIndex(idx);
        setIsPlaying(true);
      }
    },
    [currentIndex, togglePlay],
  );

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = pct * duration;
  };

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setLikedSongs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <section id="playlist" className="py-24 overflow-hidden relative">
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="metadata" />

      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] opacity-10 dark:opacity-20 blur-[120px] pointer-events-none transition-colors duration-1000"
        style={{
          background: "radial-gradient(circle, #1DB954 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Daftar Putar
          </h2>
          <div className="w-20 h-1 bg-[#1DB954] mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lagu-lagu favorit yang membuat saya tetap tenang dalam kondisi
            apapun. Silakan dengarkan daftar putarnya.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* ── Left Column: Now Playing ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-xl sticky top-24"
          >
            <div className="text-sm text-muted-foreground font-semibold uppercase tracking-wider mb-6 flex items-center gap-2">
              {isPlaying && (
                <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse" />
              )}
              {isPlaying ? "Sedang Diputar" : "Dijeda"}
            </div>

            {/* Cover Art */}
            <div className="relative group rounded-xl overflow-hidden shadow-2xl mb-6 aspect-square bg-muted">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSong.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  src={currentSong.cover}
                  alt={currentSong.title}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Song Info */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold font-outfit text-foreground leading-tight">
                  {currentSong.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {currentSong.artist}
                </p>
              </div>
              <button
                onClick={(e) => toggleLike(e, currentSong.id)}
                className="p-2 text-muted-foreground hover:text-[#1DB954] transition-colors"
              >
                {likedSongs[currentSong.id] ? (
                  <HeartIconSolid className="w-7 h-7 text-[#1DB954]" />
                ) : (
                  <HeartIconOutline className="w-7 h-7" />
                )}
              </button>
            </div>

            {/* Progress Bar (clickable to seek) */}
            <div className="mb-6">
              <div
                className="h-1.5 w-full bg-secondary rounded-full overflow-hidden cursor-pointer group/bar relative"
                onClick={seek}
              >
                <div
                  className="h-full bg-foreground group-hover/bar:bg-[#1DB954] transition-colors rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-foreground rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity shadow" />
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                <span>{fmt(currentTime)}</span>
                <span>{fmt(duration)}</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <BackwardIcon className="w-8 h-8" />
              </button>
              <button
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? (
                  <PauseIcon className="w-8 h-8" />
                ) : (
                  <PlayIcon className="w-8 h-8 ml-1" />
                )}
              </button>
              <button
                onClick={handleNext}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ForwardIcon className="w-8 h-8" />
              </button>
            </div>
          </motion.div>

          {/* ── Right Column: Tracklist ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="hidden md:grid grid-cols-[16px_1fr_1fr_50px] gap-4 py-2 px-4 border-b border-border text-sm font-medium text-muted-foreground tracking-wider uppercase mb-2">
              <div className="text-center">#</div>
              <div>Judul</div>
              <div>Album</div>
              <div className="text-right">Waktu</div>
            </div>

            <div className="flex flex-col gap-2">
              {playlist.map((song, index) => {
                const isActive = currentSong.id === song.id;

                return (
                  <div
                    key={song.id}
                    onClick={() => playSong(song)}
                    className={`group flex items-center p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/5 dark:hover:bg-white/5 ${isActive ? "bg-secondary/50 dark:bg-white/10" : ""}`}
                  >
                    {/* Track number / equalizer */}
                    <div className="w-8 flex justify-center items-center text-muted-foreground group-hover:hidden">
                      {isActive && isPlaying ? (
                        <div className="flex items-end gap-[2px] h-4">
                          <motion.div
                            animate={{ height: [4, 12, 4] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="w-1 bg-[#1DB954]"
                          />
                          <motion.div
                            animate={{ height: [8, 16, 8] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              delay: 0.2,
                            }}
                            className="w-1 bg-[#1DB954]"
                          />
                          <motion.div
                            animate={{ height: [4, 10, 4] }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              delay: 0.4,
                            }}
                            className="w-1 bg-[#1DB954]"
                          />
                        </div>
                      ) : (
                        <span
                          className={
                            isActive ? "text-[#1DB954] font-medium" : ""
                          }
                        >
                          {index + 1}
                        </span>
                      )}
                    </div>

                    {/* Hover play/pause icon */}
                    <div className="w-8 h-8 justify-center items-center hidden group-hover:flex text-foreground">
                      {isActive && isPlaying ? (
                        <PauseIcon className="w-5 h-5 text-[#1DB954]" />
                      ) : (
                        <PlayIcon className="w-5 h-5" />
                      )}
                    </div>

                    {/* Song info */}
                    <div className="flex-1 flex items-center gap-4 min-w-0 pr-4">
                      <img
                        src={song.cover}
                        alt={song.title}
                        className="w-10 h-10 rounded shadow-sm"
                      />
                      <div className="min-w-0">
                        <p
                          className={`font-semibold truncate ${isActive ? "text-[#1DB954]" : "text-foreground"}`}
                        >
                          {song.title}
                        </p>
                        <p className="text-sm text-muted-foreground truncate hover:underline">
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    {/* Album */}
                    <div className="flex-1 hidden md:block text-sm text-muted-foreground truncate hover:underline pr-4">
                      {song.album}
                    </div>

                    {/* Like & duration */}
                    <div className="flex items-center justify-end gap-3 w-20">
                      <button
                        onClick={(e) => toggleLike(e, song.id)}
                        className={`transition-opacity ${likedSongs[song.id] ? "opacity-100 text-[#1DB954]" : "opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-foreground"}`}
                      >
                        {likedSongs[song.id] ? (
                          <HeartIconSolid className="w-5 h-5" />
                        ) : (
                          <HeartIconOutline className="w-5 h-5" />
                        )}
                      </button>
                      <span className="text-sm text-muted-foreground font-medium">
                        {isActive ? fmt(currentTime) : "—"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
