import { motion } from "framer-motion";
import { FaGamepad, FaUsers, FaUniversity, FaPray } from "react-icons/fa";

const journeyData = [
  {
    id: 1,
    title: "Masa Kecil: Sang Raja PS 2",
    date: "Babak Pertama",
    icon: FaGamepad,
    color: "text-blue-500",
    bg: "bg-blue-500",
    description: [
      "Masa kecil saya adalah definisi dari kata \"bandel\". Di usia 5 tahun, ketika tren PS 2 mulai merajalela, saya resmi menjadi korbannya—atau lebih tepatnya, rajanya. Tiada hari tanpa bermain PS. Bahkan, saya sempat nekat mencuri uang orang tua demi hobi ini, yang berakhir dengan adegan kejar-kejaran legendaris melawan Ayah yang membawa kayu api.",
      "Kenakalan itu membuat Ayah memutuskan menyekolahkan saya lebih awal, yakni di usia 6,5 tahun, meski syarat masuk SD saat itu adalah 7 tahun. Lucunya, saat TK pun saya sering bolos ke rental PS karena malu berkenalan dengan orang baru. Namun, begitu masuk SD, dunia saya berubah. Saya menemukan keasyikan berteman dengan kawan sebaya. Prestasi saya pun tidak mengecewakan; saya konsisten di peringkat 4 dari 12 siswa. Hadiah buku dari Ayah saat itu terasa lebih berharga dari apa pun."
    ],
  },
  {
    id: 2,
    title: "Remaja: Organisasi dan Persahabatan",
    date: "Masa Pencarian Jati Diri",
    icon: FaUsers,
    color: "text-green-500",
    bg: "bg-green-500",
    description: [
      "Memasuki SMP N 2 Kepenuhan, saya sempat merasa terintimidasi oleh badan kawan-kawan yang jauh lebih besar. Namun, di sanalah saya belajar bahwa \"lawan bisa jadi kawan\". Piki Sastri, rival saya saat studi banding di SD dulu, justru menjadi teman baik. Di bangku SMP, saya berhasil mempertahankan peringkat 2 hingga lulus.",
      "Masa SMA menjadi babak yang paling berkesan. Saya bergabung dengan organisasi Rohis (Rohaniah Islam). Di sana, saya belajar banyak hal, mulai dari public speaking hingga tata cara mengurus jenazah. Momen paling tak terlupakan adalah MABIT (Malam Bina Iman dan Takwa), di mana kami tadarus bersama, mendengarkan nasihat pembina, dan ditutup dengan \"uji nyali\" mengelilingi sekolah di tengah malam yang horor.",
      "Di sekolah, saya dikenal netral dan bisa berteman dengan siapa saja, dari kelas MIA hingga IIS. Namun, hati saya tertambat pada geng \"4 Plenger\": Ilham, Zikri, Khaidir, dan Giwa. Ada satu lagi teman kami, Parulian, yang lebih sering absen karena sibuk \"bucin\". Sayangnya, kisah SMA kami dipangkas paksa oleh pandemi COVID-19 yang membuat kami harus berpisah lebih awal di bangku kelas 2 semester akhir."
    ],
  },
  {
    id: 3,
    title: "Kuliah dan Badai Kehidupan",
    date: "Ujian Kedewasaan",
    icon: FaUniversity,
    color: "text-purple-500",
    bg: "bg-purple-500",
    description: [
      "Minat saya pada teknologi tumbuh saat saya bekerja di tempat fotokopi. Hal itu membawa saya ke Universitas Pasir Pengaraian (UPP) mengambil jurusan Teknik Informatika. Tak disangka, di semester 3, kekasih saya juga masuk ke kampus yang sama di jurusan Sistem Informasi. Tak ada lagi kata LDR, meski jadwal kuliah kami seringkali bertabrakan karena sistem online-offline sisa pandemi.",
      "Namun, hidup tak selamanya tenang. Di tengah perjuangan menyusun proposal skripsi, badai besar datang: kedua orang tua saya memutuskan untuk berpisah. Ego masing-masing tak lagi bisa dipertemukan. Dunia saya runtuh. Selama dua bulan, otak saya buntu; tak satu kata pun sanggup saya tuliskan di lembar skripsi.",
      "Dalam masa-masa kelam itu, pasangan saya dan sahabat-sahabat saya menjadi tiang penyangga. Mereka yang memperbaiki mood saya dan menghibur saya saat beban hidup terasa tak tertanggungkan."
    ],
  },
  {
    id: 4,
    title: "Sebuah Penyesalan dan Doa",
    date: "Titik Mengikhlaskan",
    icon: FaPray,
    color: "text-red-500",
    bg: "bg-red-500",
    description: [
      "Setelah perjuangan panjang, saya akhirnya berhasil menyelesaikan komprehensif. Saya sangat ingin menata masa depan bersamanya, perempuan yang telah menemani saya selama 8 tahun. Saya fokus memperbaiki diri dan bekerja keras untuk masa depan kami, namun ironisnya, proses itu justru membuat saya abai. Saya terlalu sibuk hingga lupa memberinya perhatian yang ia butuhkan. Hubungan kami pun merenggang.",
      "Ketika saya bertanya, \"Jika suatu saat aku datang melamarmu?\", ia terlanjur kecewa dengan sikap saya. Kini, saya berada di titik di mana saya harus belajar mengikhlaskan. Jika memang waktunya saya harus pergi, saya akan pergi. Doa saya sederhana: Bahagiamu adalah bahagiaku. Saya hanya menitipkan kebahagiaannya kepada Tuhan, meski mungkin kelak bukan saya yang menjadi alasannya tersenyum."
    ],
  },
];

export const JourneySection = () => {
  return (
    <section id="journey" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
            Jejak Langkah Syarif
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed italic">
            "Antara Stik PS2, Doa Ibu, dan Ujian Kedewasaan."
          </p>
          <p className="text-muted-foreground mt-4 max-w-4xl mx-auto leading-relaxed text-left md:text-center">
            Nama saya Syarif Hasyim, lahir pada 28 September 2003. Saya tumbuh dalam hangatnya keluarga yang sederhana namun penuh warna. Ayah saya, Zaiful, seorang guru SD yang humoris, dan Ibu saya, Siti Hajar, adalah pelabuhan cinta terdalam saya. Saya memiliki dua adik perempuan yang melengkapi kebahagiaan kami. Inilah sepenggal kisah perjalanan hidup saya.
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-border/50 rounded-full" />

          <div className="space-y-12 md:space-y-24">
            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge/Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-muted z-10 shadow-lg"
                  >
                    <div className={`flex items-center justify-center w-full h-full rounded-full ${item.bg}/20 ${item.color}`}>
                      <item.icon size={18} />
                    </div>
                  </motion.div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full md:w-1/2 pl-16 md:pl-0"
                  >
                    <div className="bg-background/60 backdrop-blur-md border border-border/50 p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-300 relative group">
                      {/* Subdued background blob inside card */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none ${item.bg}`} />
                      
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 bg-muted ${item.color}`}>
                        {item.date}
                      </span>
                      <h3 className="text-2xl font-bold font-outfit mb-4">
                        {item.title}
                      </h3>
                      <div className="space-y-4">
                        {item.description.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
