import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | Abid Hossain`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find(p => p.id === slug);
  if (!project) notFound();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', paddingTop: '90px', paddingBottom: '5rem' }}>
      {/* Background blobs */}
      <div style={{ position: 'fixed', top: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 1 }}>
        {/* Back button */}
        <Link id="back-to-projects" href="/#projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', marginBottom: '2rem', transition: 'color 0.2s' }}
          onMouseEnter={undefined}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          Back to Projects
        </Link>

        {/* Hero image */}
        <div style={{ position: 'relative', height: '360px', borderRadius: '20px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
          <Image src={project.image} alt={project.title} fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,20,0.85) 0%, rgba(13,13,20,0.2) 60%, transparent 100%)' }} />
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', right: '2rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
              {project.tags.map(tag => <span key={tag} className="tag" style={{ fontSize: '0.75rem' }}>{tag}</span>)}
            </div>
            <h1 style={{ fontFamily: 'var(--font-outfit)', fontSize: 'clamp(1.6rem,4vw,2.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{project.title}</h1>
          </div>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          <a id="project-live-link" href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            Live Demo
          </a>
          <a id="project-github-link" href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub (Client)
          </a>
        </div>

        {/* Content cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Description */}
          <div style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border-subtle)', borderRadius: '18px', padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--color-primary-light)' }}>📝</span> Project Overview
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.85, fontSize: '0.95rem' }}>{project.description}</p>
          </div>

          {/* Tech Stack */}
          <div style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border-subtle)', borderRadius: '18px', padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--color-primary-light)' }}>⚙️</span> Tech Stack
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {project.techStack.map(tech => (
                <span key={tech} className="tag" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>{tech}</span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border-subtle)', borderRadius: '18px', padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--color-primary-light)' }}>⚡</span> Challenges Faced
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {project.challenges.map((c, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary-light)', flexShrink: 0, marginTop: '1px' }}>{i + 1}</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Improvements */}
          <div style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border-subtle)', borderRadius: '18px', padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-outfit)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ color: 'var(--color-primary-light)' }}>🚀</span> Future Improvements
            </h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {project.improvements.map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary-light)', fontWeight: 700, fontSize: '1rem', flexShrink: 0, marginTop: '1px' }}>→</span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.7 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next project navigation */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-subtle)', marginBottom: '1rem' }}>Explore more projects</p>
          <Link id="all-projects-link" href="/#projects" className="btn btn-outline">← All Projects</Link>
        </div>
      </div>
    </div>
  );
}
