import { motion } from 'framer-motion'

export default function Section({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 md:mb-16">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-brand-blue text-xs font-mono uppercase tracking-[0.2em] mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-3xl md:text-4xl font-bold text-white mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-brand-gray text-base md:text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
