import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import PilotProfile from './components/PilotProfile'
import RadarSkills from './components/RadarSkills'
import FlightHangar from './components/FlightHangar'
import FlightLogs from './components/FlightLogs'
import QAPhilosophy from './components/QAPhilosophy'
import CommsTower from './components/CommsTower'
import FlightManifest from './components/FlightManifest'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-wrapper">
      {/* Fixed Navigation Bar */}
      <Navbar />
      
      {/* Initial Viewport / Landing */}
      <Hero />

      {/* System Dashboard Section */}
      <Dashboard />

      {/* Pilot Profile Section */}
      <PilotProfile />

      {/* Radar Scanner Section */}
      <RadarSkills />

      {/* Flight Hangar Section */}
      <FlightHangar />

      {/* Flight Logs Section */}
      <FlightLogs />

      {/* QA Philosophy Section */}
      <QAPhilosophy />

      {/* Comms Tower Section */}
      <CommsTower />

      {/* Flight Manifest Section */}
      <FlightManifest />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

export default App
