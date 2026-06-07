import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Array of roles to cycle through the typing effect
  const roles = [
    "Associate Project Manager Intern",
    "QA Engineer Aspirant",
    "Full Stack Developer",
    "AI Solutions Builder"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing Effect Logic
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullRole = roles[currentRoleIndex];

    const handleTyping = () => {
      // If full word is typed, pause and then start deleting
      if (!isDeleting && currentText === currentFullRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } 
      // If word is completely deleted, move to the next word
      else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      } 
      // Handle the actual typing or deleting of characters
      else {
        const nextText = isDeleting
          ? currentFullRole.substring(0, currentText.length - 1)
          : currentFullRole.substring(0, currentText.length + 1);
        
        setCurrentText(nextText);
      }
    };

    const typingTimer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="groundcontrol" className="hero-container">
      
      {/* Ambient Radar Background (Pure CSS) */}
      <div className="radar-bg">
        <div className="radar-pulse"></div>
        <div className="radar-pulse"></div>
      </div>

      {/* Main Hero Content with Framer Motion Intro */}
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="hero-greeting">{">_ STATUS: AVAILABLE FOR OPPORTUNITIES"}</p>
        
        <h1 className="hero-name">SALWA KAZMI</h1>
        
        {/* Dynamic Typing Roles */}
        <div className="hero-roles">
          <span>{currentText}</span>
          <span className="cursor"></span>
        </div>

        {/* Welcome Briefing */}
        <motion.div 
          className="hero-briefing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="welcome-text">
            <strong>MISSION:</strong> Building reliable software through quality assurance, project coordination, and intelligent development.
            <br/><br/>
            Welcome to my aviation-themed portfolio! To help you navigate my airspace, here is your translation manual:
          </p>
          <div className="manual-grid">
            <div className="manual-item"><span className="term">Pilot Profile</span> <span className="arrow">→</span> About Me</div>
            <div className="manual-item"><span className="term">Radar Scanner</span> <span className="arrow">→</span> Tech Skills</div>
            <div className="manual-item"><span className="term">Flight Hangar</span> <span className="arrow">→</span> Projects</div>
            <div className="manual-item"><span className="term">Flight Logs</span> <span className="arrow">→</span> Experience</div>
            <div className="manual-item"><span className="term">Comms Tower</span> <span className="arrow">→</span> Contact</div>
            <div className="manual-item"><span className="term">Flight Manifest</span> <span className="arrow">→</span> Resume</div>
          </div>
        </motion.div>

        {/* CTA Actions */}
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#dashboard" className="btn-primary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Request Clearance
          </a>
          <a href="https://go.fliplink.me/view/B7D5DD6E-4F64-421D-ACD2-3365E51AF577" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            View Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Tower Announcements Ticker */}
      <div className="ticker-container">
        <div className="ticker-label">TOWER MSG:</div>
        <div className="ticker-scroll">
          <div className="ticker-content">
            <span className="ticker-item">• SmartDoc AI Successfully Deployed</span>
            <span className="ticker-item">• Open To QA Opportunities</span>
            <span className="ticker-item">• 30+ GitHub Repositories</span>
            <span className="ticker-item">• AI-Powered Full Stack Projects</span>
            {/* Duplicated for infinite scroll effect */}
            <span className="ticker-item">• SmartDoc AI Successfully Deployed</span>
            <span className="ticker-item">• Open To QA Opportunities</span>
            <span className="ticker-item">• 30+ GitHub Repositories</span>
            <span className="ticker-item">• AI-Powered Full Stack Projects</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
