"use client";

import { useState } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6"; // FontAwesome 6 exact match version

const contactInfo = [
  {
    id: "email-info",
    icon: _jsx(LuMail, {}),
    label: "Email",
    value: "itzabid006@email.com",
    href: "mailto:itzabid006@gmail.com",
  },
  {
    id: "phone-info",
    icon: _jsx(LuPhone, {}),
    label: "Phone",
    value: "+880 1828-235430",
    href: "tel:+8801828235439",
  },
  {
    id: "whatsapp-info",
    icon: _jsx(FaWhatsapp, {}),
    label: "WhatsApp",
    value: "+880 1828-235430",
    href: "https://wa.me/8801828235430",
  },
  {
    id: "location-info",
    icon: _jsx(LuMapPin, {}),
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }, 1500);
  };

  return _jsxs("section", {
    id: "contact",
    style: {
      padding: "5rem 0",
      background: "var(--color-bg)",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      _jsx("div", {
        style: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "700px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }),
      _jsxs("div", {
        style: { maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" },
        children: [
          _jsxs("div", {
            style: { textAlign: "center", marginBottom: "3.5rem" },
            children: [
              _jsx("span", {
                style: {
                  display: "inline-block",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-primary-light)",
                  marginBottom: "0.75rem",
                },
                children: "Get In Touch",
              }),
              _jsxs("h2", {
                style: {
                  fontFamily: "var(--font-outfit)",
                  fontSize: "clamp(1.8rem,4vw,2.6rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                },
                children: [
                  "Contact ",
                  _jsx("span", {
                    style: {
                      background: "var(--gradient-primary)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    },
                    children: "Me",
                  }),
                ],
              }),
              _jsx("div", {
                style: {
                  width: 56,
                  height: 3,
                  background: "var(--gradient-primary)",
                  borderRadius: "999px",
                  margin: "1rem auto 0",
                },
              }),
              _jsx("p", {
                style: {
                  color: "var(--color-text-muted)",
                  marginTop: "0.75rem",
                  fontSize: "0.97rem",
                },
                children:
                  "Have a project in mind? Let's talk and build something great together.",
              }),
            ],
          }),
          _jsxs("div", {
            className: "contact-grid",
            children: [
              _jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                },
                children: [
                  _jsxs("div", {
                    style: {
                      background: "var(--gradient-card)",
                      border: "1px solid var(--color-border-subtle)",
                      borderRadius: "20px",
                      padding: "2rem",
                    },
                    children: [
                      _jsx("h3", {
                        style: {
                          fontFamily: "var(--font-outfit)",
                          fontSize: "1.2rem",
                          fontWeight: 700,
                          color: "var(--color-text)",
                          marginBottom: "0.5rem",
                        },
                        children: "Let's Connect",
                      }),
                      _jsx("p", {
                        style: {
                          color: "var(--color-text-muted)",
                          fontSize: "0.9rem",
                          lineHeight: 1.7,
                          marginBottom: "1.5rem",
                        },
                        children:
                          "I'm currently open to freelance projects and full-time opportunities. Whether you have a question or just want to say hi — my inbox is always open!",
                      }),
                      _jsx("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                        },
                        children: contactInfo.map((item) =>
                          _jsxs(
                            "div",
                            {
                              id: item.id,
                              style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                              },
                              children: [
                                _jsx("div", {
                                  style: {
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
                                  },
                                  children: item.icon,
                                }),
                                _jsxs("div", {
                                  children: [
                                    _jsx("p", {
                                      style: {
                                        fontSize: "0.75rem",
                                        fontWeight: 600,
                                        color: "var(--color-text-subtle)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.05em",
                                      },
                                      children: item.label,
                                    }),
                                    item.href
                                      ? _jsx("a", {
                                          href: item.href,
                                          style: {
                                            fontSize: "0.92rem",
                                            color: "var(--color-text)",
                                            fontWeight: 500,
                                            textDecoration: "none",
                                            transition: "color 0.2s",
                                          },
                                          onMouseEnter: (e) =>
                                            (e.currentTarget.style.color =
                                              "var(--color-primary-light)"),
                                          onMouseLeave: (e) =>
                                            (e.currentTarget.style.color =
                                              "var(--color-text)"),
                                          children: item.value,
                                        })
                                      : _jsx("p", {
                                          style: {
                                            fontSize: "0.92rem",
                                            color: "var(--color-text)",
                                            fontWeight: 500,
                                          },
                                          children: item.value,
                                        }),
                                  ],
                                }),
                              ],
                            },
                            item.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  _jsxs("div", {
                    style: {
                      background: "rgba(124,58,237,0.08)",
                      border: "1px solid rgba(124,58,237,0.2)",
                      borderRadius: "16px",
                      padding: "1.25rem 1.5rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    },
                    children: [
                      _jsx("div", {
                        style: {
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: "#22c55e",
                          boxShadow: "0 0 8px rgba(34,197,94,0.6)",
                          flexShrink: 0,
                          animation: "pulse 2s infinite",
                        },
                      }),
                      _jsxs("div", {
                        children: [
                          _jsx("p", {
                            style: {
                              fontWeight: 700,
                              color: "var(--color-text)",
                              fontSize: "0.92rem",
                            },
                            children: "Available for Work",
                          }),
                          _jsx("p", {
                            style: {
                              fontSize: "0.8rem",
                              color: "var(--color-text-muted)",
                            },
                            children: "Open to freelance & full-time roles",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              _jsxs("div", {
                style: {
                  background: "var(--gradient-card)",
                  border: "1px solid var(--color-border-subtle)",
                  borderRadius: "20px",
                  padding: "2rem",
                },
                children: [
                  _jsx("h3", {
                    style: {
                      fontFamily: "var(--font-outfit)",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--color-text)",
                      marginBottom: "1.5rem",
                    },
                    children: "Send a Message",
                  }),
                  _jsxs("form", {
                    id: "contact-form",
                    onSubmit: handleSubmit,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    },
                    children: [
                      _jsxs("div", {
                        className: "form-row",
                        children: [
                          _jsxs("div", {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.4rem",
                            },
                            children: [
                              _jsx("label", {
                                style: {
                                  fontSize: "0.82rem",
                                  fontWeight: 600,
                                  color: "var(--color-text-muted)",
                                },
                                children: "Your Name",
                              }),
                              _jsx("input", {
                                id: "contact-name",
                                type: "text",
                                name: "name",
                                required: true,
                                value: form.name,
                                onChange: handleChange,
                                placeholder: "John Doe",
                                style: inputStyle,
                                onFocus: (e) =>
                                  (e.target.style.borderColor =
                                    "var(--color-primary)"),
                                onBlur: (e) =>
                                  (e.target.style.borderColor =
                                    "rgba(255,255,255,0.08)"),
                              }),
                            ],
                          }),
                          _jsxs("div", {
                            style: {
                              display: "flex",
                              flexDirection: "column",
                              gap: "0.4rem",
                            },
                            children: [
                              _jsx("label", {
                                style: {
                                  fontSize: "0.82rem",
                                  fontWeight: 600,
                                  color: "var(--color-text-muted)",
                                },
                                children: "Email Address",
                              }),
                              _jsx("input", {
                                id: "contact-email",
                                type: "email",
                                name: "email",
                                required: true,
                                value: form.email,
                                onChange: handleChange,
                                placeholder: "john@example.com",
                                style: inputStyle,
                                onFocus: (e) =>
                                  (e.target.style.borderColor =
                                    "var(--color-primary)"),
                                onBlur: (e) =>
                                  (e.target.style.borderColor =
                                    "rgba(255,255,255,0.08)"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      _jsxs("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.4rem",
                        },
                        children: [
                          _jsx("label", {
                            style: {
                              fontSize: "0.82rem",
                              fontWeight: 600,
                              color: "var(--color-text-muted)",
                            },
                            children: "Subject",
                          }),
                          _jsx("input", {
                            id: "contact-subject",
                            type: "text",
                            name: "subject",
                            required: true,
                            value: form.subject,
                            onChange: handleChange,
                            placeholder: "Project Inquiry",
                            style: inputStyle,
                            onFocus: (e) =>
                              (e.target.style.borderColor =
                                "var(--color-primary)"),
                            onBlur: (e) =>
                              (e.target.style.borderColor =
                                "rgba(255,255,255,0.08)"),
                          }),
                        ],
                      }),
                      _jsxs("div", {
                        style: {
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.4rem",
                        },
                        children: [
                          _jsx("label", {
                            style: {
                              fontSize: "0.82rem",
                              fontWeight: 600,
                              color: "var(--color-text-muted)",
                            },
                            children: "Message",
                          }),
                          _jsx("textarea", {
                            id: "contact-message",
                            name: "message",
                            required: true,
                            rows: 5,
                            value: form.message,
                            onChange: handleChange,
                            placeholder: "Tell me about your project...",
                            style: {
                              ...inputStyle,
                              resize: "vertical",
                              minHeight: "120px",
                            },
                            onFocus: (e) =>
                              (e.target.style.borderColor =
                                "var(--color-primary)"),
                            onBlur: (e) =>
                              (e.target.style.borderColor =
                                "rgba(255,255,255,0.08)"),
                          }),
                        ],
                      }),
                      _jsx("button", {
                        id: "contact-submit",
                        type: "submit",
                        className: "btn btn-primary",
                        disabled: status === "sending",
                        style: {
                          width: "100%",
                          justifyContent: "center",
                          opacity: status === "sending" ? 0.7 : 1,
                        },
                        children:
                          status === "sending"
                            ? "⏳ Sending..."
                            : status === "sent"
                              ? "✅ Message Sent!"
                              : "Send Message →",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          _jsx("style", {
            children: `
              .contact-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:2rem;align-items:start}
              .form-row{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
              @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
              @media(max-width:900px){.contact-grid{grid-template-columns:1fr}}
              @media(max-width:480px){.form-row{grid-template-columns:1fr}}
            `,
          }),
        ],
      }),
    ],
  });
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
