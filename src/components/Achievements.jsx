import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { HiAcademicCap, HiX } from 'react-icons/hi'
import { FaCode } from 'react-icons/fa'
import leetcodeImg from '../assets/leetcode.png'
import flipkartImg from '../assets/flipkart.png'

const achievements = [
  {
    title: 'Flipkart GRID 8.0 Semi-Finalist',
    description: 'Qualified as a Semi-Finalist in one of India\'s most competitive tech competitions, demonstrating strong problem-solving and engineering skills.',
    date: 'July 2026',
    icon: <img src={flipkartImg} alt="" className="w-7 h-7 object-contain" />,
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/20 hover:border-yellow-500/40',
    textColor: 'text-yellow-400',
    certificate: flipkartImg,
    certLabel: 'Flipkart GRID 8.0 Certificate',
    certLink: 'https://drive.google.com/file/d/1G56wH_FcZTF7_wPUtGSS3kf4UJJgzdjJ/view?usp=sharing',
  },
  {
    title: 'LeetCode — 1000+ Problems Solved',
    description: 'Solved 1000+ DSA problems on LeetCode, ranked in the top 10% globally with a max rating of 1764.',
    date: 'Since Feb 2024',
    icon: <img src={leetcodeImg} alt="" className="w-7 h-7 object-contain" />,
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/20 hover:border-orange-500/40',
    textColor: 'text-orange-400',
    link: 'https://leetcode.com/u/shresaw0',
  },
  {
    title: 'Hacktoberfest 2024 Contributor',
    description: 'Contributed code to 4 open-source repositories. All 4 pull requests were reviewed, accepted, and merged.',
    date: 'Oct 2024',
    icon: <FaCode size={24} />,
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/20 hover:border-purple-500/40',
    textColor: 'text-purple-400',
  },
  {
    title: "Dean's List — Top 10%",
    description: 'Recognized on the Dean\'s List at Lovely Professional University for academic excellence, placing in the top 10% of the class.',
    date: '2023 – Present',
    icon: <HiAcademicCap size={24} />,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/20 hover:border-blue-500/40',
    textColor: 'text-blue-400',
  },
]

function Lightbox({ image, label, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 cursor-pointer"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Close"
      >
        <HiX size={22} />
      </button>

      {/* Image */}
      <motion.img
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        src={image}
        alt={label}
        className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain cursor-default"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  )
}

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <section id="achievements" className="w-full max-w-6xl mx-auto py-24 px-6 sm:px-8 relative" ref={ref}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-primary-light text-sm tracking-widest uppercase mb-4 font-medium">Recognition</p>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
              Achievements & <span className="text-accent">Awards</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {achievements.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }} className={`group relative flex flex-col items-center text-center p-9 rounded-2xl bg-surface/50 border ${item.borderColor} transition-all duration-500`}>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className="relative flex flex-col items-center">
                  {/* Icon — clickable if certificate exists */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center ${item.textColor} mb-5 ${item.certificate ? 'cursor-pointer hover:scale-110 transition-transform duration-300' : ''}`}
                    onClick={() => item.certificate && (item.certLink ? window.open(item.certLink, '_blank') : setLightbox({ image: item.certificate, label: item.certLabel }))}
                    role={item.certificate ? 'button' : undefined}
                    tabIndex={item.certificate ? 0 : undefined}
                    onKeyDown={(e) => item.certificate && e.key === 'Enter' && (item.certLink ? window.open(item.certLink, '_blank') : setLightbox({ image: item.certificate, label: item.certLabel }))}
                    aria-label={item.certificate ? `View ${item.certLabel}` : undefined}
                  >
                    {item.icon}
                  </div>

                  <h3 className="text-base font-semibold text-text-primary font-[family-name:var(--font-heading)] leading-tight mb-2">
                    {item.link ? <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">{item.title}</a> : item.title}
                  </h3>
                  <span className="inline-block text-xs text-text-muted bg-surface-light/50 px-3 py-1 rounded-full border border-white/5 mb-4">{item.date}</span>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.description}</p>

                  {item.certificate && (
                    item.certLink ? (
                      <a
                        href={item.certLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 text-xs text-text-muted hover:text-primary-light transition-colors underline underline-offset-2"
                      >
                        View Certificate
                      </a>
                    ) : (
                      <button
                        onClick={() => setLightbox({ image: item.certificate, label: item.certLabel })}
                        className="mt-4 text-xs text-text-muted hover:text-primary-light transition-colors underline underline-offset-2"
                      >
                        View Certificate
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            image={lightbox.image}
            label={lightbox.label}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
