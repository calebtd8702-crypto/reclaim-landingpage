import React from 'react';
import { cn } from '../lib/utils';

import { motion } from 'framer-motion';

interface LogoProps {
    variant?: 'color' | 'outline' | 'monochrome' | 'white';
    size?: 'small' | 'medium' | 'large' | 'xl';
    className?: string;
    animated?: boolean;
    onAnimationComplete?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
    variant = 'color',
    size = 'medium',
    className = '',
    animated = false,
    onAnimationComplete
}) => {
    const sizeMap = {
        small: 24,
        medium: 32,
        large: 48,
        xl: 96 // Added for hero intro
    };

    // @ts-ignore
    const dimension = sizeMap[size] || sizeMap.medium;
    const strokeWidth = 2.5;

    let color = 'currentColor';
    if (variant === 'color') color = '#5c877c'; // Sage
    if (variant === 'white') color = '#FFFFFF';

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = 0.2 + i * 0.2;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, duration: 1.5 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };

    return (
        <motion.svg
            width={dimension}
            height={dimension}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("block", className)}
            initial={animated ? "hidden" : undefined}
            animate={animated ? "visible" : undefined}
            onAnimationComplete={onAnimationComplete}
        >
            <motion.rect
                x="5"
                y="3"
                width="14"
                height="18"
                rx="3"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={draw}
                custom={0}
            />
            <motion.line
                x1="13"
                y1="9"
                x2="21"
                y2="1"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                variants={draw}
                custom={1}
            />
        </motion.svg>
    );
};
