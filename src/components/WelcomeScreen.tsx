import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "./Loader";

type Props = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  minDurationMs?: number;
  storageKey?: string;       
};

export default function WelcomeScreen({
  children,
  title = "Welcome",
  subtitle = "Loading portfolio…",
  minDurationMs = 1300,
  storageKey = "vs_first_visit_done",
}: Props) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // only run in browser
    if (typeof window === "undefined") return;
    const seen = localStorage.getItem(storageKey) === "1";
    if (!seen) {
      setShow(true);
      const t = setTimeout(() => {
        localStorage.setItem(storageKey, "1");
        setShow(false);
      }, minDurationMs);
      return () => clearTimeout(t);
    }
  }, [minDurationMs, storageKey]);

  // lock scroll while showing
  useEffect(() => {
    if (!show) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [show]);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-[#FFF5EE]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="rounded-3xl border-2 border-black bg-white px-6 py-6 text-center shadow-[10px_10px_0_#000] max-w-sm mx-auto"
              initial={{ scale: 0.95, y: 8, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 1.02, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">{title}</h1>
              <p className="mt-1 text-black/70">{subtitle}</p>

              <div className="mt-5 flex items-center justify-center">
                <Loader label="Preparing…" />
              </div>

              {/* Optional 'Skip' button for impatient users */}
              <button
                onClick={() => {
                  localStorage.setItem(storageKey, "1");
                  setShow(false);
                }}
                className="mt-5 inline-flex items-center justify-center rounded-xl border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
              >
                Enter site
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keep app content mounted; hide from screen readers while splash is up */}
      <div aria-hidden={show}>{children}</div>
    </>
  );
}
