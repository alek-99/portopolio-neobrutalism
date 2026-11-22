
"use client";

import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaRocket,
  FaArrowUpRightFromSquare,
  FaLocationDot,
  FaUser,
} from "react-icons/fa6";

import {
  motion,
  useReducedMotion,
} from "motion/react";

import "@/app/about.css";

export default function AboutMe() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 50,
      scale: reduceMotion ? 1 : 0.94,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* HEADER */}
        <motion.div
          className="about-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="about-label"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <FaUser />
            <span>GET TO KNOW ME</span>
          </motion.div>

          <div className="about-heading-row">
            <h2>
              ABOUT
              <motion.span
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.7 }}
              >
                {" "}ME.
              </motion.span>
            </h2>
          </div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="about-grid">

          {/* LEFT VISUAL */}
          <motion.div
            className="about-visual"
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              className="about-image-card"
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -8,
                      rotate: -1,
                      transition: { duration: 0.3 },
                    }
              }
            >

              <div className="about-image-top">
                <span>THE PERSON BEHIND THE CODE</span>
                <motion.span
                  animate={
                    reduceMotion
                      ? {}
                      : { rotate: 360 }
                  }
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ✳
                </motion.span>
              </div>

              <div className="about-image">
                <motion.img
                  src="/images/about.png"
                  alt="Yudi Permana - Web Developer"
                  initial={{
                    opacity: 0,
                    scale: reduceMotion ? 1 : 1.15,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                  }}
                />

                <motion.div
                  className="about-image-overlay"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <span>CREATIVE MIND.</span>
                  <strong>TECH ENTHUSIAST.</strong>
                </motion.div>
              </div>

              <div className="about-image-bottom">
                <span>BASED IN INDONESIA</span>
                <FaArrowUpRightFromSquare />
              </div>

            </motion.div>

            {/* FLOATING STICKER */}
            <motion.div
              className="about-sticker"
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [0, -12, 0],
                      rotate: [0, 3, 0, -3, 0],
                    }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <FaCode />
              <span>CODE WITH PASSION</span>
            </motion.div>

            {/* ROTATING DECORATION */}
            <motion.div
              className="about-decoration"
              animate={
                reduceMotion ? {} : { rotate: 360 }
              }
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              ✳
            </motion.div>

          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            className="about-content"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            <motion.p
              className="about-greeting"
              variants={fadeUp}
            >
              HELLO, NICE TO MEET YOU!
            </motion.p>

            <motion.h3 variants={fadeUp}>
              I'm Yudi Permana,
              <br />
              a <span>Web Developer</span>
              <br />
              & Tech Enthusiast.
            </motion.h3>

            <motion.p
              className="about-description"
              variants={fadeUp}
            >
              Saya adalah seseorang yang memiliki ketertarikan
              besar terhadap dunia teknologi, khususnya dalam
              pengembangan website dan pemrograman.

              <br /><br />

              Bagi saya, coding bukan hanya tentang menulis
              baris demi baris kode, tetapi juga tentang
              bagaimana mengubah ide menjadi sesuatu yang
              bermanfaat dan memberikan pengalaman terbaik
              bagi penggunanya.
            </motion.p>

            <motion.p
              className="about-description"
              variants={fadeUp}
            >
              Saya senang mempelajari teknologi baru,
              mengeksplorasi berbagai ide kreatif, dan terus
              mengembangkan kemampuan untuk menciptakan
              solusi digital yang inovatif.
            </motion.p>

            <motion.div
              className="about-location"
              variants={fadeUp}
            >
              <FaLocationDot />
              <span>INDONESIA</span>
            </motion.div>

            <motion.a
              href="#contact"
              className="about-contact-btn"
              variants={fadeUp}
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -5,
                      scale: 1.04,
                    }
              }
              whileTap={{ scale: 0.96 }}
            >
              LET'S CONNECT

              <motion.span
                animate={
                  reduceMotion
                    ? {}
                    : { x: [0, 4, 0], y: [0, -4, 0] }
                }
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaArrowUpRightFromSquare />
              </motion.span>
            </motion.a>

          </motion.div>

        </div>

        {/* VALUES */}
        <motion.div
          className="about-values"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <motion.div
            className="about-value-card value-blue"
            variants={cardAnimation}
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -12,
                    rotate: -1,
                    transition: { duration: 0.25 },
                  }
            }
          >
            <div className="value-top">
              <FaLaptopCode />
            </div>

            <h4>PASSION</h4>

            <p>
              Selalu antusias dalam dunia teknologi,
              programming, dan pengembangan website.
            </p>
          </motion.div>

          <motion.div
            className="about-value-card value-lime"
            variants={cardAnimation}
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -12,
                    rotate: 1,
                    transition: { duration: 0.25 },
                  }
            }
          >
            <div className="value-top">
              <FaLightbulb />
            </div>

            <h4>CREATIVITY</h4>

            <p>
              Senang mengeksplorasi ide baru dan
              menciptakan sesuatu yang berbeda.
            </p>
          </motion.div>

          <motion.div
            className="about-value-card value-orange"
            variants={cardAnimation}
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -12,
                    rotate: 1,
                    transition: { duration: 0.25 },
                  }
            }
          >
            <div className="value-top">
              <FaRocket />
            </div>

            <h4>GROWTH</h4>

            <p>
              Terus belajar, berkembang, dan menghadapi
              tantangan untuk menjadi lebih baik.
            </p>
          </motion.div>

        </motion.div>

        {/* BOTTOM QUOTE */}
        <motion.div
          className="about-quote"
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="quote-symbol">“</span>

          <p>
            GREAT THINGS ARE BUILT ONE LINE OF CODE AT A TIME.
          </p>

        </motion.div>

      </div>

    </section>
  );
}
