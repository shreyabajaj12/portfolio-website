import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiBriefcase } from 'react-icons/hi'

const experiences = [
  {
    role: 'Software Engineering Intern', company: 'Nielsen', period: 'Feb 2026 – Present',
    description: 'Worked on the Nielsen One Application production codebase, optimizing backend services with Spring Boot, PostgreSQL, and MyBatis. Deployed features and fixes across the platform, closing 30+ Jira tickets while collaborating with cross-functional teams.',
    tech: ['Spring Boot', 'PostgreSQL', 'MyBatis', 'Apache Druid', 'Redux', 'REST APIs'],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-24 px-6 sm:px-8" ref={ref}>
      <div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-medium">Where I&apos;ve Worked</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
            Professional <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Experience</span>
          </h2>
        </motion.div>

        {experiences.map((exp, i) => (
          <motion.div key={exp.company} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }} className="text-center p-10 sm:p-12 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all duration-500">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mx-auto mb-5">
              <HiBriefcase size={24} />
            </div>
            <h3 className="text-xl font-semibold text-text-primary font-[family-name:var(--font-heading)] mb-1">{exp.role}</h3>
            <p className="text-primary-light font-medium text-sm mb-2">{exp.company}</p>
            <span className="inline-block text-sm text-text-muted bg-surface-light/50 px-4 py-1.5 rounded-full border border-white/5 mb-8">{exp.period}</span>

            <p className="text-text-secondary text-sm leading-relaxed max-w-2xl mx-auto mb-8">
              {exp.description}
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {exp.tech.map((t) => (
                <span key={t} className="px-3.5 py-1.5 text-xs rounded-full bg-primary/10 text-primary-light border border-primary/20">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
