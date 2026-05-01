"use client";

import React from "react";
import { motion } from "framer-motion";

interface ElectricBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  speed?: number;
  chaos?: number;
  thickness?: number;
}

export default function ElectricBorder({
  color = "#818cf8",
  speed = 1,
  chaos = 0.12,
  thickness = 2,
  children,
  style,
  className,
  ...props
}: ElectricBorderProps) {
  const borderRadius = style?.borderRadius ? Number(style.borderRadius) : 16;
  const blurAmount = Math.max(2, chaos * 40);

  return (
    <div
      className={`relative inline-block w-full overflow-hidden ${className || ""}`}
      style={{
        padding: thickness,
        borderRadius,
        ...style,
      }}
      {...props}
    >
      {/* Background container for the animated gradient */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ borderRadius }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            ease: "linear",
            duration: 5 / Math.max(0.1, speed),
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: `conic-gradient(from 0deg, transparent 70%, ${color} 100%)`,
            filter: `blur(${blurAmount}px)`,
            opacity: 0.8,
          }}
        />
        {/* Core glow */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            ease: "linear",
            duration: 5 / Math.max(0.1, speed),
            repeat: Infinity,
          }}
          className="absolute"
          style={{
            top: "-50%",
            left: "-50%",
            width: "200%",
            height: "200%",
            background: `conic-gradient(from 0deg, transparent 80%, ${color} 100%)`,
          }}
        />
      </div>

      <div
        className="relative z-10 w-full h-full"
        style={{ borderRadius: Math.max(0, borderRadius - thickness) }}
      >
        {children}
      </div>
    </div>
  );
}
