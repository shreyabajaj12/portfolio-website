import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { HiCode, HiServer, HiChip } from 'react-icons/hi'

const highlights = [
  { icon: <HiServer size={28} />, title: 'Backend Development', description: 'Building scalable APIs and data pipelines with Spring Boot, PostgreSQL, and MyBatis.' },
  { icon: <HiCode size={28} />, title: 'Full-Stack Applications', description: 'Creating end-to-end applications with React frontends and robust Java/Spring backends.' },
  { icon: <HiChip size={28} />, title: 'AI/ML Integration', description: 'Integrating AI capabilities using LangChain, LangGraph, and ML frameworks into real products.' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-6 sm:px-8" ref={ref}>
      <div className="w-full max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-primary-light tracking-widest uppercase mb-4 text-md">About Me</h1>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
            A Bit About <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Who I Am</span>
          </h2>
        </motion.div>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="text-text-secondary text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14">
          I&apos;m a Computer Science undergraduate with a passion for building software that solves real problems. With hands-on experience at Nielsen, I specialize in backend development, scalable APIs, and full-stack applications. I love exploring the intersection of software engineering and AI, and I&apos;m always looking for the next exciting thing to build.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-8">
          {highlights.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }} className="group relative flex flex-col items-center text-center p-10 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all duration-500 hover:bg-surface-light/30">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary-light mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-base font-semibold text-text-primary mb-3 font-[family-name:var(--font-heading)]">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
