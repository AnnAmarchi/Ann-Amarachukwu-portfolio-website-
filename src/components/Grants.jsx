import { motion } from 'framer-motion';
import { Coins, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function Grants() {
  const { grants } = portfolioData;

  const total = grants.total.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <section id="grants" className="section grants-section">
      <div className="container grants-wrap">
        <div className="section-heading">
          <div className="section-tag">Research Funding</div>
          <h3>Funding portfolio supporting academic impact.</h3>
        </div>

        <div className="funding-highlight glass-panel">
          <div className="funding-icon">
            <TrendingUp size={24} />
          </div>
          <div>
            <span className="funding-total">${total}</span>
            <p>Total Research Funding</p>
          </div>
        </div>

        <div className="funding-grid">
          {grants.breakdown.map((grant, index) => (
            <motion.article
              key={grant.label}
              className="funding-card glass-panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="funding-label">{grant.label}</div>
              <div className="funding-amount">${grant.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Grants;
