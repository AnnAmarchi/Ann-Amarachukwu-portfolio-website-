import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Hero() {
  const { header } = portfolioData;
  const [showIntro, setShowIntro] = useState(false);
  
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />
      <div className="circuit-lines" aria-hidden="true" />

      <div className="container hero-content-wrap">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Sparkles size={16} />
            Engineering • Research • Innovation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {header.name}
          </motion.h1>

          <motion.p
            className="hero-title-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {header.title}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            {header.headline}
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {header.intro}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <a href="#projects" className="button primary">
              Explore My Work <ArrowRight size={18} />
            </a>
            <a href="#about" className="button secondary">
              Discover My Journey
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          onClick={() => setShowIntro((prev) => !prev)}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              setShowIntro((prev) => !prev);
            }
          }}
          aria-label="Open brief introduction panel"
        >
          <div className="visual-glow" />
          <div className="visual-card glass-panel">
            <div className="mini-badge">Engineering Profile</div>
            <div className="visual-meta">
              <span>Research-led</span>
              <span>Adaptive systems</span>
            </div>
          </div>

          {showIntro && (
            <motion.div
              className="hero-info-panel glass-panel"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              {header.introLong}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
