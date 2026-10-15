"use client";

import { useState } from "react";
import PillNav from "@/components/PillNav";
import FloatingBlob from "@/components/FloatingBlob";

type Category = "short" | "long";

type Project = {
  title: string;
  meta: string;
  video: string; // File path (.mp4) OR YouTube Video ID / URL
  isYouTube?: boolean;
  category: Category;
};

// Helper function to extract an 11-character YouTube video ID
function getYouTubeId(urlOrId: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = urlOrId.match(regExp);
  return match && match[2].length === 11 ? match[2] : urlOrId;
}

const PROJECTS: Project[] = [
  {
    title: "Short 01",
    meta: "Short Form — 00:50",
    video: "https://res.cloudinary.com/kstre17y/video/upload/v1792092172/Script-1.mp4",
    category: "short",
  },
  {
    title: "Short 02",
    meta: "Short Form — 00:42",
    video: "https://res.cloudinary.com/kstre17y/video/upload/v1792092243/Sample_1_V7.mp4",
    category: "short",
  },
  {
    title: "Short 03",
    meta: "Short Form — 00:50",
    video: "https://res.cloudinary.com/kstre17y/video/upload/v1792092263/Ad_Reel.mp4",
    category: "short",
  },
  {
    title: "Short 04",
    meta: "Short Form — 01:00",
    video: "https://res.cloudinary.com/kstre17y/video/upload/v1792092187/What_Is_Recession_Short_1.mp4",
    category: "short",
  },
  {
    title: "Long 01",
    meta: "LONG FORM — 13:22",
    video: "https://www.youtube.com/watch?v=mYXbEPc_qgg",
    isYouTube: true,
    category: "long",
  },
  {
    title: "Long 02",
    meta: "LONG FORM — 10:15",
    video: "https://www.youtube.com/watch?v=bulkItoztZw",
    isYouTube: true,
    category: "long",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("short");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter(
    (project) => project.category === activeCategory
  );

  const shortCount = PROJECTS.filter(
    (project) => project.category === "short"
  ).length;

  const longCount = PROJECTS.filter(
    (project) => project.category === "long"
  ).length;

  const handleProjectClick = (project: Project) => {
    if (project.isYouTube) {
      const ytId = getYouTubeId(project.video);
      window.open(`https://www.youtube.com/watch?v=${ytId}`, "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <>
      <PillNav />
      <FloatingBlob />

      {/* =====================================================
          HERO
      ===================================================== */}

      <header className="hero wrap" id="home">
        <p className="eyebrow mono">
          <span className="dot" />
          REC — DEMO REEL
        </p>

        <h1 className="display chrome-text">
          <span className="glow-wrap">Portfolio</span>
          <span className="yr mono">2026</span>
        </h1>

        <p className="sub">
          Bikash Saikia — video editor cutting story-first work for commercial,
          music and narrative clients.
        </p>

        <nav className="menu mono">
          <a href="#about">Start</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* =====================================================
          TICKER
      ===================================================== */}
      <div className="ticker">
        <div className="ticker-track mono">
          <div className="ticker-set">
            <span>VIDEO EDITOR</span>
            <span>COMMERCIAL</span>
            <span>NARRATIVE</span>
            <span>SHOWREEL 2026</span>
          </div>

          <div className="ticker-set" aria-hidden="true">
            <span>VIDEO EDITOR</span>
            <span>COMMERCIAL</span>
            <span>NARRATIVE</span>
            <span>SHOWREEL 2026</span>
          </div>

          <div className="ticker-set" aria-hidden="true">
            <span>VIDEO EDITOR</span>
            <span>COMMERCIAL</span>
            <span>NARRATIVE</span>
            <span>SHOWREEL 2026</span>
          </div>

          <div className="ticker-set" aria-hidden="true">
            <span>VIDEO EDITOR</span>
            <span>COMMERCIAL</span>
            <span>NARRATIVE</span>
            <span>SHOWREEL 2026</span>
          </div>
        </div>
      </div>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section id="about" className="about wrap">
        <div className="about-grid">
          <div
            style={{
              position: "relative",
              borderRadius: "50%",
              boxShadow: "0 0 25px rgba(255, 255, 255, 0.15), 0 0 50px rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              className="frame"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <img
                src="/avatar.png"
                alt="Bikash Saikia"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </div>
          </div>

          <div className="about-copy">
            <p className="hi">Hello, I am</p>

            <h2 className="display">Bikash Saikia</h2>

            <p>
              I&apos;m a video editor based between projects — mostly
              storytelling reels work, with a documentary short in the cut most
              years. I care about pacing more than polish: a scene should feel
              inevitable, not assembled.
            </p>

            <p>
              Grinding for agencies, independent artists, and a couple of very
              patient documentary subjects.
            </p>

            <div className="skills-row">
              <h4>Software</h4>

              <div className="badges">
                <div className="badge" title="Adobe Premiere Pro">
                  <img src="/logo/premiere pro.svg" alt="Adobe Premiere Pro" />
                </div>

                <div className="badge" title="DaVinci Resolve">
                  <img src="/logo/dr.webp" alt="DaVinci Resolve" />
                </div>

                <div className="badge" title="Adobe After Effects">
                  <img src="/logo/ae.webp" alt="Adobe After Effects" />
                </div>

                <div className="badge" title="Adobe Lightroom">
                  <img src="/logo/lightroom.webp" alt="Adobe Lightroom" />
                </div>
              </div>
            </div>

            <div className="stat-grid">
              <div>
                <h4>Experience</h4>

                <div className="row">
                  <span>Freelance Editor</span>
                </div>

                <div className="row">
                  <span>Commissioning Editor : 1 year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section id="work" className="work wrap">
        <div className="section-head">
          <div>
            <p className="kicker mono">SELECTED WORK</p>

            <h2 className="display chrome-text">Recap Project</h2>
          </div>
        </div>

        {/* CATEGORY SWITCHER */}

        <div className="project-tabs mono">
          <button
            type="button"
            className={activeCategory === "short" ? "active" : ""}
            onClick={() => setActiveCategory("short")}
          >
            <span>SHORT FORM</span>

            <small>{shortCount.toString().padStart(2, "0")}</small>
          </button>

          <button
            type="button"
            className={activeCategory === "long" ? "active" : ""}
            onClick={() => setActiveCategory("long")}
          >
            <span>LONG FORM</span>

            <small>{longCount.toString().padStart(2, "0")}</small>
          </button>
        </div>

        {/* CATEGORY INTRO */}

        <div className="project-intro">
          <div>
            <span className="mono">
              {activeCategory === "short" ? "01" : "02"}
            </span>

            <h3>
              {activeCategory === "short" ? "Short Form" : "Long Form"}
            </h3>
          </div>

          <p>
            {activeCategory === "short"
              ? "Vertical stories built for social, reels, campaigns and fast-moving digital platforms."
              : "Longer visual stories including narrative-driven work."}
          </p>
        </div>

        {/* =================================================
            VIDEO GRID
        ================================================= */}

        <div
          className={`project-grid ${
            activeCategory === "short" ? "short-grid" : "long-grid"
          }`}
        >
          {filteredProjects.map((project, index) => {
            const ytId = project.isYouTube ? getYouTubeId(project.video) : "";

            return (
              <button
                key={project.title}
                type="button"
                className="project-card"
                onClick={() => handleProjectClick(project)}
                aria-label={`View ${project.title}`}
              >
                {project.isYouTube ? (
                  <img
                    className="project-video"
                    src={`https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`}
                    alt={project.title}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                ) : (
                  <video
                    className="project-video"
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}

                <div className="project-shade" />

                <span className="project-number mono">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="project-overlay">
                  <div className="project-info">
                    <span className="project-title">{project.title}</span>

                    <span className="project-meta mono">{project.meta}</span>
                  </div>

                  <span className="project-arrow">↗</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section id="contact" className="contact wrap">
        <div className="contact-grid">
          <div className="contact-photo">
            <div
              style={{
                width: 150,
                height: 150,
                borderRadius: "50%",
                position: "relative",
                boxShadow: "0 0 25px rgba(255, 255, 255, 0.15), 0 0 50px rgba(255, 255, 255, 0.05)",
              }}
            >
              <div
                className="frame"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <img
                  src="/avatar.png"
                  alt="Bikash Saikia Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "scale(2)",
                    transformOrigin: "50% 1%",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div className="name mono">
              Bikash Saikia
              <b>Video Editor</b>
            </div>

            {/* <div className="social-list mono">
              <a href="#" aria-label="Instagram">
                <span className="ic">Ig</span>
                @ig_bikash338
              </a>

              <a href="#" aria-label="YouTube">
                <span className="ic">Yt</span>
                Bikash Saikia Edits
              </a>
            </div> */}
          </div>

          <div>
            <p className="kicker mono">Let&apos;s work together</p>

            <h2 className="display chrome-text">
              Thank You
              <br />
              2026
            </h2>

            <div className="name mono">Contact:</div>

            <a className="email" href="mailto:bikashedit711@gmail.com">
              bikashedit711@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="wrap">
        <span>© 2026 Bikash Saikia</span>

        <span className="reel-mark mono">
          <span className="hole" />
          <span className="hole" />
          Reel builds on request
          <span className="hole" />
          <span className="hole" />
        </span>
      </footer>

      {/* =====================================================
          MODAL PLAYER (FOR LOCAL VIDEOS)
      ===================================================== */}

      {selectedProject && !selectedProject.isYouTube && (
        <div
          className="video-modal"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="video-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close video"
            >
              ×
            </button>

            <video
              className="video-modal-player"
              src={selectedProject.video}
              controls
              autoPlay
              playsInline
            />

            <div className="video-modal-info">
              <span className="mono">{selectedProject.meta}</span>
              <h3>{selectedProject.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  );
}