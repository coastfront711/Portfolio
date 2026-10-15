"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "Profile", target: "about" },
  { href: "#work", label: "Project", target: "work" },
  { href: "#contact", label: "Contact", target: "contact" },
];

export default function PillNav() {
  const [active, setActive] = useState<string>("about");

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.target)).filter(
      (el): el is HTMLElement => el !== null
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="pill-nav mono">
      <span className="mark">BS</span>
      {LINKS.map((link) => (
        <a
          key={link.target}
          href={link.href}
          className={active === link.target ? "active" : undefined}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
