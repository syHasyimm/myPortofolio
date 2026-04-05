import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PaperAirplaneIcon as Send,
  MapPinIcon as MapPin,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const SERVICE_ID = "service_eylog4c";
const TEMPLATE_ID = "template_iceb17w";
const PUBLIC_KEY = "2Wy2Az0B7Bf2nFGzE";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus("success");
      setStatusMessage("Pesan berhasil dikirim! Saya akan segera membalas.");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setStatusMessage("Gagal mengirim pesan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Background Decor */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Hubungi Saya
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Siap untuk memulai proyek Anda selanjutnya? Mari diskusikan
            bagaimana kita bisa bekerja sama untuk mewujudkan visi Anda.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="bg-background/60 backdrop-blur-md p-8 rounded-3xl border border-border/50 h-full">
              <h3 className="text-2xl font-semibold font-outfit mb-8">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">syhasyimm@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+62 895370355368</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium">Kepenuhan Timur, Pasir Pandak</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-2/3"
          >
            {/* Gradient border wrapper */}
            <div className="relative rounded-3xl p-px bg-linear-to-br from-primary/50 via-purple-500/30 to-transparent">
              <div className="bg-background/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl relative overflow-hidden">
                {/* Subtle inner glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-[60px] pointer-events-none" />

                <h3 className="text-2xl font-bold font-outfit mb-2 relative z-10">
                  Kirim Pesan
                </h3>
                <p className="text-muted-foreground text-sm mb-8 relative z-10">
                  Isi formulir di bawah dan saya akan segera menghubungi Anda
                  kembali.
                </p>

                <form
                  ref={formRef}
                  className="space-y-6 relative z-10"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="group relative">
                      <Label
                        htmlFor="name"
                        className="text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Nama Lengkap
                      </Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="from_name"
                          placeholder="Masukkan nama Anda"
                          className="h-12 rounded-xl bg-muted/30 border-border/50 pl-4 pr-4 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-muted/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="group relative">
                      <Label
                        htmlFor="email"
                        className="text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
                      >
                        Alamat Email
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="from_email"
                          type="email"
                          placeholder="email@contoh.com"
                          className="h-12 rounded-xl bg-muted/30 border-border/50 pl-4 pr-4 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-muted/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="group relative">
                    <Label
                      htmlFor="subject"
                      className="text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Subjek
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Apa yang ingin Anda diskusikan?"
                      className="h-12 rounded-xl bg-muted/30 border-border/50 pl-4 pr-4 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-muted/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="group relative">
                    <Label
                      htmlFor="message"
                      className="text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-primary transition-colors"
                    >
                      Pesan
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Ceritakan tentang proyek Anda..."
                      className="min-h-[160px] rounded-xl bg-muted/30 border-border/50 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus-visible:bg-muted/50 focus-visible:border-primary/50 focus-visible:ring-primary/20 transition-all duration-300 resize-none"
                      required
                    />
                  </div>

                  {/* Status Message */}
                  <AnimatePresence>
                    {status !== "idle" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className={`flex items-center gap-3 p-4 rounded-xl text-sm font-medium backdrop-blur-sm ${
                          status === "success"
                            ? "bg-green-500/10 text-green-500 border border-green-500/20"
                            : "bg-red-500/10 text-red-500 border border-red-500/20"
                        }`}
                      >
                        {status === "success" ? (
                          <CheckCircleIcon className="h-5 w-5 shrink-0" />
                        ) : (
                          <ExclamationCircleIcon className="h-5 w-5 shrink-0" />
                        )}
                        {statusMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-14 rounded-xl bg-linear-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-primary-foreground font-semibold text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border-0"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
