import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Logo } from '../Logo';

export function Hero() {
    const [introComplete, setIntroComplete] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Sequence: Logo draws (1.5s) -> Wait -> Fade out logo/Fade in content
        const timer = setTimeout(() => {
            setIntroComplete(true);
            setTimeout(() => setShowContent(true), 200);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
            {/* Logo Intro Layer */}
            <motion.div
                className="absolute inset-0 z-40 flex items-center justify-center bg-cream"
                initial={{ opacity: 1 }}
                animate={{ opacity: introComplete ? 0 : 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ pointerEvents: introComplete ? 'none' : 'auto' }}
            >
                <div className="relative">
                    <Logo variant="color" size="xl" animated={true} />
                </div>
            </motion.div>

            {/* Floating Clouds Layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Cloud 1 - Top Left */}
                <motion.div
                    className="absolute top-[-5%] left-[-10%] opacity-40 text-white/40"
                    animate={{
                        x: ['0vw', '120vw'],
                        y: [0, -20, 0]
                    }}
                    transition={{
                        x: { duration: 65, repeat: Infinity, ease: "linear" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <CloudIcon size={180} />
                </motion.div>

                {/* Cloud 2 - Top Right (slower) */}
                <motion.div
                    className="absolute top-[2%] left-[-20%] opacity-30 text-white/30"
                    animate={{
                        x: ['100vw', '-20vw'], // Moving left
                        y: [0, 30, 0]
                    }}
                    transition={{
                        x: { duration: 85, repeat: Infinity, ease: "linear" },
                        y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <CloudIcon size={240} />
                </motion.div>

                {/* Cloud 3 - Lower (faster) */}
                <motion.div
                    className="absolute top-[8%] left-[-5%] opacity-20 text-white/20"
                    animate={{
                        x: ['-10vw', '110vw'],
                        y: [0, 15, 0]
                    }}
                    transition={{
                        x: { duration: 45, repeat: Infinity, ease: "linear", delay: 5 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <CloudIcon size={120} />
                </motion.div>
            </div>

            <div className="container max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="text-center lg:text-left space-y-8 order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/20"
                        >
                            <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                            <span className="text-sm font-medium text-sage-dark">Reclaim 1.0 is here</span>
                        </motion.div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-sage-dark text-balance font-heading drop-shadow-sm">
                            You deserve to live life in the <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-sage-dark">real world.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-sage-dark/80 max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow-sm">
                            Most apps push you to do more and keep you glued to your phone. Reclaim does the opposite. We help you step away, reset your mind, and stay focused on what actually matters.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" variant="default" className="bg-sage text-white hover:bg-sage-dark shadow-lg border-0" onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}>
                                Get Started Free <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    </motion.div>

                    <div className="relative h-[350px] md:h-[600px] mt-8 md:mt-12 order-1 lg:order-2">
                        {/* 3D Screens Container */}
                        <motion.div
                            className="relative w-full h-full perspective-1000 scale-[0.45] md:scale-100 origin-top translate-x-8 md:translate-x-0"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="relative w-full h-full" style={{ perspective: '1200px' }}>
                                <motion.div
                                    initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
                                    animate={{ opacity: 1, rotateY: -12, rotateX: 2 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    style={{
                                        transform: 'perspective(1200px) rotateY(-12deg) rotateX(2deg)',
                                        transformStyle: 'preserve-3d'
                                    }}
                                    className="absolute top-16 right-72 w-[230px] opacity-90"
                                >
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                        <img
                                            src="/mockups/hero-back.png"
                                            alt="Activity Selection"
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
                                    animate={{ opacity: 1, rotateY: -10, rotateX: 3 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    style={{
                                        transform: 'perspective(1200px) rotateY(-10deg) rotateX(3deg) translateZ(20px)',
                                        transformStyle: 'preserve-3d'
                                    }}
                                    className="absolute top-4 right-36 w-[246px] opacity-95 z-10"
                                >
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                                        <img
                                            src="/mockups/hero-front.png"
                                            alt="Goal Creation"
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute inset-0 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] pointer-events-none" />
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, rotateY: -20, rotateX: 10 }}
                                    animate={{ opacity: 1, rotateY: -8, rotateX: 5 }}
                                    transition={{ duration: 1, delay: 0.4 }}
                                    style={{
                                        transform: 'perspective(1200px) rotateY(-8deg) rotateX(5deg) translateZ(40px)',
                                        transformStyle: 'preserve-3d',
                                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.3))'
                                    }}
                                    className="absolute -top-10 right-0 w-[262px] z-20"
                                >
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20">
                                        <img
                                            src="/mockups/hero-middle.png"
                                            alt="Reclaim Profile"
                                            className="w-full h-auto"
                                        />
                                        <div className="absolute inset-0 shadow-[0_0_80px_rgba(92,135,124,0.2)] pointer-events-none" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/10 pointer-events-none" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -right-8 -top-20 md:-top-12 z-30"
                                >
                                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass flex items-center justify-center">
                                        <div className="text-center">
                                            <Sparkles className="w-8 h-8 mx-auto mb-2 text-white" />
                                            <span className="text-xs font-medium text-white/90">AI-Powered</span>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>

                        {/* Floating Cards (Unlocked from 3D perspective on mobile) */}
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute left-4 bottom-0 md:left-0 md:bottom-20 z-40 scale-90 md:scale-100 origin-bottom-left"
                        >
                            <div className="w-56 h-auto bg-white/95 backdrop-blur-xl rounded-xl shadow-2xl border border-white/20 p-4">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-medium text-black/60">Focus Time</span>
                                    <span className="text-xs font-bold text-sage-dark">2h 30m</span>
                                </div>
                                <div className="w-full bg-black/10 rounded-full h-2 mb-2">
                                    <div className="bg-sage h-2 rounded-full" style={{ width: '75%' }} />
                                </div>
                                <p className="text-xs text-black/60">You're on a 5 day streak! 🔥</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CloudIcon({ size = 24, className = "" }: { size?: number, className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.14,0.006-0.279,0.017-0.418C11.636,13.033,11.323,13,11,13c-2.761,0-5,2.239-5,5c0,2.761,2.239,5,5,5h6.5c2.485,0,4.5-2.015,4.5-4.5S19.985,14,17.5,14c-0.169,0-0.335,0.01-0.5,0.029C16.954,11.171,14.485,9,11.5,9c-0.169,0-0.335,0.01-0.5,0.029C10.873,6.608,8.629,5,6,5C2.686,5,0,7.686,0,11c0,3.314,2.686,6,6,6c0.169,0,0.335-0.01,0.5-0.029C6.546,17.829,9.015,20,12,20h5.5c2.485,0,4.5-2.015,4.5-4.5S19.985,11,17.5,11z" opacity="0.5" />
            <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.14,0.006-0.279,0.017-0.418C11.636,13.033,11.323,13,11,13c-2.761,0-5,2.239-5,5c0,2.761,2.239,5,5,5h6.5c2.485,0,4.5-2.015,4.5-4.5S19.985,14,17.5,14c-0.169,0-0.335,0.01-0.5,0.029C16.954,11.171,14.485,9,11.5,9c-0.169,0-0.335,0.01-0.5,0.029C10.873,6.608,8.629,5,6,5C2.686,5,0,7.686,0,11c0,3.314,2.686,6,6,6c0.169,0,0.335-0.01,0.5-0.029C6.546,17.829,9.015,20,12,20h5.5c2.485,0,4.5-2.015,4.5-4.5S19.985,11,17.5,11z" fill="currentColor" />
        </svg>
    );
}
