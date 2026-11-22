import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiAcademicCap } from 'react-icons/hi'

const education = [
  { degree: 'B.Tech in Computer Science', school: 'Lovely Professional University', period: 'Aug 2023 – July 2027', grade: 'CGPA: 8.73 / 10.0', highlights: ["Dean's List — Top 10% of class", 'Focus on Data Structures, Algorithms & Software Engineering'], side: 'left' },
  { degree: 'Higher Secondary (PCM)', school: 'Notre Dame Academy', period: '2020 – 2022', grade: 'Percentage: 89.8%', highlights: [], side: 'right' },
  { degree: 'Secondary', school: 'Notre Dame Academy', period: '2019 – 2020', grade: 'Percentage: 90.2%', highlights: [], side: 'left' },
]

function Card({ edu }) {
  return (
    <div className="group relative text-center p-8 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all duration-500">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-5"><HiAcademicCap size={22} /></div>
        <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-heading)] leading-tight mb-1">{edu.degree}</h3>
        <p className="text-primary-light font-medium text-sm mb-3">{edu.school}</p>
        <span className="bg-surface-light/50 px-3 py-1 rounded-full border border-white/5 text-xs text-text-muted mb-3">{edu.period}</span>
        <p className="text-accent-light font-semibold text-sm mb-3">{edu.grade}</p>
        {edu.highlights.length > 0 && (
          <ul className="space-y-1.5">{edu.highlights.map((h) => (<li key={h} className="text-text-secondary text-sm">{h}</li>))}</ul>
        )}
      </div>
    </div>
  )
}

function TimelineCard({ edu, index, isInView }) {
  const isLeft = edu.side === 'left'
  return (
    <div className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-4 md:gap-8">
      {/* Left col */}
      <div>
        {isLeft ? (
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}>
            <Card edu={edu} />
          </motion.div>
        ) : (
          <div className="hidden md:block invisible"><Card edu={edu} /></div>
        )}
        {!isLeft && (
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }} className="md:hidden">
            <Card edu={edu} />
          </motion.div>
        )}
      </div>

      {/* Center — just the dot, line is drawn by the parent */}
      <div className="flex justify-center pt-8 w-5">
        <motion.div initial={{ scale: 0 }} animate={isInView ? { scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.2 }} className="w-5 h-5 rounded-full bg-[#020617] border-[3px] border-primary z-10 flex items-center justify-center shrink-0">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </motion.div>
      </div>

      {/* Right col */}
      <div>
        {!isLeft ? (
          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }} className="hidden md:block">
            <Card edu={edu} />
          </motion.div>
        ) : (
          <div className="hidden md:block invisible"><Card edu={edu} /></div>
        )}
      </div>
    </div>
  )
}

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="w-full max-w-6xl mx-auto py-24 px-6 sm:px-8" ref={ref}>
      <div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-medium">Academic Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
            My <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Education</span>
          </h2>
        </motion.div>

        {/* Timeline wrapper — one continuous line behind all cards */}
        <div className="relative">
          {/* Continuous vertical line running down the exact center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="flex flex-col gap-8">
            {education.map((edu, i) => (
              <TimelineCard key={edu.degree} edu={edu} index={i} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
