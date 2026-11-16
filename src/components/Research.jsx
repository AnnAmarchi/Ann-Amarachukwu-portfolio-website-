import { motion } from 'framer-motion';
import { Activity, Beaker, CircuitBoard, Cpu, Orbit, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Research() {
  const { researchInterests } = portfolioData;

  return (
    <section id="research" className="section research-section">
      <div className="container">
        <div className="section-heading centered">
          <div className="section-tag">Research</div>
          <h3>Focused on innovation across education, energy and technical systems.</h3>
        </div>

        <div className="research-network">
          {researchInterests.map((interest, index) => (
            <motion.div
              key={interest}
              className="research-node glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
            >
              {interest}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
