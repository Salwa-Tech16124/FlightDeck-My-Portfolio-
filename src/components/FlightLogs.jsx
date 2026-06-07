import React from 'react';
import { motion } from 'framer-motion';

const logData = [
  {
    year: "2021–2024",
    phase: "TAKEOFF PHASE",
    colorClass: "cyan",
    milestones: [
      "BCA @ IIMT University, Meerut",
      "Built programming fundamentals",
      "Started software development journey"
    ]
  },
  {
    year: "2024–2026",
    phase: "CRUISE ALTITUDE",
    colorClass: "green",
    milestones: [
      "MCA @ ABES Engineering College, Ghaziabad",
      "Focused on software engineering",
      "AI applications & testing methodologies",
      "Full stack development"
    ]
  },
  {
    year: "2026",
    phase: "MISSION COMMAND",
    colorClass: "amber",
    milestones: [
      "Associate Project Manager Intern @ NSMX Pvt Ltd",
      "Project coordination & stakeholder communication",
      "Requirement tracking & documentation management",
      "QA collaboration & functional testing support"
    ]
  }
];

const FlightLogs = () => {
  return (
    <section id="flightlogs" className="logs-container">
      <div className="logs-header">
        <h2 className="section-title">{">_"} FLIGHT LOGS</h2>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>RECORDING JOURNEY</span>
        </div>
      </div>

      <div className="timeline-container">
        {/* The central flight path line */}
        <motion.div 
          className="flight-path-line"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {logData.map((log, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={index} className={`timeline-node-wrapper ${isLeft ? 'left-node' : 'right-node'}`}>
              <motion.div 
                className={`timeline-dot dot-${log.colorClass}`}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              ></motion.div>
              
              <motion.div 
                className={`timeline-card card-${log.colorClass}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="card-top-bar"></div>
                <div className="log-header">
                  <span className="log-year">{log.year}</span>
                  <span className={`log-phase badge-${log.colorClass}`}>{log.phase}</span>
                </div>
                <ul className="milestone-list">
                  {log.milestones.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FlightLogs;
