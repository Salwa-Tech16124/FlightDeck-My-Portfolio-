import React from 'react';
import { motion } from 'framer-motion';

const PilotProfile = () => {
  return (
    <section id="pilotprofile" className="profile-container">
      <div className="profile-header">
        <h2 className="section-title">{">_"} PILOT DOSSIER</h2>
        <div className="status-indicator">
          <span className="pulse-dot-cyan"></span>
          <span className="cyan-text">IDENTITY VERIFIED</span>
        </div>
      </div>
      
      <div className="profile-grid">
        {/* Left: Pilot Image */}
        <motion.div 
          className="dossier-image-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="profile-image-container">
            <img src="/profile.jpg" alt="Salwa Kazmi" className="profile-image" />
            <div className="image-overlay-hud"></div>
            <div className="scan-line-horizontal"></div>
          </div>
        </motion.div>

        {/* Center: Pilot Dossier Card */}
        <motion.div 
          className="dossier-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="dossier-overlay"></div>
          <div className="dossier-content">
            <div className="dossier-row">
              <span className="dossier-label">CALLSIGN:</span>
              <span className="dossier-value highlight-cyan">SALWA-KZM</span>
            </div>
            
            <div className="dossier-row">
              <span className="dossier-label">LOCATION:</span>
              <span className="dossier-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--text-cloud-white)' }}>Noida / Ghaziabad, India</span>
            </div>
            
            <div className="dossier-row">
              <span className="dossier-label">CURRENT ROLE:</span>
              <span className="dossier-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--text-cloud-white)' }}>Associate Project Manager Intern</span>
            </div>
            
            <div className="dossier-row">
              <span className="dossier-label">EDUCATION:</span>
              <span className="dossier-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '1.2rem', color: 'var(--text-cloud-white)' }}>Master of Computer Applications (2024–2026)</span>
            </div>
          </div>
          <div className="scan-line-vertical"></div>
        </motion.div>

        {/* Right: Mission Summary Card */}
        <motion.div 
          className="dossier-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="dossier-overlay"></div>
          <div className="dossier-content">
            <div className="dossier-row">
              <span className="dossier-label">MISSION:</span>
              <p className="dossier-text highlight-green" style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                Building reliable software through quality assurance, project coordination, full-stack development, and AI-powered solutions.
              </p>
            </div>

            <div className="dossier-row">
              <span className="dossier-label">CORE STRENGTHS:</span>
              <ul className="focus-list">
                <li><span className="check-mark">✓</span> Quality Assurance</li>
                <li><span className="check-mark">✓</span> Project Coordination</li>
                <li><span className="check-mark">✓</span> Full Stack Development</li>
                <li><span className="check-mark">✓</span> AI Applications</li>
                <li><span className="check-mark">✓</span> Problem Solving</li>
              </ul>
            </div>
          </div>
          <div className="scan-line-vertical"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default PilotProfile;
