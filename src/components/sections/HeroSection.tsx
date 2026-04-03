import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon as Download,
  ArrowRightIcon as ArrowRight,
} from "@heroicons/react/24/outline";
import { buttonVariants } from "../ui/button";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaYoutube, FaFacebook, FaGithub } from "react-icons/fa";
import heroImage from "../../assets/Hero-man.jpeg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20"
    >
      {/* Background Decor */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-8 inline-block"
            >
              <span className="px-4 py-2 rounded-full border bg-background/50 backdrop-blur text-sm font-medium border-primary/20 text-primary">
                Available for Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight mb-4 sm:mb-6 leading-tight"
            >
              Hi, I'm{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-500">
                Syarif Hasyim
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mt-2 sm:mt-4 h-[1.2lh]"
              >
                <TypeAnimation
                  sequence={[
                    "Fullstack Developer",
                    2000,
                    "Software Engineering",
                    2000,
                    "Design web",
                    2000,
                    "Vibe Enginering",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-inter font-semibold"
                />
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
            >
              Kita cuma manusia biasa, merubah diri sendiri saja kadang
              kewalahan, apalagi mencoba merubah orang lain
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 mb-10 w-full sm:w-auto px-4 sm:px-0"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "rounded-full shadow-lg shadow-primary/25 h-12 px-8",
                })}
              >
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/cv.pdf"
                download="Hasyim-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  size: "lg",
                  variant: "outline",
                  className: "rounded-full h-12 px-8",
                })}
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://www.instagram.com/sy_hasyim/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@syarifhasyim3879"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.facebook.com/syarif.hasyim.30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://github.com/syHasyimm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaGithub size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mb-8 lg:mb-0"
          >
            <div className="relative w-[75%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] aspect-4/5 group mx-auto lg:mx-0">
              {/* Decorative back cards */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-purple-500/30 rounded-[3rem] rotate-6 scale-105 opacity-50 blur-sm animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[3rem] -rotate-6 transition-transform duration-500 group-hover:rotate-0" />

              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-4 border-background shadow-2xl bg-muted rotate-3 transition-transform duration-500 group-hover:rotate-0">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img
                  src={heroImage}
                  alt="Hasyim Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
