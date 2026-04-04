import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon as ExternalLink } from "@heroicons/react/24/outline";
import { FaGithub } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { buttonVariants } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import bimbinganOnlineFilkom from "../../assets/bimbingan-online-filkom.png";
import eArsip from "../../assets/e-arsip.png";
import reservasi from "../../assets/reservasi.png";
import ujianOnline from "../../assets/ujian-online.png";
import kwarranKepenuhan from "../../assets/kwarran_kepenuhan.png";
import createCardNisn from "../../assets/create_card_nisn.png";

const projects = [
  {
    title: "Bimbingan Online FILKOM",
    description:
      "Sistem informasi berbasis web untuk memudahkan proses bimbingan akademik mahasiswa. Mendukung penjadwalan, log bimbingan, dan feedback dosen.",
    image: bimbinganOnlineFilkom,
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sistem Manajemen E-Arsip",
    description:
      "Aplikasi manajemen arsip digital untuk mempermudah instansi dalam menyimpan, mencari, dan mengelola dokumen elektronik yang aman.",
    image: eArsip,
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Aplikasi Reservasi",
    description:
      "Sistem reservasi online yang intuitif untuk mengelola pemesanan secara real-time dengan sistem notifikasi dan dashboard admin modern.",
    image: reservasi,
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Platform Ujian Online",
    description:
      "Platform ujian kompetensi interaktif dengan dukungan penghitungan waktu (timer), deteksi kecurangan, dan skor hasil otomatis.",
    image: ujianOnline,
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Website Kwarran Kepenuhan",
    description:
      "Website portal informasi kegiatan Pramuka Kwartir Ranting Kepenuhan. Menyediakan berita terbaru, galeri kegiatan, dan sistem informasi kepengurusan pramuka.",
    image: kwarranKepenuhan,
    tags: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Aplikasi Cetak Kartu NISN",
    description:
      "Aplikasi penunjang administrasi sekolah untuk memudahkan pencetakan Kartu Nomor Induk Siswa Nasional (NISN) secara massal dengan fitur barcode (QR Code).",
    image: createCardNisn,
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Proyek Pilihan
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sekilas tentang berbagai proyek yang telah saya buat. Memadukan
            estetika dengan fungsionalitas yang mumpuni.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-background/50 border-border/50 hover:border-primary/30 transition-colors duration-300">
                <Dialog>
                  <DialogTrigger className="relative h-48 w-full overflow-hidden group cursor-pointer border-none p-0 outline-none hover:opacity-95 focus-visible:ring-2 focus-visible:ring-primary text-left">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/80 text-foreground px-3 py-1.5 rounded-full text-sm font-medium shadow-sm">
                        Lihat Gambar
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] p-0 bg-transparent border-none shadow-none flex justify-center" showCloseButton={true}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-auto h-auto max-w-[95vw] max-h-[95vh] object-contain rounded-md"
                    />
                  </DialogContent>
                </Dialog>

                <CardHeader>
                  <CardTitle className="font-outfit text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between border-t border-border/50 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    <FaGithub className="mr-2 h-4 w-4" /> Kode
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({
                      variant: "default",
                      size: "sm",
                    })}
                  >
                    Lihat <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
