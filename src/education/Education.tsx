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
    institution: "Pace University - New York, USA",
    duration: "September 2021 - May 2023",
    degree: "Master of Science (MS) in Computer Science",
    description: `Completed coursework in full-stack development, data warehousing, and cloud computing.
Developed a BigQuery-based data warehouse to analyze flight data, enhancing insights for research.
Implemented a CI/CD pipeline for web applications, improving deployment speed and reliability.`,
  },
  {
    institution: "University of Mumbai - Mumbai, India",
    duration: "June 2016 - June 2019",
    degree: "Bachelor of Science (BS) in Information Technology",
    description: `Gained a strong foundation in software engineering, algorithms, and database management.
Developed an Android-based Mumbai tourism app using Java and MySQL, enhancing user engagement.
Worked on real-world projects involving software development and system design.`,
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const listStagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
const itemFade: Variants = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } };

// Accept container and card classes so sizes match Work cards 1:1
type Props = {
  containerClass?: string;
  cardClass?: string;
};

const DEFAULT_CONTAINER = "mx-auto w-[80vw]";
const DEFAULT_CARD = "rounded-2xl border border-black/10 bg-white shadow-md ring-1 ring-black/5";

const Education: React.FC<Props> = ({ containerClass = DEFAULT_CONTAINER, cardClass = DEFAULT_CARD }) => {
  const [active, setActive] = useState(0);
  const activeItem = educationData[active];
  const bullets = useMemo(
    () => activeItem.description.split("\n").map(s => s.trim()).filter(Boolean),
    [activeItem]
  );

  return (
    <section id="education" className="page-shell flex justify-center overflow-x-hidden scroll-mt-nav py-8 md:pt-16">
      <div className={containerClass}>
        <h2 className="text-center">
          <SectionTitle>Education</SectionTitle>
        </h2>

        <div className="mt-4">
          <motion.ul
            role="tablist"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10% 0px" }}
            variants={listStagger}
            className="mx-auto flex flex-wrap items-center justify-center gap-3"
          >
            {educationData.map((edu, i) => {
              const selected = i === active;
              const tabId = `edu-tab-${i}`;
              const panelId = `edu-panel-${i}`;

              return (
                <motion.li key={edu.institution} variants={itemFade} className="min-w-0">
                  <button
                    id={tabId}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={panelId}
                    onClick={() => setActive(i)}
                    className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors border
                    ${selected
                      ? "bg-red-500 text-white border-red-500"
                      : "bg-white/70 text-black border-black/10 hover:bg-white"}`}
                  >
                    <span className="truncate max-w-[70vw] sm:max-w-none block">{edu.institution}</span>
                  </button>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

       <div className="md:pl-14 lg:pl-24">
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
              className={`${cardClass ?? "rounded-2xl border border-black/10 bg-white shadow-md ring-1 ring-black/5"} mx-auto mt-6 w-full`}
            >
            <div className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-lg sm:text-xl font-extrabold leading-snug">{activeItem.degree}</p>
                  <p className="text-black/70 font-semibold">{activeItem.institution}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm italic">{activeItem.duration}</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm sm:text-base leading-relaxed break-words">
                {bullets.map((b, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, ease, delay: 0.04 * idx }}
                    className="flex gap-2"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    <span>{b}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Education;
