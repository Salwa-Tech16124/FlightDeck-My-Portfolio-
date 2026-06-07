import React from 'react';
import { motion } from 'framer-motion';

const RadarSkills = () => {
  const categories = [
    { title: "FRONTEND", skills: ["React", "HTML", "CSS", "JavaScript", "Vite"] },
    { title: "BACKEND", skills: ["Python", "Node.js"] },
    { title: "TESTING", skills: ["QA", "Selenium", "PyTest", "API Testing"] },
    { title: "DATABASE", skills: ["MongoDB", "SQLite"] },
    { title: "AI/ML", skills: ["LLM Integration", "Document Processing", "AI Assistants"] },
    { title: "TOOLS", skills: ["Git", "GitHub", "Firebase", "Render"] }
  ];

  // Random positions for radar blips within the circular bounds
  const blips = [
    { top: '25%', left: '35%' },
    { top: '55%', left: '75%' },
    { top: '75%', left: '45%' },
    { top: '40%', left: '20%' },
    { top: '80%', left: '65%' },
    { top: '35%', left: '60%' },
    { top: '65%', left: '25%' },
    { top: '20%', left: '55%' }
  ];

  return (
    <section id="radar" className="radar-container">
      <div className="radar-header">
        <h2 className="section-title">{">_"} RADAR SCANNER</h2>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>TRACKING ACTIVE TARGETS</span>
        </div>
      </div>

      <div className="radar-grid">
        {/* Left: Radar Display */}
        <motion.div 
          className="radar-display-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="radar-screen">
            <div className="radar-grid-lines"></div>
            <div className="radar-sweep"></div>
            <div className="radar-center"></div>
            {blips.map((blip, idx) => (
              <div 
                key={idx} 
                className="radar-blip" 
                style={{ top: blip.top, left: blip.left, animationDelay: `${idx * 0.5}s` }}
              ></div>
            ))}
          </div>
        </motion.div>

        {/* Right: Skill Categories Panel */}
        <motion.div 
          className="skills-panel"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="skills-hud">
            {categories.map((cat, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">[{cat.title}]</h3>
                <div className="skills-list">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RadarSkills;
