"use client";

import { useEffect, useState } from "react";

interface StatCardProps {
  endValue: number;
  suffix: string;
  prefix?: string;
  label: string;
  isVisible?: boolean;
  lightBg?: boolean;
  labelColor?: string;
  countingColor?: string;
}

export default function StatCard({
  endValue,
  suffix,
  prefix = "",
  label,
  isVisible = false,
  lightBg = false,
  labelColor,
  countingColor,
}: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Start counting when parent says it's visible
  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
    }
  }, [isVisible, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const eased = 1 - Math.pow(1 - progress, 2);
      const currentValue = Math.round(endValue * eased);

      setDisplayValue(currentValue);

      if (frame >= totalFrames) {
        clearInterval(counter);
        setDisplayValue(endValue);
        setIsComplete(true);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [hasStarted, endValue]);

  return (
    <div className="text-center py-4">
      <p
        className={`text-3xl md:text-4xl xl:text-5xl font-bold transition-colors duration-500 tabular-nums ${
          isComplete ? "text-brand-red" : !countingColor ? (lightBg ? "text-gray-200" : "text-white") : ""
        }`}
        style={!isComplete && countingColor ? { color: countingColor } : undefined}
      >
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </p>
      <p className="text-sm mt-2 text-gray-400" style={labelColor ? { color: labelColor } : undefined}>{label}</p>
    </div>
  );
}