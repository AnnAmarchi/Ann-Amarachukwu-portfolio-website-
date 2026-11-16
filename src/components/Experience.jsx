import { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, ChevronDown, CalendarRange } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section timeline-section">
      <div className="container">
        <div className="section-heading centered">
          <div className="section-tag">Experience</div>
          <h3>Professional journey in engineering education and research.</h3>
        </div>

        <div className="timeline">
          {experience.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={`${item.title}-${item.dates}`}
                className={`timeline-item ${isOpen ? 'open' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="timeline-dot" />
                <div className="timeline-content glass-panel">
                  <button
                    className="experience-toggle"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <div className="experience-header">
                      <div>
                        <h4>{item.title}</h4>
                        <p className="organization">{item.organization}</p>
                      </div>
                      <div className="experience-meta">
                        <span>
                          <CalendarRange size={14} /> {item.dates}
                        </span>
                        <ChevronDown size={18} className={isOpen ? 'open' : ''} />
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      className="experience-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <ul>
                        {item.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
