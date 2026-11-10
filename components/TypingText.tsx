"use client";

import { useEffect, useState } from "react";

const texts = [
  "Web Developer",
  "Frontend Developer",
  "Laravel Developer",
  'Freelancer',
  "UI/UX Designer",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];

    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(currentText.slice(0, text.length + 1));

        if (text.length + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        setText(currentText.slice(0, text.length - 1));

        if (text.length === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className="inline-block">
      {text}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}