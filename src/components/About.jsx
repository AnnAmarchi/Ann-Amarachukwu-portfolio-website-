import { motion } from 'framer-motion';
import { ArrowUpRight, CircleDashed, Gauge, GraduationCap, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 16;
    const totalSteps = Math.ceil(duration / stepTime);

    const progress = (currentStep) => {
      const progressRatio = currentStep / totalSteps;
      const eased = 1 - Math.pow(1 - progressRatio, 3);
      const newCount = value * eased;
      setCount(newCount);

      if (currentStep < totalSteps) {
        requestAnimationFrame(() => progress(currentStep + 1));
      } else {
        setCount(value);
      }
    };

    progress(0);
  }, [value]);

  const formatValue = (num) => {
    const rounded = Number(num).toFixed(decimals);
    return `${prefix}${rounded}${suffix}`;
  };

  return <span>{formatValue(count)}</span>;
}

function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section about-section">
      <div className="container about-wrap">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="portrait-frame glass-panel">
            <div className="portrait-outline">
              <div className="portrait-placeholder">
                <span>AAO</span>
              </div>
            </div>
            <div className="portrait-badge">
              <Target size={18} /> Research & Innovation
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-copy"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="section-tag">About</div>
          <h3>Academic professional with an engineering mindset.</h3>

          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="stat-grid">
            {about.stats.map((stat) => (
              <div className="stat-card glass-panel" key={stat.label}>
                <div className="stat-value">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix || ''}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
