import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

type Skill = { name: string; icon: string };
type Category = { key: string; title: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    key: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    ],
  },
  {
    key: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain colored" },
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "Material UI", icon: "devicon-materialui-plain colored" },
      { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    ],
  },
  {
    key: "backend",
    title: "Backend & Data",
    skills: [
      // Services & APIs
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Spring Boot", icon: "devicon-spring-original colored" },
      { name: "Express.js", icon: "devicon-express-original colored" },

      // Datastores & Query
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },

      // API Model
      { name: "GraphQL", icon: "devicon-graphql-plain colored" },
    ],
  },
  {
    key: "cloud",
    title: "Cloud & Orchestration",
    skills: [
      { name: "Google Cloud Platform (GCP)", icon: "devicon-googlecloud-plain colored" },
      { name: "Amazon Web Services (AWS)", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
    ],
  },
  {
    key: "devops",
    title: "DevOps, QA & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Selenium", icon: "devicon-selenium-original colored" },
      { name: "Jira", icon: "devicon-jira-plain colored" },
      { name: "Salesforce", icon: "devicon-salesforce-plain colored" },
    ],
  },
  {
    key: "mobile",
    title: "Mobile",
    skills: [
      { name: "Android", icon: "devicon-android-plain colored" },
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
    ],
  },
  {
    key: "design",
    title: "Design",
    skills: [
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Sketch", icon: "devicon-sketch-plain colored" },
      { name: "Photoshop", icon: "devicon-photoshop-plain colored" },
      { name: "Canva", icon: "devicon-canva-plain colored" },
    ],
  },
];



const containerVariants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

const SkillItem: React.FC<Skill> = ({ name, icon }) => (
  <motion.li
    className="flex flex-col items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 px-3 py-3 transition-colors text-center"
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.2 }}
    aria-label={name}
  >
    <i className={`block text-3xl md:text-4xl ${icon}`} title={name} aria-hidden="true" />

    <span className="mt-2 block text-xs md:text-sm leading-tight break-words">
      {name}
    </span>
  </motion.li>
);

const CategoryCard: React.FC<{ title: string; skills: Skill[] }> = ({ title, skills }) => (
  <motion.section
    className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 shadow-sm"
    variants={containerVariants}
  >
    <h3 className="text-left text-lg md:text-xl font-semibold mb-3">{title}</h3>
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
      {skills.map((s) => (
        <SkillItem key={s.name} {...s} />
      ))}
    </ul>
  </motion.section>
);

const Skills: React.FC = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const cats = active === "all" ? CATEGORIES : CATEGORIES.filter((c) => c.key === active);
    if (!q) return cats;
    return cats
      .map((c) => ({ ...c, skills: c.skills.filter((s) => s.name.toLowerCase().includes(q)) }))
      .filter((c) => c.skills.length > 0);
  }, [query, active]);

  return (
    <section
      id="skills"
      className="scroll-mt-24 md:scroll-mt-28 md:pt-28 overflow-x-clip bg-[#121212] text-white py-16 px-5"
    >   
      <div className=" mx-auto text-center">
        <SectionTitle>Tools & Technologies</SectionTitle>

        <p className="text-center text-lg mt-2 opacity-80">
          Full-stack engineer with focus on performant UI and reliable backends.
        </p>
        <p className="text-center max-w-3xl mx-auto mt-2 text-base opacity-70">
          Experience across frontend, backend, cloud, data, and DevOps. See more on{" "}
          <a
            href="https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-semibold hover:underline"
          >
            LinkedIn
          </a>.
        </p>

        {/* Search ABOVE the category pills */}
        <div className="mt-6">
          <label htmlFor="skill-search" className="sr-only">Search skills</label>
          <input
            id="skill-search"
            type="text"
            inputMode="search"
            placeholder="Search skills (e.g., React, AWS, SQL)…"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 outline-none placeholder-white/50 focus:ring-2 focus:ring-yellow-400/60"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Category pills BELOW the search (scrollable on mobile) */}
        <div className="mt-4 overflow-x-auto -mx-2 px-2">
          <div className="inline-flex gap-2" role="tablist" aria-label="Skill categories">
            {[
              { key: "all", title: "All" },
              ...CATEGORIES.map(({ key, title }) => ({ key, title })),
            ].map(({ key, title }) => {
              const isActive = key === active;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={isActive}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm border transition
                  ${isActive ? "bg-yellow-400 text-black border-yellow-400" : "bg-white/5 border-white/10 hover:bg-white/10"}`}
                  onClick={() => setActive(key)}
                >
                  {title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category grid */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.04 } } }}
        >
          {filtered.map((cat) => (
            <CategoryCard key={cat.key} title={cat.title} skills={cat.skills} />
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center opacity-70">
              No skills found. Try a different search.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
