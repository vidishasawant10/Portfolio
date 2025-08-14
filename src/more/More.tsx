import React, { useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import { Link } from "react-router-dom";
import {
  BadgeCheck,
  BookOpen,
  Code2,
  Trophy,
  Sparkles,
  ExternalLink,
  Heart,
  Music4,
  Paintbrush,
  Gamepad2,
  Camera,
} from "lucide-react";

type TabKey = "certs" | "leetcode" | "hobbies";

const TABS: { key: TabKey; label: string }[] = [
  { key: "certs", label: "Certifications" },
  { key: "leetcode", label: "LeetCode" },
  { key: "hobbies", label: "Hobbies" },
];


// ----- Example Data (replace with yours) -----
const CERTS = [
  {
    title: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    year: "2024",
    href: "#",
  },
  {
    title: "Google Cloud Digital Leader",
    issuer: "Google Cloud",
    year: "2024",
    href: "#",
  },
  {
    title: "Salesforce Administrator (ADM-201)",
    issuer: "Salesforce",
    year: "2023",
    href: "#",
  },
];

const LEETCODE = {
  handle: "your-handle", // ← update
  profileUrl: "https://leetcode.com/",
  // You can also show featured problems or badges here
  highlights: [
    { label: "Top Patterns", value: "Two Pointers, Sliding Window, Binary Search" },
    { label: "Recent Focus", value: "DP & Graphs" },
    { label: "Daily Streak", value: "🔥 Keep it going!" },
  ],
};

const HOBBIES = [
  { icon: Paintbrush, label: "Sketching / UI Mockups" },
  { icon: Music4, label: "Piano + Chillhop" },
  { icon: Gamepad2, label: "Indie Games" },
  { icon: Camera, label: "Street Photography" },
  { icon: BookOpen, label: "Tech Blogs & Systems" },
];

// Card shell
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-black bg-[#FFF5EE] p-5 shadow-[6px_6px_0_0_#000] ${className}`}
    >
      {children}
    </div>
  );
}

export default function More() {
  const [tab, setTab] = useState<TabKey>("certs");

  return (
    <section
      id="projects"
      className="scroll-mt-24 md:scroll-mt-28 py-8 md:pt-28 overflow-x-clip"
    >
    <div
      className="mx-auto max-w-6xl px-6 md:px-10 pt-24 md:pt-28 pb-16"
      // If you set --nav-h globally, you can use: pt-[calc(var(--nav-h)+0.75rem)]
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight flex items-center gap-3">
            <Sparkles className="size-7 md:size-8" />
            More +
          </h1>
          <p className="text-black/70 mt-1">
            A little extra—from certifications to coding habits and hobbies.
          </p>
        </div>

        {/* Optional back/CTA */}
        <Link
          to="/projects"
          className="hidden md:inline-flex items-center gap-2 border-2 border-black px-4 py-2 rounded-xl font-bold hover:bg-black hover:text-white"
        >
          Explore Projects
          <ExternalLink className="size-4" />
        </Link>
      </div>

      {/* Tabs */}
      <div className="relative inline-flex rounded-2xl border-2 border-black bg-white p-1">
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative px-4 py-2 text-sm md:text-base font-bold rounded-xl transition-colors ${
                active ? "text-black" : "text-black/60 hover:text-black"
              }`}
            >
              {t.label}
              {active && (
                <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 -z-10 rounded-xl bg-black/10"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {tab === "certs" && (
            <motion.section
              key="certs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTS.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                  >
                    <Card>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 rounded-full border-2 border-black p-2 bg-white">
                          <BadgeCheck className="size-5" />
                        </div>
                        <div>
                          <a
                            href={c.href}
                            target={c.href?.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="font-extrabold hover:underline"
                          >
                            {c.title}
                          </a>
                          <div className="text-sm text-black/70 mt-1">
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full border-2 border-black p-2 bg-white">
                      <Code2 className="size-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-xl">LeetCode Profile</h3>
                        <a
                          href={LEETCODE.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-2 border-black px-3 py-1.5 rounded-xl font-bold hover:bg-black hover:text-white"
                        >
                          Open
                          <ExternalLink className="size-4" />
                        </a>
                      </div>
                      <p className="text-black/70 mt-1">
                        Handle: <span className="font-semibold">{LEETCODE.handle}</span>
                      </p>

                      <ul className="mt-4 space-y-2">
                        {LEETCODE.highlights.map((h) => (
                          <li key={h.label} className="flex items-start gap-2">
                            <Trophy className="size-4 mt-1" />
                            <span>
                              <span className="font-semibold">{h.label}:</span> {h.value}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-black/60 mt-4">
                        Tip: you can swap this card for a live stats widget later (API or image
                        badge). For now, it’s a clean, fast placeholder.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-extrabold text-xl mb-3">Practice Playlists</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {["Two Pointers", "Sliding Window", "Binary Search", "Dynamic Programming"].map(
                      (p) => (
                        <button
                          key={p}
                          className="w-full text-left px-4 py-3 rounded-xl border-2 border-black font-semibold hover:bg-black hover:text-white"
                        >
                          {p}
                        </button>
                      )
                    )}
                  </div>
                  <p className="text-sm text-black/60 mt-4">
                    Link these to your internal pages or curated problem lists.
                  </p>
                </Card>
              </div>
            </motion.section>
          )}

          {tab === "hobbies" && (
            <motion.section
              key="hobbies"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {HOBBIES.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                  >
                    <Card>
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 rounded-full border-2 border-black p-2 bg-white">
                          <Icon className="size-5" />
                        </div>
                        <div className="font-semibold">{label}</div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
                <Card className="sm:col-span-2 lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <Heart className="size-5" />
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
    </section>
  );
}
