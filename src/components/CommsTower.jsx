import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CommsTower = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("TRANSMITTING...");

    const formPayload = new FormData();
    // -------------------------------------------------------------------
    // IMPORTANT: Go to https://web3forms.com/ and enter your email
    // They will email you an Access Key. Paste that key below replacing
    // the "YOUR_ACCESS_KEY_HERE" text.
    // -------------------------------------------------------------------
    formPayload.append("access_key", "a579448a-54c0-4cc0-a6e4-23a153325150");
    formPayload.append("name", formData.name);
    formPayload.append("email", formData.email);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload
      });

      const data = await response.json();

      if (data.success) {
        setStatus("TRANSMISSION SUCCESSFUL");
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus("TRANSMISSION FAILED. CHECK LOGS.");
        console.error("Error submitting form:", data);
      }
    } catch (error) {
      setStatus("TRANSMISSION ERROR. CONNECTION LOST.");
      console.error("Fetch error:", error);
    }
  };

  const channels = [
    { id: "01", label: "LINKEDIN NETWORK", link: "https://www.linkedin.com/in/salwa-kazmi-731874248", value: "in/salwa-kazmi" },
    { id: "02", label: "GITHUB REPOSITORY", link: "https://github.com/Salwa-Tech16124", value: "Salwa-Tech16124" },
    { id: "03", label: "DIRECT EMAIL", link: "mailto:salwakazmi1505@gmail.com", value: "salwakazmi1505@gmail.com" },
    { id: "04", label: "CURRENT LOCATION", link: null, value: "India [GPS: ACTIVE]" }
  ];

  return (
    <section id="commstower" className="comms-container">
      <div className="comms-header">
        <div className="title-group">
          <h2 className="section-title">{">_"} COMMS TOWER</h2>
          <p className="section-subtitle">SECURE CONNECTION ESTABLISHED</p>
        </div>
        <div className="status-indicator">
          <span className="pulse-dot"></span>
          <span>COMMUNICATION CHANNELS ONLINE</span>
        </div>
      </div>

      <div className="comms-grid">
        {/* Left: Contact Channels */}
        <motion.div 
          className="comms-channels-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="panel-header">
            <h3>CONTACT CHANNELS</h3>
            <span className="signal-bars">
              <i></i><i></i><i></i><i></i>
            </span>
          </div>
          <div className="channels-list">
            {channels.map((ch, idx) => (
              <div className="channel-item" key={idx}>
                <div className="channel-id">CH-{ch.id}</div>
                <div className="channel-info">
                  <span className="channel-label">{ch.label}</span>
                  {ch.link ? (
                    <a href={ch.link} target="_blank" rel="noopener noreferrer" className="channel-value link-active">
                      {ch.value}
                    </a>
                  ) : (
                    <span className="channel-value">{ch.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Transmission Console */}
        <motion.div 
          className="comms-transmission-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="panel-header">
            <h3>TRANSMISSION CONSOLE</h3>
            <span className="encryption-status">ENCRYPTED</span>
          </div>
          
          <form className="transmission-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">IDENTIFICATION (NAME)</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                placeholder="Enter Callsign"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">RETURN FREQUENCY (EMAIL)</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                placeholder="Enter Comm Link"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">PAYLOAD (MESSAGE)</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-input textarea" 
                placeholder="Enter Transmission Data..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn-transmit">
              <span className="transmit-icon">⚡</span>
              TRANSMIT MESSAGE
            </button>

            {status && (
              <div className={`transmission-status ${status.includes("SUCCESSFUL") ? "status-success" : status.includes("TRANSMITTING") ? "status-loading" : "status-error"}`}>
                {status}
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CommsTower;
