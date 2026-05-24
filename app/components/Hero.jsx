"use client";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    id: "github-link",
    href: "https://github.com/Abid-Hossain-Sifat",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    id: "linkedin-link",
    href: "https://www.linkedin.com/in/abid-hossain-sifat",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
];

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Dynamic Background */}
      <div className="jsx-3486097126205c31 bg-pattern" />
      <div className="blob-container">
        <div className="mesh-blob mesh-1" />
        <div className="mesh-blob mesh-2" />
        <div className="mesh-blob mesh-3" />
      </div>

      <div className="container relative z-10">
        <div className="hero-grid">
          {/* Left: Text Content */}
          <div className="hero-text-content">
            <h1 className="hero-main-title">
              <span className="title-intro reveal-item" style={{ "--d": "1" }}>
                I&apos;m
              </span>
              <span className="title-name reveal-item" style={{ "--d": "2" }}>
                Abid <span className="text-gradient">Hossain Sifat</span>
              </span>
            </h1>

            <div className="role-container reveal-item" style={{ "--d": "3" }}>
              <h2 className="role-text">MERN Stack Web Developer</h2>
              <div className="role-line" />
            </div>

            <p className="hero-bio reveal-item" style={{ "--d": "4" }}>
              I specialize in MERN Stack development, building{" "}
              <span className="highlight">scalable web applications</span> with{" "}
              <span className="highlight">responsive</span>,{" "}
              <span className="highlight">pixel-perfect interfaces</span> and
              user-centric digital experiences.
            </p>

            <div
              className="tech-stack-preview reveal-item"
              style={{ "--d": "5" }}
            >
              <span className="stack-label">Core Expertise</span>
              <div className="stack-items">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <div key={tech} className="stack-badge">
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-cta-group reveal-item" style={{ "--d": "6" }}>
              <a href="https://drive.google.com/file/d/1dVSNrVG5tyJfzLSZYV9kjU0FEevxHVVv/view" download className="cta-button primary" target="_blank">
                <span>Download Resume</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
              <a href="#projects" className="cta-button secondary">
                <span>View Projects</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div
              className="hero-social-footer reveal-item"
              style={{ "--d": "7" }}
            >
              <span className="social-text">Find me on</span>
              <div className="social-icons">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Visual Element */}
          <div className="hero-visual-content">
            <div className="profile-wrapper reveal-item" style={{ "--d": "3" }}>
              <div className="glass-frame">
                <div className="image-holder">
                  <Image
                    src="/abid.png"
                    alt="Abid Hossain"
                    fill
                    className="profile-image"
                    priority
                  />
                </div>
              </div>

              {/* Decorative Floating Cards */}
              <div className="floating-info card-top">
                <div className="info-icon">🚀</div>
                <div className="info-text">
                  <span className="info-val">3+</span>
                  <span className="info-lbl">Live Projects</span>
                </div>
              </div>

              <div className="floating-info card-bottom">
                <div className="info-icon">🎓</div>
                <div className="info-text">
                  <span className="info-val">CSE</span>
                  <span className="info-lbl">Background</span>
                </div>
              </div>

              {/* Decorative Rings */}
              <div className="decor-ring ring-lg" />
              <div className="decor-ring ring-md" />
              <div className="decor-ring ring-sm" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="mouse-icon">
          <div className="mouse-wheel" />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0 60px;
          overflow: hidden;
          background: #0d0d14;
        }

        .bg-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle at 2px 2px,
            rgba(124, 58, 237, 0.08) 1px,
            transparent 0
          );
          background-size: 40px 40px;
          mask-image: radial-gradient(circle at center, black, transparent 80%);
        }

        .blob-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .mesh-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          animation: float-slow 20s infinite alternate;
        }

        .mesh-1 {
          top: -10%;
          right: -5%;
          width: 600px;
          height: 600px;
          background: var(--color-primary);
        }
        .mesh-2 {
          bottom: -10%;
          left: -5%;
          width: 500px;
          height: 500px;
          background: #a855f7;
          animation-delay: -5s;
        }
        .mesh-3 {
          top: 30%;
          left: 30%;
          width: 400px;
          height: 400px;
          background: #6366f1;
          opacity: 0.1;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        /* Typography */
        .hero-main-title {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }

        .title-intro {
          font-size: 1.5rem;
          color: var(--color-text-muted);
          font-weight: 500;
        }

        .title-name {
          font-size: clamp(3.5rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--color-text);
        }

        .text-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .role-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .role-text {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary-light);
        }

        .role-line {
          height: 2px;
          flex-grow: 1;
          background: linear-gradient(90deg, var(--color-primary), transparent);
          border-radius: 2px;
          max-width: 150px;
        }

        .hero-bio {
          font-size: 1.2rem;
          color: var(--color-text-muted);
          line-height: 1.8;
          max-width: 580px;
          margin-bottom: 2rem;
        }

        .highlight {
          color: var(--color-text);
          font-weight: 600;
        }

        /* Tech Stack */
        .tech-stack-preview {
          margin-bottom: 2.5rem;
        }

        .stack-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-text-subtle);
          text-transform: uppercase;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }

        .stack-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .stack-badge {
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-muted);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stack-badge:hover {
          background: rgba(124, 58, 237, 0.1);
          border-color: var(--color-primary);
          color: var(--color-primary-light);
          transform: translateY(-3px);
        }

        /* CTA Buttons */
        .hero-cta-group {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          border-radius: 16px;
          font-weight: 700;
          font-size: 1.05rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
        }

        .cta-button.primary {
          background: var(--color-primary);
          color: white;
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.4);
        }

        .cta-button.primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(124, 58, 237, 0.6);
        }

        .cta-button.secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        /* Social */
        .hero-social-footer {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .social-text {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--color-text-subtle);
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icon-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 14px;
          color: var(--color-text-muted);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-icon-link:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          transform: translateY(-6px) rotate(10deg);
        }

        /* Visual Right Side */
        .hero-visual-content {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-wrapper {
          position: relative;
          width: 420px;
          height: 420px;
        }

        .glass-frame {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 16px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.02)
          );
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 60px;
          backdrop-filter: blur(12px);
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
          z-index: 10;
          overflow: hidden;
        }

        .image-holder {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 44px;
          overflow: hidden;
          background: #1a1827;
        }

        .profile-image {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
          object-position: top;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .glass-frame:hover .profile-image {
          transform: scale(1.08) translateY(-10px);
        }

        /* Floating Info Cards */
        .floating-info {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 1.25rem;
          background: rgba(26, 24, 39, 0.9);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 20px;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          z-index: 20;
          animation: floating 6s ease-in-out infinite;
          white-space: nowrap;
        }

        .card-top {
          top: 15%;
          right: -80px;
          animation-delay: 0.5s;
        }
        .card-bottom {
          bottom: 15%;
          left: -80px;
          animation-delay: 1.5s;
        }

        .info-icon {
          font-size: 1.5rem;
        }
        .info-text {
          display: flex;
          flex-direction: column;
        }
        .info-val {
          font-size: 1.1rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }
        .info-lbl {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 600;
          margin-top: 2px;
        }

        /* Decor Rings */
        .decor-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px dashed rgba(124, 58, 237, 0.15);
          pointer-events: none;
          z-index: 5;
        }
        .ring-lg {
          width: 550px;
          height: 550px;
          animation: rotate 40s linear infinite;
        }
        .ring-md {
          width: 480px;
          height: 480px;
          animation: rotate 30s linear infinite reverse;
          opacity: 0.6;
        }
        .ring-sm {
          width: 400px;
          height: 400px;
          border-style: solid;
          border-width: 0.5px;
          opacity: 0.3;
        }

        /* Scroll Hint */
        .scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0.5;
        }

        .mouse-icon {
          width: 30px;
          height: 48px;
          border: 2px solid var(--color-text-subtle);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          padding-top: 10px;
        }

        .mouse-wheel {
          width: 4px;
          height: 10px;
          background: var(--color-primary-light);
          border-radius: 2px;
          animation: wheel-slide 2s ease-in-out infinite;
        }

        /* Animations */
        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          animation: reveal-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--d) * 0.15s);
        }

        @keyframes reveal-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-slow {
          from {
            transform: translate(0, 0) scale(1);
          }
          to {
            transform: translate(5%, 5%) scale(1.1);
          }
        }

        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rotate {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes wheel-slide {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .hero-grid {
            gap: 3rem;
          }
          .profile-wrapper {
            width: 360px;
            height: 360px;
          }
          .title-name {
            font-size: 4.5rem;
          }
        }

        @media (max-width: 992px) {
          .hero-section {
            padding-top: 120px;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 4rem;
          }
          .hero-text-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .role-container {
            justify-content: center;
            width: 100%;
          }
          .role-line {
            display: none;
          }
          .hero-bio {
            margin-left: auto;
            margin-right: auto;
          }
          .stack-items {
            justify-content: center;
          }
          .hero-cta-group {
            justify-content: center;
          }
          .hero-social-footer {
            justify-content: center;
            width: 100%;
          }
          .hero-visual-content {
            order: -1;
            margin-bottom: 2rem;
          }
          .profile-wrapper {
            width: 320px;
            height: 320px;
          }
          .card-top {
            right: -30px;
          }
          .card-bottom {
            left: -30px;
          }
          .decor-ring {
            display: none;
          }
          .scroll-hint {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .hero-section {
            padding-top: 100px;
            padding-bottom: 40px;
          }
          .title-name {
            font-size: 3.2rem;
          }
          .role-text {
            font-size: 1.3rem;
          }
          .hero-bio {
            font-size: 1.05rem;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            gap: 1rem;
          }
          .cta-button {
            justify-content: center;
            width: 100%;
          }
          .profile-wrapper {
            width: 260px;
            height: 260px;
          }
          .glass-frame {
            border-radius: 40px;
            padding: 12px;
          }
          .image-holder {
            border-radius: 28px;
          }
          .floating-info {
            padding: 0.65rem 0.9rem;
            border-radius: 16px;
            gap: 0.5rem;
          }
          .card-top {
            right: -18px;
            top: 12%;
          }
          .card-bottom {
            left: -18px;
            bottom: 12%;
          }
          .info-icon {
            font-size: 1.1rem;
          }
          .info-val {
            font-size: 0.95rem;
          }
          .info-lbl {
            font-size: 0.65rem;
          }
          .stack-badge {
            padding: 0.4rem 0.8rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 400px) {
          .title-name {
            font-size: 2.8rem;
          }
          .profile-wrapper {
            width: 220px;
            height: 220px;
          }
          .floating-info {
            padding: 0.6rem 0.8rem;
            border-radius: 14px;
            gap: 0.4rem;
          }
          .card-top {
            right: -12px;
            top: 10%;
          }
          .card-bottom {
            left: -12px;
            bottom: 10%;
          }
          .info-icon {
            font-size: 0.95rem;
          }
          .info-val {
            font-size: 0.85rem;
          }
          .info-lbl {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
}
