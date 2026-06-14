import { motion } from 'framer-motion'

export default function Card({ children, className = '', onClick, href, delay = 0 }) {
  const base = `glass rounded-2xl p-6 transition-all duration-300 glow-blue-hover ${className}`

  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`${base} ${onClick || href ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block">
        {inner}
      </a>
    )
  }

  return inner
}
