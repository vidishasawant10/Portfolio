import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants, Transition as MotionTransition } from "framer-motion";
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

const ACCENT_TEXT = "text-white";
const ACCENT_BG = "bg-red-500";

const pillTransition: MotionTransition = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 0.5,
};

const drawerSpring: MotionTransition = { type: "spring", stiffness: 300, damping: 30 };

const drawerVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: drawerSpring },
  exit: { x: "100%", opacity: 0, transition: { duration: 0.2 } },
};

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 12 },
  visible: { opacity: 1, x: 0 },
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverKey, setHoverKey] = useState<string | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const barRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const ulRef = useRef<HTMLUListElement>(null);
  const tabRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [indicator, setIndicator] = useState<{ x: number; width: number }>({ x: 0, width: 0 });

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
    if (pathname === "/more") return "more";
    const match = DESKTOP_TABS.find((t) => t.to === pathname);
    return match?.key ?? "home";
  })();

  const indicatorKey = hoverKey ?? activeKey;


  const updateIndicator = () => {
    const key = indicatorKey;
    const el = tabRefs.current[key];
    const container = ulRef.current;
    if (!el || !container) return;
    const elRect = el.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();
    setIndicator({
      x: elRect.left - contRect.left,
      width: elRect.width,
    });
  };

  useLayoutEffect(() => {
    updateIndicator();
    const ro = new ResizeObserver(updateIndicator);
    if (ulRef.current) ro.observe(ulRef.current);
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indicatorKey]);

  const tabClasses = [
    "group relative inline-flex h-11 xl:h-12 items-center justify-center gap-2",
    "px-4 xl:px-5 rounded-xl font-semibold text-sm xl:text-base leading-none",
    "border-2 border-transparent hover:border-black/60 hover:bg-black/5",
    "text-black/80 hover:text-black visited:text-black/80",
    "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
    "active:scale-[0.98] whitespace-nowrap",
  ].join(" ");

  return (
    <>
      <div
        ref={barRef}
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 border-b-2 border-black p-4 xl:px-10
        flex items-center justify-between ${isMenuOpen || isScrolled ? "bg-[#FFF5EE] backdrop-blur" : "bg-transparent"}`}
      >
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
          aria-label="Go to home"
        >
          <img src={logo} alt="Logo" className="w-24" />
        </button>

        <nav className="hidden lg:block">
        <ul ref={ulRef} className="relative flex items-center gap-3 h-11 xl:h-12">
         
          <motion.span
            aria-hidden
            className={`pointer-events-none absolute left-0 top-0 h-full rounded-lg ${ACCENT_BG} z-0`}
            style={{ width: indicator.width }}
            animate={{ x: indicator.x }}
            transition={pillTransition}
          />

          {DESKTOP_TABS.map((tab) => {
            const isActive = indicatorKey === tab.key;
            const linkColor = isActive ? ACCENT_TEXT : "text-black/80 hover:text-black";

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
                    ref={(el) => (tabRefs.current[tab.key] = el)}
                  >
                    <span className="relative z-10">{tab.label}</span>
                  </a>
                ) : (
                  <NavLink
                    to={tab.to!}
                    className={`${tabClasses} ${linkColor}`}
                    onMouseEnter={() => setHoverKey(tab.key)}
                    onMouseLeave={() => setHoverKey(null)}
                    ref={(el) => (tabRefs.current[tab.key] = el)}
                  >
                    <span className="relative z-10">{tab.label}</span>
                  </NavLink>
                )}
              </li>
            );
          })}

          <li className="relative">
            <Link
              to="/more"
              className={[
                "group relative inline-flex items-center justify-center",
                "h-11 xl:h-12 w-11 rounded-xl border-2 border-black",
                "px-0 font-semibold text-sm leading-none",
                "text-black hover:text-white",
                "transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40",
                "active:scale-[0.98]"
              ].join(" ")}
              title="More"
              onMouseEnter={() => setHoverKey("more")}
              onMouseLeave={() => setHoverKey(null)}
              ref={(el) => (tabRefs.current["more"] = el)}
            >
              <span className={`relative z-10 font-extrabold text-sm ${activeKey === "more" ? "text-white" : "text-black"}`}>+</span>
            </Link>
          </li>
        </ul>
      </nav>
        <button
          className="lg:hidden p-2 -mr-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-40"
            aria-hidden={!isMenuOpen}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <motion.aside
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              ref={drawerRef}
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 right-0 h-full w-[86vw] max-w-[360px]
                        bg-[#FCE8DD] backdrop-blur-xl shadow-2xl
                        rounded-l-2xl p-6 pt-[calc(var(--nav-h)+0.5rem)]
                        ring-1 ring-black/5"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex h-full flex-col">
                <motion.ul variants={listVariants} initial="hidden" animate="visible" className="mt-6 space-y-2">
                  {DESKTOP_TABS.map((tab) => {
                    const isMobileMore = tab.key === "contact";
                    const label = isMobileMore ? "More" : tab.label;
                    const to = isMobileMore ? "/more" : tab.to;
                    const isActive = isMobileMore ? activeKey === "more" : activeKey === tab.key;

                    if (tab.external) {
                      return (
                        <motion.li key={`m-${tab.key}`} variants={itemVariants}>
                          <a
                            href={tab.href!}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMenuOpen(false)}
                            className={[
                              "flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-colors",
                              isActive ? "bg-red-500 text-white shadow-sm" : "text-black hover:bg-black/5",
                            ].join(" ")}
                          >
                            <span>{label}</span>
                            <span className="text-current/60">›</span>
                          </a>
                        </motion.li>
                      );
                    }

                    return (
                      <motion.li key={`m-${tab.key}`} variants={itemVariants}>
                        <Link
                          to={to!}
                          onClick={() => setIsMenuOpen(false)}
                          className={[
                            "flex items-center justify-between rounded-xl px-4 py-3 text-lg font-semibold transition-colors",
                            isActive ? "bg-red-500 text-white shadow-sm" : "text-black hover:bg-black/5",
                          ].join(" ")}
                        >
                          <span>{label}</span>
                          <span className="text-current/60">›</span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                <div className="mt-auto pt-6">
                  <Link
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center
                               rounded-xl bg-red-500 text-white
                               px-4 py-3 text-lg font-semibold
                               shadow-sm hover:brightness-95 active:scale-[0.99]
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
                  >
                    Contact
                  </Link>
                </div>
              </nav>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
