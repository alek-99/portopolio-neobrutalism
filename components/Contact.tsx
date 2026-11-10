"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
  FaRegCopy,
  FaCheck,
  FaLocationDot,
  FaInstagram,
} from "react-icons/fa6";


const contactEmail = "kuyud45@gmail.com";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/alek-99",
    icon: FaGithub,
    color: "#FFE66D",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yuuuddd14?srtk=MWUxc2h0ZDJ6aWt5eQ==",
    icon: FaInstagram,
    color: "#70DDD2",
  },
];

const contactDetails = [
  {
    icon: FaEnvelope,
    label: "EMAIL ME",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: FaLocationDot,
    label: "LOCATION",
    value: "Indonesia · Available Worldwide",
    href: undefined,
  },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copied, setCopied] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      formData.subject || `Project inquiry from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi!\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\n\n${formData.message}`
    );

    // Membuka aplikasi email pengguna. Tidak membutuhkan backend.
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden border-y-[4px] border-black bg-[#FFF8E7] px-5 py-20 md:py-28"
    >
      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-52 w-52 rotate-12 border-[3px] border-black bg-[#FF80BF] shadow-[8px_8px_0_#000] opacity-60 md:right-10 md:h-64 md:w-64"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute left-8 top-24 hidden text-7xl font-black text-[#70DDD2] [text-shadow:3px_3px_0_#000] lg:block"
      >
        ✳
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-24 right-10 hidden h-16 w-16 rounded-full border-[3px] border-black bg-[#FFE66D] shadow-[5px_5px_0_#000] md:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADING */}
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-block border-[3px] border-black bg-[#FFE66D] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#000] md:text-sm"
          >
            ✦ Let's Work Together ✦
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] text-black sm:text-6xl md:text-8xl"
          >
            HAVE AN
            <span className="mt-3 block text-[#FF6B6B] [text-shadow:4px_4px_0_#000]">
              IDEA?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto mt-8 inline-block max-w-xl rotate-[1deg] border-[3px] border-black bg-white px-5 py-3 text-sm font-bold leading-relaxed shadow-[5px_5px_0_#000] md:text-base"
          >
            Punya ide menarik atau project yang ingin diwujudkan? Let's make
            something awesome together!
          </motion.p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          {/* LEFT: CONTACT INFO */}
          <motion.aside
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="flex h-full flex-col gap-6"
          >
            <div className="border-[3px] border-black bg-[#B8F28B] p-6 shadow-[7px_7px_0_#000] md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-white text-xl shadow-[3px_3px_0_#000]">
                  {/* <FaBolt /> */}☆
                </span>
                <span className="text-xs font-black uppercase tracking-[0.15em]">
                  Quick Response
                </span>
              </div>

              <h3 className="text-3xl font-black uppercase leading-[0.95] md:text-4xl">
                LET'S TALK
                <br />
                ABOUT IT.
              </h3>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-neutral-700">
                I&apos;m open to freelance projects, collaborations, and
                exciting opportunities. Tell me what you have in mind!
              </p>
            </div>

            <div className="border-[3px] border-black bg-white p-6 shadow-[7px_7px_0_#000] md:p-8">
              <h4 className="mb-5 text-sm font-black uppercase tracking-[0.15em]">
                CONTACT DETAILS
              </h4>

              <div className="space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex min-w-0 items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border-[2px] border-black bg-[#FFE66D] text-lg shadow-[3px_3px_0_#000]">
                        <Icon />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-black tracking-[0.15em] text-neutral-500">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-black text-black">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block transition-transform hover:translate-x-1"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-7 border-t-[2px] border-dashed border-black pt-5">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex w-full items-center justify-center gap-2 border-[3px] border-black bg-[#70DDD2] px-4 py-3 text-xs font-black uppercase shadow-[4px_4px_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  {copied ? <FaCheck /> : <FaRegCopy />}
                  {copied ? "EMAIL COPIED!" : "COPY EMAIL ADDRESS"}
                </button>
              </div>
            </div>

            <div className="border-[3px] border-black bg-[#FF9BCB] p-6 shadow-[7px_7px_0_#000]">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.15em]">
                FIND ME ONLINE
              </p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3, x: -2 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ backgroundColor: social.color }}
                      className="flex items-center justify-center gap-2 border-[3px] border-black px-3 py-3 text-sm font-black uppercase shadow-[4px_4px_0_#000] transition-shadow hover:shadow-[6px_6px_0_#000]"
                    >
                      <Icon className="text-lg" />
                      {social.label}
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.aside>

          {/* RIGHT: CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="border-[3px] border-black bg-white p-5 shadow-[8px_8px_0_#000] md:p-8 lg:p-9"
          >
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.18em] text-neutral-500">
                  Got a project?
                </span>
                <h3 className="mt-1 text-2xl font-black uppercase md:text-3xl">
                  SEND A MESSAGE
                </h3>
              </div>
              <motion.span
                animate={{ rotate: [0, 12, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex h-12 w-12 shrink-0 items-center justify-center border-[3px] border-black bg-[#FFE66D] text-xl shadow-[3px_3px_0_#000]"
              >
                <FaPaperPlane />
              </motion.span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-black uppercase tracking-wide"
                  >
                    Your Name <span className="text-[#F04444]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border-[3px] border-black bg-[#FFF8E7] px-4 py-3 text-sm font-bold text-black outline-none transition-all placeholder:text-neutral-400 focus:bg-[#FFE66D] focus:shadow-[4px_4px_0_#000]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-black uppercase tracking-wide"
                  >
                    Email Address <span className="text-[#F04444]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full border-[3px] border-black bg-[#FFF8E7] px-4 py-3 text-sm font-bold text-black outline-none transition-all placeholder:text-neutral-400 focus:bg-[#FFE66D] focus:shadow-[4px_4px_0_#000]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project collaboration..."
                  className="w-full border-[3px] border-black bg-[#FFF8E7] px-4 py-3 text-sm font-bold text-black outline-none transition-all placeholder:text-neutral-400 focus:bg-[#FFE66D] focus:shadow-[4px_4px_0_#000]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-black uppercase tracking-wide"
                >
                  Your Message <span className="text-[#F04444]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your awesome idea..."
                  className="w-full resize-y border-[3px] border-black bg-[#FFF8E7] px-4 py-3 text-sm font-bold text-black outline-none transition-all placeholder:text-neutral-400 focus:bg-[#FFE66D] focus:shadow-[4px_4px_0_#000]"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ x: -3, y: -3 }}
                whileTap={{ x: 2, y: 2 }}
                className="group flex w-full items-center justify-center gap-3 border-[3px] border-black bg-[#FF6B6B] px-6 py-4 text-sm font-black uppercase tracking-wide text-black shadow-[5px_5px_0_#000] transition-shadow hover:shadow-[8px_8px_0_#000] active:shadow-none"
              >
                SEND MESSAGE
                <FaPaperPlane className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.button>

              <p className="text-center text-[10px] font-semibold leading-relaxed text-neutral-500">
                By sending this message, your default email application will
                open with the message ready to send.
              </p>
            </form>
          </motion.div>
        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-center gap-2 text-center"
        >
          <span className="border-[2px] border-black bg-[#FFE66D] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] shadow-[3px_3px_0_#000]">
            MADE WITH PASSION & A LITTLE CHAOS
          </span>
          <p className="mt-2 text-xs font-bold text-neutral-500">
            © {new Date().getFullYear()} · Let&apos;s build something meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
