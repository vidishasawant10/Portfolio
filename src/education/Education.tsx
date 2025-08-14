import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

type EducationItem = {
  institution: string;
  duration: string;
  degree: string;
  description: string;
};

const educationData: EducationItem[] = [
  {
    institution: "Pace University - New York",
    duration: "September 2021 - May 2023",
    degree: "Master of Science (MS) in Computer Science",
    description: `Completed coursework in full-stack development, data warehousing, and cloud computing.
Developed a BigQuery-based data warehouse to analyze flight data, enhancing insights for research.
Implemented a CI/CD pipeline for web applications, improving deployment speed and reliability.`,
  },
  {
    institution: "University of Mumbai",
    duration: "June 2016 - June 2019",
    degree: "Bachelor of Science (BS) in Information Technology",
    description: `Gained a strong foundation in software engineering, algorithms, and database management.
Developed an Android-based Mumbai tourism app using Java and MySQL, enhancing user engagement.
Worked on real-world projects involving software development and system design.`,
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const Education: React.FC = () => {
  const [active, setActive] = useState(0);

  const activeItem = educationData[active];
  const bullets = useMemo(
    () =>
      activeItem.description
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    [activeItem]
  );

  return (
    <section
      id="work"
      className="scroll-mt-24 md:scroll-mt-28 py-8 md:pt-416 overflow-x-clip"
    >
      <div className="mx-auto">
        <h2 className="text-center">
          <SectionTitle>Education</SectionTitle>
        </h2>

        <div className="mt-8 md:mt-10 flex gap-10 max-md:flex-col-reverse">
          <div className="relative max-md:-mx-5 max-md:px-5">
            <span
              aria-hidden
              className="hidden md:block absolute left-0 top-0 h-full w-[2px] bg-red-200"
            />
            <motion.ul
              role="tablist"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={listStagger}
              className="md:pl-5 flex md:flex-col gap-3 overflow-x-auto md:overflow-visible whitespace-nowrap"
            >
              {educationData.map((edu, i) => {
                const selected = i === active;
                const tabId = `edu-tab-${i}`;
                const panelId = `edu-panel-${i}`;

                return (
                  <motion.li key={edu.institution} variants={itemFade} className="relative">
                    <button
                      id={tabId}
                      role="tab"
                      aria-selected={selected}
                      aria-controls={panelId}
                      onClick={() => setActive(i)}
                      className={`relative group px-4 py-2 rounded-xl border-2 border-black text-left font-bold uppercase text-sm transition-colors shadow-[4px_4px_0_#000]
                      ${selected ? "bg-red-100" : "bg-white hover:bg-red-50"}`}
                    >
                      {/* moving pill highlight (shared layout) */}
                      {selected && (
                        <motion.span
                          layoutId="edu-pill"
                          className="absolute inset-0 rounded-xl bg-red-100 -z-10"
                          transition={{ duration: 0.35, ease }}
                        />
                      )}
                      <span className="relative z-10">{edu.institution}</span>
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          {/* Content panel */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`edu-panel-${active}`}
                role="tabpanel"
                aria-labelledby={`edu-tab-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease }}
                className="rounded-2xl border-2 border-black bg-white p-5 md:p-6 shadow-[6px_6px_0_#000]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-lg md:text-xl font-extrabold">{activeItem.degree}</p>
                    <p className="text-black/70 font-semibold">{activeItem.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs md:text-sm italic">{activeItem.duration}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {bullets.map((b, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, ease, delay: 0.04 * idx }}
                      className="flex gap-2 text-sm md:text-base leading-relaxed"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-red-500 shrink-0" />
                      <span>{b}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
