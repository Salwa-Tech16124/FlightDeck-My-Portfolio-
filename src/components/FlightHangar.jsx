import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    flight: "TP-01",
    name: "TestPilot AI",
    status: "DEPLOYED",
    statusColor: "green",
    destination: "PRODUCTION",
    gate: "A1",
    description: "An automated visual QA platform with diagnostic reporting and SQLite-based scan history for long-term analytics.",
    tech: ["Python", "Streamlit", "SQLite", "AI Vision"],
    github: "https://github.com/Salwa-Tech16124/TestPilot-AI"
  },
  {
    flight: "VIVA-02",
    name: "VIVA AI Job Portal",
    status: "DEPLOYED",
    statusColor: "green",
    destination: "PRODUCTION",
    gate: "B2",
    description: "An AI-powered job portal featuring candidate dashboards, employer screening workflows, and AI-driven interview modules.",
    tech: ["React", "Node.js", "MongoDB", "Render"],
    github: "https://github.com/Salwa-Tech16124/VIVA-P"
  },
  {
    flight: "LF-03",
    name: "LunaFlow AI",
    status: "DEPLOYED",
    statusColor: "green",
    destination: "APP STORE",
    gate: "C3",
    description: "A polished Android wellness SaaS application featuring dynamic data export capabilities and a Sakura-themed UI.",
    tech: ["Java", "Android SDK", "Firebase"],
    github: "https://github.com/Salwa-Tech16124/LunaFlow-AI"
  },
  {
    flight: "SD-04",
    name: "SmartDoc AI",
    status: "DEPLOYED",
    statusColor: "green",
    destination: "PRODUCTION",
    gate: "D4",
    description: "An intelligent document processing assistant featuring luxury glassmorphism aesthetics and AI-driven insights.",
    tech: ["Python", "Streamlit", "LLMs"],
    github: "https://github.com/Salwa-Tech16124/SmartDocAI"
  }
];

const FlightHangar = () => {
  return (
    <section id="flighthangar" className="hangar-container">
      <div className="hangar-header">
        <div className="title-group">
          <h2 className="section-title">{">_"} FLIGHT HANGAR</h2>
          <p className="section-subtitle">RECENT FLIGHTS - CLEARED FOR TAKEOFF</p>
        </div>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>HANGAR BAY OPEN</span>
        </div>
      </div>

      <div className="hangar-grid">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            className="boarding-pass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="pass-left">
              <div className="pass-header">
                <span className="pass-label">FLIGHT NO.</span>
                <span className="flight-number highlight-cyan">{project.flight}</span>
              </div>
              <div className="pass-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pass-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-pass">GITHUB REPO</a>
              </div>
            </div>
            
            <div className="pass-right">
              <div className="pass-detail">
                <span className="pass-label">STATUS</span>
                <span className={`status-badge status-${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              <div className="pass-detail">
                <span className="pass-label">DEST</span>
                <span className="detail-value">{project.destination}</span>
              </div>
              <div className="pass-detail">
                <span className="pass-label">GATE</span>
                <span className="detail-value highlight-cyan">{project.gate}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlightHangar;
