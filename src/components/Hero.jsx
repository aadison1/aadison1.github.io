import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin, School } from 'lucide-react'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:aadipsoni@gmail.com',
    display: 'aadipsoni@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/aadisoni',
    display: 'github.com/aadisoni',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aadi-soni',
    display: 'linkedin.com/in/aadi-soni',
  },
]

const stagger = {
  animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-navy/40 blur-[80px]" />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-3xl"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {/* Avatar */}
        <motion.div variants={fadeUp} className="mb-8">
          <div className="relative">
            {/* Ripple rings */}
            <div className="absolute inset-[-8px] rounded-full border border-brand-blue/20 animate-ripple" />
            <div className="absolute inset-[-16px] rounded-full border border-brand-blue/10 animate-ripple" style={{ animationDelay: '0.5s' }} />

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-brand-navy to-brand-darknavy border-2 border-brand-blue/40 flex items-center justify-center overflow-hidden shadow-xl shadow-brand-blue/10 animate-float">
              {/* Placeholder avatar — replace src with real headshot */}
              <span className="text-4xl font-bold text-gradient select-none">AS</span>
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-3"
        >
          Aadi Soni
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          className="text-xl sm:text-2xl font-medium text-gradient mb-5"
        >
          Researcher, Engineer, Builder
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-xl mb-8"
        >
          Exploring AI systems, engineering solutions, and research at the intersection of ML and robotics
        </motion.p>

        {/* Location badges */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-brand-lightgray border border-white/10">
            <MapPin size={13} className="text-brand-blue" />
            Dallas, TX
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm text-brand-lightgray border border-white/10">
            <School size={13} className="text-brand-blue" />
            Centennial High School
          </span>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-14">
          {socials.map(({ icon: Icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/8 text-brand-gray hover:text-white hover:border-brand-blue/40 hover:bg-brand-blue/10 transition-all duration-200 text-sm group"
            >
              <Icon size={15} className="text-brand-blue group-hover:scale-110 transition-transform" />
              <span>{display}</span>
            </a>
          ))}
        </motion.div>

        {/* Welcome blurb */}
        <motion.div
          variants={fadeUp}
          className="glass rounded-2xl p-6 sm:p-8 text-left border border-white/8 max-w-2xl"
        >
          <p className="text-brand-lightgray text-sm sm:text-base leading-relaxed mb-4">
            I'm a high-school researcher and engineer passionate about pushing the boundaries of what's possible at the intersection of machine learning, robotics, and applied mathematics. My work spans reinforcement learning for adaptive control systems, computer vision pipelines, and published IEEE research.
          </p>
          <p className="text-brand-gray text-sm sm:text-base leading-relaxed">
            Whether it's competing at USACO Platinum level, co-founding a nonprofit, or presenting at MIT research conferences, I thrive on tackling hard problems with rigorous, creative engineering. I'm currently focused on autonomous systems and bio-inspired AI architectures.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-col items-center gap-2 text-brand-gray/50 text-xs"
        >
          <span className="font-mono uppercase tracking-widest">scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-brand-blue/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
