import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BadgeCheck, BookOpen, Volleyball, Code2, Trophy, Sparkles,
  ExternalLink, Heart, Music4, Paintbrush, Camera,
} from "lucide-react";

type TabKey = "certs" | "leetcode" | "hackerrank" | "hobbies";

const TABS: { key: TabKey; label: string }[] = [
  { key: "certs", label: "Certifications" },
  { key: "leetcode", label: "LeetCode" },
  { key: "hackerrank", label: "HackerRank" },
  { key: "hobbies", label: "Hobbies" },
];

const CERTS = [
  { title: "Java Masterclass 2025", issuer: "Udemy", year: "2025", href: "#" },
  { title: "Frontend Developer (React)", issuer: "HackerRank", year: "2025", href: "#" },
  { title: "SQL Intermediate", issuer: "HackerRank", year: "2022", href: "#" },
  { title: "SQL Basic", issuer: "HackerRank", year: "2022", href: "#" },
  { title: "Big Data Foundations - Level 1", issuer: "IBM", year: "2022", href: "#" },
  { title: "Python Bootcamp", issuer: "Udemy", year: "2021", href: "#" },
  { title: "The Web Developer Bootcamp", issuer: "Udemy", year: "2020", href: "#" },
  { title: "Software Engineering Virtual Experience", issuer: "JPMorgan Chase & Co.", year: "2020", href: "#" },
  { title: "The Complete HTML5 and CSS3 Course", issuer: "Udemy", year: "2020", href: "#" },
];

const LEETCODE = {
  handle: "sawantvidishav",
  profileUrl: "https://leetcode.com/sawantvidishav",
  highlights: [
    { label: "Top Patterns", value: "Two Pointers, Sliding Window, Binary Search, Linked Lists, Arrays" },
    { label: "Recent Focus", value: "DP & Graphs" },
  ],
};

const HACKERRANK = {
  handle: "vidishasawantv",
  profileUrl: "https://www.hackerrank.com/profile/vidishasawantv",
  highlights: [
    { label: "Top Patterns", value: "Arrays, Linked Lists" },
    { label: "Recent Focus", value: "Problem Solving" },
  ],
};

const HOBBIES = [
  { icon: Paintbrush, label: "Sketching / Painting / UI Mockups" },
  { icon: Music4, label: "Dance" },
  { icon: Volleyball, label: "Volleyball & Baseball" },
  { icon: Camera, label: "Street & Potrait Photography" },
  { icon: BookOpen, label: "Reading Novels & Tech Blogs" },
];

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border-[1.5px] sm:border-2 border-black bg-[#FFF5EE]
                  p-4 sm:p-5 lg:p-6 xl:p-7
                  shadow-[4px_4px_0_0_#000] sm:shadow-[6px_6px_0_0_#000] lg:shadow-[8px_8px_0_0_#000]
                  ${className}`}
    >
      {children}
    </div>
  );
}

export default function More() {
  const [tab, setTab] = useState<TabKey>("certs");

  return (
    <section id="more" className="page-shell flex items-center justify-center">
      {/* Mobile stays 92vw; desktop breathes more */}
      <div className="mx-auto w-[92vw] lg:w-[80vw] max-w-6xl lg:max-w-7xl
                      px-3 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16">

        {/* Header */}
        <div className="flex items-center justify-between gap-4 mb-6 sm:mb-10">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight flex items-center gap-2 sm:gap-3">
              <Sparkles className="size-5 sm:size-7 md:size-8 lg:size-9" />
              More +
            </h1>
            <p className="text-black/70 mt-1 text-sm sm:text-base lg:text-lg">
              A little extra—from certifications to coding habits and hobbies.
            </p>
          </div>

          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 border-2 border-black
                       px-3 py-1.5 text-sm
                       lg:px-5 lg:py-2 lg:text-base
                       xl:px-6 xl:py-3 xl:text-lg
                       rounded-2xl font-bold hover:bg-black hover:text-white"
          >
            Explore Projects
            <ExternalLink className="size-4 lg:size-5" />
          </Link>
        </div>

        {/* Tabs: sticky; bigger on desktop */}
        <div className="sticky top-14 lg:top-16 z-20 -mx-3 sm:mx-0 bg-[#FFF5EE]/80 backdrop-blur supports-[backdrop-filter]:bg-[#FFF5EE]/60 py-2">
          <div
            className="relative inline-flex w-full overflow-x-auto no-scrollbar gap-1 sm:gap-2
                       rounded-2xl border-2 border-black bg-white p-1 px-2 sm:px-1
                       snap-x snap-mandatory"
            role="tablist"
            aria-label="More tabs"
          >
            {TABS.map((t) => {
              const active = t.key === tab;
              return (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={active}
                  aria-controls={`panel-${t.key}`}
                  onClick={() => setTab(t.key)}
                  className={`relative px-3 sm:px-4 lg:px-5
                              py-1.5 sm:py-2 lg:py-2.5
                              text-sm sm:text-base lg:text-lg
                              font-bold rounded-xl whitespace-nowrap snap-start
                              transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black
                              ${active ? "text-black" : "text-black/60 hover:text-black"}`}
                >
                  {t.label}
                  {active && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-black/10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 sm:mt-8">
          <div className="min-h-[22rem] sm:min-h-[24rem] lg:min-h-[26rem]">
            <AnimatePresence mode="wait">
              {tab === "certs" && (
                <motion.section
                  key="certs"
                  id="panel-certs"
                  role="tabpanel"
                  aria-labelledby="tab-certs"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
                    {CERTS.map((c, i) => (
                      <motion.div
                        key={c.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                      >
                        <Card>
                          <div className="flex items-start gap-3 lg:gap-4">
                            <div className="shrink-0 rounded-full border-[1.5px] sm:border-2 border-black p-1.5 sm:p-2 lg:p-2.5 bg-white">
                              <BadgeCheck className="size-4 sm:size-5 lg:size-6" />
                            </div>
                            <div>
                              <a
                                href={c.href}
                                target={c.href?.startsWith("http") ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="font-extrabold hover:underline text-sm sm:text-base lg:text-lg"
                              >
                                {c.title}
                              </a>
                              <div className="text-xs sm:text-sm lg:text-base text-black/70 mt-1">
                                {c.issuer} • {c.year}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {tab === "leetcode" && (
                <motion.section
                  key="leetcode"
                  id="panel-leetcode"
                  role="tabpanel"
                  aria-labelledby="tab-leetcode"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 xl:gap-8">
                    <Card>
                      <div className="flex items-start gap-3 lg:gap-4">
                        <div className="shrink-0 rounded-full border-[1.5px] sm:border-2 border-black p-1.5 sm:p-2 lg:p-2.5 bg-white">
                          <Code2 className="size-4 sm:size-5 lg:size-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl">LeetCode Profile</h3>
                            <a
                              href={LEETCODE.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border-2 border-black
                                         px-3 py-1.5 text-xs sm:text-sm
                                         lg:px-5 lg:py-2 lg:text-base
                                         rounded-2xl font-bold hover:bg-black hover:text-white"
                            >
                              Open <ExternalLink className="size-4 lg:size-5" />
                            </a>
                          </div>
                          <p className="text-black/70 mt-1 text-sm sm:text-base lg:text-lg">
                            Handle: <span className="font-semibold">{LEETCODE.handle}</span>
                          </p>
                          <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base lg:text-lg">
                            {LEETCODE.highlights.map((h) => (
                              <li key={h.label} className="flex items-start gap-2">
                                <Trophy className="size-4 lg:size-5 mt-0.5" />
                                <span>
                                  <span className="font-semibold">{h.label}:</span> {h.value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>

                    <Card>
                      <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Practice Playlists</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {["Two Pointers", "Sliding Window", "Binary Search", "Dynamic Programming"].map((p) => (
                          <button
                            key={p}
                            className="w-full text-left px-3 sm:px-4 lg:px-5
                                       py-2.5 sm:py-3 lg:py-3.5
                                       rounded-2xl border-2 border-black
                                       text-sm sm:text-base lg:text-lg font-semibold
                                       hover:bg-black hover:text-white focus:outline-none
                                       focus-visible:ring-2 focus-visible:ring-black"
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.section>
              )}

              {tab === "hackerrank" && (
                <motion.section
                  key="hackerrank"
                  id="panel-hackerrank"
                  role="tabpanel"
                  aria-labelledby="tab-hackerrank"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 xl:gap-8">
                    <Card>
                      <div className="flex items-start gap-3 lg:gap-4">
                        <div className="shrink-0 rounded-full border-[1.5px] sm:border-2 border-black p-1.5 sm:p-2 lg:p-2.5 bg-white">
                          <BookOpen className="size-4 sm:size-5 lg:size-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl">HackerRank Profile</h3>
                            <a
                              href={HACKERRANK.profileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 border-2 border-black
                                         px-3 py-1.5 text-xs sm:text-sm
                                         lg:px-5 lg:py-2 lg:text-base
                                         rounded-2xl font-bold hover:bg-black hover:text-white"
                            >
                              Open <ExternalLink className="size-4 lg:size-5" />
                            </a>
                          </div>
                          <p className="text-black/70 mt-1 text-sm sm:text-base lg:text-lg">
                            Handle: <span className="font-semibold">{HACKERRANK.handle}</span>
                          </p>
                          <ul className="mt-3 sm:mt-4 space-y-2 text-sm sm:text-base lg:text-lg">
                            {HACKERRANK.highlights.map((h) => (
                              <li key={h.label} className="flex items-start gap-2">
                                <Trophy className="size-4 lg:size-5 mt-0.5" />
                                <span>
                                  <span className="font-semibold">{h.label}:</span> {h.value}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Card>

                    <Card>
                      <h3 className="font-extrabold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">Tracks & Certificates</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {["Problem Solving", "SQL", "Java", "Python", "30 Days of Code", "Data Structures"].map((t) => (
                          <button
                            key={t}
                            className="w-full text-left px-3 sm:px-4 lg:px-5
                                       py-2.5 sm:py-3 lg:py-3.5
                                       rounded-2xl border-2 border-black
                                       text-sm sm:text-base lg:text-lg font-semibold
                                       hover:bg-black hover:text-white focus:outline-none
                                       focus-visible:ring-2 focus-visible:ring-black"
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </Card>
                  </div>
                </motion.section>
              )}

              {tab === "hobbies" && (
                <motion.section
                  key="hobbies"
                  id="panel-hobbies"
                  role="tabpanel"
                  aria-labelledby="tab-hobbies"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
                    {HOBBIES.map(({ icon: Icon, label }, i) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                      >
                        <Card>
                          <div className="flex items-center gap-3 lg:gap-4">
                            <div className="shrink-0 rounded-full border-[1.5px] sm:border-2 border-black p-1.5 sm:p-2 lg:p-2.5 bg-white">
                              <Icon className="size-4 sm:size-5 lg:size-6" />
                            </div>
                            <div className="font-semibold text-sm sm:text-base lg:text-lg">{label}</div>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                    <Card className="sm:col-span-2 lg:col-span-3">
                      <div className="flex items-center gap-3 lg:gap-4 text-sm sm:text-base lg:text-lg">
                        <Heart className="size-4 sm:size-5 lg:size-6" />
                        <span className="font-semibold">
                          Outside code, I love shipping tiny creative experiments and sharing notes.
                        </span>
                      </div>
                    </Card>
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
