import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function StillnessSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });


    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={sectionRef} className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center">


            {/* Drifting Fog Layers */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ x: ["-10%", "10%"] }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-3xl opacity-40"
                />
                <motion.div
                    animate={{ x: ["10%", "-10%"] }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/5 to-transparent blur-2xl opacity-30"
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-10 text-center px-6"
                style={{ opacity }}
            >
                <h2 className="text-4xl md:text-6xl font-bold font-heading text-sage-dark mb-4 tracking-tight">
                    Take a breath.
                </h2>
                <p className="text-xl text-sage-dark/70 font-medium">
                    You’re allowed to slow down.
                </p>
            </motion.div>

            {/* Gradient Transitions */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cream to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sage to-transparent" />
        </section>
    );
}
