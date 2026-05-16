'use client';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML5 / CSS3', level: 92 },
      { name: 'JavaScript (ES6+)', level: 85 },
      { name: 'React.js', level: 82 },
      { name: 'Next.js', level: 75 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 72 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 68 },
      { name: 'REST APIs', level: 78 },
      { name: 'Firebase', level: 65 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 95 },
      { name: 'Figma', level: 60 },
      { name: 'Vercel / Netlify', level: 80 },
      { name: 'Linux / CLI', level: 65 },
    ],
  },
];

const techIcons = ['HTML', 'CSS', 'JS', 'React', 'Next.js', 'Node', 'MongoDB', 'Git', 'Tailwind', 'Firebase', 'Figma', 'Vercel'];

function SkillBar({ name, level, visible }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text)' }}>{name}</span>
        <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary-light)' }}>{level}%</span>
      </div>
      <div style={{ height: '7px', borderRadius: '999px', background: 'rgba(124,58,237,0.12)', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          borderRadius: '999px',
          background: 'var(--gradient-primary)',
          width: visible ? `${level}%` : '0%',
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 0 10px rgba(124,58,237,0.4)',
        }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    const obs = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) setVisible(true); 
    }, { threshold: 0.2 });
    
    if (currentRef) obs.observe(currentRef);
    return () => {
      if (currentRef) obs.unobserve(currentRef);
      obs.disconnect();
    };
  }, []);

  return (
    <section id="skills" style={{ padding: '5rem 0', background: 'var(--color-bg)', position: 'relative', overflow: 'hidden' }} ref={ref}>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary-light)', marginBottom: '0.75rem' }}>What I Know</span>
          <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, color: 'var(--color-text)' }}>
            My <span style={{ background: 'var(--gradient-primary)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Skills</span>
          </h2>
          <div style={{ width: 56, height: 3, background: 'var(--gradient-primary)', borderRadius: '999px', margin: '1rem auto 0' }} />
          <p style={{ color: 'var(--color-text-muted)', marginTop: '0.75rem', fontSize: '0.97rem' }}>Technologies and tools I use to bring ideas to life</p>
        </div>

        {/* Skill categories */}
        <div className="skills-grid">
          {skillCategories.map(cat => (
            <div key={cat.title} className="skill-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem' }}>{cat.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-text)' }}>{cat.title}</h3>
              </div>
              {cat.skills.map(s => <SkillBar key={s.name} name={s.name} level={s.level} visible={visible} />)}
            </div>
          ))}
        </div>

        {/* Tech icon cloud */}
        <div style={{ marginTop: '3.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-subtle)', marginBottom: '1.25rem' }}>Also familiar with</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.6rem' }}>
            {techIcons.map(t => (
              <span key={t} className="tag" style={{ fontSize: '0.82rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Standard React Internal CSS Injector */}
      <style dangerouslySetInnerHTML={{ __html: `
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .skill-card {
          background: var(--gradient-card);
          border: 1px solid var(--color-border-subtle);
          border-radius: 20px;
          padding: 2rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .skill-card:hover {
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </section>
  );
}