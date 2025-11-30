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
  return (
    <div className="min-h-screen relative selection:bg-sage/30 selection:text-sage-dark font-sans text-black">
      <CursorTrail />
      <InteractiveBackground />
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
