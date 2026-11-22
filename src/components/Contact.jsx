import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail, HiDocumentText } from 'react-icons/hi'
import { SiLeetcode } from 'react-icons/si'
import bgImage from '../assets/bg.jpg'

const contactLinks = [
  { icon: <HiOutlineMail size={24} />, label: 'Email', value: 'Send me a mail', href: 'mailto:shreyabajaj589@gmail.com', color: 'from-red-500/20 to-pink-500/20', borderColor: 'hover:border-red-500/30' },
  { icon: <FaLinkedinIn size={22} />, label: 'LinkedIn', value: 'View LinkedIn', href: 'https://linkedin.com/in/shreyabajajsaw', color: 'from-blue-500/20 to-blue-600/20', borderColor: 'hover:border-blue-500/30' },
  { icon: <FaGithub size={22} />, label: 'GitHub', value: 'View GitHub', href: 'https://github.com/shreyabajaj12', color: 'from-gray-500/20 to-gray-600/20', borderColor: 'hover:border-gray-500/30' },
  { icon: <SiLeetcode size={22} />, label: 'LeetCode', value: 'View LeetCode', href: 'https://leetcode.com/u/shresaw0', color: 'from-orange-500/20 to-amber-500/20', borderColor: 'hover:border-orange-500/30' },
  { icon: <HiDocumentText size={22} />, label: 'Resume', value: 'View Resume', href: 'https://drive.google.com/file/d/1sApXPpY9NJZvpaxFK7nmNbySt6ONJpPB/view?usp=sharing', color: 'from-amber-500/20 to-yellow-500/20', borderColor: 'hover:border-amber-500/30' },
]

function ContactCard({ link, i, isInView }) {
  return (
    <motion.a href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }} whileHover={{ scale: 1.03, y: -4 }} className={`group flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${link.borderColor} transition-all duration-500 cursor-pointer`}>
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-text-primary group-hover:scale-110 transition-transform duration-300`}>{link.icon}</div>
      <div className="text-center">
        <p className="text-text-primary font-medium text-sm mb-1">{link.label}</p>
        <p className="text-text-muted text-xs break-all">{link.value}</p>
      </div>
    </motion.a>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-8 overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0A1828]/80" />
        {/* Top fade from page background */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#0A1828] to-transparent" />
        {/* Bottom fade into footer */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A1828] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-medium">Let&apos;s Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-5">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about tech.</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link, i) => (
            <div key={link.label} className="w-full sm:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)]">
              <ContactCard link={link} i={i} isInView={isInView} />
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }} className="text-center mt-14">
          <a href="mailto:shreyabajaj589@gmail.com" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
            <HiOutlineMail size={18} />Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  )
}
