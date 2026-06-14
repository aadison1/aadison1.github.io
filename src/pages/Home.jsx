import { useState } from 'react'
import { GraduationCap } from 'lucide-react'

const socials = [
  { label: 'Email',    href: 'mailto:aadipsoni@gmail.com',                       external: false },
  { label: 'X',        href: 'https://x.com/aad1son1',                           external: true  },
  { label: 'Github',   href: 'https://github.com/aadison1',                      external: true  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aadi-soni-539b0b311/', external: true  },
  { label: 'Orcid',    href: 'https://orcid.org/0009-0008-7564-5520',            external: true  },
]

const aboutParagraphs = [
  `I grew up in Dallas, Texas, driven by an early obsession with how things work—mechanically, mathematically, and computationally. My first real brush with original research came in middle school with BIOlyzer, a non-invasive breathalyzer I built to detect Type 1 diabetes through breath acetone concentration. That project won recognition from the American Statistical Association at the Texas State Science & Engineering Fair, and more importantly, it taught me that research is a form of invention.`,
  `That win opened a door I didn't know existed. I joined two concurrent university research programs—mathematical machine learning at the University of Colorado and applied engineering at UT Austin, where I built a deep learning pipeline for cardiovascular disease detection using retinal fundus photography. That work was presented at MIT URTC and published in IEEE Xplore.`,
  `Alongside research, I co-founded C.R.O.S.S. Society to give other students the access to research I was lucky to find. One hundred chapters, $150K raised, and 3,000+ students later, the mission is still the same: lower the barrier for curious people to do meaningful work.`,
  `I stay sharp through competition—USACO Platinum (top 300 nationally) and USAPhO qualifier—because I believe hard problems train sharper thinking. I'm drawn to the edges: adaptive aerodynamic control, bio-inspired energy harvesting, embedded systems that sense the world in unconventional ways.`,
]

export default function Home() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <main style={{
      maxWidth: 760,
      margin: '0 auto',
      padding: '90px 48px 100px',
    }}>

      {/* ── Circle avatar — LEFT aligned ── */}
      <div style={{
        width: 150,
        height: 150,
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.15)',
        marginBottom: 22,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        background: 'rgba(255,255,255,0.02)',
      }}>
        <img src={`${import.meta.env.BASE_URL}photo.jpeg`} alt="Aadi Soni" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
      </div>

      {/* ── Tagline ── */}
      <p style={{
        color: '#d0d0d0',
        fontSize: 13,
        lineHeight: 1.6,
        marginBottom: 8,
        whiteSpace: 'nowrap',
      }}>
        I'm Aadi Soni, building adaptive engineering solutions for meaningful impact.
      </p>

      {/* ── School + descriptors row ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 28,
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#777' }}>
          <GraduationCap size={13} style={{ opacity: 0.55, flexShrink: 0 }} />
          Centennial High School, Frisco TX
        </span>
        <span style={{ fontSize: 13, color: '#777', letterSpacing: '0.04em' }}>
          Researcher · Engineer · Builder
        </span>
      </div>

      {/* ── Social links — LEFT aligned with underline ── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: '6px 24px',
        marginBottom: 44,
      }}>
        {socials.map(({ label, href, external }) => (
          <a
            key={label}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            style={{
              fontSize: 13,
              color: '#666',
              transition: 'color 0.15s, border-color 0.15s',
              borderBottom: '1px solid rgba(120,120,120,0.35)',
              paddingBottom: 1,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#d8d8d8'
              e.currentTarget.style.borderBottomColor = 'rgba(216,216,216,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#666'
              e.currentTarget.style.borderBottomColor = 'rgba(120,120,120,0.35)'
            }}
          >
            {label}
          </a>
        ))}
      </div>

      {/* ── About accordion ── */}
      <div>
        <button
          onClick={() => setAboutOpen(v => !v)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 13, color: '#777',
            padding: 0, display: 'flex', alignItems: 'center', gap: 8,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#c0c0c0'}
          onMouseLeave={e => e.currentTarget.style.color = '#777'}
        >
          <span style={{
            fontSize: 9, display: 'inline-block',
            transform: aboutOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}>▶</span>
          About
        </button>

        {aboutOpen && (
          <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {aboutParagraphs.map((p, i) => (
              <p key={i} style={{
                color: '#888',
                fontSize: 13,
                lineHeight: 2,
                marginBottom: i < aboutParagraphs.length - 1 ? 18 : 0,
              }}>
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
