"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedSubtext() {
  const phrases = [
    "Fresh beginnings",
    "Limitless potential",
    "Stronger futures",
    "Second chances",
  ];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(100); // typing speed in ms

  useEffect(() => {
    const currentPhrase = phrases[index];
    let timeout;

    if (isDeleting) {
      // deleting characters
      timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
      }, 60);
    } else {
      // typing characters
      timeout = setTimeout(() => {
        setText((prev) => currentPhrase.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && text === currentPhrase) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && text === "") {
      // Move to next phrase
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="text-center text-lg md:text-xl font-medium text-gray-700">
      {/* Optional prefix text */}
      {/* <span>At Kushi Gateway, we believe in </span> */}
      <motion.span
        key={index + text}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-white font-medium text-[16px] md:text-[27px]"
      >
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          |
        </motion.span>
      </motion.span>
    </div>
  );
}
