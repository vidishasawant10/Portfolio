import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./logo3.png";

type Tab = {
  key: string;
  label: string;
  to?: string;
  href?: string;
  external?: boolean;
};

const DESKTOP_TABS: Tab[] = [
  { key: "home", label: "Home", to: "/" },
  { key: "about", label: "About", to: "/about" },
  { key: "work", label: "Education & Experience", to: "/work" },
  { key: "projects", label: "Projects", to: "/projects" },
  { key: "contact", label: "Contact", to: "/contact" },
  {
    key: "resume",
    label: "Resume",
    href: "https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing",
    external: true,
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverKey, setHoverKey] = useState<string | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const barRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const setVar = () => {
      document.documentElement.style.setProperty("--nav-h", `${el.offsetHeight}px`);
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    window.addEventListener("resize", setVar);
    window.addEventListener("orientationchange", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
      window.removeEventListener("orientationchange", setVar);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const activeKey: string = (() => {
    if (pathname === "/") return "home";
    const match = DESKTOP_TABS.find((t) => t.to === pathname);
    return match?.key ?? "home";
  })();

  const indicatorKey = hoverKey ?? activeKey;

  const tabClasses =
    "group relative inline-flex items-center justify-center gap-2 " +
    "px-4 md:px-5 py-2.5 md:py-3 rounded-xl font-semibold text-base md:text-lg leading-none " +
    "border-2 border-transparent hover:border-black/60 hover:bg-black/5 " +
    "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 " +
    "active:scale-[0.98]";

  return (
    <>
      <div
        ref={barRef}
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-black p-4 md:px-10
        flex items-center justify-between ${
          isMenuOpen || isScrolled ? "bg-[#FFF5EE] backdrop-blur" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
          aria-label="Go to home"
        >
          <img src={logo} alt="Logo" className="w-24" />
        </button>

        <nav className="hidden md:block">
          <ul className="relative flex items-center gap-3">
            {DESKTOP_TABS.map((tab) => {
              const isActive = indicatorKey === tab.key;
              const linkColor = isActive ? "text-black" : "text-black/70 hover:text-black";

              const AnchorContent = (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-lg bg-black/10"
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </>
              );

              return (
                <li key={tab.key} className="relative">
                  {tab.external ? (
                    <a
                      href={tab.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${tabClasses} ${linkColor}`}
                      onMouseEnter={() => setHoverKey(tab.key)}
                      onMouseLeave={() => setHoverKey(null)}
                    >
                      {AnchorContent}
                    </a>
                  ) : (
                    <NavLink
                      to={tab.to!}
                      className={`${tabClasses} ${linkColor}`}
                      onMouseEnter={() => setHoverKey(tab.key)}
                      onMouseLeave={() => setHoverKey(null)}
                    >
                      {AnchorContent}
                    </NavLink>
                  )}
                </li>
              );
            })}

            <li className="relative">
              <Link
                to="/more"
                className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center
                           font-extrabold text-sm hover:bg-black hover:text-white transition-colors
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                title="More"
                onMouseEnter={() => setHoverKey(null)}
              >
                +
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden p-2 -mr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50" />

        <aside
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          ref={drawerRef}
          className={`absolute top-0 right-0 h-full w-72 max-w-[85vw] bg-[#FCE8DD] border-l-2 border-black
          p-6 pt-[calc(var(--nav-h)+0.5rem)] shadow-xl transition-transform duration-200
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav>
            <ul className="space-y-5 mt-10">
              <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold">Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold">About</Link></li>
              <li><Link to="/work" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold">Education & Experience</Link></li>
              <li><Link to="/projects" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold">Projects</Link></li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-lg font-bold"
                >
                  Resume
                </a>
              </li>
              <li><Link to="/more" onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold">More</Link></li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block border-2 border-black px-4 py-2 rounded-xl font-bold hover:bg-black/5"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Navbar;
