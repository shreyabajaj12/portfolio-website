import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import codexaiImg from '../assets/codexai.jpeg'
import contactManagerImg from '../assets/contact-manager.png'
import lifedeskImg from '../assets/lifedesk.jpeg'
import jobPredictionImg from '../assets/job-prediction.png'
import mrBobImg from '../assets/mr-bob-interviewer.png'
import reminderImg from '../assets/reminder.png'

const projects = [
  { title: 'CodexAI — AI Multi-Agent Assistant', description: 'An intelligent AI assistant with autonomous routing that handles chat, coding help, web search, image generation, PDF analysis, and presentation creation.', image: codexaiImg, tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'LangChain', 'LangGraph', 'Groq', 'Tavily'], github: 'https://github.com/shreyabajaj12/codexai-chatbot' },
  { title: 'ContactHub — Smart Contact Manager', description: 'A secure full-stack contact management app storing 500+ contacts per user with pagination, search, Spring Security, JWT, and OAuth2.', image: contactManagerImg, tech: ['Java', 'Spring Boot', 'MySQL', 'React', 'Spring Security', 'JWT', 'OAuth2'], github: 'https://github.com/shreyabajaj12/ContactManagement' },
  { title: 'LifeDesk — AI Productivity Platform', description: 'A full-stack productivity platform with task management, daily planning, analytics, JWT auth, and a context-aware AI assistant with Google Calendar.', image: lifedeskImg, tech: ['React', 'Spring Boot', 'TiDB', 'Grok AI', 'Google Calendar API'], github: 'https://github.com/shreyabajaj12/lifedesk-taskorganizer' },
  { title: 'Mr. Bob — AI Interview Platform', description: 'An AI-powered interview simulator using Google Gemini, LangChain, and LangGraph for personalized questions with intelligent follow-up.', image: mrBobImg, tech: ['JavaScript', 'Google Gemini', 'LangChain', 'LangGraph'], github: 'https://github.com/shreyabajaj12/mr.bob-the-interviewer' },
  { title: 'Job Role Prediction', description: 'A machine learning app that analyzes resumes and predicts the top 3 best-fit job roles using NLP and classification techniques.', image: jobPredictionImg, tech: ['Python', 'Jupyter Notebook', 'Scikit-Learn', 'NLP'], github: 'https://github.com/shreyabajaj12/job_role_prediction' },
  { title: 'PingTask — Task Reminder Extension', description: 'A browser extension for CRUD task reminders with a clean interface and persistent storage.', image: reminderImg, tech: ['JavaScript', 'Chrome Extension API', 'HTML', 'CSS'], github: 'https://github.com/shreyabajaj12/taskreminder-extension-PingTask' },
]

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }} className="group flex flex-col items-center text-center rounded-2xl overflow-hidden bg-surface/50 border border-white/5 hover:border-primary/20 transition-all duration-500">
      <div className="relative overflow-hidden h-48 w-full shrink-0">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <motion.a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#020617]/80 text-white hover:bg-primary transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label={`View ${project.title} on GitHub`}>
            <FaGithub size={20} />
          </motion.a>
        </div>
      </div>
      <div className="flex flex-col flex-1 items-center p-7">
        <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-heading)] leading-snug group-hover:text-primary-light transition-colors mb-3">{project.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.tech.map((t) => (<span key={t} className="px-2.5 py-1 text-[11px] rounded-full bg-primary/10 text-primary-light/80 border border-primary/10">{t}</span>))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary-light transition-colors" aria-label={`View ${project.title} source code`}>
          <FaGithub size={15} /><span>Source Code</span>
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-28 lg:py-32 px-8 sm:px-12 lg:px-16" ref={ref}>
      <div>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-medium">What I&apos;ve Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
            Featured <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (<ProjectCard key={project.title} project={project} index={i} isInView={isInView} />))}
        </div>
      </div>
    </section>
  )
}
