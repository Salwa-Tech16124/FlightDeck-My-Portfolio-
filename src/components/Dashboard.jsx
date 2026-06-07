import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, isPercentage, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (isNaN(end)) return;
      
      const duration = 2000;
      const incrementTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  const displayValue = isNaN(parseInt(value)) ? value : count;
  const formatted = typeof displayValue === 'number' && displayValue < 10 && !isPercentage ? `0${displayValue}` : displayValue;

  return (
    <span ref={ref} className="metric-value">
      {formatted}{isPercentage ? "%" : suffix}
    </span>
  );
};

const Dashboard = () => {
  const cards = [
    { title: "PROJECTS", value: "30", isPercentage: false, suffix: "+" },
    { title: "FOCUS", value: "QA+DEV", isPercentage: false },
    { title: "AI PROJECTS", value: "MULTIPLE", isPercentage: false },
    { title: "STATUS", value: "OPEN", isPercentage: false }
  ];

  return (
    <section id="dashboard" className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="section-title">{">_"} SYSTEM DIAGNOSTICS</h2>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>ALL SYSTEMS NOMINAL</span>
        </div>
      </div>
      
      <div className="dashboard-grid">
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            className="hud-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="hud-card-header">
              <span className="card-bracket">[</span>
              <h3 className="card-title">{card.title}</h3>
              <span className="card-bracket">]</span>
            </div>
            
            <div className={`card-body ${card.title === 'STATUS' ? 'status-active' : ''}`}>
              {card.title === 'STATUS' ? (
                <span className="metric-value pulse-text">{card.value}</span>
              ) : (
                <Counter value={card.value} isPercentage={card.isPercentage} suffix={card.suffix} />
              )}
            </div>
            
            <div className="card-footer">
              <div className="scan-line"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
