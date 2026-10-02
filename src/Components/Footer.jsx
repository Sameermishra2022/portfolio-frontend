import { FaArrowUp, FaHeart } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-900 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
        
        {/* Left Side: Copyright with Light Green Text & Red Heart */}
        <p className="flex items-center gap-1.5 text-xs font-bold text-cyan-400">
          <span>© {new Date().getFullYear()} Designed & Built with</span>
          <FaHeart className="text-red-500" size={13} />
          <span>by Sameer</span>
        </p>

        {/* Right Side: Back to top button (Original Position) */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-xl border-2 border-slate-800 bg-slate-900/60 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:border-emerald-400 hover:text-emerald-400 cursor-pointer"
        >
          <span>Back to Top</span>
          <FaArrowUp size={12} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;