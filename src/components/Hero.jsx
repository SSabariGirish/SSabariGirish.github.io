import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Magnetic from "./Magnetic";
import { profile } from "../data/content";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      // The scroll indicator used to be absolutely positioned over the
      // centered content, so on shorter viewports the "Open to full-time
      // roles" line could grow tall enough to collide with it. It's now a
      // normal-flow sibling below the content block instead — content gets
      // its own flex-1 region to center within, and the indicator reserves
      // its own space underneath, so the two can never overlap.
      className="relative flex min-h-[100svh] flex-col pb-8 pt-28 md:pb-6 md:pt-36"
    >
      <div className="section-pad flex flex-1 flex-col justify-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="kicker">{profile.heroKicker}</p>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-5xl font-serif text-fluid-hero font-medium text-ink-50"
          >
            {profile.heroHeadline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-fluid-body text-ink-300">
            {profile.heroSub}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Magnetic
              as="button"
              className="btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View the work
              <ArrowDownRight size={18} />
            </Magnetic>
            <Magnetic as="a" href={`mailto:${profile.email}`} className="btn-ghost">
              Get in touch
              <ArrowUpRight size={18} />
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-400">
            <span>{profile.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-500 sm:inline-block" />
            <span>MSc Cyber Security — Distinction</span>
            <span className="hidden h-1 w-1 rounded-full bg-ink-500 sm:inline-block" />
            <span>Open to full-time roles</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Static in normal flow now — sits below the content block instead of
          floating over it, so it reserves its own space and never clips
          into the meta row above it, no matter how tall that row gets. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="pointer-events-none hidden flex-col items-center gap-2 pt-10 md:flex"
      >
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-400">Scroll</span>
        <span className="h-10 w-px animate-pulse-soft bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}