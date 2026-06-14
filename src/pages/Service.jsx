import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const entries = [
  {
    period: 'May 2025 – Present',
    org:    'University of Colorado',
    role:   'Research Assistant',
    desc:   'Conducting machine learning research on mathematical modeling applications, developing predictive algorithms and computational methods for complex system analysis under faculty supervision.',
  },
  {
    period: 'May – Oct 2025',
    org:    'University of Texas at Austin',
    role:   'Research Assistant',
    desc:   'Applied engineering research utilizing fundus photography for cardiovascular disease risk analysis. Findings presented at MIT Undergraduate Research Technology Conference and published in IEEE Xplore.',
  },
  {
    period: 'Sep – Dec 2025',
    org:    'MORPH-RL',
    role:   'Lead Researcher',
    desc:   'Designed an autonomous wing morphing control system using reinforcement learning to optimize aerodynamic performance across flight conditions through adaptive geometry.',
  },
  {
    period: 'May 2025 – Present',
    org:    'C.R.O.S.S. Society',
    role:   'Co-Founder & Executive President',
    desc:   'Collaboration in Research, Operations, Startups, and Science. Founded global nonprofit with 100+ chapters worldwide, raising $150K+ in funding to expand STEM education access and mentor 3,000+ students in scientific research methods.',
  },
  {
    period: 'Oct 2025 – Present',
    org:    'Centennial High School Science Olympiad & Bowl',
    role:   'Build Events Captain',
    desc:   'Lead build event preparations and team training across multiple engineering competitions, developing study materials and conducting tryouts for incoming members.',
  },
  {
    period: 'April 2024 – Present',
    org:    'National Inventors Hall of Fame',
    role:   'Leadership Intern',
    desc:   'Support STEM education by mentoring young learners in innovation and entrepreneurship through structured volunteer experience.',
  },
]

function ServiceRow({ entry }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="proj-row">
      <button className="proj-trigger" onClick={() => setOpen(v => !v)}>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <p style={{ fontSize: 11, color: '#888', letterSpacing: '0.04em', marginBottom: 5 }}>
            {entry.period}
          </p>
          <p style={{ fontSize: 15, fontWeight: 700, color: '#ffffff', marginBottom: 3 }}>
            {entry.org}
          </p>
          <p style={{ fontSize: 12, color: '#aaa', letterSpacing: '0.02em' }}>
            {entry.role}
          </p>
        </div>
        <ChevronDown
          size={15}
          style={{
            color: '#666',
            flexShrink: 0,
            marginTop: 4,
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s',
          }}
        />
      </button>

      {open && (
        <div className="proj-expand">
          <p style={{ fontSize: 13, color: '#999', lineHeight: 2 }}>
            {entry.desc}
          </p>
        </div>
      )}
    </div>
  )
}

export default function Service() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '96px 48px 100px' }}>
      <p className="section-label">Experience & Service</p>

      <div>
        {entries.map((e, i) => <ServiceRow key={i} entry={e} />)}
      </div>
    </main>
  )
}
