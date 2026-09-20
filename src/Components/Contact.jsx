import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaWhatsapp, 
  FaUser, 
  FaCommentAlt, 
  FaTag,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage({
          type: "success",
          text: "Your Message Sent Successfully",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setStatusMessage(null), 4000);
      } else {
        setStatusMessage({
          type: "error",
          text: data.message || "Data save nahi ho paya!",
        });
      }
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Server connect nahi ho pa raha!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative pb-28 pt-24 text-white overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]"></div>
      <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let's Work Together
          </h2>
          <div className="mt-3 h-1 w-12 rounded-full bg-cyan-400"></div>
        </div>

        {/* Contact Layout */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          
          {/* Left Side Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-between space-y-8 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-md lg:col-span-2 hover:border-slate-700 transition-all duration-300"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">Contact Info</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                Feel free to fill out the form or reach out directly via email, WhatsApp, or social networks.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-medium">Email</span>
                    <a href="mailto:your.email@gmail.com" className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                      mishrasameer1419@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-slate-800/80 bg-slate-950/60 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-cyan-400">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block uppercase font-medium">Location</span>
                    <span className="text-sm font-semibold text-slate-200">
                      Karnataka, Bangalore
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
                Connect With Me
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:border-2 hover:border-emerald-500 hover:text-emerald-400 transition-all cursor-pointer"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-400 hover:border-2 hover:border-cyan-400 hover:text-cyan-400 transition-all cursor-pointer"
                >
                  <FaTwitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-md lg:col-span-3 hover:border-slate-700 transition-all duration-300"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Subject
                </label>
                <div className="relative">
                  <FaTag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Your Inquiry"
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-2">
                  Message
                </label>
                <div className="relative">
                  <FaCommentAlt className="absolute left-3.5 top-4 text-slate-500" size={14} />
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project requirements..."
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 pl-10 pr-4 py-3 text-sm text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Glassmorphic Button */}
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full overflow-hidden rounded-xl border border-cyan-400/50 bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 p-[1px] font-bold text-slate-950 transition-all duration-300 active:scale-[0.99] cursor-pointer disabled:opacity-50"
              >
                <div className="flex w-full items-center justify-center gap-2.5 rounded-[11px] bg-slate-950 px-6 py-3.5 text-sm font-semibold text-cyan-400 transition-all duration-300 group-hover:bg-transparent group-hover:text-slate-950">
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={14} />
                </div>
              </button>

            </form>

          </motion.div>

        </div>

      </div>

      {/* Footer aur Contact section ke beech khali space me Floating Dark Green Popup */}
      <AnimatePresence>
        {statusMessage && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 w-auto max-w-md px-4"
          >
            <div
              className={`flex items-center gap-3 rounded-xl border px-5 py-3 text-sm font-medium shadow-2xl backdrop-blur-md ${
                statusMessage.type === "success"
                  ? "border-emerald-600/60 bg-emerald-950/90 text-emerald-200"
                  : "border-red-600/60 bg-red-950/90 text-red-200"
              }`}
            >
              {statusMessage.type === "success" ? (
                <FaCheckCircle className="text-emerald-400 shrink-0" size={18} />
              ) : (
                <FaExclamationCircle className="text-red-400 shrink-0" size={18} />
              )}
              <span className="whitespace-nowrap">{statusMessage.text}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Contact;