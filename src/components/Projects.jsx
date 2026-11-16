import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, ChevronDown, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Projects() {
  const { projects } = portfolioData;
  const [expanded, setExpanded] = useState(0);

  const toggleCard = (index) => {
    setExpanded((current) => (current === index ? -1 : index));
  };

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading centered">
          <div className="section-tag">Projects</div>
          <h3>Research, technical leadership and applied innovation.</h3>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const isOpen = expanded === index;
            return (
              <motion.article
                key={`${project.title}-${project.date}`}
                className={`project-card glass-panel ${project.accent}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="project-visual">
                  <div className="project-badge">{project.category}</div>
                  <div className="project-visual-pattern" />
                </div>

                <div className="project-body">
                  <div className="project-topline">
                    <span>{project.date}</span>
                    {project.funding && <strong>{project.funding}</strong>}
                  </div>
                  <h4>{project.title}</h4>
                  <p className="project-role">Role: {project.role}</p>
                  <p className="project-description">{project.description}</p>

                  <button className="project-toggle" onClick={() => toggleCard(index)}>
                    <span>{isOpen ? 'Hide details' : 'View project details'}</span>
                    <ChevronDown size={18} className={isOpen ? 'open' : ''} />
                  </button>

                  {isOpen && (
                    <motion.div
                      className="project-extra"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{project.details}</p>
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

export default Projects;
