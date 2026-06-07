import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('groundcontrol');

  const navItems = [
    { label: 'Ground Control', id: 'groundcontrol' },
    { label: 'Dashboard', id: 'dashboard' },
    { label: 'Pilot Profile', id: 'pilotprofile' },
    { label: 'Radar', id: 'radar' },
    { label: 'Hangar', id: 'flighthangar' },
    { label: 'Logs', id: 'flightlogs' },
    { label: 'QA Safety', id: 'safetychecks' },
    { label: 'Comms', id: 'commstower' },
    { label: 'Manifest', id: 'manifest' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      let currentActive = 'groundcontrol';

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= (sectionTop - 200)) {
            currentActive = section.id;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Offset for navbar
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-logo">
        <span>✇</span> FLIGHTDECK
      </div>
      
      <ul className="nav-links">
        {navItems.map((item, index) => (
          <li key={index}>
            <a 
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              className={activeSection === item.id ? 'active-link' : ''}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
