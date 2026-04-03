import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon as Download,
  ArrowRightIcon as ArrowRight,
} from "@heroicons/react/24/outline";
import { buttonVariants } from "../ui/button";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

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
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
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
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-outfit tracking-tight mb-6"
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
                className="text-foreground text-3xl md:text-4xl lg:text-5xl block mt-4 h-[1.2lh]"
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
              I craft tailored, elegant, and highly performant web applications.
              Let's turn your ideas into a beautiful digital reality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
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
                href="#"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110 shadow-sm"
              >
                <FaFacebook size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-80 md:w-80 md:h-[400px] lg:w-[400px] lg:h-[500px] group">
              {/* Decorative back cards */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-purple-500/30 rounded-[3rem] rotate-6 scale-105 opacity-50 blur-sm animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-[3rem] -rotate-6 transition-transform duration-500 group-hover:rotate-0" />

              <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-4 border-background shadow-2xl bg-muted rotate-3 transition-transform duration-500 group-hover:rotate-0">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop"
                  alt="Hasyim Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Additional decors around image */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 lg:right-0 bg-background/80 backdrop-blur-md p-3 lg:p-4 rounded-2xl border border-border flex items-center gap-3 shadow-xl"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium">Available to hire</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
