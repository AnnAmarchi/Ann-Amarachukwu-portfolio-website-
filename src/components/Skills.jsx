import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Database, Lightbulb, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const skillIcons = {
  'AI, Machine Learning and Data': BrainCircuit,
  'Engineering and Technical': Wrench,
  'Energy and Sustainability': Cpu,
  'Education and Pedagogy': Lightbulb,
  'Digital and Educational Technology': Database,
};

function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading centered">
          <div className="section-tag">Skills</div>
          <h3>Interdisciplinary expertise across research, education and technology.</h3>
        </div>

        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = skillIcons[group.category] || BrainCircuit;
            return (
              <motion.div
                key={group.category}
                className="skill-group glass-panel"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="group-header">
                  <div className="group-icon">
                    <Icon size={18} />
                  </div>
                  <h4>{group.category}</h4>
                </div>
                <ul className="skill-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
