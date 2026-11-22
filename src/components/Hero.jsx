import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail, HiArrowDown, HiDocumentText } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import bgImage from '../assets/bg.jpg'

const roles = ['Software Developer', 'Java Developer', 'AI/ML Enthusiast', 'Full-Stack Builder']

const terminalLines = [
  { prompt: true, text: 'whoami' },
  { prompt: false, text: 'shreya-bajaj' },
  { prompt: true, text: 'cat interests.txt' },
  { prompt: false, text: '☕  Java & Spring Boot' },
  { prompt: false, text: '⚛️   React & Full-Stack' },
  { prompt: false, text: '🤖  AI/ML & LangChain' },
  { prompt: false, text: '🧩  Problem Solving (1000+ LC)' },
  { prompt: false, text: '🚀  Building cool things' },
  { prompt: true, text: '' },
]

function Terminal() {
  const [visibleLines, setVisibleLines] = useState(0)
  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const delay = terminalLines[visibleLines]?.prompt ? 600 : 250
      const timer = setTimeout(() => setVisibleLines((v) => v + 1), delay)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0, duration: 0.6 }}
      className="w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 backdrop-blur-md bg-black/30"
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0A1828]/80 border-b border-white/5">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center text-xs text-text-muted font-medium">
          shreya@macbook ~ zsh
        </span>
        <div className="w-[52px]" />
      </div>
      <div className="bg-[#0A1828]/70 px-5 py-4 font-mono text-sm leading-7 min-h-[220px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prompt ? (
              <>
                <span className="text-accent shrink-0">❯</span>
                <span className="text-text-primary">{line.text}</span>
                {i === visibleLines - 1 && line.text === '' && (
                  <span className="inline-block w-2 h-4 bg-accent/70 animate-[blink_1s_step-end_infinite]" />
                )}
              </>
            ) : (
              <span className="text-text-secondary pl-5">{line.text}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout
    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && text === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1))
      }, isDeleting ? 40 : 80)
    }
    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/shreyabajaj12', label: 'GitHub' },
    { icon: <FaLinkedinIn size={20} />, href: 'https://linkedin.com/in/shreyabajajsaw', label: 'LinkedIn' },
    { icon: <SiLeetcode size={20} />, href: 'https://leetcode.com/u/shresaw0', label: 'LeetCode' },
    { icon: <HiOutlineMail size={20} />, href: 'mailto:shreyabajaj589@gmail.com', label: 'Email' },
    { icon: <HiDocumentText size={20} />, href: 'https://drive.google.com/file/d/1sApXPpY9NJZvpaxFK7nmNbySt6ONJpPB/view?usp=drive_link', label: 'Resume' },
  ]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 pt-24 sm:pt-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        {/* Dark overlay so text is readable */}
        <div className="absolute inset-0 bg-[#0A1828]/75" />
        {/* Bottom fade into page background */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A1828] to-transparent" />
      </div>

      {/* Colored glow accents on top of the image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.p className="text-text-secondary text-lg mb-5 tracking-wide" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              Hey there! 👋
            </motion.p>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 leading-[1.1]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              I&apos;m{' '}
              <span className="bg-gradient-to-r from-accent via-primary-light to-accent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite] bg-clip-text text-transparent">Shreya Bajaj</span>
            </motion.h1>
            <motion.div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <span className="text-xl sm:text-2xl text-accent-light font-[family-name:var(--font-heading)]">{text}</span>
              <span className="inline-block w-[3px] h-6 sm:h-7 bg-accent ml-1 animate-[blink_1s_step-end_infinite]" />
            </motion.div>
            <motion.p className="text-text-secondary/80 text-base sm:text-lg mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
              Who loves building things that live on the internet.
            </motion.p>
            <motion.p className="text-text-secondary text-base mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              Currently interning at <span className="text-accent font-semibold">Nielsen</span> 🚀
            </motion.p>
            <motion.div className="flex items-center justify-center lg:justify-start gap-3 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              {socialLinks.map((link) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-text-secondary hover:text-accent hover:border-accent/40 hover:bg-accent/10 transition-all duration-300 backdrop-blur-sm" whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
            <motion.div className="flex items-center justify-center lg:justify-start gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <a href="#projects" className="px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 text-sm">View My Work</a>
              <a href="#contact" className="px-8 py-3 rounded-xl border border-accent/30 text-accent-light hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-sm backdrop-blur-sm">Get In Touch</a>
            </motion.div>
          </div>
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <Terminal />
          </div>
        </div>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <motion.a href="#about" className="flex flex-col items-center gap-2 text-text-muted hover:text-accent transition-colors" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <HiArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  )
}
