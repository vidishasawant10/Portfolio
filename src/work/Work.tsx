import React, { useMemo, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Education from "../education/Education";

type Experience = {
  company: string;
  duration: string;
  role: string;
  location: string;
  description: string;
  skills: string;
};

const experiences: Experience[] = [
  {
    company: "Phinite.ai",
    duration: "April 2025 - Present",
    role: "Software Engineer",
    location: "California, US",
    description:
      `Developed scalable systems and tools, including a Rust-based distributed chat platform, an optimized AI pipeline with Python, and a real-time log monitoring app using React, ELK, and WebSockets.
Implemented a CI/CD pipeline for web applications, optimizing deployment speed and reliability.
Worked on real-world projects involving software development and system design.
Collaborated with cross-functional teams, conducted user research, and converted insights into high-performance applications.`,
    skills: "Python, AI, ML, AWS, Rust, React, Elasticsearch, Kibana, Logstash(ELK)"
  },
  {
    company: "Los Angeles Dodgers",
    duration: "March 2024 - December 2024",
    role: "Software Engineer",
    location: "California, US",
    description:
      `Developed and deployed Google Cloud Platform (GCP)-based web applications using React, Node.js, Java, and Spring Boot, including automated onboarding systems, community engagement platforms, and secure ID verification services.
Built microservices, implemented CI/CD pipelines with Docker, optimized backend performance with caching, and integrated Salesforce workflows, flows, and Apex code to streamline operations and improve user experience.`,
    skills: "React, Node.js, Python, CI/CD, Google Cloud Platform (GCP), Docker, Salesforce, Java, Spring Boot"
  },
  {
    company: "WelSpot Inc.",
    duration: "July 2023 - March 2024",
    role: "Software Engineer",
    location: "California, US",
    description:
      `Responsible for building and maintaining a healthcare loan portal across frontend and backend to enhance functionality and UX.
    Designed intuitive interfaces, optimized database operations, and implemented automation to improve system stability.
    Built CI/CD pipelines, testing frameworks, and cloud-based deployments to ensure smooth releases.`,
    skills: "React, TypeScript, AWS RDS, PostgreSQL, Docker"
  }
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
};

function SkillChips({ list }: { list: string }) {
  const chips = useMemo(
    () =>
      list
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    [list]
  );

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map((c) => (
        <span
          key={c}
          className="inline-flex items-center rounded-lg border-2 border-black px-2.5 py-1 text-xs font-bold bg-white"
        >
          {c}
        </span>
      ))}
    </div>
  );
}

const Work: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="work"
      className="scroll-mt-24 md:scroll-mt-28 py-8 md:pt-40 overflow-x-clip"
    >
      <div className="mx-auto px-5 md:px-10">
        <h2 className="text-center">
          <SectionTitle>Work Experience</SectionTitle>
        </h2>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={containerStagger}
          className="relative mt-8 md:mt-10"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 h-full w-[2px] bg-black/15 md:left-6"
          />

          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-4 top-0 w-[2px] bg-black md:left-6"
            style={{ height: openIdx === null ? 0 : `calc((100% / ${experiences.length}) * ${openIdx! + 0.8})` }}
            layout
            transition={{ duration: 0.5, ease }}
          />

          {experiences.map((exp, i) => {
            const isOpen = openIdx === i;
            const panelId = `work-panel-${i}`;
            const btnId = `work-trigger-${i}`;

            return (
              <motion.li
                key={exp.company}
                variants={itemUp}
                className="relative pl-12 md:pl-14"
              >
                {/* Node dot */}
                <span
                  aria-hidden
                  className={`absolute left-[14px] md:left-[22px] top-5 h-3 w-3 rounded-full border-2 border-black ${
                    isOpen ? "bg-black" : "bg-white"
                  }`}
                />

                <motion.button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="group w-full text-left rounded-2xl border-2 border-black bg-white/90 hover:bg-white transition-colors shadow-[4px_4px_0_#000] focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  layout
                >
                  <div className="flex flex-col gap-1 p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xl md:text-2xl font-extrabold leading-tight">
                          {exp.company}
                        </p>
                        <p className="text-sm md:text-base font-semibold text-black/70">
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-bold">{exp.duration}</p>
                        <p className="text-xs md:text-sm italic text-black/70">
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Chevron */}
                    <div className="mt-1 flex items-center justify-end">
                      <motion.span
                        className="inline-block"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.35, ease }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </motion.span>
                    </div>
                  </div>

                  {/* Expandable panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease }}
                        className="overflow-hidden border-t-2 border-black/10"
                      >
                        <div className="p-5 md:p-6 pt-4 md:pt-5">
                          {/* Description paragraphs */}
                          <div className="space-y-3 text-sm md:text-base leading-relaxed">
                            {exp.description.split("\n").map((p, idx) => (
                              <motion.p
                                key={idx}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease, delay: 0.05 * idx }}
                              >
                                {p.trim()}
                              </motion.p>
                            ))}
                          </div>

                          {/* Skill chips */}
                          <SkillChips list={exp.skills} />

                          <hr className="mt-5 border-black/15" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* Education below timeline */}
        <div className="mt-12">
          <Education />
        </div>
      </div>
    </section>
  );
};

export default Work;
