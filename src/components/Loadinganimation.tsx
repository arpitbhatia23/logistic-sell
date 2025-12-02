// components/LoadingAnimation.tsx

import React from "react";
import { motion } from "framer-motion";

// Define the functional component type explicitly
const LoadingAnimation: React.FC = () => {
  // Array of indices for the three dots
  const dotIndices: number[] = [0, 1, 2];

  return (
    // Outer container: full screen, dark background
    <div className="flex items-center justify-center h-screen bg-gray-900">
      {/* Framer Motion container for initial fade-in */}
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Map over indices to create the three bouncing dots */}
        {dotIndices.map((index: number) => (
          <motion.span
            key={index}
            className="w-4 h-4 bg-blue-500 rounded-full"
            // Animation properties for the vertical bounce
            animate={{
              // Keyframes: Start (0), Up (-10), Down (0)
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6, // Speed of one bounce cycle
              repeat: Infinity, // Repeat indefinitely
              ease: "easeInOut", // Smooth start and end
              delay: index * 0.2, // Staggered delay for the 'wave' effect
            }}
            aria-label="Loading dot" // Accessibility improvement
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingAnimation;
