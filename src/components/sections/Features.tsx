import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/Card";
import { Clock, BrainCircuit, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Clock,
        title: "Break the constant checking cycle",
        description: "Turn scattered attention into intentional time. Build longer, healthier breaks away from your phone, without pressure or guilt."
    },
    {
        icon: BrainCircuit,
        title: "Habits that match your energy",
        description: "Reclaim adapts to how you feel and what you need. Smarter routines, less burnout, more control over your day."
    },
    {
        icon: Zap,
        title: "Focus that actually sticks",
        description: "Immersive sessions that block distractions, calm your mind, and help you get into flow, not back into scrolling."
    }
];

export function Features() {
    return (
        <section id="features" className="py-24 relative">
            <div className="container max-w-6xl mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold font-heading mb-4 text-black">What Reclaim Does</h2>
                    <p className="text-black/70 text-lg">Everything you need to take back control of your day.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ duration: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-white/40 bg-white/60 backdrop-blur-md hover:bg-white/80 transition-all shadow-lg hover:shadow-xl hover:shadow-sage/10">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-[2rem] bg-gradient-to-br from-sage/20 to-cream/50 flex items-center justify-center mb-6 text-sage-dark shadow-[inset_0_2px_4px_rgba(255,255,255,0.8),0_4px_12px_rgba(92,135,124,0.1)]">
                                        <feature.icon className="h-8 w-8 opacity-90" strokeWidth={1.5} />
                                    </div>
                                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base text-black/70 leading-relaxed">{feature.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
