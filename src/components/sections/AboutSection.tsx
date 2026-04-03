import { motion } from "framer-motion"
import { BriefcaseIcon, CheckBadgeIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/outline"
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa"
import { SiNextdotjs, SiJavascript, SiMysql } from "react-icons/si"
import aboutImage from "../../assets/About.jpeg"

const techStack = [
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
                About Me
              </h2>
              <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I am a passionate software engineer with a deep love for creating beautiful, 
                intuitive, and highly performant digital experiences. My journey in web development 
                has been driven by curiosity and a desire to build tools that matter.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Whether it's a sleek single-page application or a robust full-stack platform, 
                I treat every project as a canvas waiting for the perfect stroke of code.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Experience", value: "3+ Years", icon: BriefcaseIcon },
                  { label: "Completed Projects", value: "20+", icon: CheckBadgeIcon },
                  { label: "Technologies", value: "React, Node.js", icon: CodeBracketIcon },
                  { label: "Design", value: "Tailwind, Framer", icon: PaintBrushIcon },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-2xl bg-background border border-border/50 cursor-pointer shadow-none hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <item.icon className="h-8 w-8 text-primary mb-4" />
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-semibold font-outfit text-xl">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative flex justify-center mt-12 lg:mt-0"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 max-w-[400px] mx-auto hidden md:block">
                <div className="absolute top-10 -right-4 w-full h-full bg-linear-to-tr from-primary/30 to-purple-500/30 rounded-[2.5rem] rotate-3 opacity-50 blur-sm mix-blend-overlay animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary/20 rounded-[2.5rem] -rotate-3 transition-transform duration-500" />
              </div>

              {/* Main Image Container */}
              <div className="relative w-full max-w-[400px] aspect-4/5 md:aspect-square rounded-[2.5rem] overflow-hidden border-4 border-background shadow-2xl bg-muted group z-10">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
                <img 
                  src={aboutImage} 
                  alt="Hasyim" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{ objectPosition: "center bottom" }}
                />
              </div>
              
              {/* Floating Badge 1 */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-2 sm:-left-6 top-10 sm:top-1/4 bg-background/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-border shadow-2xl flex items-center gap-3 sm:gap-4 z-20 scale-90 sm:scale-100 origin-top-left"
              >
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <CodeBracketIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Developer</p>
                  <p className="font-bold text-foreground">Fullstack</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-2 sm:-right-6 bottom-10 sm:bottom-1/4 bg-background/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-border shadow-2xl flex items-center gap-3 sm:gap-4 z-20 scale-90 sm:scale-100 origin-bottom-right"
              >
                <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full border-2 border-background flex items-center justify-center bg-primary text-primary-foreground font-bold shadow-sm text-lg">
                    3+
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold">Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
              </motion.div>

              {/* Decorative blurs */}
              <div className="absolute -bottom-20 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
              <div className="absolute -top-20 -right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
            </motion.div>
          </div>

          {/* Tech Stack Slider */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-medium text-muted-foreground mb-10 font-outfit tracking-wide">
              POWERING MY PROJECTS
            </h3>
            
            {/* The wrapper must hide overflow and prevent flex wrapping */}
            <div className="relative flex overflow-hidden group">
              {/* Gradient masks for smooth fading at edges */}
              <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-muted/40 to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-muted/40 to-transparent z-10 pointer-events-none" />
              
              {/* 
                We use two identical animated containers that both move from 0 to -100%. 
                This guarantees a seamless snap back because when container 1 is at -100%, 
                container 2 is exactly where container 1 started.
              */}
              {[1, 2].map((containerId) => (
                <motion.div
                  key={containerId}
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                  className="flex gap-16 min-w-max items-center pr-16"
                >
                  {/* Duplicate the array enough times to be much wider than any screen */}
                  {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
                    <div 
                      key={`${containerId}-${idx}`} 
                      className="flex flex-col items-center gap-3"
                    >
                      <tech.icon className={`text-6xl md:text-7xl ${tech.color}`} />
                      <span className="text-sm font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
