import { FiCode, FiDatabase, FiServer } from "react-icons/fi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative py-20 text-white overflow-hidden">
      
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[130px]"></div>
      <div className="pointer-events-none absolute left-0 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            About Me
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Passionate About Building Impactful Web Products
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400"></div>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Side: Animated Tech Graphic with Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto h-[480px] w-full max-w-md"
          >
            {/* Pulsing Backlight */}
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>

            {/* Rotating Outer Ring */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20 bg-slate-900/30 backdrop-blur-md animate-[spin_20s_linear_infinite]"></div>

            {/* Inner Dashed Ring */}
            <div className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-400/40"></div>

            {/* Central Logo Box */}
            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-500/30 bg-slate-900/80 shadow-2xl shadow-cyan-500/30 backdrop-blur-xl">
              <FiCode className="text-cyan-400 animate-pulse" size={54} />
            </div>

            {/* Floating Card: Frontend */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-16 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                <FiCode size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Frontend</p>
                <p className="text-xs text-slate-400">React.js / Next.js</p>
              </div>
            </motion.div>

            {/* Floating Card: Backend */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 top-32 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                <FiServer size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Backend</p>
                <p className="text-xs text-slate-400">Node.js / Express</p>
              </div>
            </motion.div>

            {/* Floating Card: Database */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 left-8 flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 shadow-xl backdrop-blur-md"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-400">
                <FiDatabase size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Database</p>
                <p className="text-xs text-slate-400">MongoDB</p>
              </div>
            </motion.div>

            {/* Stack Pill Badge */}
            <div className="absolute bottom-6 right-8 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-cyan-400 backdrop-blur-md">
              MERN Stack
            </div>
          </motion.div>

          {/* Right Side: Clean Modern Mindset Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed sm:text-xl font-medium">
              I am a <span className="text-cyan-400 font-semibold">MERN Stack Developer</span> driven by a passion for designing fast, scalable, and intuitive digital experiences.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              My expertise centers around engineering modern user interfaces with React and Tailwind CSS, backed by robust server architectures using Node.js, Express, and MongoDB databases.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              I prioritize clean code organization, efficient database management, and seamless performance to transform complex problems into sleek, practical web applications.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;