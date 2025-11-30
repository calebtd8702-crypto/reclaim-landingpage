import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import worldBg from '../../assets/world-bg.png';

export function InteractiveBackground() {
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position motion values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for mouse movement
    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Parallax transforms
    // Background moves slightly opposite to mouse
    // Output numbers instead of strings to avoid type conflicts with static 0
    const bgX = useTransform(springX, [-0.5, 0.5], [-15, 15]);
    const bgY = useTransform(springY, [-0.5, 0.5], [-15, 15]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            if (window.innerWidth >= 768) {
                // Normalize mouse position from -0.5 to 0.5
                const { innerWidth, innerHeight } = window;
                mouseX.set((e.clientX / innerWidth) - 0.5);
                mouseY.set((e.clientY / innerHeight) - 0.5);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-cream">
            {/* Parallax Background Layer */}
            <motion.div
                className="absolute inset-[-20px] w-[calc(100%+40px)] h-[calc(100%+40px)]"
                style={{
                    x: isMobile ? 0 : bgX,
                    y: isMobile ? 0 : bgY,
                }}
            >
                <img
                    src={worldBg}
                    alt="World Background"
                    className="w-full h-full object-cover object-center opacity-90"
                />
            </motion.div>

            {/* Gradient Overlays for Readability */}
            {/* Top fade (Sage to Transparent) */}
            <div className="absolute inset-0 bg-gradient-to-b from-sage/10 via-cream/20 to-cream/80 mix-blend-overlay" />

            {/* Bottom fade (Transparent to Cream) */}
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-transparent" />

            {/* Overall Tint */}
            <div className="absolute inset-0 bg-sage/5 mix-blend-multiply" />

            {/* Cursor Spotlight (Desktop Only) */}
            {!isMobile && (
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full bg-sage/10 blur-[100px] mix-blend-screen pointer-events-none"
                    style={{
                        left: useTransform(springX, val => `${(val + 0.5) * 100}%`),
                        top: useTransform(springY, val => `${(val + 0.5) * 100}%`),
                        x: "-50%",
                        y: "-50%"
                    }}
                />
            )}
        </div>
    );
}
