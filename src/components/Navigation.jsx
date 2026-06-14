import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/accolades', label: 'Accolades' },
  { to: '/projects',  label: 'Projects'  },
  { to: '/service',   label: 'Service'   },
  { to: '/contact',   label: 'Contact'   },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location               = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  const bgStyle = scrolled
    ? { background: 'rgba(8,8,8,0.97)', backdropFilter: 'blur(8px)' }
    : { background: 'transparent' }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.09)',
      transition: 'background 0.25s',
      ...bgStyle,
    }}>
      <div style={{
        maxWidth: 760, margin: '0 auto', padding: '0 48px',
        display: 'flex', alignItems: 'center', height: 54,
      }}>

        {/* Logo */}
        <NavLink to="/" style={{ fontWeight: 700, color: '#f0f0f0', fontSize: 14, letterSpacing: '0.06em', textDecoration: 'none' }}>
          AADI SONI
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ marginLeft: 'auto', alignItems: 'center', gap: 32 }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: isActive ? '#f0f0f0' : '#888',
                textDecoration: 'none',
                paddingBottom: 2,
                borderBottom: isActive ? '1px solid rgba(255,255,255,0.5)' : '1px solid transparent',
                transition: 'color 0.15s',
              })}
              onMouseEnter={e => { const c = e.currentTarget.style.color; if (c !== 'rgb(240, 240, 240)') e.currentTarget.style.color = '#c8c8c8' }}
              onMouseLeave={e => { const c = e.currentTarget.style.color; if (c !== 'rgb(240, 240, 240)') e.currentTarget.style.color = '#888' }}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#888', textDecoration: 'none', paddingBottom: 2, borderBottom: '1px solid transparent', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c8c8c8'}
            onMouseLeave={e => e.currentTarget.style.color = '#888'}
          >
            Resume ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden"
          style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: '#aaa', fontSize: 22, padding: '0 4px', lineHeight: 1 }}
          aria-label="Menu"
        >
          {menuOpen ? '×' : '≡'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#0c0c0c', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '12px 28px 18px' }}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                display: 'block',
                padding: '11px 0',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: isActive ? '#f0f0f0' : '#888',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              })}
            >
              {label}
            </NavLink>
          ))}
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noreferrer"
            style={{ display: 'block', paddingTop: 11, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#888', textDecoration: 'none' }}
          >
            Resume ↗
          </a>
        </div>
      )}
    </nav>
  )
}
