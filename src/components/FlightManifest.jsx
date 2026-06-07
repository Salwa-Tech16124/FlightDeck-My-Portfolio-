import React from 'react';
import { motion } from 'framer-motion';

const FlightManifest = () => {
  return (
    <section id="manifest" className="manifest-container">
      <div className="manifest-header">
        <div className="title-group">
          <h2 className="section-title">{">_"} FLIGHT MANIFEST</h2>
          <p className="section-subtitle">PILOT CREDENTIALS & MISSION SUMMARY</p>
        </div>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>CREDENTIALS VERIFIED</span>
        </div>
      </div>

      <div className="manifest-grid">
        {/* Card 1: Pilot Information */}
        <motion.div 
          className="manifest-card passport-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="card-header">
            <h3>PILOT DOSSIER</h3>
            <span className="watermark">PASSPORT</span>
          </div>
          <div className="card-body">
            <div className="info-row">
              <span className="info-label">IDENT:</span>
              <span className="info-value">Salwa Kazmi</span>
            </div>
            <div className="info-row">
              <span className="info-label">ROLE:</span>
              <span className="info-value">Associate Project Manager Intern</span>
            </div>
            <div className="info-row">
              <span className="info-label">BASE:</span>
              <span className="info-value">India</span>
            </div>
            <div className="info-row">
              <span className="info-label">EDUCATION:</span>
              <span className="info-value">MCA</span>
            </div>
            <div className="info-row">
              <span className="info-label">GITHUB:</span>
              <span className="info-value highlight-cyan">Salwa-Tech16124</span>
            </div>
            <div className="info-row">
              <span className="info-label">LINKEDIN:</span>
              <span className="info-value highlight-cyan">salwa-kazmi-731874248</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Mission Statistics */}
        <motion.div 
          className="manifest-card stats-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="card-header">
            <h3>MISSION STATS</h3>
          </div>
          <div className="card-body">
            <div className="stat-grid">
              <div className="stat-item">
                <span className="stat-num">20+</span>
                <span className="stat-label">TOTAL PROJECTS</span>
              </div>
              <div className="stat-item">
                <span className="stat-num highlight-green">04</span>
                <span className="stat-label">AI SYSTEMS</span>
              </div>
              <div className="stat-item">
                <span className="stat-num highlight-cyan">03</span>
                <span className="stat-label">QA DOMAINS</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">12+</span>
                <span className="stat-label">TECH STACK</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Community & Learning */}
        <motion.div 
          className="manifest-card certs-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="card-header">
            <h3>COMMUNITY & LEARNING</h3>
          </div>
          <div className="card-body">
            <ul className="cert-list">
              <li>
                <span className="cert-icon">🌐</span>
                <span><strong>Core Member</strong> – NEXUS: Bridging Opportunities</span>
              </li>
              <li>
                <span className="cert-icon">🎤</span>
                <span><strong>Tech Host</strong> – Workshops & India Tech Events</span>
              </li>
              <li>
                <span className="cert-icon">💡</span>
                <span><strong>E-Cell Member</strong> – Entrepreneurship Cell (Graduation)</span>
              </li>
              <li>
                <span className="cert-icon">📚</span>
                <span><strong>Learning Focus:</strong> Software QA & Full Stack AI Dev</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 4: Resume Download Terminal */}
        <motion.div 
          className="manifest-card terminal-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="terminal-header">
            <div className="terminal-dots">
              <span></span><span></span><span></span>
            </div>
            <span>secure-terminal-bash</span>
          </div>
          <div className="terminal-body">
            <p className="cmd-line"><span className="prompt">guest@flightdeck:~$</span> request_manifest --format pdf</p>
            <p className="cmd-output">Retrieving encrypted dossier...</p>
            <p className="cmd-output">Access granted. Payload ready.</p>
            <p className="cmd-line"><span className="prompt">guest@flightdeck:~$</span> <span className="cursor-blink">_</span></p>
            
            <a href="https://go.fliplink.me/view/B7D5DD6E-4F64-421D-ACD2-3365E51AF577" target="_blank" rel="noopener noreferrer" className="btn-download">
              <span className="download-icon">👁</span>
              VIEW FLIGHT MANIFEST
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlightManifest;
