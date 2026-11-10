
"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaravel,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

// ==========================================
// TECH STACK DATA
// ==========================================

const techStack = [
  {
    name: "React",
    icon: FaReact,
    bg: "#61DAFB",
    color: "#000000",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    bg: "#3178C6",
    color: "#FFFFFF",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    bg: "#171717",
    color: "#FFFFFF",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    bg: "#06B6D4",
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    bg: "#339933",
    color: "#FFFFFF",
  },
  {
    name: "Python",
    icon: FaPython,
    bg: "#FFD43B",
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    bg: "#4169E1",
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    bg: "#47A248",
    color: "#FFFFFF",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    bg: "#FF2D20",
    color: "#FFFFFF",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    bg: "#F05032",
    color: "#FFFFFF",
  },
  {
    name: "PHP",
    icon: FaPhp,
    bg: "#777BB4",
    color: "#FFFFFF",
  },
];

// ==========================================
// TECH CARD COMPONENT
// ==========================================

interface TechCardProps {
  tech: (typeof techStack)[number];
  index: number;
}

const TechCard: React.FC<TechCardProps> = ({
  tech,
  index,
}) => {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={{
        y: -5,
        x: -3,
      }}
      whileTap={{
        y: 3,
        x: 3,
      }}
      className="
        group
        flex
        shrink-0
        items-center
        gap-3
        border-[3px]
        border-black
        px-5
        py-4
        shadow-[5px_5px_0px_0px_#000]
        hover:shadow-[8px_8px_0px_0px_#000]
        transition-shadow
        duration-200
        cursor-pointer
        select-none
      "
      style={{
        backgroundColor: tech.bg,
        color: tech.color,
      }}
    >
      {/* Technology Icon */}
      <Icon className="text-3xl md:text-4xl shrink-0" />

      {/* Technology Name */}
      <span
        className="
          text-lg
          md:text-xl
          font-black
          uppercase
          tracking-wide
          whitespace-nowrap
        "
      >
        {tech.name}
      </span>

      {/* Index Number */}
      <span className="ml-2 text-xs font-black opacity-60">
        #{String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
};

// ==========================================
// MARQUEE COMPONENT
// ==========================================

interface MarqueeProps {
  reverse?: boolean;
  duration?: number;
}

const Marquee: React.FC<MarqueeProps> = ({
  reverse = false,
  duration = 30,
}) => {
  // Duplicate array for seamless marquee animation
  const duplicatedTech = [...techStack, ...techStack];

  return (
    <div className="flex overflow-hidden py-5">
      <motion.div
        className="flex w-max shrink-0 gap-5 pr-5"
        animate={{
          x: reverse
            ? ["-50%", "0%"]
            : ["0%", "-50%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedTech.map((tech, index) => (
          <TechCard
            key={`${tech.name}-${index}`}
            tech={tech}
            index={index % techStack.length}
          />
        ))}
      </motion.div>
    </div>
  );
};

// ==========================================
// MAIN TECH STACK COMPONENT
// ==========================================

export const TechStack: React.FC = () => {
  return (
    <section
      id="tech-stack"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFF8E7]
        border-y-[4px]
        border-black
        py-20
        md:py-28
        select-none
      "
    >
      {/* ================================== */}
      {/* DECORATIVE ELEMENTS */}
      {/* ================================== */}

      {/* Top Left Decoration */}
      <motion.div
        animate={{
          rotate: [12, 20, 12],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-10
          left-8
          hidden
          md:block
          h-12
          w-12
          bg-[#FF6B6B]
          border-[3px]
          border-black
          shadow-[4px_4px_0px_#000]
        "
      />

      {/* Top Right Decoration */}
      <motion.div
        animate={{
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          top-16
          right-16
          hidden
          md:block
          text-5xl
          font-black
          text-[#FF80BF]
        "
      >
        ✳
      </motion.div>

      {/* Bottom Right Decoration */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-12
          right-10
          hidden
          md:block
          h-16
          w-16
          rounded-full
          bg-[#B8F28B]
          border-[3px]
          border-black
          shadow-[5px_5px_0px_#000]
        "
      />

      {/* Bottom Left Decoration */}
      <div
        className="
          absolute
          bottom-16
          left-20
          hidden
          md:block
          text-4xl
          font-black
          text-[#4ECDC4]
          rotate-12
        "
      >
        +
      </div>

      {/* ================================== */}
      {/* SECTION HEADER */}
      {/* ================================== */}

      <div
        className="
          relative
          z-10
          max-w-6xl
          mx-auto
          px-5
          mb-14
          text-center
        "
      >
        {/* Small Label */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            rotate: -5,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            rotate: -2,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="inline-block mb-6"
        >
          <span
            className="
              inline-block
              bg-[#FFE66D]
              border-[3px]
              border-black
              px-5
              py-2
              text-xs
              md:text-sm
              font-black
              uppercase
              tracking-[0.2em]
              shadow-[4px_4px_0px_#000]
            "
          >
            ✦ What I Work With ✦
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            font-black
            uppercase
            leading-[0.95]
            tracking-tight
            text-black
          "
        >
          MY TECH

          <span
            className="
              block
              mt-2
              text-[#FF6B6B]
              [text-shadow:3px_3px_0px_#000]
            "
          >
            STACK & SKILLS.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            inline-block
            mt-8
            bg-white
            border-[3px]
            border-black
            px-5
            py-3
            font-bold
            text-sm
            md:text-lg
            shadow-[5px_5px_0px_#000]
            rotate-[1deg]
          "
        >
          Technologies I use to build awesome products ✦
        </motion.p>
      </div>

      {/* ================================== */}
      {/* TOP MARQUEE - LEFT DIRECTION */}
      {/* ================================== */}

      <div
        className="
          relative
          bg-[#4ECDC4]
          border-y-[4px]
          border-black
          rotate-[-2deg]
          shadow-[0px_8px_0px_#000]
        "
      >
        <Marquee duration={35} />
      </div>

      {/* ================================== */}
      {/* BOTTOM MARQUEE - RIGHT DIRECTION */}
      {/* ================================== */}

      <div
        className="
          relative
          mt-10
          bg-[#FF80BF]
          border-y-[4px]
          border-black
          rotate-[2deg]
          shadow-[0px_8px_0px_#000]
        "
      >
        <Marquee reverse duration={40} />
      </div>

      {/* ================================== */}
      {/* BOTTOM FOOTER LABEL */}
      {/* ================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="
          relative
          z-10
          mt-20
          text-center
          px-5
        "
      >
        <span
          className="
            inline-block
            bg-[#B8F28B]
            border-[3px]
            border-black
            px-6
            py-3
            font-black
            uppercase
            text-sm
            md:text-base
            shadow-[5px_5px_0px_#000]
            rotate-[-1deg]
          "
        >
          Always Learning. Always Building. ✦
        </span>
      </motion.div>
    </section>
  );
};


export default TechStack;
