"use client";

import React from "react";

interface AudioWaveformProps {
  isActive?: boolean;
  barCount?: number;
  className?: string;
  color?: string;
}

export const AudioWaveform: React.FC<AudioWaveformProps> = ({
  isActive = true,
  barCount = 18,
  className = "",
  color = "bg-blue-600",
}) => {
  // Generate pseudo-randomized height variations
  const heights = [
    12, 24, 38, 18, 42, 28, 36, 16, 44, 32, 20, 40, 26, 34, 14, 30, 22, 18,
  ];

  return (
    <div
      className={`flex items-center justify-center gap-[3px] h-12 px-3 py-2 bg-neutral-900/80 backdrop-blur-md rounded-full border border-neutral-800 ${className}`}
    >
      {Array.from({ length: barCount }).map((_, i) => {
        const height = isActive ? heights[i % heights.length] : 4;
        const animDuration = 0.6 + (i % 5) * 0.15;
        const animDelay = (i % 7) * 0.08;

        return (
          <div
            key={i}
            className={`w-[3px] rounded-full transition-all duration-300 ${color}`}
            style={{
              height: `${height}px`,
              animation: isActive
                ? `wave-pulse ${animDuration}s ease-in-out ${animDelay}s infinite alternate`
                : "none",
            }}
          />
        );
      })}
    </div>
  );
};
