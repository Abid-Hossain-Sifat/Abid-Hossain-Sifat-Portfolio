"use client";

const education = [
  {
    id: "Diploma",
    degree: "Diploma Engineering in Computer Science & Technology",
    institution: "National Polytechnic Institute, Dhaka",
    period: "2022 — Present",
    icon: "🎓",
    description:
      "Diploma in Computer Science & Technology, building a strong foundation in core computer science subjects including Data Structures, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, and Web Development. Actively participating in programming practice and problem-solving activities.",
    highlights: ["NPI Programming Club Member"],
  },
];

const experience = [
  {
    id: "exp1",
    role: "MERN Stack Development (Learning & Practice)",
    company: "Self-Learning",
    period: "2025 — Present",
    type: "Learning",
    icon: "📚",
    description:
      "Actively learning full-stack development using the MERN stack by building practice projects. Focused on developing REST APIs, responsive web applications, and improving frontend-backend integration skills.",
    achievements: [
      "Built multiple practice web applications",
      "Developed REST API projects using Node.js & Express",
      "Improved React.js UI development skills",
    ],
  },
  {
    id: "exp2",
    role: "Personal Projects Developer",
    company: "Self Projects",
    period: "2025 — Present",
    type: "Projects",
    icon: "💻",
    description:
      "Building real-world inspired projects to strengthen full-stack development skills and improve problem-solving ability.",
    achievements: [
      "Created responsive frontend projects using React",
      "Practiced MongoDB data modeling",
      "Improving clean code and project structure",
    ],
  },
];

export default function EducationExperience() {
  return (
    <section
      id="education"
      style={{
        padding: "5rem 0",
        background: "var(--color-bg-secondary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: 0,
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}
      >
        {/* Education Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            Academic Background
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem,4vw,2.6rem)",
              fontWeight: 700,
              color: "var(--color-text)",
            }}
          >
            Education{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              & Experience
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
        </div>

        {/* Timeline (Education) */}
        <div style={{ display: "grid", gap: "1.5rem" }}>
          {education.map((edu) => (
            <div
              key={edu.id}
              className="edu-experience-card"
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "16px",
                padding: "1.75rem",
                display: "flex",
                gap: "1.25rem",
                alignItems: "flex-start",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Left accent */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: "4px",
                  background: "var(--gradient-primary)",
                  borderRadius: "4px 0 0 4px",
                }}
              />
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "14px",
                  background: "rgba(124,58,237,0.12)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                }}
              >
                {edu.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    marginBottom: "0.3rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-outfit)",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--color-primary-light)",
                      background: "rgba(124,58,237,0.1)",
                      padding: "0.2rem 0.7rem",
                      borderRadius: "999px",
                    }}
                  >
                    {edu.period}
                  </span>
                </div>
                <p
                  style={{
                    color: "var(--color-primary-light)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {edu.institution}
                </p>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    marginBottom: "0.75rem",
                  }}
                >
                  {edu.description}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                >
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="tag"
                      style={{ fontSize: "0.75rem" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div style={{ marginTop: "3.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
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
              Work Experience
            </span>
            <h3
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "clamp(1.4rem,3vw,2rem)",
                fontWeight: 700,
                color: "var(--color-text)",
              }}
            >
              Professional{" "}
              <span
                style={{
                  background: "var(--gradient-primary)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Experience
              </span>
            </h3>
          </div>
          <div style={{ display: "grid", gap: "1.25rem" }}>
            {experience.map((exp) => (
              <div
                key={exp.id}
                className="edu-experience-card"
                style={{
                  background: "var(--gradient-card)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  display: "flex",
                  gap: "1.25rem",
                  alignItems: "flex-start",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: "linear-gradient(to bottom, #a855f7, #7c3aed)",
                    borderRadius: "4px 0 0 4px",
                  }}
                />
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "14px",
                    background: "rgba(124,58,237,0.12)",
                    border: "1px solid rgba(124,58,237,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {exp.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      gap: "0.5rem",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                      }}
                    >
                      <span className="tag" style={{ fontSize: "0.72rem" }}>
                        {exp.type}
                      </span>
                      <span
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          color: "var(--color-primary-light)",
                          background: "rgba(124,58,237,0.1)",
                          padding: "0.2rem 0.7rem",
                          borderRadius: "999px",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "var(--color-primary-light)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {exp.company}
                  </p>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {exp.description}
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}
                  >
                    {exp.achievements.map((a) => (
                      <span
                        key={a}
                        className="tag"
                        style={{ fontSize: "0.75rem" }}
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styled JSX/CSS Injector for smooth hover transitions */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .edu-experience-card {
          box-shadow: none;
        }
        .edu-experience-card:hover {
          border-color: rgba(124, 58, 237, 0.3) !important;
          transform: translateX(6px) !important;
          box-shadow: var(--shadow-card) !important;
        }
      `,
        }}
      />
    </section>
  );
}
