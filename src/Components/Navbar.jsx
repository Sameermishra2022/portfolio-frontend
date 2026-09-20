import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isClickingRef = useRef(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isClickingRef.current) return;

      // Contact ko bhi calculation array me add kar rahe hain
      const sections = [...navLinks.map((link) => link.href.substring(1)), "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    isClickingRef.current = true;
    setActiveSection(sectionId);
    setIsOpen(false);

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 py-4 shadow-xl shadow-slate-950/80 backdrop-blur-md"
          : "bg-slate-950 py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        
        {/* Monogram Logo */}
        <a 
          href="#home" 
          onClick={() => handleNavClick("home")} 
          className="group flex items-center"
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border-2 border-sky-400/60 bg-slate-900/40 text-blue-500 shadow-[0_0_15px_rgba(56,189,248,0.15)] backdrop-blur-md transition-all duration-300 group-hover:border-sky-400 group-hover:bg-sky-400 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]">
            <div className="flex items-center justify-center font-black tracking-normal text-lg select-none">
              <span className="text-blue-500 transition-colors duration-300 group-hover:text-slate-950">
                S
              </span>
              <span className="text-blue-500 transition-colors duration-300 group-hover:text-slate-950">
                M
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-8 min-[769px]:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(sectionId)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-400"
                } after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-cyan-400 after:shadow-[0_0_8px_#22d3ee] after:transition-all after:duration-300 ${
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Contact Button */}
        <div className="hidden min-[769px]:block">
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className={`rounded-xl border-2 px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeSection === "contact"
                ? "border-cyan-400 bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                : "border-cyan-500/30 bg-slate-900/90 text-white shadow-md hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Glassmorphism Menu Button (<= 768px) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
          aria-label="Toggle Navigation"
          className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-sky-400/60 bg-slate-900/40 text-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.15)] backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:bg-sky-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] min-[769px]:hidden active:scale-95 select-none"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div 
          onClick={(e) => e.stopPropagation()} 
          className="px-6 pt-3 pb-2 min-[769px]:hidden"
        >
          <div className="mx-auto max-w-7xl rounded-xl border border-cyan-500/30 bg-slate-900/90 p-4 backdrop-blur-md shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(sectionId)}
                    className={`flex items-center justify-center rounded-lg px-4 py-3 text-center text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500/15 border border-cyan-400/40 text-cyan-400 font-semibold"
                        : "text-slate-200 hover:bg-slate-800/60 hover:text-cyan-400"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => handleNavClick("contact")}
                  className={`block w-full rounded-lg border py-3 text-center text-base font-medium transition-all duration-200 ${
                    activeSection === "contact"
                      ? "border-cyan-400 bg-cyan-500 text-slate-950 font-semibold"
                      : "border-cyan-500/40 bg-slate-800/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;