import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { buttonVariants } from "../ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern, full-stack e-commerce solution with Next.js, Stripe, and Tailwind. Features real-time inventory and headless CMS integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "Next.js", "Tailwind", "Stripe"],
    github: "#",
    demo: "#"
  },
  {
    title: "AI Chat Assistant",
    description: "An interactive AI chat interface built with React and Framer Motion. Uses OpenAI's API to provide intelligent responses with a sleek UX.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    tags: ["React", "OpenAI", "Framer Motion", "Node.js"],
    github: "#",
    demo: "#"
  },
  {
    title: "Finance Dashboard",
    description: "Complex data visualization dashboard for financial analytics. Built using advanced React charting libraries and customized shadcn components.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tags: ["TypeScript", "Recharts", "Tailwind", "Vite"],
    github: "#",
    demo: "#"
  }
]

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
            Selected Works
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the diverse range of projects I've brought to life. 
            Blending aesthetics with robust functionality.
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
                <div className="relative h-48 overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="font-outfit text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between border-t border-border/50 pt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                    <FaGithub className="mr-2 h-4 w-4" /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "default", size: "sm" })}>
                    Live <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
