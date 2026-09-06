import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { project as fetchProjects } from '@/lib/data';
import { FaGithub } from 'react-icons/fa';
import {
  FileText,
  Settings,
  Zap,
  Rocket,
  ArrowLeft,
  ExternalLink,
  Layers,
  Sparkles,
  Globe,
} from 'lucide-react';

export const dynamicParams = true;

async function getProjectBySlug(slug) {
  if (!slug) return null;

  try {
    const apiProjects = await fetchProjects();
    const foundApi = (apiProjects || []).find(
      (p) =>
        (p.id && String(p.id).toLowerCase() === slug.toLowerCase()) ||
        (p._id && String(p._id).toLowerCase() === slug.toLowerCase()) ||
        (p.title && p.title.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase())
    );

    if (foundApi) {
      const challengesList = Array.isArray(foundApi.challenges)
        ? foundApi.challenges
        : typeof foundApi.challenges === 'string' && foundApi.challenges.trim()
        ? [foundApi.challenges]
        : [];

      const improvementsList = Array.isArray(foundApi.improvements)
        ? foundApi.improvements
        : Array.isArray(foundApi.features)
        ? foundApi.features
        : [];

      return {
        ...foundApi,
        id: foundApi.id || foundApi._id,
        title: foundApi.title,
        description:
          foundApi.description || foundApi.desc || foundApi.shortDesc || '',
        image:
          (Array.isArray(foundApi.images) && foundApi.images.length > 0
            ? foundApi.images[0]
            : foundApi.image) || '/ArtHub.png',
        liveLink: foundApi.liveLink || foundApi.liveUrl || '#',
        githubLink: foundApi.githubLink || foundApi.githubUrl || '#',
        techStack: foundApi.techStack || foundApi.tags || foundApi.tech || [],
        challenges: challengesList,
        improvements: improvementsList,
        category: foundApi.category || 'Full Stack Project',
      };
    }
  } catch (err) {
    console.error('Error fetching project detail for slug:', slug, err);
  }

  return null;
}


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found | Abid Hossain' };
  return {
    title: `${project.title} — Project Details | Abid Hossain`,
    description: project.description || project.shortDesc,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'var(--color-bg)',
        paddingTop: '110px',
        paddingBottom: '6rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decor matching About and Hero components */}
      <div
        style={{
          position: 'fixed',
          top: '10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.09) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '5%',
          left: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Main 1200px Container aligned with Navbar, Projects, About */}
      <div
        className="container relative z-10"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
        }}
      >
        {/* Navigation & Breadcrumb Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <Link
            id="back-to-projects"
            href="/#projects"
            className="btn btn-ghost"
            style={{
              padding: '0.6rem 1.2rem',
              fontSize: '0.88rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '999px',
            }}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
                background: 'rgba(124,58,237,0.12)',
                color: 'var(--color-primary-light)',
                border: '1px solid rgba(124,58,237,0.25)',
              }}
            >
              <Sparkles size={12} />
              {project.category || 'Featured Project'}
            </span>
          </div>
        </div>

        {/* Page Header Area */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-light)',
              marginBottom: '0.5rem',
            }}
          >
            Case Study & Architecture
          </span>
          <h1
            style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 800,
              color: 'var(--color-text)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}
          >
            {project.title}{' '}
            <span
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Details
            </span>
          </h1>
          <p
            style={{
              color: 'var(--color-text-muted)',
              fontSize: '1.05rem',
              maxWidth: '800px',
              lineHeight: 1.7,
            }}
          >
            {project.shortDesc || project.subtitle || project.description}
          </p>
        </div>

        {/* Responsive 2-Column Grid Layout matching Portfolio standard */}
        <div className="detail-layout-grid">
          {/* LEFT COLUMN: Main Showcase & Story (Width ~65%) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Project Hero Image */}
            <div
              className="detail-hero-frame"
              style={{
                position: 'relative',
                height: '420px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid var(--color-border-subtle)',
                boxShadow: 'var(--shadow-lg)',
                background: '#12111c',
              }}
            >
              <Image
                src={project.image || '/ArtHub.png'}
                alt={project.title}
                fill
                unoptimized={
                  typeof project.image === 'string' &&
                  project.image.startsWith('http')
                }
                sizes="(max-width: 1024px) 100vw, 800px"
                style={{ objectFit: 'cover', objectPosition: 'top' }}
                priority
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(13,13,20,0.85) 0%, rgba(13,13,20,0.2) 50%, transparent 100%)',
                }}
              />
            </div>

            {/* Overview Card */}
            <div className="detail-card">
              <h2 className="detail-card-title">
                <FileText size={20} style={{ color: 'var(--color-primary-light)' }} />
                Project Overview
              </h2>
              <p className="detail-card-text">
                {project.description || project.desc || project.shortDesc}
              </p>
            </div>

            {/* Challenges Card (if any) */}
            {Array.isArray(project.challenges) && project.challenges.length > 0 && (
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <Zap size={20} style={{ color: 'var(--color-primary-light)' }} />
                  Challenges Faced & Solutions
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {project.challenges.map((c, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '0.85rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          background: 'rgba(124,58,237,0.15)',
                          border: '1px solid rgba(124,58,237,0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--color-primary-light)',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        {i + 1}
                      </span>
                      <span className="detail-card-text" style={{ flex: 1 }}>
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Improvements or Features (if any) */}
            {Array.isArray(project.improvements) && project.improvements.length > 0 && (
              <div className="detail-card">
                <h2 className="detail-card-title">
                  <Rocket size={20} style={{ color: 'var(--color-primary-light)' }} />
                  Key Features & Future Improvements
                </h2>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
                  }}
                >
                  {project.improvements.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: '0.8rem',
                        alignItems: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--color-primary-light)',
                          fontWeight: 700,
                          fontSize: '1rem',
                          flexShrink: 0,
                          marginTop: '1px',
                        }}
                      >
                        →
                      </span>
                      <span className="detail-card-text" style={{ flex: 1 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Action Buttons & Meta Sidebar (Width ~35%) */}
          <div className="detail-sidebar">
            {/* Quick Actions Card */}
            <div className="detail-card">
              <h3
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Globe size={18} style={{ color: 'var(--color-primary-light)' }} />
                Quick Launch
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  id="project-live-link"
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.85rem 1.5rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <ExternalLink size={16} />
                  Visit Live Demo
                </a>
                <a
                  id="project-github-link"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.85rem 1.5rem',
                    fontSize: '0.95rem',
                  }}
                >
                  <FaGithub size={16} />
                  GitHub Repository
                </a>
              </div>
            </div>

            {/* Tech Stack Card */}
            {Array.isArray(project.techStack) && project.techStack.length > 0 && (
              <div className="detail-card">
                <h3
                  style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginBottom: '1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Settings size={18} style={{ color: 'var(--color-primary-light)' }} />
                  Tech Stack
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="tag"
                      style={{
                        padding: '0.45rem 0.95rem',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        borderRadius: '10px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Project Specifications Card */}
            <div className="detail-card">
              <h3
                style={{
                  fontFamily: 'var(--font-outfit)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <Layers size={18} style={{ color: 'var(--color-primary-light)' }} />
                Project Specs
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    Type
                  </span>
                  <span
                    style={{
                      color: 'var(--color-text)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                    }}
                  >
                    {project.category || 'Full Stack'}
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    Stack
                  </span>
                  <span
                    style={{
                      color: 'var(--color-text)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                    }}
                  >
                    MERN / Next.js
                  </span>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
                    Status
                  </span>
                  <span
                    style={{
                      color: '#34d399',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#34d399',
                        boxShadow: '0 0 8px #34d399',
                      }}
                    />
                    Live & Deployed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation CTA */}
        <div
          style={{
            marginTop: '4.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid var(--color-border-subtle)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-text-subtle)',
              marginBottom: '1rem',
            }}
          >
            Want to see more of what I&apos;ve built?
          </p>
          <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              id="bottom-back-link"
              href="/#projects"
              className="btn btn-primary"
              style={{ padding: '0.75rem 1.8rem', fontSize: '0.92rem' }}
            >
              ← Back to All Projects
            </Link>
            <a
              id="all-projects-link"
              href="https://github.com/Abid-Hossain-Sifat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.75rem 1.8rem', fontSize: '0.92rem' }}
            >
              <FaGithub size={16} />
              Visit GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Styled Scoped CSS for Layout Alignment */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .detail-layout-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          @media (min-width: 992px) {
            .detail-layout-grid {
              grid-template-columns: 1.85fr 1fr;
              align-items: start;
            }
            .detail-sidebar {
              position: sticky;
              top: 100px;
            }
          }
          .detail-sidebar {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }
          .detail-card {
            background: var(--gradient-card);
            border: 1px solid var(--color-border-subtle);
            border-radius: 20px;
            padding: 2rem;
            transition: all 0.3s ease;
          }
          .detail-card:hover {
            border-color: rgba(124, 58, 237, 0.28);
            box-shadow: var(--shadow-card);
          }
          .detail-card-title {
            font-family: var(--font-outfit);
            font-size: 1.22rem;
            font-weight: 700;
            color: var(--color-text);
            margin-bottom: 1.15rem;
            display: flex;
            align-items: center;
            gap: 0.65rem;
          }
          .detail-card-text {
            color: var(--color-text-muted);
            line-height: 1.85;
            font-size: 0.95rem;
          }
          @media (max-width: 640px) {
            .detail-hero-frame {
              height: 260px !important;
              border-radius: 16px !important;
            }
            .detail-card {
              padding: 1.4rem;
              border-radius: 16px;
            }
          }
        `,
        }}
      />
    </div>
  );
}

