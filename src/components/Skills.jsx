import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaJava, FaPython, FaReact, FaDocker, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa'
import { SiSpringboot, SiJavascript, SiCplusplus, SiMongodb, SiPostgresql, SiMysql, SiTailwindcss, SiPostman, SiTensorflow, SiNumpy, SiPandas, SiScikitlearn, SiExpress, SiSupabase, SiLangchain, SiGitlab } from 'react-icons/si'

const skillCategories = [
  { title: 'Languages', skills: [{ name: 'Java', icon: <FaJava /> }, { name: 'Python', icon: <FaPython /> }, { name: 'C++', icon: <SiCplusplus /> }, { name: 'JavaScript', icon: <SiJavascript /> }, { name: 'SQL', icon: <FaDatabase /> }] },
  { title: 'Frameworks', skills: [{ name: 'Spring Boot', icon: <SiSpringboot /> }, { name: 'React', icon: <FaReact /> }, { name: 'Express.js', icon: <SiExpress /> }, { name: 'Tailwind CSS', icon: <SiTailwindcss /> }] },
  { title: 'Tools & Databases', skills: [{ name: 'Git', icon: <FaGitAlt /> }, { name: 'GitHub', icon: <FaGithub /> }, { name: 'GitLab', icon: <SiGitlab /> }, { name: 'Docker', icon: <FaDocker /> }, { name: 'MySQL', icon: <SiMysql /> }, { name: 'MongoDB', icon: <SiMongodb /> }, { name: 'PostgreSQL', icon: <SiPostgresql /> }, { name: 'Postman', icon: <SiPostman /> }, { name: 'Supabase', icon: <SiSupabase /> }] },
  { title: 'AI/ML & Libraries', skills: [{ name: 'LangChain', icon: <SiLangchain /> }, { name: 'TensorFlow', icon: <SiTensorflow /> }, { name: 'NumPy', icon: <SiNumpy /> }, { name: 'Pandas', icon: <SiPandas /> }, { name: 'Scikit-Learn', icon: <SiScikitlearn /> }] },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="w-full max-w-6xl mx-auto py-28 lg:py-32 px-8 sm:px-12 lg:px-16 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-medium">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
            Skills & <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Technologies</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }} className="flex flex-col items-center text-center p-8 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/10 transition-all duration-300">
              <h3 className="text-base font-semibold text-text-primary mb-6 font-[family-name:var(--font-heading)]">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-surface-light/60 border border-white/5 text-text-secondary hover:text-primary-light hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 cursor-default" whileHover={{ scale: 1.05, y: -2 }}>
                    <span className="text-sm shrink-0">{skill.icon}</span>
                    <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
