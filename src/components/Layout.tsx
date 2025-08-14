import React from "react";
import Navbar from "../navbar/Navbar";

type Props = { children: React.ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {/* Extra gap = 0.75rem; change once here if you want more/less */}
      <main className="min-h-screen px-8 md:px-10 pt-[calc(var(--nav-h)+1.0rem+env(safe-area-inset-top))]">
        {children}
      </main>
    </>
  );
}