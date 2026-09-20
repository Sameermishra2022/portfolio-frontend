import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLayers, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: "01",
    title: "E-Commerce Suite",
    subtitle: "Full-Stack Shopping Platform",
    description: "Built with complete payment gateway, cart management, and admin dashboard for real-time inventory tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "02",
    title: "DevPulse Board",
    subtitle: "Real-time Task Manager",
    description: "Collaborative project workspace featuring live drag-and-drop boards, member tagging, and performance logs.",
    techStack: ["React", "Redux", "Express", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "03",
    title: "AI Studio UI",
    subtitle: "Generative Art Canvas",
    description: "Sleek modern interface for prompt-based image generation with dark theme layout and preset filter sliders.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
  },
];

const Projects = () => {
  const [activeId, setActiveId] = useState("02");

  return (
    <section id="projects" className="relative py-24 text-white overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
            <FiLayers className="text-sm" /> Portfolio Highlights
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400"></div>
        </div>

        {/* Accordion Container */}
        <div className="mt-16 flex flex-col gap-4 lg:flex-row lg:h-[420px]">
          {projects.map((project) => {
            const isActive = activeId === project.id;

            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveId(project.id)}
                className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ease-in-out cursor-pointer flex flex-col justify-between p-7 ${
                  isActive
                    ? "lg:flex-[3] border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                    : "lg:flex-[1] border-slate-800 hover:border-cyan-400/80 hover:shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                }`}
              >
                {/* Background Screenshot Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full object-cover transition-all duration-700 ${
                      isActive 
                        ? "scale-105 opacity-45" 
                        : "opacity-20 grayscale"
                    }`}
                  />
                  {/* Balanced Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/30"></div>
                </div>

                {/* Top Bar (Index & Action Links) */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className={`text-base font-mono font-bold transition-colors ${
                    isActive ? "text-cyan-400" : "text-slate-500"
                  }`}>
                    {project.id}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-slate-900/90 p-2 text-slate-400 border border-slate-700/60 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                      <FiGithub size={14} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full bg-slate-900/90 p-2 text-slate-400 border border-slate-700/60 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                    >
                      <FiArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Bottom Text Details */}
                <div className="relative z-10 mt-20 lg:mt-0">
                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block">
                    {project.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    {project.title}
                  </h3>

                  {/* Expandable Project Info */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    isActive ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"
                  }`}>
                    <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-md border border-cyan-400/40 bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.15)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;