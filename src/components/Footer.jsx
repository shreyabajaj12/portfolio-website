import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const links = [
  { icon: <FaGithub size={16} />, href: 'https://github.com/shreyabajaj12', label: 'GitHub' },
  { icon: <FaLinkedinIn size={16} />, href: 'https://linkedin.com/in/shreyabajajsaw', label: 'LinkedIn' },
  { icon: <SiLeetcode size={16} />, href: 'https://leetcode.com/u/shreyabajaj12', label: 'LeetCode' },
]

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto border-t border-white/5 py-10 px-8 sm:px-12 lg:px-16">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-text-muted hover:text-primary-light transition-colors">{link.icon}</a>
          ))}
        </div>
        <p className="text-text-muted text-sm">© {new Date().getFullYear()} <span className="text-text-secondary">Shreya Bajaj</span>. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
