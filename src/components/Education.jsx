import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Education() {
  const { education, professionalDevelopment } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-heading centered">
          <div className="section-tag">Education</div>
          <h3>Academic training and professional development.</h3>
        </div>

        <div className="education-layout">
          <div className="education-column">
            {education.map((item, index) => (
              <motion.article
                key={`${item.degree}-${item.dates}`}
                className="education-card glass-panel"
                initial={{ opacity: 0, x: -28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
              >
                <div className="education-index">0{index + 1}</div>
                <div className="education-body">
                  <div className="education-topline">
                    <span className="status-pill">{item.status}</span>
                    <span>{item.dates}</span>
                  </div>
                  <h4>{item.degree}</h4>
                  <p className="institution">{item.institution}</p>
                  <p>{item.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.aside
            className="dev-card glass-panel"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-tag alt">Professional Development</div>
            <h4>{professionalDevelopment.title}</h4>
            <p className="institution">{professionalDevelopment.organization}</p>
            <span className="status-pill">{professionalDevelopment.status}</span>
            <p>{professionalDevelopment.detail}</p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Education;
