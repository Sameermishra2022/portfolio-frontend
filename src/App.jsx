import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Background Ambient Glows (Absolute Positioned - No Fixed Blur Glitch) */}
      <div className="pointer-events-none absolute -left-40 top-32 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px] z-0" />
      <div className="pointer-events-none absolute -right-40 top-[35%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px] z-0" />
      <div className="pointer-events-none absolute left-1/4 top-[70%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[130px] z-0" />

      {/* Main Page Components */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App


// "min-h-screen bg-slate-950 text-slate-100 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]"