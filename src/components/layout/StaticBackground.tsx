import worldBg from '../../assets/world-bg.png';

export function StaticBackground() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-cream">
            <div className="absolute inset-0 w-full h-full">
                <img
                    src={worldBg}
                    alt="World Background"
                    className="w-full h-full object-cover object-center opacity-90"
                />
            </div>
            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-sage/10 via-cream/20 to-cream/80 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/50 to-transparent" />
            <div className="absolute inset-0 bg-sage/5 mix-blend-multiply" />
        </div>
    );
}
