import { motion } from "framer-motion";
import { 
  HiCode, 
  HiServer, 
  HiLightningBolt, 
  HiDeviceMobile,
  HiArrowNarrowRight,
  HiSparkles
} from "react-icons/hi";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building fast, interactive, and highly optimized UI layouts using React.js, Tailwind CSS, and Framer Motion for smooth experience.",
    icon: <HiCode className="text-cyan-400" />,
  },
  {
    id: "02",
    title: "Backend Development",
    description: "Designing scalable RESTful APIs, secure user authentication systems, and database schemas with Node.js, Express, and MongoDB.",
    icon: <HiServer className="text-cyan-400" />,
  },
  {
    id: "03",
    title: "Full-Stack Web Apps",
    description: "Delivering complete end-to-end web applications combining robust server backend with sleek, dynamic frontend interfaces.",
    icon: <HiLightningBolt className="text-cyan-400" />,
  },
  {
    id: "04",
    title: "Responsive UI/UX Design",
    description: "Crafting pixel-perfect, mobile-first layouts that fluidly adapt across mobile screens, tablets, and high-res desktop monitors.",
    icon: <HiDeviceMobile className="text-cyan-400" />,
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 text-white">
      
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]"></div>
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
            <HiSparkles className="text-sm" /> What I Offer
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            My Services
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400"></div>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-[0_10px_30px_-10px_rgba(34,211,238,0.15)]"
            >
              {/* Top Animated Line Border on Hover */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out group-hover:w-full"></div>

              <div>
                {/* Header Row: Icon & Number Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 text-2xl border border-slate-700/60 transition-transform duration-300 group-hover:scale-110 group-hover:bg-cyan-950/40 group-hover:border-cyan-400/40">
                    {service.icon}
                  </div>
                  <span className="text-sm font-bold tracking-wider text-slate-600 transition-colors group-hover:text-cyan-400/80">
                    {service.id}
                  </span>
                </div>

                {/* Service Details */}
                <h3 className="mt-6 text-xl font-bold text-slate-100 transition-colors group-hover:text-cyan-300">
                  {service.title}
                </h3>
                
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;