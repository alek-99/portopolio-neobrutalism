
"use client";

import {
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFacebook,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import "@/app/hero.css";

export default function HeroSection() {
  return (
    <section className="hero-portfolio">

      <div className="hero-main">

        {/* NAVBAR */}
        <nav className="hero-nav">
          <a href="#" className="hero-brand">
            <span className="brand-icon">J.</span>
            YUDI<span className="brand-dot">.</span>
          </a>

          <div className="hero-nav-status">
            <span className="online-dot" />
            CREATIVE DEVELOPER
          </div>

          <a href="#contact" className="hero-nav-button">
            LET'S TALK <FaArrowRight />
          </a>
        </nav>

        {/* HERO CONTENT */}
        <div className="hero-layout">

          {/* LEFT CONTENT */}
          <div className="hero-text">

            <div className="hero-welcome">
              {/* <FaCode /> */}
              <span>WELCOME TO MY PORTFOLIO</span>
            </div>

            <p className="hero-greeting">
              HEY THERE! I'M YUDI
            </p>

            <h1 className="hero-heading">
              BUILDING
              <span className="heading-outline">DIGITAL</span>
              <span className="heading-blue">EXPERIENCES.</span>
            </h1>

            <p className="hero-description">
              Seorang Web Developer yang passionate dalam
              menciptakan website modern, interaktif, dan
              inovatif. Menggabungkan kreativitas dengan
              teknologi untuk membangun sesuatu yang bermakna.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="hero-btn-primary">
                EXPLORE MY WORK
                <FaArrowRight />
              </a>

              <a href="#contact" className="hero-btn-outline">
                CONTACT ME
              </a>
            </div>

            <div className="hero-bottom-info">
              <div className="hero-info-item">
                <FaLaptopCode />
                <span>WEB DEVELOPMENT</span>
              </div>

              <div className="hero-info-item">
                <FaCode />
                <span>CREATIVE CODING</span>
              </div>
            </div>

          </div>

          {/* RIGHT PROFILE */}
          <div className="hero-visual">

            <div className="hero-star hero-star-one">✰</div>
            <div className="hero-star hero-star-two">✦</div>
            <div className="hero-plus">+</div>

            <div className="hero-image-card">

              <div className="image-card-top">
                <span>PERSONAL PORTFOLIO</span>
                <span>2026 ©</span>
              </div>

              <div className="hero-image-container">
                <img
                  src="/images/profile.png"
                  alt="Jordi - Creative Web Developer"
                  className="hero-profile-image"
                />
              </div>

              <div className="image-card-bottom">
                <div>
                  <span>CREATIVE DEVELOPER</span>
                  <h2>YUDI.</h2>
                </div>

                <div className="image-card-arrow">
                  <FaArrowRight />
                </div>
              </div>

            </div>

            <div className="hero-floating-label">
              <span>✦</span> TURNING IDEAS INTO REALITY
            </div>

            <div className="hero-side-label">
              EST. 2026
            </div>

          </div>

        </div>

        {/* RUNNING TEXT */}
        <div className="hero-running">
          <div className="hero-running-track">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="hero-running-content" key={i}>
                <span>DESIGN</span>
                <span>✰</span>
                <span>DEVELOPMENT</span>
                <span>✰</span>
                <span>INNOVATION</span>
                <span>✰</span>
                <span>CREATIVITY</span>
                <span>✰</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
