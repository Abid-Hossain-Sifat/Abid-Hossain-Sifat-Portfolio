'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#projects', label: 'Projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (pathname === '/') {
        const sections = navLinks.map(l => l.href.replace('#', ''));
        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && window.scrollY >= el.offsetTop - 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(href.replace('#', ''));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/' + href);
    }
  };

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(13,13,20,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.15)' : '1px solid transparent',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0.9rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#home" id="navbar-logo" onClick={e => { e.preventDefault(); handleNavClick('#home'); }} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <span style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem', color: '#fff', boxShadow: '0 4px 12px rgba(124,58,237,0.4)', flexShrink: 0 }}>AHS</span>
            <span style={{ fontFamily: 'var(--font-outfit)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Abid <span style={{ color: 'var(--color-primary-light)' }}>Hossain Sifat</span>
            </span>
          </a>

          {/* Desktop Links */}
          <ul id="navbar-links" style={{ display: 'flex', gap: '0.2rem', listStyle: 'none', alignItems: 'center' }} className="nav-desktop">
            {navLinks.map(link => {
              const active = activeSection === link.href.replace('#', '');
              return (
                <li key={link.href}>
                  <a href={link.href} onClick={e => { e.preventDefault(); handleNavClick(link.href); }} style={{
                    padding: '0.45rem 0.9rem', borderRadius: '999px', fontSize: '0.88rem',
                    fontWeight: active ? 600 : 500,
                    color: active ? 'var(--color-primary-light)' : 'var(--color-text-muted)',
                    background: active ? 'rgba(124,58,237,0.12)' : 'transparent',
                    transition: 'all 0.2s', display: 'block', textDecoration: 'none',
                  }}>{link.label}</a>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="#contact" id="navbar-hire" onClick={e => { e.preventDefault(); handleNavClick('#contact'); }} className="btn btn-primary nav-desktop" style={{ padding: '0.5rem 1.2rem', fontSize: '0.87rem' }}>Contact Me</a>
            <button id="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" className="hamburger-btn" style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 6 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ display: 'block', width: 22, height: 2, background: 'var(--color-text)', borderRadius: 2, transition: 'all 0.3s',
                  transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,7px)' : i===2 ? 'rotate(-45deg) translate(5px,-7px)' : 'scaleX(0)') : 'none',
                  opacity: menuOpen && i===1 ? 0 : 1 }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: 'rgba(13,13,20,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(124,58,237,0.15)', padding: '0.75rem 1.5rem 1.25rem' }}>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={e => { e.preventDefault(); handleNavClick(link.href); }} style={{ display: 'block', padding: '0.7rem 1rem', borderRadius: '10px', fontSize: '0.95rem', fontWeight: 500, color: activeSection === link.href.replace('#','') ? 'var(--color-primary-light)' : 'var(--color-text-muted)', background: activeSection === link.href.replace('#','') ? 'rgba(124,58,237,0.1)' : 'transparent', textDecoration: 'none' }}>{link.label}</a>
                </li>
              ))}
              <li style={{ marginTop: '0.5rem' }}>
                <a href="#contact" id="mobile-hire" onClick={e => { e.preventDefault(); handleNavClick('#contact'); }} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Contact Me</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      {/* Handled style rendering safely for JSX compilers */}
      <style dangerouslySetInnerHTML={{__html: `
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .hamburger-btn{display:flex!important}
        }
      `}} />
    </>
  );
}