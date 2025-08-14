import React from "react";
import { motion } from "framer-motion";
import profile from "./ProfilePhoto.jpg";
import brush from "./Brush.png";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease, delay: d } },
});

// reuse for the mask
const brushMask: React.CSSProperties = {
  WebkitMaskImage: `url(${brush})`,
  maskImage: `url(${brush})`,
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "cover",
  maskSize: "cover",
  WebkitMaskPosition: "center",
  maskPosition: "center",
};

export default function Home() {
  return (
    <section
      id="home"
      className="overflow-x-clip min-h-[calc(100svh-var(--nav-h)-1rem)] flex items-center"
    >
      <div className="mx-auto w-full px-6 md:px-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left: text */}
          <div className="md:w-1/2 w-full text-center md:text-left">
            <motion.h1 variants={fadeUp(0)} className="text-3xl md:text-5xl font-extrabold leading-tight">
              Hi there! I&apos;m <span className="px-2 rounded-xl bg-black text-white">Vidisha Sawant</span>
            </motion.h1>

            <motion.p variants={fadeUp(0.05)} className="mt-4 text-base md:text-lg text-black/80">
              Software Engineer (MS, Pace University) with industry experience at Los Angeles Dodgers and
              WelSpot Inc. I build reliable, scalable products across React, Node/Java, and cloud. Explore
              my work—where performance meets clean UX.
            </motion.p>

            <motion.h3 variants={fadeUp(0.1)} className="mt-5 font-bold text-lg">
              See my work & connect with me
            </motion.h3>

            <motion.div variants={fadeUp(0.15)} className="mt-4 flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://github.com/vidishasawant10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-black text-white shadow-[4px_4px_0_#000] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition-transform active:scale-95"
              >
                <svg height="22" viewBox="0 0 496 512" fill="currentColor" aria-hidden="true">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6..."></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vidisha-vijay-sawant"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-[#0077b5] text-white shadow-[4px_4px_0_#000] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition-transform active:scale-95"
              >
                <svg viewBox="0 0 448 512" height="22" fill="currentColor" aria-hidden="true">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5..."></path>
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right: brush-masked photo with offset frame */}
          <motion.div className="md:w-1/2 w-full flex justify-center md:justify-end" variants={fadeUp(0.1)}>
            <motion.div
              className="relative w-[86vw] md:w-[54vw] max-w-[1000px] aspect-[16/9]"
              initial={{ opacity: 0, scale: 0.98, x: 12 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.4, ease }}
            >


              {/* masked photo: the brush defines the visible shape */}
              <motion.div
                aria-label="Photo of Vidisha Sawant"
                className="w-full h-full"
                style={{
                  ...brushMask,
                  backgroundImage: `url(${profile})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
