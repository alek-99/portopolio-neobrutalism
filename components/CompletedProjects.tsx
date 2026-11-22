
"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaFilePdf,
  FaGithub,
  FaStar,
  FaWhatsapp,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
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
      "Platform manajemen Pondok Pesantren Al-Arbain yang dirancang untuk mendigitalisasi berbagai aktivitas administrasi pesantren. Mencakup pengelolaan data santri, pembayaran listrik bulanan, pencatatan kas, jadwal kegiatan, pengumuman, hingga sistem pengelolaan informasi yang terintegrasi dalam satu platform.",
    image: "/images/projects/projek1/arbain.png",

    // Tambahkan gambar dokumentasi lainnya di sini
    gallery: [
      "/images/projects/projek1/arbain.png",
      "/images/projects/projek1/dashboard.png",
      "/images/projects/projek1/menupembayaran.png",
      // "/images/projects/arbain-pembayaran.png",
    ],

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
    orderWeb: "https://wa.me/6281389090873",
    color: "#FFE66D",
  },
  {
    id: "02",
    title: "Company Profile dan SPMB Ponpes Al-Quran + CMS",
    category: "FULLSTACK DEVELOPMENT",
    description:
      "Website Company Profile dan Sistem Penerimaan Murid Baru (SPMB) yang dilengkapi Content Management System (CMS). Memungkinkan pengelolaan berita, informasi lembaga, publikasi konten, serta proses penerimaan peserta didik melalui dashboard administrator yang terintegrasi.",
    image: "/images/projects/projek2/ppjamiatul.png",

    // Tambahkan gambar dokumentasi lainnya di sini
    gallery: [
      "/images/projects/projek2/berita.png",
      "/images/projects/projek2/footer.png",
      "/images/projects/projek2/spmb.png",
      "/images/projects/projek2/dashboard.png",
    ],

    year: "2026",
    featured: true,
    status: "COMPLETED",
    technologies: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "MySQL",
      "JavaScript",
    ],
    orderWeb: "https://wa.me/6281389090873",
    color: "#FFE66D",
  },
  {
    id: "03",
    title: "WebApps Absensi Face Id dan Geolokasi",
    category: "FULLSTACK DEVELOPMENT",
    description:
      "Aplikasi presensi digital berbasis Progressive Web App (PWA) yang mengintegrasikan teknologi Face Recognition dan Geolocation. Dirancang untuk membantu proses pencatatan kehadiran secara lebih praktis, terukur, dan efisien dengan dukungan validasi lokasi serta notifikasi.",
    image: "/images/projects/projek5/dashboard.png",

    // Tambahkan gambar dokumentasi lainnya di sini
    gallery: [
      "/images/projects/projek5/notifikasi.png",
      // "/images/projects/projek2/footer.png",
      // "/images/projects/projek2/spmb.png",
      // "/images/projects/projek2/dashboard.png",
    ],

    year: "2026",
    featured: true,
    status: "COMPLETED",
    technologies: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "MySQL",
      "JavaScript",
      "Face-recogniting",
    ],
    orderWeb: "https://wa.me/6281389090873",
    color: "#FFE66D",
  },
  {
    id: "04",
    title: "WebApp Management tugas Kuliah",
    category: "Fullstak Depelopment",
    description:"Platform manajemen tugas perkuliahan yang membantu pengguna mengatur daftar tugas, memantau tenggat waktu, dan mendapatkan pengingat secara otomatis. Dilengkapi Web Push Notification serta integrasi WhatsApp Gateway untuk meningkatkan efektivitas pengelolaan aktivitas akademik.",

    image: "/images/projects/projek4/extrance.png",

    // Tambahkan gambar dokumentasi lainnya di sini
    gallery: [
      "/images/projects/projek4/login.png",
      "/images/projects/projek4/lighttheme.png",
      "/images/projects/projek4/darktheme.png",
      "/images/projects/projek4/notifikasi.png",
    ],

    year: "2026",
    featured: true,
    status: "COMPLETED",
    technologies: [
      "Next js",
      "Tailwind",
      "typescript",
      "PWA",
      "JavaScript",
      "Supabase",
      "fonnte",
      // "Face-recogniting",
    ],
    orderWeb: "https://wa.me/6281389090873",
    color: "#FFE66D",
  },
   {
    id: "05",
    title: "Aplikasi Android Management Laundri Offline",
    category: "Fullstak Depelopment",
    description:"Aplikasi Khusus yang dibangun untuk mengelola bisnis laundri agar mudah dikelola dan efisien, dilengkapi dengan fitur export seluruh data kedalam exel",

    image: "/images/projects/projek6/extrance.png",

    // Tambahkan gambar dokumentasi lainnya di sini
    gallery: [
      "/images/projects/projek6/dashboard.png",
      "/images/projects/projek4/laporan.png",
      // "/images/projects/projek4/darktheme.png",
      // "/images/projects/projek4/notifikasi.png",
    ],

    year: "2026",
    featured: true,
    status: "COMPLETED",
    technologies: [
      "Next js",
      "Tailwind",
      "typescript",
      "PWA",
      "JavaScript",
      "Supabase",
      "fonnte",
      // "Face-recogniting",
    ],
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
  onOpenGallery: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  onOpenGallery,
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
        <button
          type="button"
          onClick={() => onOpenGallery(project)}
          aria-label={`Lihat galeri ${project.title}`}
          className="relative block aspect-[16/9] w-full cursor-zoom-in overflow-hidden border-[3px] border-black text-left"
          style={{ backgroundColor: project.color }}
        >
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* IMAGE OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
            <div className="flex translate-y-4 items-center gap-2 border-[3px] border-black bg-[#FFE66D] px-5 py-3 text-xs font-black uppercase opacity-0 shadow-[4px_4px_0_#000] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <FaImages className="text-base" />
              Lihat Dokumentasi
            </div>
          </div>

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

          {/* IMAGE COUNTER */}
          <span className="absolute bottom-3 left-3 z-10 flex items-center gap-2 border-2 border-black bg-white px-3 py-1 text-xs font-black shadow-[3px_3px_0_#000]">
            <FaImages />
            {project.gallery.length} FOTO
          </span>
        </button>
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
          <button
            type="button"
            onClick={() => onOpenGallery(project)}
            className="flex items-center justify-center gap-2 border-[3px] border-black bg-[#FFE66D] px-4 py-3 text-xs font-black uppercase shadow-[4px_4px_0_#000] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#000] sm:text-sm"
          >
            <FaImages className="text-base" />
            Lihat Dokumentasi
          </button>

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
              Minta Dokumentasi Lengkap
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

// ==========================================
// PROJECT GALLERY MODAL
// ==========================================

interface GalleryModalProps {
  project: Project;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  project,
  onClose,
}) => {
  const [activeImage, setActiveImage] = useState(0);

  const images = project.gallery;

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/85 p-3 backdrop-blur-sm sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.25 }}
        onClick={(event) => event.stopPropagation()}
        className="relative my-auto w-full max-w-5xl border-[3px] border-black bg-[#FFF8E7] shadow-[8px_8px_0_#FFE66D] sm:shadow-[12px_12px_0_#FFE66D]"
      >
        {/* MODAL HEADER */}
        <div className="flex items-center justify-between gap-3 border-b-[3px] border-black bg-[#FFE66D] p-4 sm:p-5">
          <div className="min-w-0">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-700 sm:text-xs">
              PROJECT #{project.id} / {project.year}
            </span>

            <h3 className="mt-1 truncate text-lg font-black uppercase leading-tight text-black sm:text-2xl">
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup galeri"
            className="flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-black bg-white text-black shadow-[3px_3px_0_#000] transition-all hover:-translate-y-1 hover:bg-[#FF6B6B] hover:shadow-[5px_5px_0_#000]"
          >
            <FaXmark className="text-xl" />
          </button>
        </div>

        {/* MAIN IMAGE */}
        <div className="relative bg-neutral-950 p-3 sm:p-5">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden border-[2px] border-white/20 bg-neutral-900">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[activeImage]}
                src={images[activeImage]}
                alt={`${project.title} - gambar ${activeImage + 1}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full object-contain"
              />
            </AnimatePresence>

            {/* PREVIOUS */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                aria-label="Gambar sebelumnya"
                className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-[2px] border-black bg-[#FFE66D] text-black shadow-[3px_3px_0_#000] transition hover:bg-white sm:left-4 sm:h-12 sm:w-12"
              >
                <FaChevronLeft />
              </button>
            )}

            {/* NEXT */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                aria-label="Gambar selanjutnya"
                className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-[2px] border-black bg-[#FFE66D] text-black shadow-[3px_3px_0_#000] transition hover:bg-white sm:right-4 sm:h-12 sm:w-12"
              >
                <FaChevronRight />
              </button>
            )}

            {/* IMAGE NUMBER */}
            <span className="absolute bottom-3 right-3 border-2 border-black bg-white px-3 py-1 text-xs font-black shadow-[3px_3px_0_#000]">
              {activeImage + 1} / {images.length}
            </span>
          </div>
        </div>

        {/* THUMBNAILS */}
        <div className="border-t-[3px] border-black p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-xs font-black uppercase tracking-widest sm:text-sm">
              <FaImages />
              Project Gallery
            </h4>

            <span className="text-[10px] font-bold text-neutral-500 sm:text-xs">
              {images.length} IMAGES
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-3">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Pilih gambar ${index + 1}`}
                className={`relative h-20 w-28 shrink-0 overflow-hidden border-[3px] transition-all sm:h-24 sm:w-36 ${
                  activeImage === index
                    ? "border-black shadow-[4px_4px_0_#000] -translate-y-1"
                    : "border-neutral-300 opacity-60 hover:border-black hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {activeImage === index && (
                  <span className="absolute bottom-0 right-0 bg-[#FFE66D] px-2 py-1 text-[9px] font-black text-black">
                    ACTIVE
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t-[3px] border-black bg-white px-4 py-4 sm:px-5">
          <p className="text-[10px] font-bold uppercase text-neutral-500 sm:text-xs">
            {project.category}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="border-[2px] border-black bg-[#FF9BCB] px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0_#000] transition hover:-translate-y-1 hover:shadow-[5px_5px_0_#000]"
          >
            Close Gallery
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const CompletedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const openGallery = (project: Project) => {
    setSelectedProject(project);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
    <>
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
        <div className="relative z-10 mx-auto mb-16 max-w-4xl px-5 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block"
          >
            <span className="inline-block border-[3px] border-black bg-[#FFE66D] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#000] sm:text-sm">
              ✦ Portfolio & Achievements ✦
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.06em] text-black sm:text-5xl md:text-7xl"
          >
            IDEAS INTO
            <span className="mt-2 block text-[#FF6B6B] [text-shadow:3px_3px_0_#000]">
              REALITY.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto mt-8 max-w-2xl text-sm font-medium leading-relaxed text-neutral-600 sm:text-base md:text-lg"
          >
            Setiap proyek adalah proses menerjemahkan ide menjadi solusi digital
            yang nyata. Berikut beberapa karya dan proyek yang telah berhasil
            saya rancang, kembangkan, dan selesaikan melalui eksplorasi teknologi,
            kreativitas, serta pengalaman dalam pengembangan perangkat lunak.
          </motion.p>

          {/* PROJECT COUNTER */}
          <div className="mt-9 flex justify-center">
            <motion.div
              whileHover={{ rotate: -2, y: -3 }}
              className="inline-flex items-center gap-3 border-[3px] border-black bg-[#70DDD2] px-5 py-3 shadow-[5px_5px_0_#000]"
            >
              <FaCode className="text-xl" />

              <span className="text-sm font-black uppercase">
                {String(projects.length).padStart(2, "0")}+ Featured Projects
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
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </div>

        {/* MORE COMPLETED PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl px-5"
        >
          <div className="border-[3px] border-black bg-white p-7 shadow-[7px_7px_0_#000] sm:p-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-black bg-[#FFE66D] text-2xl shadow-[3px_3px_0_#000]">
                <FaStar />
              </div>

              <div className="flex-1">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-neutral-500">
                  Beyond The Showcase
                </span>

                <h3 className="mt-2 text-2xl font-black uppercase leading-tight tracking-tight text-black sm:text-3xl">
                  Dan Masih Banyak
                  <span className="text-[#FF6B6B]"> Proyek Lainnya.</span>
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-neutral-600 sm:text-base">
                  Proyek yang ditampilkan di sini hanyalah sebagian dari perjalanan
                  dan pengalaman pengembangan yang telah saya selesaikan. Masih
                  banyak proyek lainnya yang telah dikerjakan, mulai dari website
                  company profile, sistem informasi, aplikasi manajemen, dashboard
                  administrasi, hingga berbagai solusi digital sesuai kebutuhan
                  pengguna.
                </p>

                <p className="mt-3 text-sm font-medium leading-7 text-neutral-600 sm:text-base">
                  Setiap proyek memberikan pengalaman dan tantangan baru. Saya
                  terus mengeksplorasi teknologi, mengembangkan kemampuan, serta
                  menciptakan produk digital yang tidak hanya menarik secara visual,
                  tetapi juga fungsional, responsif, dan memberikan manfaat nyata.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mt-20 px-5 text-center"
        >
          <div className="mx-auto max-w-2xl border-[3px] border-black bg-[#B8F28B] px-7 py-9 shadow-[7px_7px_0_#000] sm:px-10">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-neutral-700">
              Have an Idea?
            </span>

            <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-black sm:text-4xl">
              Let's Build Something
              <span className="block text-[#F04444]">Meaningful Together.</span>
            </h3>

            <p className="mx-auto mt-4 max-w-lg text-sm font-medium leading-relaxed text-neutral-700 sm:text-base">
              Punya ide, kebutuhan website, atau ingin mengembangkan sistem digital?
              Mari diskusikan dan wujudkan ide tersebut menjadi solusi yang bermanfaat.
            </p>

            <a
              href="https://wa.me/6281389090873"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-3 border-[3px] border-black bg-white px-7 py-4 text-sm font-black uppercase text-black shadow-[4px_4px_0_#000] transition-all hover:-translate-y-1 hover:bg-[#FFE66D] hover:shadow-[6px_6px_0_#000]"
            >
              <FaWhatsapp className="text-xl" />
              Let's Talk About Your Project
              <FaArrowUpRightFromSquare />
            </a>

            <div className="mt-7 text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
              ✦ Think · Create · Develop · Deliver ✦
            </div>
          </div>
        </motion.div>
      </section>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <GalleryModal
            key={selectedProject.id}
            project={selectedProject}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CompletedProjects;
