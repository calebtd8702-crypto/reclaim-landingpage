import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    decay: number;
    size: number;
}

export function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<Particle[]>([]);
    const animationFrameId = useRef<number | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Only enable on fine pointer devices (desktop)
        const mediaQuery = window.matchMedia("(pointer: fine)");
        if (!mediaQuery.matches) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMove = (e: PointerEvent) => {
            // Throttle/limit particles per move if needed, but for now just spawn
            const particleCount = 12; // Burst size

            for (let i = 0; i < particleCount; i++) {
                // Cap max particles
                if (particles.current.length > 500) {
                    particles.current.shift();
                }

                const lifeSpan = 400 + Math.random() * 400; // 400-800ms
                // Decay per frame (assuming ~60fps)
                const decay = 1 / (lifeSpan / 16.6);

                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    // Velocity: mostly horizontal to the right, slight vertical randomness
                    vx: (Math.random() * 1.5) + 0.5,
                    vy: (Math.random() - 0.5) * 1.0,
                    life: 0.7 + Math.random() * 0.2, // Start alpha 0.7-0.9
                    decay: decay,
                    size: 1 + Math.random() * 2 // 1-3px
                });
            }
        };

        window.addEventListener('pointermove', handleMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];

                p.x += p.vx;
                p.y += p.vy;
                p.life -= p.decay;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
                ctx.fill();
            }

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('pointermove', handleMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    return <canvas id="cursor-trail-canvas" ref={canvasRef} />;
}
