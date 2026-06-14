import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'

/* ── data ─────────────────────────────────────────────────────── */

const publications = [
  {
    id:          'iris-ieee',
    year:        '2026',
    title:       'Retinal Imaging for Cardiovascular Disease Detection',
    venue:       'IEEE Xplore · MIT URTC 2025',
    description: 'Applied engineering research utilizing fundus photography and deep learning pipelines for non-invasive cardiovascular disease risk stratification. Findings presented at MIT Undergraduate Research Technology Conference and published in IEEE Xplore.',
    tags:        ['Medical Imaging', 'Deep Learning', 'Computer Vision', 'PyTorch'],
    href:        'https://ieeexplore.ieee.org/document/11533024',
  },
]

const researchProjects = [
  {
    id:          'iris',
    year:        '2025',
    title:       'Iris',
    subtitle:    'Cardiovascular Disease Detection via Smartphone Fundus Photography',
    description: 'Converts a smartphone into a clinical-grade retinal imaging system using a 3D-printed 20D lens and a deep learning pipeline. Measures the Arteriolar-to-Venular Ratio (avRatio) to flag CVD risk—patients below 0.90 face arterial narrowing detectable 10+ years before clinical symptoms. At $26.50 per unit versus $2,000+ for CT/MRI screening, Iris requires no specialist, eliminates radiation exposure, supports 126 languages, and returns results in under 30 seconds. Published in IEEE Xplore following the MIT Undergraduate Research Technology Conference.',
    results:     '90% specificity for CVD risk detection. 98.7% cost reduction vs. traditional screening. Validated on 1,000+ diverse retinal images. Results in <30 seconds.',
    tags:        ['Python', 'PyTorch', 'U-Net', 'OpenCV', 'Medical Imaging', 'Computer Vision'],
    href:        'https://ieeexplore.ieee.org/document/11533024',
  },
  {
    id:          'morph-rl',
    year:        '2026',
    title:       'MORPH-RL',
    subtitle:    'Reinforcement Learning for Adaptive Aerodynamic Surfaces',
    description: 'Applies deep reinforcement learning (PPO) to autonomously discover optimal wing morphing strategies for fixed-wing UAVs. A neural network observes flight state—airspeed, altitude, wind, attitude—and commands camber, sweep, and deflection changes while optimizing a reward function that penalizes power consumption while maintaining stability. The policy generalizes across wind profiles, altitudes, and payload variations.',
    results:     '10–15% energy efficiency improvement over tuned PID baseline. <2° pitch error and <5% speed deviation across variable conditions. <10ms policy inference latency.',
    tags:        ['Python', 'PPO', 'Stable-Baselines3', 'MuJoCo', 'PyTorch', 'XFoil'],
    href:        null,
  },
  {
    id:          'biolyzer',
    year:        '2024',
    title:       'BIOlyzer',
    subtitle:    'Non-Invasive Breathalyzer for Type 1 Diabetes Detection',
    description: 'Non-invasive breathalyzer for Type 1 diabetes detection via breath acetone concentration. Built around an Arduino-based MQ-138 VOC sensor with real-time LCD readout, exploiting NIH research showing 93% of T1D patients exhibit elevated breath acetone (>1.8 ppm). Validated against controlled acetone dilutions and correlated against blood glucose levels in diabetic patients.',
    results:     '97.33% accuracy for acetone detection. 94.8% overall accuracy across test cases. Strong correlation with blood glucose levels in T1D patients.',
    tags:        ['Arduino', 'VOC Sensing', 'Signal Processing', 'Embedded Systems'],
    href:        null,
  },
  {
    id:          'aquakinetic',
    year:        '2024',
    title:       'AquaKinetic',
    subtitle:    'Kinetic Energy Harvesting from Slow-Moving Ocean Currents',
    description: 'Harvests kinetic energy from slow-moving ocean currents (<2.0 m/s)—a globally abundant, highly predictable resource that existing tidal systems overlook. The prototype integrates a buoy-driven retracting cable, drum, permanent-magnet generator, and lithium-ion battery to convert water motion into stable electrical output. Tested across three flow regimes.',
    results:     'Peak efficiency 85.4% at 1.5 m/s. Average power output ~45W per trial. Energy storage 51.48 Wh/hr at optimal speed.',
    tags:        ['Mechanical Design', 'Energy Harvesting', 'Embedded Systems', 'Prototyping'],
    href:        null,
  },
]

/* ── accordion row ─────────────────────────────────────────────── */

function ProjRow({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="proj-row">
      <button className="proj-trigger" onClick={() => setOpen(v => !v)}>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 5 }}>
            <span style={{ fontSize: 11, color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
              {item.venue || 'Research'}
            </span>
            <span style={{ fontSize: 11, color: '#555' }}>{item.year}</span>
          </div>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#f0f0f0', marginBottom: 3, lineHeight: 1.35 }}>
            {item.title}
          </p>
          {item.subtitle && (
            <p style={{ fontSize: 13, color: '#777' }}>{item.subtitle}</p>
          )}
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
          <p style={{ fontSize: 13, color: '#999', lineHeight: 2, marginBottom: 14 }}>
            {item.description}
          </p>
          {item.results && (
            <p style={{ fontSize: 12, color: '#777', marginBottom: 16, lineHeight: 1.9 }}>
              <span style={{ color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 11 }}>Results — </span>
              {item.results}
            </p>
          )}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: item.href ? 18 : 0 }}>
            {item.tags.map(t => (
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
          {item.href && (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#777', transition: 'color 0.15s', marginTop: 6 }}
              onMouseEnter={e => e.currentTarget.style.color = '#e0e0e0'}
              onMouseLeave={e => e.currentTarget.style.color = '#777'}
            >
              View paper <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

/* ── page ──────────────────────────────────────────────────────── */

export default function Projects() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '96px 48px 100px' }}>

      <section style={{ marginBottom: 64 }}>
        <p className="section-label">Publications</p>
        {publications.map(p => <ProjRow key={p.id} item={p} />)}
      </section>

      <section>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <p style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#888', margin: 0 }}>
            Research Projects
          </p>
          <a
            href={`${import.meta.env.BASE_URL}research-portfolio.pdf`}
            target="_blank"
            rel="noreferrer"
            style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#888', textDecoration: 'none', transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#c8c8c8'}
            onMouseLeave={e => e.currentTarget.style.color = '#888'}
          >
            Research Portfolio ↗
          </a>
        </div>
        <p style={{ fontSize: 12, color: '#555', marginBottom: 26 }}>
          Click any row to expand.
        </p>
        {researchProjects.map(p => <ProjRow key={p.id} item={p} />)}
      </section>

    </main>
  )
}
