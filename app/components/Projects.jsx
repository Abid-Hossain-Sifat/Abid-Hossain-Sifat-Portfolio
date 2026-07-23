"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

const INITIAL_COUNT = 3;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 85, damping: 15 },
  },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section
      id="projects"
      style={{
        padding: "5rem 0",
        background: "var(--color-bg)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20%",
          right: 0,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Header */}
        <motion.div
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-primary-light)",
              marginBottom: "0.75rem",
            }}
          >
            What I&apos;ve Built
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem,4vw,2.6rem)",
              fontWeight: 700,
              color: "var(--color-text)",
            }}
          >
            Featured{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Projects
            </span>
          </h2>
          <div
            style={{
              width: 56,
              height: 3,
              background: "var(--gradient-primary)",
              borderRadius: "999px",
              margin: "1rem auto 0",
            }}
          />
          <p
            style={{
              color: "var(--color-text-muted)",
              marginTop: "0.75rem",
              fontSize: "0.97rem",
            }}
          >
            A selection of projects I&apos;ve built with passion and precision
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                className="project-card"
                variants={cardVariants}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                }}
              >
                {/* Project Image */}
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "0",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="project-image"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(13,13,20,0.8) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Card Body */}
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.9rem",
                    flex: 1,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {project.shortDesc}
                  </p>
                  {/* Tags */}
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag"
                        style={{ fontSize: "0.73rem" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Actions */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      paddingTop: "0.25rem",
                    }}
                  >
                    <Link
                      id={`project-details-${project.id}`}
                      href={`/projects/${project.id}`}
                      className="btn btn-primary"
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        padding: "0.6rem 1rem",
                        fontSize: "0.85rem",
                      }}
                    >
                      View Details →
                    </Link>
                    <a
                      id={`project-live-${project.id}`}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost"
                      style={{ padding: "0.6rem 0.9rem", fontSize: "0.85rem" }}
                      aria-label="Live Demo"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More / View Less & CTA - Flex Container */}
        <motion.div
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "3rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {hasMore && (
            <button
              id="projects-view-more-btn"
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="btn btn-outline"
              style={{
                fontSize: "0.95rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                cursor: "pointer",
              }}
            >
              {showAll
                ? "View Less ↑"
                : `View More (${projects.length - INITIAL_COUNT}) ↓`}
            </button>
          )}
          <Link
            id="github-profile-btn"
            href="https://github.com/Abid-Hossain-Sifat"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <FaGithub />
            View All on GitHub
          </Link>
        </motion.div>
      </div>

      {/* Styled JSX/CSS Injector for production stability */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .project-card {
          background: var(--gradient-card);
          border: 1px solid var(--color-border-subtle);
          box-shadow: none;
        }
        .project-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-5px);
          box-shadow: var(--shadow-card);
        }
        .image-container {
          overflow: hidden;
        }
        .project-image {
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .project-card:hover .project-image {
          transform: scale(1.12) !important;
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `,
        }}
      />
    </section>
  );
}
