
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
import "@/app/about.css";
export default function AboutMe() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* HEADER */}
        <div className="about-header">
          <div className="about-label">
            <FaUser />
            <span>GET TO KNOW ME</span>
          </div>

          <div className="about-heading-row">
            <h2>
              ABOUT
              <span> ME.</span>
            </h2>

            {/* <span className="about-number">01 / 04</span> */}
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-grid">

          {/* LEFT VISUAL */}
          <div className="about-visual">

            <div className="about-image-card">

              <div className="about-image-top">
                <span>THE PERSON BEHIND THE CODE</span>
                <span>✳</span>
              </div>

              <div className="about-image">
                <img
                  src="/images/about.png"
                  alt="Yudi Permana - Web Developer"
                />

                <div className="about-image-overlay">
                  <span>CREATIVE MIND.</span>
                  <strong>TECH ENTHUSIAST.</strong>
                </div>
              </div>

              <div className="about-image-bottom">
                <span>BASED IN INDONESIA</span>
                <FaArrowUpRightFromSquare />
              </div>

            </div>

            <div className="about-sticker">
              <FaCode />
              <span>CODE WITH PASSION</span>
            </div>

            <div className="about-decoration">✳</div>

          </div>

          {/* RIGHT DESCRIPTION */}
          <div className="about-content">

            <p className="about-greeting">
              HELLO, NICE TO MEET YOU!
            </p>

            <h3>
              I'm Yudi Permana,
              <br />
              a <span>Web Developer</span>
              <br />
              & Tech Enthusiast.
            </h3>

            <p className="about-description">
              Saya adalah seseorang yang memiliki ketertarikan
              besar terhadap dunia teknologi, khususnya dalam
              pengembangan website dan pemrograman.

              <br /><br />

              Bagi saya, coding bukan hanya tentang menulis
              baris demi baris kode, tetapi juga tentang
              bagaimana mengubah ide menjadi sesuatu yang
              bermanfaat dan memberikan pengalaman terbaik
              bagi penggunanya.
            </p>

            <p className="about-description">
              Saya senang mempelajari teknologi baru,
              mengeksplorasi berbagai ide kreatif, dan terus
              mengembangkan kemampuan untuk menciptakan
              solusi digital yang inovatif.
            </p>

            <div className="about-location">
              <FaLocationDot />
              <span>INDONESIA</span>
            </div>

            <a href="#contact" className="about-contact-btn">
              LET'S CONNECT
              <FaArrowUpRightFromSquare />
            </a>

          </div>

        </div>

        {/* VALUES */}
        <div className="about-values">

          <div className="about-value-card value-blue">
            <div className="value-top">
              {/* <span>01</span>
              <FaLaptopCode /> */}
            </div>

            <h4>PASSION</h4>

            <p>
              Selalu antusias dalam dunia teknologi,
              programming, dan pengembangan website.
            </p>
          </div>

          <div className="about-value-card value-lime">
            <div className="value-top">
              {/* <span>02</span>
              <FaLightbulb /> */}
            </div>

            <h4>CREATIVITY</h4>

            <p>
              Senang mengeksplorasi ide baru dan
              menciptakan sesuatu yang berbeda.
            </p>
          </div>

          <div className="about-value-card value-orange">
            <div className="value-top">
              {/* <span>03</span>
              <FaRocket /> */}
            </div>

            <h4>GROWTH</h4>

            <p>
              Terus belajar, berkembang, dan menghadapi
              tantangan untuk menjadi lebih baik.
            </p>
          </div>

        </div>

        {/* BOTTOM QUOTE */}
        <div className="about-quote">
          <span className="quote-symbol">“</span>

          <p>
            GREAT THINGS ARE BUILT ONE LINE OF CODE AT A TIME.
          </p>

          {/* <span className="quote-star">✳</span> */}
        </div>

      </div>

    </section>
  );
}
