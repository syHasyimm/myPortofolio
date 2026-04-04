import { HeartIcon as Heart } from "@heroicons/react/24/solid";
import { FaGithub, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-3xl font-extrabold font-outfit tracking-tight flex items-baseline gap-1 md:justify-start justify-center hover:opacity-90 transition-opacity mb-4"
            >
              <span className="text-foreground">Syarif</span>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-500">
                Hasyim
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-primary ml-0.5"></span>
            </a>
            <p className="text-muted-foreground max-w-sm mx-auto md:mx-0">
              Membangun pengalaman digital dengan presisi dan sepenuh hati. Mari
              ciptakan sesuatu yang luar biasa bersama.
            </p>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Ingin Berkolaborasi?</h4>
            <div className="flex justify-center md:justify-end gap-4">
              <a
                href="https://www.instagram.com/sy_hasyim/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@syarifhasyim3879"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href="https://www.facebook.com/syarif.hasyim.30"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://github.com/syHasyimm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/50 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Syarif Hasyim. Hak cipta dilindungi.</p>
          <p className="flex items-center justify-center md:justify-start mt-2 md:mt-0">
            Dibuat dengan <Heart className="h-4 w-4 mx-1 text-red-500" /> di Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
};
