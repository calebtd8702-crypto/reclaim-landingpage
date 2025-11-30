import { motion } from "framer-motion";
import { Target, Play, BarChart3 } from "lucide-react";

const steps = [
    {
        icon: Target,
        title: "Set your intentions",
        description: "Choose the things you want more time for: work, health, creativity, rest."
    },
    {
        icon: Play,
        title: "Start a Reclaim session",
        description: "Enter a distraction-free zone that helps you stay off your phone and stay present."
    },
    {
        icon: BarChart3,
        title: "Build momentum",
        description: "Track your streaks, see your progress, and feel your attention come back to you."
    }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden text-white">
            <div className="absolute inset-0 bg-sage/90 backdrop-blur-sm -z-10" />

            <div className="container max-w-6xl mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-3 md:mb-4">How It Works</h2>
                    <p className="text-white/80 text-base md:text-lg">Three simple steps to a more productive you.</p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="w-24 h-24 rounded-[2.5rem] bg-white/10 border border-white/20 shadow-xl flex items-center justify-center mx-auto mb-6 relative z-10 backdrop-blur-sm transition-transform hover:scale-110 duration-300">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-gradient-to-br from-white to-white/90 flex items-center justify-center text-sage shadow-inner">
                                        <step.icon className="h-8 w-8 opacity-90" strokeWidth={1.5} />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cream text-sage-dark flex items-center justify-center font-bold text-sm border-2 border-sage shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
                                <p className="text-white/80 text-balance px-4 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
