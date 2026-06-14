import { ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Email',    value: 'aadipsoni@gmail.com',                       href: 'mailto:aadipsoni@gmail.com',                            external: false },
  { label: 'GitHub',   value: 'github.com/aadison1',                       href: 'https://github.com/aadison1',                           external: true  },
  { label: 'LinkedIn', value: 'linkedin.com/in/aadi-soni-539b0b311',       href: 'https://www.linkedin.com/in/aadi-soni-539b0b311/',       external: true  },
  { label: 'ORCID',    value: 'orcid.org/0009-0008-7564-5520',             href: 'https://orcid.org/0009-0008-7564-5520',                 external: true  },
]

export default function Contact() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '96px 48px 100px' }}>
      <p className="section-label">Contact</p>

      <p style={{ color: '#999', fontSize: 14, lineHeight: 2, maxWidth: 520, marginBottom: 44 }}>
        Please don't hesitate to connect with me to discuss exciting opportunities or collaborations. Best reached by email.
      </p>

      <div>
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target={l.external ? '_blank' : undefined}
            rel={l.external ? 'noreferrer' : undefined}
            className="row-link"
          >
            <span className="row-year" style={{ width: 76, flexShrink: 0, fontSize: 13 }}>{l.label}</span>
            <span className="row-title">{l.value}</span>
            <ArrowUpRight size={15} className="row-arrow" />
          </a>
        ))}
      </div>
    </main>
  )
}
