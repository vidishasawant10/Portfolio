import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type LoaderProps = { label?: string; className?: string };
export function Loader({ label = "Loading…", className = "" }: LoaderProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 3 dots – efficient color/transform only */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-black"
          initial={{ y: 0, opacity: 0.8 }}
          animate={{ y: [0, -6, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  );
}

type OverlayProps = { show: boolean; label?: string; className?: string };
export function LoaderOverlay({ show, label, className = "" }: OverlayProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`fixed inset-0 z-[80] grid place-items-center bg-white/80 backdrop-blur-sm ${className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="rounded-2xl border-2 border-black bg-white px-5 py-4 shadow-[6px_6px_0_#000]">
            <Loader label={label} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
