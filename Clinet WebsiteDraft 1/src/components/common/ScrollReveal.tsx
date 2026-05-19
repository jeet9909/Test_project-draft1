"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  direction = "up",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : {
          opacity: 0,
          y: direction === "up" ? 30 : 0,
          x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
        },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.5,
        delay: prefersReducedMotion ? 0 : delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
