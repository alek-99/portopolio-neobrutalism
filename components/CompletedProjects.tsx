
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCode,
  FaStar,
  FaArrowRight,
  FaFilePdf,
  FaWhatsapp,
} from "react-icons/fa6";

// ==========================================
// PROJECT DATA
// ==========================================

const projects = [
  {
    id: "01",
    title: "Sistem Management Ponpes Salafi",
    category: "FULLSTACK DEVELOPMENT",
    description:
      "Sistem informasi manajemen Pondok Pesantren Al-Arbain yang mencakup pengelolaan data santri, pembayaran listrik bulanan, kas pesantren, jadwal kegiatan, pengumuman, serta pengelolaan administrasi pesantren secara digital.",
    image: "/images/projects/arbain.png",
    year: "2026",
    featured: true,
    status: "COMPLETED",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Firestore",
    ],
    linkDokumentasi:
      "https://drive.google.com/file/d/1g0k6n3J4Z5K8L9J2F3G4H5I6J7K8L9M0/view?usp=sharing",
    orderWeb: "https://wa.me/6281389090873",
    color: "#FFE66D",
  },
];

type Project = (typeof projects)[number];

// ==========================================
// PROJECT CARD
// ==========================================

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden border-[3px] border-black bg-white shadow-[7px_7px_0_#000] transition-shadow duration-200 hover:shadow-[11px_11px_0_#000]"
    >
      {/* PROJECT IMAGE */}
      <div className="p-3 pb-0 sm:p-4 sm:pb-0">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden border-[3px] border-black"
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* PROJECT NUMBER */}
          <span className="absolute left-3 top-3 z-10 border-2 border-black bg-[#FFE66D] px-3 py-1 text-[10px] font-black shadow-[3px_3px_0_#000] sm:text-xs">
            PROJECT #{project.id}
          </span>

          {/* STATUS */}
          <span className="absolute right-3 top-3 z-10 flex items-center gap-1.5 border-2 border-black bg-[#B8F28B] px-3 py-1 text-[10px] font-black shadow-[3px_3px_0_#000] sm:text-xs">
            <FaStar />
            {project.status}
          </span>

          {/* YEAR */}
          <span className="absolute bottom-3 right-3 z-10 border-2 border-black bg-white px-3 py-1 text-xs font-black shadow-[3px_3px_0_#000]">
            {project.year}
          </span>
        </div>
      </div>

      {/* PROJECT CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6 md:p-7">
        {/* CATEGORY */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="bg-black px-3 py-1.5 text-[10px] font-black tracking-[0.12em] text-white sm:text-xs">
            {project.category}
          </span>

          {project.featured && (
            <span className="border-2 border-black bg-[#FF9BCB] px-3 py-1 text-[10px] font-black sm:text-xs">
              ★ FEATURED PROJECT
            </span>
          )}
        </div>

        {/* TITLE */}
        <h3 className="text-2xl font-black uppercase leading-[1.05] tracking-tight text-black transition-colors duration-200 group-hover:text-[#F04444] sm:text-3xl md:text-4xl">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-neutral-600 sm:text-base">
          {project.description}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-6">
          <h4 className="mb-3 text-xs font-black uppercase tracking-widest text-neutral-500">
            Technologies Used
          </h4>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border-2 border-black bg-[#FFF4E0] px-3 py-1.5 text-[10px] font-black uppercase shadow-[2px_2px_0_#000] sm:text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="my-6 border-t-[2px] border-dashed border-black" />

        {/* ACTION BUTTONS */}
        <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2">
          {project.linkDokumentasi && (
            <motion.a
              href={project.linkDokumentasi}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 2, y: 2 }}
              className="flex items-center justify-center gap-2 border-[3px] border-black bg-[#FFE66D] px-4 py-3 text-xs font-black uppercase shadow-[4px_4px_0_#000] transition-shadow hover:shadow-[6px_6px_0_#000] sm:text-sm"
            >
              <FaFilePdf className="text-base" />
              Dokumentasi
            </motion.a>
          )}

          {project.orderWeb && (
            <motion.a
              href={project.orderWeb}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: -2, y: -2 }}
              whileTap={{ x: 2, y: 2 }}
              className="flex items-center justify-center gap-2 border-[3px] border-black bg-[#70DDD2] px-4 py-3 text-xs font-black uppercase shadow-[4px_4px_0_#000] transition-shadow hover:shadow-[6px_6px_0_#000] sm:text-sm"
            >
              <FaWhatsapp className="text-base" />
              Order Website
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const CompletedProjects: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative isolate w-full overflow-hidden border-y-[4px] border-black bg-[#FFF8E7] py-20 sm:py-24 md:py-28"
    >
      {/* DECORATIVE SHAPES */}
      <motion.div
        animate={{ rotate: [0, 12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-5 top-16 hidden h-14 w-14 items-center justify-center border-[3px] border-black bg-[#FF6B6B] text-3xl font-black shadow-[5px_5px_0_#000] md:flex lg:left-12"
      >
        +
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute right-8 top-20 hidden text-6xl font-black text-[#FF80BF] md:block lg:right-16"
      >
        ✳
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-24 left-10 hidden h-14 w-14 rounded-full border-[3px] border-black bg-[#70DDD2] shadow-[5px_5px_0_#000] md:block"
      />

      {/* HEADER */}
      <div className="relative z-10 mx-auto mb-14 max-w-6xl px-5 text-center md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 18, rotate: -5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block"
        >
          <span className="inline-block border-[3px] border-black bg-[#FFE66D] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#000] sm:text-sm">
            ✦ My Creative Journey ✦
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-black sm:text-5xl md:text-7xl"
        >
          COMPLETED
          <span className="mt-2 block text-[#FF6B6B] [text-shadow:3px_3px_0_#000]">
            PROJECTS.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mx-auto mt-8 inline-block max-w-[90%] rotate-[1deg] border-[3px] border-black bg-white px-5 py-3 text-sm font-bold shadow-[5px_5px_0_#000] sm:text-base md:text-lg"
        >
          Turning ideas into real-world digital products 🚀
        </motion.p>

        {/* PROJECT COUNTER */}
        <div className="mt-8 flex justify-center">
          <motion.div
            whileHover={{ rotate: -2, y: -3 }}
            className="inline-flex items-center gap-3 border-[3px] border-black bg-[#70DDD2] px-5 py-3 shadow-[5px_5px_0_#000]"
          >
            <FaCode className="text-xl" />

            <span className="text-sm font-black uppercase">
              {String(projects.length).padStart(2, "0")} Projects Completed
            </span>
          </motion.div>
        </div>
      </div>

      {/* PROJECT GRID */}
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mt-20 px-5 text-center"
      >
        <motion.div
          whileHover={{ rotate: 0, y: -4 }}
          className="mx-auto inline-block max-w-xl rotate-[-1deg] border-[3px] border-black bg-[#B8F28B] px-7 py-6 shadow-[7px_7px_0_#000] transition-shadow hover:shadow-[10px_10px_0_#000]"
        >
          <h3 className="text-xl font-black uppercase text-black sm:text-2xl">
            More Ideas. More Creations.
          </h3>

          <p className="mt-2 text-sm font-bold text-neutral-700">
            Always building something new. Stay tuned!
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 text-xl font-black">
            <span>✦ ✦ ✦</span>
            <FaArrowRight className="text-base" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CompletedProjects;
