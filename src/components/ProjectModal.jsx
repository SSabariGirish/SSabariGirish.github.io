import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, PlayCircle, X } from "lucide-react";

const NARRATIVE_SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "built", label: "What I built" },
  { key: "result", label: "Result" },
  { key: "learned", label: "What I learned" },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const panelVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: 24, scale: 0.98, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
};

export default function ProjectModal({ project, onClose }) {
  // Lock body scroll while open, close on Escape.
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-ink-950/80 backdrop-blur-md sm:items-center sm:p-6"
        >
          <motion.div
            key="panel"
            variants={panelVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="glass-strong relative flex max-h-[92svh] w-full flex-col overflow-hidden rounded-t-xl2 shadow-glass sm:max-h-[85vh] sm:max-w-3xl sm:rounded-xl2"
          >
            {/* Drag handle affordance on mobile */}
            <div className="flex justify-center pt-3 sm:hidden">
              <span className="h-1.5 w-10 rounded-full bg-ink-600" />
            </div>

            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 bg-ink-950/70 text-ink-200 transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} />
            </button>

            <div className="overflow-y-auto px-6 pb-10 pt-8 sm:px-10 sm:pt-12">
              <span className="font-mono text-xs text-accent-soft">{project.index}</span>

              {project.badges && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.badges.map((b) => (
                    <span key={b} className="chip text-accent-soft">
                      {b}
                    </span>
                  ))}
                </div>
              )}

              <h2
                id="project-modal-title"
                className="mt-4 max-w-xl font-serif text-fluid-h2 text-ink-50"
              >
                {project.name}
              </h2>
              <p className="mt-4 max-w-xl text-fluid-body text-ink-300">{project.hook}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost !min-h-[44px] !px-5 !py-2.5 text-sm"
                >
                  <Github size={16} />
                  View repo
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !min-h-[44px] !px-5 !py-2.5 text-sm"
                  >
                    <ExternalLink size={16} />
                    Live demo
                  </a>
                )}
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !min-h-[44px] !px-5 !py-2.5 text-sm"
                  >
                    <PlayCircle size={16} />
                    Watch walkthrough
                  </a>
                )}
              </div>

              {/* Narrative, typography-led hierarchy */}
              <div className="mt-10 space-y-8 border-t border-ink-700/60 pt-8">
                {NARRATIVE_SECTIONS.filter((s) => project[s.key]).map((s, i) => (
                  <div key={s.key}>
                    <div className="mb-2 flex items-center gap-3">
                      <span className="font-mono text-xs text-ink-500">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                        {s.label}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-[1.05rem] leading-relaxed text-ink-200">
                      {project[s.key]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
