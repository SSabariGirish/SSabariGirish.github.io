export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-mesh-1" />

      {/* Soft moving orbs */}
      <div className="absolute left-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-accent/10 blur-[120px] animate-float" />
      <div
        className="absolute right-[-15%] top-[20%] h-[36rem] w-[36rem] rounded-full bg-accent-violet/10 blur-[130px] animate-float"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[20%] h-[32rem] w-[32rem] rounded-full bg-accent/5 blur-[110px] animate-float"
        style={{ animationDelay: "-1.5s" }}
      />

      {/* Faint grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Film grain */}
      <div className="absolute inset-0 bg-grain mix-blend-overlay opacity-40" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950" />
    </div>
  );
}
