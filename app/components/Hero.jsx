"use client";
import Image from "next/image";
import { FaGithub as FaGithubIcon, FaLinkedin as FaLinkedinIcon } from "react-icons/fa";
import { Rocket, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const socialLinks = [
  {
    id: "github-link",
    href: "https://github.com/Abid-Hossain-Sifat",
    label: "GitHub",
    icon: <FaGithubIcon />,
  },
  {
    id: "linkedin-link",
    href: "https://www.linkedin.com/in/abid-hossain-sifat",
    label: "LinkedIn",
    icon: <FaLinkedinIcon />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const profileVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -3 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <section id="home" className={styles["hero-section"]}>
      {/* Dynamic Background */}
      <div className={styles["bg-pattern"]} />
      <div className={styles["blob-container"]}>
        <div className={`${styles["mesh-blob"]} ${styles["mesh-1"]}`} />
        <div className={`${styles["mesh-blob"]} ${styles["mesh-2"]}`} />
        <div className={`${styles["mesh-blob"]} ${styles["mesh-3"]}`} />
      </div>

      <div className="container relative z-10">
        <div className={styles["hero-grid"]}>
          {/* Left: Text Content */}
          <motion.div
            className={styles["hero-text-content"]}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 className={styles["hero-main-title"]} variants={itemVariants}>
              <span className={styles["title-intro"]}>
                I&apos;m
              </span>
              <span className={styles["title-name"]}>
                Abid <span className={styles["text-gradient"]}>Hossain Sifat</span>
              </span>
            </motion.h1>

            <motion.div className={styles["role-container"]} variants={itemVariants}>
              <h2 className={styles["role-text"]}>MERN Stack Web Developer</h2>
              <div className={styles["role-line"]} />
            </motion.div>

            <motion.p className={styles["hero-bio"]} variants={itemVariants}>
              I specialize in MERN Stack development, building{" "}
              <span className={styles.highlight}>scalable web applications</span> with{" "}
              <span className={styles.highlight}>responsive</span>,{" "}
              <span className={styles.highlight}>pixel-perfect interfaces</span> and
              user-centric digital experiences.
            </motion.p>

            <motion.div
              className={styles["tech-stack-preview"]}
              variants={itemVariants}
            >
              <span className={styles["stack-label"]}>Core Expertise</span>
              <div className={styles["stack-items"]}>
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                ].map((tech) => (
                  <div key={tech} className={styles["stack-badge"]}>
                    {tech}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className={styles["hero-cta-group"]} variants={itemVariants}>
              <a href="https://drive.google.com/file/d/17VU70d-AE48F1bPcgLS5niSRJzfSiW3r/view?usp=sharing" download className={`${styles["cta-button"]} ${styles.primary}`} target="_blank">
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
              <a href="#projects" className={`${styles["cta-button"]} ${styles.secondary}`}>
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
            </motion.div>

            <motion.div
              className={styles["hero-social-footer"]}
              variants={itemVariants}
            >
              <span className={styles["social-text"]}>Find me on</span>
              <div className={styles["social-icons"]}>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles["social-icon-link"]}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <div className={styles["hero-visual-content"]}>
            <motion.div
              className={styles["profile-wrapper"]}
              variants={profileVariants}
              initial="hidden"
              animate="visible"
            >
              <div className={styles["glass-frame"]}>
                <div className={styles["image-holder"]}>
                  <Image
                    src="/abid.png"
                    alt="Abid Hossain"
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 420px"
                    className={styles["profile-image"]}
                    priority
                  />
                </div>
              </div>

              {/* Decorative Floating Cards */}
              <motion.div
                className={`${styles["floating-info"]} ${styles["card-top"]}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -12, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  },
                  default: { delay: 0.6, type: "spring", stiffness: 80, damping: 15 },
                }}
              >
                <div className={styles["info-icon"]}><Rocket size={22} style={{ color: "var(--color-primary-light)" }} /></div>
                <div className={styles["info-text"]}>
                  <span className={styles["info-val"]}>3+</span>
                  <span className={styles["info-lbl"]}>Live Projects</span>
                </div>
              </motion.div>

              <motion.div
                className={`${styles["floating-info"]} ${styles["card-bottom"]}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, 10, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  },
                  default: { delay: 0.8, type: "spring", stiffness: 80, damping: 15 },
                }}
              >
                <div className={styles["info-icon"]}><GraduationCap size={22} style={{ color: "#a855f7" }} /></div>
                <div className={styles["info-text"]}>
                  <span className={styles["info-val"]}>CSE</span>
                  <span className={styles["info-lbl"]}>Background</span>
                </div>
              </motion.div>

              {/* Decorative Rings */}
              <div className={`${styles["decor-ring"]} ${styles["ring-lg"]}`} />
              <div className={`${styles["decor-ring"]} ${styles["ring-md"]}`} />
              <div className={`${styles["decor-ring"]} ${styles["ring-sm"]}`} />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className={styles["scroll-hint"]}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className={styles["mouse-icon"]}>
          <div className={styles["mouse-wheel"]} />
        </div>
      </motion.div>
    </section>
  );
}
