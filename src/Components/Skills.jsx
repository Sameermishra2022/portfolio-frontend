import { motion } from "framer-motion";
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiRedux, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiGit, 
  SiPostman, 
  SiBootstrap 
} from "react-icons/si";

const skills = [
  { name: "React.js", category: "Frontend", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "JavaScript", category: "Language", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Tailwind CSS", category: "Styling", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "Redux", category: "State Management", icon: <SiRedux className="text-[#764ABC]" /> },
  { name: "Node.js", category: "Backend", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "Express.js", category: "Backend", icon: <SiExpress className="text-slate-200" /> },
  { name: "MongoDB", category: "Database", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Git & GitHub", category: "Tools", icon: <SiGit className="text-[#F05032]" /> },
  { name: "Postman", category: "API Testing", icon: <SiPostman className="text-[#FF6C37]" /> },
  { name: "Bootstrap", category: "Styling", icon: <SiBootstrap className="text-[#7952B3]" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 text-white">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Skills & Stack
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Technologies & Tools
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400"></div>
        </div>

        {/* Compact Square Cards Grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="group relative flex h-36 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/40 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900/80 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            >
              {/* Corner shape (Hidden by default, clear from icon circle on hover) */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/20 opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-90"></div>

              {/* Circular Icon Box */}
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-2xl transition-all duration-300 group-hover:border-cyan-400/60 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.3)]">
                {skill.icon}
              </div>

              {/* Title & Category */}
              <h3 className="relative z-10 mt-3 text-xs font-semibold text-slate-200 transition-colors group-hover:text-cyan-400">
                {skill.name}
              </h3>
              <span className="relative z-10 mt-0.5 text-[10px] font-medium text-slate-500">
                {skill.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;