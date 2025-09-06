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
        className=" page-shell flex items-center justify-center"
      >
      <div className="mx-auto w-full px-6 md:px-10 mt-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="md:w-1/2 w-full text-center md:text-left">
            <motion.h1 variants={fadeUp(0)} className="text-3xl md:text-5xl font-extrabold leading-tight">
              Hi there! I&apos;m Vidisha Sawant
            </motion.h1>

            <motion.p variants={fadeUp(0.05)} className="mt-4 text-base md:text-xl text-black/80">
              Software Engineer (MS, Pace University) with 2 years ofindustry experience at Phinite.ai, Los Angeles Dodgers and
              WelSpot Inc. I build reliable, scalable products across React, Node.js, Java, Python, TypeScript, and Cloud Infrastructre. Explore
              my work—where performance meets clean UX.
            </motion.p>

            <motion.h3 variants={fadeUp(0.1)} className="mt-5 font-bold text-lg">
              See my work & connect with me
            </motion.h3>

            <motion.div variants={fadeUp(0.15)} className="mt-4 flex items-center justify-center md:justify-center gap-4">
              <a
                href="https://github.com/vidishasawant10"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-black text-white shadow-[4px_4px_0_#000] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition-transform active:scale-95"
              >
                <svg height="1.6em" viewBox="0 0 496 512" fill="white">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/vidisha-vijay-sawant"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-[#0077b5] text-white shadow-[4px_4px_0_#000] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 transition-transform active:scale-95"
              >
                <svg height="1.6em" viewBox="0 0 496 512" fill="white">
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
></path>
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div className="md:w-1/2 w-full flex justify-center md:justify-end" variants={fadeUp(0.1)}>
            <motion.div
              className="relative w-[86vw] md:w-[54vw] max-w-[1000px] aspect-[16/9]"
              initial={{ opacity: 0, scale: 0.98, x: 12 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.4, ease }}
            >

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
