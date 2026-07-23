"use client";

import { useState } from "react";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    id: "email-info",
    icon: <LuMail />,
    label: "Email",
    value: "itzabid006@gmail.com",
    href: "mailto:itzabid006@gmail.com",
  },
  {
    id: "phone-info",
    icon: <LuPhone />,
    label: "Phone",
    value: "+880 1828-235430",
    href: "tel:+8801828235430",
  },
  {
    id: "whatsapp-info",
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    value: "+880 1828-235430",
    href: "https://wa.me/8801828235430",
  },
  {
    id: "location-info",
    icon: <LuMapPin />,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 85, damping: 15 },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 85, damping: 15 },
  },
};

export default function Contact() {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId =
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_SERVICE_ID) ||
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      "";
    const templateId =
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_TEMPLATE_ID) ||
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      "";
    const publicKey =
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_EMAILJS_PUBLIC_KEY) ||
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ||
      "";

    emailjs
      .send(serviceId, templateId, form, publicKey)
      .then(() => {
        setStatus("sent");
        setForm({
          from_name: "",
          from_email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Send Error:", err);
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <section
      id="contact"
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
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
            Get In Touch
          </span>
          <h2
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: "clamp(1.8rem,4vw,2.6rem)",
              fontWeight: 700,
              color: "var(--color-text)",
            }}
          >
            Contact{" "}
            <span
              style={{
                background: "var(--gradient-primary)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Me
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
            Have a project in mind? Let's talk and build something great together.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left Column: Info Cards */}
          <motion.div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div
              style={{
                background: "var(--gradient-card)",
                border: "1px solid var(--color-border-subtle)",
                borderRadius: "20px",
                padding: "2rem",
              }}
              variants={cardVariants}
            >
              <h3
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Let's Connect
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                I'm currently open to freelance projects and full-time opportunities.
                Whether you have a question or just want to say hi — my inbox is always open!
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {contactInfo.map((item) => (
                  <div
                    key={item.id}
                    id={item.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        background: "rgba(124,58,237,0.12)",
                        border: "1px solid rgba(124,58,237,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-primary-light)",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--color-text-subtle)",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{
                            fontSize: "0.92rem",
                            color: "var(--color-text)",
                            fontWeight: 500,
                            textDecoration: "none",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color =
                              "var(--color-primary-light)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--color-text)")
                          }
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p
                          style={{
                            fontSize: "0.92rem",
                            color: "var(--color-text)",
                            fontWeight: 500,
                          }}
                        >
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.2)",
                borderRadius: "16px",
                padding: "1.25rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
              variants={cardVariants}
            >
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: "#22c55e",
                  boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                  flexShrink: 0,
                  animation: "pulse 2s infinite",
                }}
              />
              <div>
                <p
                  style={{
                    fontWeight: 700,
                    color: "var(--color-text)",
                    fontSize: "0.92rem",
                  }}
                >
                  Available for Work
                </p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Open to freelance & full-time roles
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            style={{
              background: "var(--gradient-card)",
              border: "1px solid var(--color-border-subtle)",
              borderRadius: "20px",
              padding: "2rem",
            }}
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--color-text)",
                marginBottom: "1.5rem",
              }}
            >
              Send a Message
            </h3>
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div className="form-row">
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="from_name"
                    required
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  <label
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="from_email"
                    required
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                  }}
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    color: "var(--color-text-muted)",
                  }}
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <button
                id="contact-submit"
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  opacity: status === "sending" ? 0.7 : 1,
                }}
              >
                {status === "sending" ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Loader2 className="animate-spin" size={16} />
                    Sending...
                  </span>
                ) : status === "sent" ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CheckCircle2 size={16} />
                    Message Sent!
                  </span>
                ) : status === "error" ? (
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#f87171" }}>
                    <XCircle size={16} />
                    Failed to Send!
                  </span>
                ) : (
                  "Send Message →"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .contact-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:2rem;align-items:start}
          .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
          @media(max-width:900px){.contact-grid{grid-template-columns:1fr}}
          @media(max-width:480px){.form-row{grid-template-columns:1fr}}
        `
      }} />
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "10px",
  background: "rgba(255,255,255,0.04)",
  border: "1.5px solid rgba(255,255,255,0.08)",
  color: "var(--color-text)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};
