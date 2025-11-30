import { Logo } from "../Logo";
import { Button } from "../ui/Button";

import { motion } from "framer-motion";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 border-b border-white/10 bg-[#fbf6e8]/30 backdrop-blur-md transition-all duration-300">
            {/* Drifting Fog Layer (Desktop Only) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden md:block rounded-b-xl">
                <motion.div
                    className="absolute inset-0 w-[200%] h-full opacity-[0.08] bg-gradient-to-r from-transparent via-sage/20 to-transparent"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <Logo variant="color" size="medium" />
                    <span className="text-xl font-bold font-heading tracking-tight text-black">Reclaim</span>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Features</a>
                    <a href="#how-it-works" className="text-sm font-medium text-black/60 hover:text-black transition-colors">How it Works</a>
                    <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <Button variant="default" size="sm" className="rounded-full shadow-lg shadow-sage/20" onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}>
                            Get Early Access
                        </Button>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
}
