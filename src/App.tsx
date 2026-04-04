import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/sections/HeroSection"
import { AboutSection } from "./components/sections/AboutSection"
import { JourneySection } from "./components/sections/JourneySection"
import { PortfolioSection } from "./components/sections/PortfolioSection"
import { PlaylistSection } from "./components/sections/PlaylistSection"
import { ContactSection } from "./components/sections/ContactSection"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen font-inter selection:bg-primary/30">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <PortfolioSection />
        <PlaylistSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
