import React from 'react';
import { motion } from 'framer-motion';

const QAPhilosophy = () => {
  const checklist = [
    "Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "API Testing",
    "UI Testing",
    "User Acceptance Testing",
    "Defect Tracking",
    "Bug Reporting",
    "Quality Validation"
  ];

  return (
    <section id="safetychecks" className="qa-container">
      <div className="qa-header">
        <h2 className="section-title">{">_"} PRE-FLIGHT SAFETY CHECKS</h2>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>SYSTEMS VERIFIED</span>
        </div>
      </div>

      <div className="qa-grid">
        {/* Left: QA Philosophy Statement */}
        <motion.div 
          className="qa-philosophy-panel"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="warning-label">
            <span className="warning-icon">⚠</span>
            <span>QUALITY ASSURANCE PROTOCOL</span>
          </div>
          <div className="philosophy-content">
            <p className="philosophy-text">
              "No flight takes off without passing rigorous safety checks. I believe exceptional software is created where innovative development meets uncompromising quality assurance. My goal is to automate predictable testing so teams can focus on building exceptional products."
            </p>
          </div>
        </motion.div>

        {/* Right: Pre-Flight Checklist Panel */}
        <motion.div 
          className="qa-checklist-panel"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="checklist-header">
            <h3>CLEARANCE CHECKLIST</h3>
          </div>
          <ul className="checklist">
            {checklist.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="checklist-item"
              >
                <div className="checkbox-container">
                  <div className="checkbox-box">
                    <span className="checkmark">✓</span>
                  </div>
                </div>
                <span className="checklist-text">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default QAPhilosophy;
