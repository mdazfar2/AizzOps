import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextRevealByWord({ text, className = "" }) {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={`relative h-[200vh] ${className}`}>
      
      <div className="sticky top-0 flex items-center justify-center h-screen px-6">
        
        <p className="flex flex-wrap text-[22px] md:text-[26px] leading-[2.4] tracking-[0.04em] text-[#333333] max-w-5xl">
          
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.2, 1]
            );

            return (
              <motion.span
                key={i}
                style={{ opacity }}
                className="mx-1"
              >
                {word}
              </motion.span>
            );
          })}

        </p>

      </div>
    </div>
  );
}
