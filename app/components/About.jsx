export default function About() {
  const stats = [
    { value: '3+', label: 'Projects Completed', icon: '🚀' },
    { value: '1+', label: 'Years Experience', icon: '⏳' },
    { value: '10+', label: 'Modern Tools', icon: '🛠️' },
    { value: '100%', label: 'Commitment', icon: '💎' },
  ];

  const highlights = [
    {
      title: 'Programming Journey',
      content:
        'My journey into web development started with curiosity and a passion for technology. Beginning with HTML, CSS, and JavaScript, I gradually moved into modern frontend and backend development using React, Next.js, Node.js, Express.js, and MongoDB to build responsive and user-friendly web applications.',
    },
    {
      title: 'Crafting Solutions',
      content:
        'I enjoy combining design and development to build clean, responsive, and user-friendly web applications. From modern landing pages to full-stack MERN projects, I focus on performance, usability, and writing clean, maintainable code.',
    },
  ];

  return (
    <>
      <style>{`
        .about-section {
          position: relative;
          padding: 120px 0;
          background: #0d0d14;
          overflow: hidden;
        }

        .about-bg-blobs {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .about-blob {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.08;
        }

        .blob-purple { top: -10%; right: -5%; background: var(--color-primary); }
        .blob-blue { bottom: -10%; left: -5%; background: #6366f1; }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-subtitle {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--color-primary-light);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .section-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
        }

        .section-divider {
          width: 60px;
          height: 4px;
          background: var(--color-primary);
          border-radius: 2px;
          margin: 1.5rem auto 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 5rem;
          align-items: start;
        }

        .about-visual {
          position: relative;
        }

        .identity-card {
          position: relative;
          padding: 2.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          overflow: hidden;
          z-index: 10;
          transition: transform 0.4s ease;
        }

        .identity-card:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 58, 237, 0.3);
        }

        .card-glass-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.05), transparent);
          pointer-events: none;
        }

        .identity-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .avatar-placeholder {
          width: 70px;
          height: 70px;
          background: var(--gradient-primary);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(124, 58, 237, 0.3);
        }

        .avatar-icon {
          color: white;
          font-weight: 800;
          font-size: 1.5rem;
        }

        .name {
          font-size: 1.4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 0.2rem;
        }

        .role {
          font-size: 0.9rem;
          color: var(--color-primary-light);
          font-weight: 600;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          padding: 1.25rem;
          background: rgba(124, 58, 237, 0.05);
          border: 1px solid rgba(124, 58, 237, 0.1);
          border-radius: 20px;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(124, 58, 237, 0.08);
          border-color: var(--color-primary);
        }

        .stat-icon-mini {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--color-text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mini-tag {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          margin-right: 0.5rem;
        }

        .visual-decoration {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          background: var(--gradient-primary);
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          filter: blur(40px);
          opacity: 0.2;
          z-index: 5;
        }

        .story-stack {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .story-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .title-prefix {
          color: var(--color-primary);
          font-size: 1.1rem;
          font-family: monospace;
        }

        .story-text {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.8;
        }

        .about-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 3.5rem;
        }

        .professional-tag {
          padding: 0.6rem 1.2rem;
          background: rgba(124, 58, 237, 0.1);
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--color-primary-light);
          transition: all 0.3s ease;
        }

        .professional-tag:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-3px);
        }

        .about-cta {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          padding: 1.1rem 2.2rem;
          background: var(--gradient-primary);
          border-radius: 16px;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-cta:hover {
          transform: translateX(5px) translateY(-3px);
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.6);
        }

        .text-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #c084fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          animation-delay: calc(var(--d) * 0.15s);
        }

        @keyframes fadeInUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .about-grid { gap: 3rem; }
        }

        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; text-align: center; }
          .about-visual { max-width: 500px; margin: 0 auto 3rem; }
          .identity-header { justify-content: center; }
          .story-title { justify-content: center; }
          .about-tags { justify-content: center; }
        }

        @media (max-width: 768px) {
          .about-section { padding: 80px 0; }
          .section-title { font-size: 2.2rem; }
          .identity-card { padding: 1.5rem; border-radius: 24px; }
          .stats-grid { gap: 0.75rem; }
          .stat-card { padding: 1rem; }
          .stat-value { font-size: 1.3rem; }
          .story-stack { gap: 2rem; }
          .story-title { font-size: 1.25rem; }
          .story-text { font-size: 1rem; }
        }

        @media (max-width: 480px) {
          .identity-header { flex-direction: column; text-align: center; gap: 1rem; }
          .avatar-placeholder { width: 60px; height: 60px; }
          .stats-grid { grid-template-columns: 1fr; }
          .professional-tag { padding: 0.5rem 1rem; font-size: 0.85rem; }
        }
      `}</style>

      <section id="about" className="about-section">
        {/* Background Decor */}
        <div className="about-bg-blobs">
          <div className="about-blob blob-purple" />
          <div className="about-blob blob-blue" />
        </div>

        <div className="container relative z-10">
          {/* Section Header */}
          <div className="section-header reveal-item" style={{ '--d': 1 }}>
            <span className="section-subtitle">Discovery</span>
            <h2 className="section-title">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="section-divider" />
          </div>

          <div className="about-grid">
            {/* Left: Identity Card */}
            <div className="about-visual reveal-item" style={{ '--d': 2 }}>
              <div className="identity-card">
                <div className="card-glass-effect" />
                <div className="identity-header">
                  <div className="avatar-placeholder">
                    <span className="avatar-icon">AHS</span>
                  </div>
                  <div className="identity-titles">
                    <h3 className="name">Abid Hossain Sifat</h3>
                    <p className="role">MERN Stack Developer</p>
                  </div>
                </div>

                <div className="stats-grid">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="stat-card">
                      <span className="stat-icon-mini">{stat.icon}</span>
                      <span className="stat-value">{stat.value}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>

                <div className="identity-footer">
                  <div className="tag-cloud">
                    {['Next.js', 'Node.js', 'UI/UX', 'MongoDB'].map((tag) => (
                      <span key={tag} className="mini-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="visual-decoration" />
            </div>

            {/* Right: Story Content */}
            <div className="about-content">
              <div className="story-stack">
                {highlights.map((item, idx) => (
                  <div key={idx} className="story-item reveal-item" style={{ '--d': idx + 3 }}>
                    <h3 className="story-title">
                      <span className="title-prefix">0{idx + 1}.</span> {item.title}
                    </h3>
                    <p className="story-text">{item.content}</p>
                  </div>
                ))}
              </div>

              <div className="about-tags reveal-item" style={{ '--d': 6 }}>
                {[
                  'Problem Solving',
                  'Fast Learner',
                  'Detail-Oriented',
                  'Team Collaboration',
                  'Adaptability',
                ].map((tag) => (
                  <span key={tag} className="professional-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}