import React from 'react';

interface AtigaIconProps {
    size?: number;
    className?: string;
    color?: string;
    withText?: boolean;
}

const AtigaIcon: React.FC<AtigaIconProps> = ({
    size = 24,
    className = "",
    color = "currentColor",
    withText = false
}) => {
    // Calculate proportional dimensions for text variant
    const width = withText ? (size * 80 / 32) : size; // 2.5x wider when with text
    const height = size;

    return (
        <svg
            width={width}
            height={height}
            viewBox={withText ? "0 0 80 32" : "0 0 32 32"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer frame */}
            <rect
                x="2"
                y="2"
                width="28"
                height="28"
                rx="4"
                stroke={color}
                strokeWidth="2"
                fill="none"
            />

            {/* Inner frame */}
            <rect
                x="6"
                y="6"
                width="20"
                height="20"
                rx="2"
                stroke={color}
                strokeWidth="1.5"
                fill="none"
            />

            {/* Center cross pattern */}
            <line
                x1="6"
                y1="16"
                x2="26"
                y2="16"
                stroke={color}
                strokeWidth="1"
            />
            <line
                x1="16"
                y1="6"
                x2="16"
                y2="26"
                stroke={color}
                strokeWidth="1"
            />

            {/* Corner accents - representing aluminium corner joints */}
            <circle
                cx="6"
                cy="6"
                r="1.5"
                fill={color}
            />
            <circle
                cx="26"
                cy="6"
                r="1.5"
                fill={color}
            />
            <circle
                cx="6"
                cy="26"
                r="1.5"
                fill={color}
            />
            <circle
                cx="26"
                cy="26"
                r="1.5"
                fill={color}
            />

            {/* Text content when withText is true - positioned to the right */}
            {withText && (
                <>
                    {/* A3 Text - positioned to the right, top */}
                    <text
                        x="36"
                        y="14"
                        fontFamily="Arial, sans-serif"
                        fontSize="8"
                        fontWeight="bold"
                        textAnchor="start"
                        fill={color}
                    >
                        A3
                    </text>
                    {/* ALUMINIUM Text - positioned to the right, bottom */}
                    <text
                        x="36"
                        y="24"
                        fontFamily="Arial, sans-serif"
                        fontSize="6"
                        fontWeight="normal"
                        textAnchor="start"
                        fill={color}
                    >
                        ALUMINIUM
                    </text>
                </>
            )}
        </svg>
    );
};

export default AtigaIcon; 