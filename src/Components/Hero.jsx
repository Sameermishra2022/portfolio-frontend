import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import sameer from "../assets/sameer.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-12 text-white lg:px-10">

      {/* Dark Ambient Background Glows */}
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:items-center">

        {/* Badge - Mobile/Tablet View (Top-most & Centered) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden flex justify-center w-full mt-2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            Available for Work
          </div>
        </motion.div>

        {/* Profile Section - Mobile/Tablet Compact Heights & Sizing */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto flex h-[310px] w-full max-w-xl items-center justify-center sm:h-[370px] lg:order-2 lg:h-[500px]"
        >
          {/* Inner Circle Soft Glow Effect */}
          <div className="pointer-events-none absolute h-[240px] w-[240px] sm:h-[310px] sm:w-[310px] lg:h-[370px] lg:w-[370px] rounded-full bg-cyan-500/25 blur-3xl animate-pulse [animation-duration:4s]"></div>

          {/* Inner Rotating Solid Circle (Low Opacity - 14s) */}
          <div className="absolute h-[250px] w-[250px] sm:h-[320px] sm:w-[320px] lg:h-[385px] lg:w-[385px] animate-[spin_14s_linear_infinite] rounded-full border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]"></div>

          {/* Profile Image Container */}
          <div className="relative h-[220px] w-[220px] sm:h-[290px] sm:w-[290px] lg:h-[350px] lg:w-[350px] overflow-hidden rounded-full border-4 border-cyan-400/80 bg-slate-900 p-1 shadow-2xl shadow-cyan-500/30">
            <img
              src={sameer}
              alt="Sameer Mishra"
              className="h-full w-full rounded-full object-cover object-[50%_38%] brightness-[0.95] contrast-[1.05]"
            />
          </div>
        </motion.div>

        {/* Text & Buttons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center text-center lg:order-1 lg:items-start lg:text-left"
        >
          {/* Badge - Desktop Only View */}
          <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-400 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            Available for Work
          </div>

          <h1 className="text-4xl font-['Inter'] font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Sameer <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Mishra</span>
          </h1>

          <h2 className="mt-3 text-xl font-bold tracking-tight text-cyan-400 sm:text-2xl lg:text-3xl">
            MERN Stack Developer
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base lg:text-lg">
            Building fast, scalable, and visually appealing web applications with Modern JavaScript, React, Node.js, and MongoDB.
          </p>

          {/* Action Buttons */}
         <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
  <a
    href="https://drive.google.com/uc?export=download&id=1Aneo4IGP4pW3q-ga9HFFj2QrhzCxDrIN"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex h-11 w-40 items-center justify-center gap-2 rounded-xl border border-cyan-400 bg-cyan-500 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900 hover:text-white hover:shadow-md cursor-pointer"
  >
    <span>Download CV</span>
    <FaDownload className="transition-transform duration-300 group-hover:translate-y-0.5" size={13} />
  </a>
  
  <a
    href="#contact"
    className="flex h-11 w-40 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:text-white"
  >
    Contact Me
  </a>
</div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;