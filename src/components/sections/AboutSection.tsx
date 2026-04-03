import { motion } from "framer-motion"
import { BriefcaseIcon, CheckBadgeIcon, CodeBracketIcon, PaintBrushIcon } from "@heroicons/react/24/outline"
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa"
import { SiNextdotjs, SiJavascript, SiMysql } from "react-icons/si"

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
          <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
            <div className="w-full md:w-1/2">
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
              
              <div className="grid grid-cols-2 gap-4">
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

            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-border/50 relative group bg-muted">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img 
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1080&auto=format&fit=crop" 
                  alt="Hasyim Coding" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Decorative blurs */}
              <motion.div 
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" 
              />
              <motion.div 
                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl -z-10" 
              />
            </div>
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
