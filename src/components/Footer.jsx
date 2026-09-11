import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="section-pad flex flex-col items-center justify-between gap-4 border-t border-ink-800 py-8 pb-28 text-sm text-ink-500 sm:flex-row md:pb-8">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <span className="font-mono text-xs text-ink-600">Built with React · Vite · Tailwind · Framer Motion</span>
    </footer>
  );
}
