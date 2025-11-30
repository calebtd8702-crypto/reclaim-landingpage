import { useState, useEffect } from "react"
import { Navbar } from "./components/layout/Navbar"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { Features } from "./components/sections/Features"
import { HowItWorks } from "./components/sections/HowItWorks"
import { SocialProof } from "./components/sections/SocialProof"
import { EmailSignup } from "./components/sections/EmailSignup"
import { InteractiveBackground } from "./components/layout/InteractiveBackground"
import { StillnessSection } from "./components/sections/StillnessSection"
import { CursorTrail } from "./components/ui/CursorTrail"

function App() {
  // Initialize based on window width to avoid mounting on mobile and crashing
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 768 : true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen relative selection:bg-sage/30 selection:text-sage-dark font-sans text-black">
      <CursorTrail />
      {isDesktop && <InteractiveBackground />}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <StillnessSection />
          <HowItWorks />
          <SocialProof />
          <EmailSignup />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
