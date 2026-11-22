
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
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
    label: "EMAIL ADDRESS",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    icon: FaLocationDot,
    label: "LOCATION",
    value: "Cileles, Lebak, Banten",
    href: undefined,
  },
];

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden border-y-[3px] border-black bg-[#FFF8E7] px-5 py-20 md:px-8 md:py-28"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-24 h-52 w-52 rotate-12 border-[3px] border-black bg-[#FF80BF] opacity-40 shadow-[8px_8px_0_#000] md:right-10 md:h-64 md:w-64"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute left-8 top-24 hidden text-7xl font-black text-[#70DDD2] [text-shadow:3px_3px_0_#000] lg:block"
      >
        ✳
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-24 right-10 hidden h-16 w-16 rounded-full border-[3px] border-black bg-[#FFE66D] shadow-[5px_5px_0_#000] md:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-block border-[3px] border-black bg-[#FFE66D] px-5 py-2 text-xs font-black uppercase tracking-[0.18em] shadow-[4px_4px_0_#000] md:text-sm"
          >
            ✦ LET'S WORK TOGETHER ✦
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
            Punya ide menarik atau project yang ingin diwujudkan?
            Let's make something awesome together!
          </motion.p>
        </div>

        {/* Main Contact Layout */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-9">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {/* Introduction Card */}
            <div className="relative flex min-h-[320px] flex-1 flex-col justify-between overflow-hidden border-[3px] border-black bg-[#B8F28B] p-7 shadow-[7px_7px_0_#000] md:p-10 lg:min-h-[370px]">
              <div className="absolute -right-8 -top-8 h-36 w-36 rotate-12 border-[3px] border-black bg-[#FFE66D] opacity-70" />

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center border-[3px] border-black bg-white text-xl shadow-[3px_3px_0_#000]">
                    ✦
                  </span>

                  <span className="text-xs font-black uppercase tracking-[0.15em]">
                    QUICK RESPONSE
                  </span>
                </div>

                <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl lg:text-6xl">
                  LET'S TALK
                  <br />
                  ABOUT IT.
                </h3>

                <p className="mt-6 max-w-sm text-sm font-semibold leading-relaxed text-neutral-700 md:text-base">
                  I'm open to freelance projects, collaborations, and
                  exciting opportunities. Tell me what you have in mind!
                </p>
              </div>

              <div className="relative z-10 mt-12 flex items-end justify-between border-t-2 border-dashed border-black pt-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-600">
                    AVAILABLE FOR
                  </p>
                  <p className="mt-2 text-sm font-black uppercase">
                    Projects & Collaborations
                  </p>
                </div>

                <span className="text-4xl font-black">↗</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-7 border-[3px] border-black bg-[#FF9BCB] p-6 shadow-[7px_7px_0_#000] md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.15em]">
                    FIND ME ONLINE
                  </p>
                  <p className="mt-1 text-xs font-semibold text-neutral-700">
                    Let's connect on social media.
                  </p>
                </div>

                <span className="text-2xl">✳</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, x: -2 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ backgroundColor: social.color }}
                      className="flex items-center justify-center gap-2 border-[3px] border-black px-3 py-4 text-xs font-black uppercase shadow-[4px_4px_0_#000] transition-shadow hover:shadow-[6px_6px_0_#000] sm:text-sm"
                    >
                      <Icon className="text-lg" />
                      {social.label}
                      <FaArrowUpRightFromSquare className="text-[10px]" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-7"
          >
            {/* Contact Information */}
            <div className="flex flex-1 flex-col justify-between border-[3px] border-black bg-white p-7 shadow-[7px_7px_0_#000] md:p-10">

              <div>
                <span className="inline-block border-2 border-black bg-[#FFE66D] px-3 py-1 text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_#000]">
                  CONTACT INFORMATION
                </span>

                <h3 className="mt-7 text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-5xl">
                  LET'S START
                  <br />
                  A CONVERSATION.
                </h3>

                <p className="mt-5 max-w-md text-sm font-medium leading-relaxed text-neutral-500">
                  Have a question, an interesting idea, or just want to
                  say hello? Feel free to reach out through the channels
                  below.
                </p>
              </div>

              <div className="mt-12 space-y-6">
                {contactDetails.map((item) => {
                  const Icon = item.icon;

                  const content = (
                    <div className="flex min-w-0 items-center gap-5">
                      <span className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-black bg-[#FFE66D] text-xl shadow-[4px_4px_0_#000] transition-transform group-hover:-translate-y-1">
                        <Icon />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[10px] font-black tracking-[0.15em] text-neutral-400">
                          {item.label}
                        </span>

                        <span className="mt-2 block break-all text-sm font-black text-black md:text-base">
                          {item.value}
                        </span>
                      </span>

                      {item.href && (
                        <FaArrowUpRightFromSquare className="ml-auto shrink-0 text-xs text-neutral-400" />
                      )}
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group block transition-transform hover:translate-x-1"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Copy Email */}
              <div className="mt-10 border-t-[2px] border-dashed border-black pt-7">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex w-full items-center justify-center gap-3 border-[3px] border-black bg-[#70DDD2] px-5 py-5 text-xs font-black uppercase tracking-wider shadow-[5px_5px_0_#000] transition-all hover:-translate-y-1 hover:shadow-[7px_7px_0_#000] active:translate-y-1 active:shadow-none"
                >
                  {copied ? <FaCheck /> : <FaRegCopy />}
                  {copied ? "EMAIL COPIED!" : "COPY EMAIL ADDRESS"}
                </button>

                <p className="mt-4 text-center text-[10px] font-bold text-neutral-400">
                  {copied
                    ? "Email address successfully copied."
                    : "Feel free to contact me anytime."}
                </p>
              </div>
            </div>

            {/* Bottom CTA Card */}
            <div className="relative overflow-hidden border-[3px] border-black bg-[#FFE66D] p-6 shadow-[7px_7px_0_#000] md:p-8">
              <div className="absolute -right-5 -top-8 rotate-12 text-8xl font-black text-white/50">
                ✳
              </div>

              <div className="relative z-10 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em]">
                    HAVE A GREAT IDEA?
                  </p>

                  <h4 className="mt-2 text-2xl font-black uppercase leading-tight md:text-3xl">
                    LET'S MAKE IT REAL.
                  </h4>

                  <p className="mt-2 text-xs font-semibold text-neutral-700">
                    Good things start with a conversation.
                  </p>
                </div>

                <span className="flex h-14 w-14 shrink-0 items-center justify-center border-[3px] border-black bg-white text-2xl shadow-[4px_4px_0_#000] md:h-16 md:w-16">
                  ↗
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col items-center justify-center gap-3 text-center"
        >
          <span className="border-[2px] border-black bg-[#FFE66D] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] shadow-[3px_3px_0_#000]">
            MADE WITH PASSION & A LITTLE CHAOS
          </span>

          <p className="text-xs font-bold text-neutral-500">
            © 2026 · Let's build something meaningful.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
