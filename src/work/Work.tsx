import React, { useState, useMemo } from "react";
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
    description: `Developed a distributed chat system with Rust and AWS, resulting in p95 tail latency at 12k RPS during peak traffic.
    Integrated an LLM agent for intent, summaries, and draft replies, 24/7 coverage, and clearing overnight backlogs.
    Optimized AI pipeline using Python, Redis caching to reduce AWS S3 storage calls to lower latency and cost.
    Built a log monitor app using React, JavaScript, and ELK, sending live signals during incidents, reducing triage time.
    Wrote a Bash script for health checks, accelerating the root cause analysis during the log monitoring incidents.`,
    skills: "Python, AI, ML, AWS, Rust, React, Elasticsearch, Kibana, Logstash(ELK)"
  },
  {
    company: "Los Angeles Dodgers",
    duration: "March 2024 - December 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `Increased neighborhood community engagement during events by 72% and saved 15 hours/week by developing React, Node.js, and TypeScript app on GCP with Salesforce and OAuth2, ID.me address verification. 
    Improved Dodger’s runtime performance and speed by creating reusable React components and optimizing rendering.
    Developed an automated onboarding system with Java, Spring Boot, and GCP, reducing the HR department's manual workload.
    Automated CRUD operations for new hire employee data into BigQuery using Google Cloud Functions, reducing decision time.
    Built a microservice Java scheduler using thread pools and CRON to trigger badge verification via Python Google Cloud Functions.
    Integrated ID.me API with OAuth2 authentication and SSL to automate address verification and secure sensitive neighbor data.
    Deployed containerized apps via CI/CD pipeline, Docker, Kubernetes, Git, and GCP, improving efficiency and app releases faster.`,
    skills: "React, Node.js, Python, CI/CD, Google Cloud Platform (GCP), Docker, Salesforce, Java, Spring Boot"
  },
  {
    company: "WelSpot Inc.",
    duration: "July 2023 - March 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `Developed the loan portal using React and Node.js, increasing loan applications and seamless user experience.
    Created reusable React components using TypeScript for the loan portal core features for a consistent UI theme.
    Integrated testing framework using Jest for unit tests and Cypress for end-to-end testing, reducing release defects.
    Designed normalized SQL loan schemas and FK constraints in AWS RDS, improving integrity and traceability.
    Built ACID transactions and idempotent endpoints, eliminating duplicate loan submission under concurrency
    Automated CI/CD with Git and Jenkins for Docker-based deployments using Nginx proxies across environments.
    Designed asynchronous job queues with Node.js and AWS SQS for reliable backend loan verification. 
    Optimized RESTful APIs with data structures and indexing strategies to support high-throughput user flows.`,
    skills: "React, TypeScript, AWS RDS, PostgreSQL, Docker"
  }
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const listVariants: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } } };

const CONTAINER = "mx-auto max-w-[2400px] ";
const CARD = "rounded-2xl border border-black/10 bg-white shadow-md ring-1 ring-black/5";

function SkillChips({ list }: { list: string }) {
  const chips = useMemo(() => list.split(",").map(s => s.trim()).filter(Boolean), [list]);
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {chips.map(c => (
        <span
          key={c}
          className="inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold"
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
    <section id="work" className="page-shell flex justify-center mt-10 overflow-x-hidden">
      <div className={CONTAINER}>
        <h2 className="text-center">
          <SectionTitle>Work Experience</SectionTitle>
        </h2>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={listVariants}
          className="relative mt-6 sm:mt-8"
        >
          
          <span
            aria-hidden
            className="pointer-events-none absolute left-5 md:left-6 lg:left-7 top-0 hidden h-full w-[2px] bg-black/15 md:block"
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-5 md:left-6 lg:left-7 top-0 hidden w-[2px] bg-black md:block"
            style={{
              height: openIdx === null ? 0 : `calc((100% / ${experiences.length}) * ${openIdx! + 0.9})`
            }}
            layout
            transition={{ duration: 0.45, ease }}
          />

          {experiences.map((exp, i) => {
            const isOpen = openIdx === i;
            const panelId = `work-panel-${i}`;
            const btnId = `work-trigger-${i}`;

            return (
              <motion.li
                key={exp.company}
                variants={itemVariants}
                className="relative min-w-0 md:pl-14 lg:pl-16"
              >
               
                <span
                  aria-hidden
                  className={`absolute left-5 md:left-6 lg:left-7 top-8 hidden h-3 w-3 -translate-x-1/2 transform rounded-full border-2 border-black md:block ${
                    isOpen ? "bg-black" : "bg-white"
                  }`}
                />

                <motion.button
                  id={btnId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className={`${CARD} group w-full text-left min-w-0
                    transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.985 }}
                  layout
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="text-2xl font-extrabold leading-snug tracking-tight">
                          {exp.company}
                        </p>
                        <p className="text-sm sm:text-base font-semibold text-black/70">
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-xs sm:text-sm font-bold">{exp.duration}</p>
                        <p className="text-xs sm:text-sm italic text-black/70">{exp.location}</p>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-end">
                      <motion.span
                        className="inline-block"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </motion.span>
                    </div>
                  </div>

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
                        transition={{ duration: 0.4, ease }}
                        className="overflow-hidden border-t border-black/10"
                      >
                        <div className="px-5 sm:px-6 py-4">
                          <ul className="list-disc pl-5 space-y-2 text-[0.95rem] sm:text-base leading-relaxed break-words">
                            {exp.description
                              .split("\n")
                              .map(p => p.trim())
                              .filter(Boolean)
                              .map((p, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, y: 6 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.25, delay: 0.04 * idx }}
                                >
                                  {p}
                                </motion.li>
                              ))}
                          </ul>

                          <SkillChips list={exp.skills} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                <div className="h-5" />
              </motion.li>
            );
          })}
        </motion.ol>

       
        <div className="mt-12">
          <Education containerClass={CONTAINER} cardClass={CARD} />
        </div>
      </div>
    </section>
  );
};

export default Work;
