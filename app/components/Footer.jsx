"use client";

import { usePathname, useRouter } from "next/navigation";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    id: "footer-github",
    href: "https://github.com/Abid-Hossain-Sifat",
    label: "GitHub",
    icon: _jsx(FaGithub, {}),
  },
  {
    id: "footer-linkedin",
    href: "https://www.linkedin.com/in/abid-hossain-sifat",
    label: "LinkedIn",
    icon: _jsx(FaLinkedin, {}),
  },
  {
    id: "footer-facebook",
    href: "https://www.facebook.com/share/1CtrKEdbRi",
    label: "Facebook",
    icon: _jsx(FaFacebook, {}),
  },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = (href) => {
    if (pathname === "/") {
      const el = document.getElementById(href.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  };

  return _jsxs("footer", {
    style: {
      background: "var(--color-bg-secondary)",
      borderTop: "1px solid rgba(124,58,237,0.12)",
      padding: "3rem 0 1.5rem",
      position: "relative",
      overflow: "hidden",
    },
    children: [
      _jsx("div", {
        style: {
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "400px",
          height: "1px",
          background: "var(--gradient-primary)",
          opacity: 0.5,
        },
      }),
      _jsxs("div", {
        style: { maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" },
        children: [
          _jsxs("div", {
            className: "footer-grid",
            children: [
              /* Brand Block */
              _jsxs("div", {
                children: [
                  _jsxs("div", {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "1rem",
                    },
                    children: [
                      _jsx("span", {
                        style: {
                          width: 38,
                          height: 38,
                          borderRadius: 10,
                          background: "var(--gradient-primary)",
                          display: "flex",
                          alignItems: "center",
                          justifycontent: "center",
                          fontWeight: 800,
                          fontSize: "0.88rem",
                          color: "#fff",
                          boxShadow: "0 4px 12px rgba(124,58,237,0.4)",
                        },
                        children: "AHS",
                      }),
                      _jsxs("span", {
                        style: {
                          fontFamily: "var(--font-outfit)",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          color: "var(--color-text)",
                        },
                        children: [
                          "Abid ",
                          _jsx("span", {
                            style: { color: "var(--color-primary-light)" },
                            children: "Hossain Sifat",
                          }),
                        ],
                      }),
                    ],
                  }),
                  _jsx("p", {
                    style: {
                      color: "var(--color-text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      maxWidth: "260px",
                      marginBottom: "1.25rem",
                    },
                    children:
                      "MERN Stack Developer crafting clean, modern, and user-centric web applications.",
                  }),
                  _jsx("div", {
                    style: { display: "flex", gap: "0.6rem" },
                    children: socials.map((s) =>
                      _jsx(
                        "a",
                        {
                          href: s.href,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          "aria-label": s.label,
                          className: "social-btn",
                          children: s.icon,
                        },
                        s.id,
                      ),
                    ),
                  }),
                ],
              }),

              /* Quick Links Block */
              _jsxs("div", {
                children: [
                  _jsx("h4", {
                    style: {
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--color-text)",
                      marginBottom: "1rem",
                      letterSpacing: "-0.01em",
                    },
                    children: "Quick Links",
                  }),
                  _jsx("ul", {
                    style: {
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    },
                    children: footerLinks.map((link) =>
                      _jsx(
                        "li",
                        {
                          children: _jsxs("a", {
                            href: link.href,
                            onClick: (e) => {
                              e.preventDefault();
                              scrollTo(link.href);
                            },
                            style: {
                              fontSize: "0.88rem",
                              color: "var(--color-text-muted)",
                              textDecoration: "none",
                              transition: "color 0.2s",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.4rem",
                            },
                            onMouseEnter: (e) =>
                              (e.currentTarget.style.color =
                                "var(--color-primary-light)"),
                            onMouseLeave: (e) =>
                              (e.currentTarget.style.color =
                                "var(--color-text-muted)"),
                            children: [
                              _jsx("span", {
                                style: {
                                  color: "var(--color-primary)",
                                  fontSize: "0.7rem",
                                },
                                children: "›",
                              }),
                              " ",
                              link.label,
                            ],
                          }),
                        },
                        link.href,
                      ),
                    ),
                  }),
                ],
              }),

              /* Contact Block */
              _jsxs("div", {
                children: [
                  _jsx("h4", {
                    style: {
                      fontFamily: "var(--font-outfit)",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      color: "var(--color-text)",
                      marginBottom: "1rem",
                    },
                    children: "Contact",
                  }),
                  _jsx("div", {
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.6rem",
                    },
                    children: [
                      {
                        icon: _jsx(LuMail, {}),
                        text: "itzabid006@gmail.com",
                        href: "mailto:itzabid006@gmail.com",
                      },
                      {
                        icon: _jsx(LuPhone, {}),
                        text: "+880 1828-235430",
                        href: "tel:+8801828235430",
                      },
                      {
                        icon: _jsx(LuMapPin, {}),
                        text: "Dhaka, Bangladesh",
                        href: null,
                      },
                    ].map((item) =>
                      _jsxs(
                        "div",
                        {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "0.6rem",
                          },
                          children: [
                            _jsx("span", {
                              style: { fontSize: "0.85rem" },
                              children: item.icon,
                            }),
                            item.href
                              ? _jsx("a", {
                                  href: item.href,
                                  style: {
                                    fontSize: "0.85rem",
                                    color: "var(--color-text-muted)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                  },
                                  onMouseEnter: (e) =>
                                    (e.currentTarget.style.color =
                                      "var(--color-primary-light)"),
                                  onMouseLeave: (e) =>
                                    (e.currentTarget.style.color =
                                      "var(--color-text-muted)"),
                                  children: item.text,
                                })
                              : _jsx("span", {
                                  style: {
                                    fontSize: "0.85rem",
                                    color: "var(--color-text-muted)",
                                  },
                                  children: item.text,
                                }),
                          ],
                        },
                        item.text,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),

          /* Bottom Bar */
          _jsx("div", {
            style: {
              marginTop: "2.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--color-border-subtle)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "0.75rem",
            },
            children: _jsxs("p", {
              style: { fontSize: "0.82rem", color: "var(--color-text-subtle)" },
              children: [
                "© ",
                new Date().getFullYear(),
                " ",
                _jsx("span", {
                  style: { color: "var(--color-primary-light)" },
                  children: "Abid Hossain Sifat",
                }),
                ". All rights reserved.",
              ],
            }),
          }),

          /* Styles injected */
          _jsx("style", {
            children: `
              .footer-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:2rem}
              @media(max-width:768px){.footer-grid{grid-template-columns:1fr 1fr}}
              @media(max-width:480px){.footer-grid{grid-template-columns:1fr}}
            `,
          }),
        ],
      }),
    ],
  });
}
