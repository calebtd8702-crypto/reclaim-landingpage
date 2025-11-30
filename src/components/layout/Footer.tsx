import { Logo } from "../Logo";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-sage-dark text-white/80 py-8 md:py-12 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
                    <div className="flex items-center gap-2">
                        <Logo variant="white" size="small" />
                        <span className="text-lg font-bold font-heading tracking-tight text-white">Reclaim</span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-white/60">
                        <a href="#" className="hover:text-white transition-colors">Home</a>
                        <a href="#" className="hover:text-white transition-colors">About</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white">
                            <Twitter className="h-4 w-4" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white">
                            <Github className="h-4 w-4" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white/60 hover:text-white">
                            <Linkedin className="h-4 w-4" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-xs text-white/40 text-center md:text-right">
                    &copy; {new Date().getFullYear()} Reclaim. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
