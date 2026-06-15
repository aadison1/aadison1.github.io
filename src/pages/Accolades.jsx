import { ArrowUpRight } from 'lucide-react'

const accolades = [
  {
    year: '2026',
    title: 'Centennial HS Salutatorian',
    sub:   '2 / 473',
    href:  'https://schools.friscoisd.org/campus/high-school/centennial/home',
  },
  {
    year: '2026',
    title: 'USA Physics Olympiad (USAPhO) Qualifier',
    sub:   'Top 440 of 6,682',
    href:  'https://aapt.org/physicsteam/',
  },
  {
    year: '2026',
    title: 'USA Computing Olympiad (USACO) Platinum Division',
    sub:   'Top 300 of 14,273',
    href:  'https://usaco.org',
  },
  {
    year: '2026',
    title: 'IEEE Xplore Publication',
    sub:   'Retinal Imaging',
    href:  'https://ieeexplore.ieee.org/document/11533024',
  },
  {
    year: '2026',
    title: 'Stanford Math Tournament Distinguished HM',
    sub:   'Algebra and Team Round',
    href:  'https://www.stanfordmathtournament.org/competitions/smt-2026-online',
  },
  {
    year: '2025',
    title: 'MIT URTC Conference Presenter',
    sub:   'Retinal Imaging',
    href:  'https://urtc.mit.edu',
  },
  {
    year: '2024',
    title: 'Texas State Science & Engineering Fair Finalist',
    sub:   'ASA Highest Honors',
    href:  'https://txsef.tamu.edu/',
  },
  {
    year: '2024',
    title: 'UNT × Wipro Science Fair',
    sub:   '2nd Place',
    href:  'https://www.untdallas.edu/news/wipro_science_soiree.php',
  },
]

export default function Accolades() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '96px 48px 100px' }}>
      <p className="section-label">Honors & Accolades</p>

      <div>
        {accolades.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="row-link"
          >
            <span className="row-year">{item.year}</span>
            <span className="row-title">
              {item.title}
              {item.sub && <span className="row-sub">{item.sub}</span>}
            </span>
            <ArrowUpRight size={15} className="row-arrow" />
          </a>
        ))}
      </div>
    </main>
  )
}
