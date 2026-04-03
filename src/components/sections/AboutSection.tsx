import { motion } from "framer-motion"

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
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
                  { label: "Experience", value: "3+ Years" },
                  { label: "Completed Projects", value: "20+" },
                  { label: "Technologies", value: "React, Node.js" },
                  { label: "Design", value: "Tailwind, Framer" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="p-4 rounded-2xl bg-background border border-border/50 cursor-pointer shadow-none hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
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
        </motion.div>
      </div>
    </section>
  )
}
