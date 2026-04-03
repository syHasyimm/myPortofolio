import { Heart } from "lucide-react"
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-bold font-outfit tracking-tighter inline-block mb-4">
              Hasyim<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              Crafting digital experiences with precision and passion. 
              Let's create something amazing together.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Want to Collaborate?</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors">
                <FaDribbble size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Hasyim. All rights reserved.
          </p>
          <p className="flex items-center">
            Made with <Heart size={14} className="mx-1 text-red-500" /> globally.
          </p>
        </div>
      </div>
    </footer>
  )
}
