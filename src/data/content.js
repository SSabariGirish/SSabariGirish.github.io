export const profile = {
  name: "Sabari Girish Srinivasan",
  initials: "SS",
  title: "Cyber Security Engineer",
  location: "London, United Kingdom",
  email: "sabarigirish28nov@gmail.com",
  github: "https://github.com/SSabariGirish",
  linkedin: "https://www.linkedin.com/in/sabari-girish-srinivasan/",
  heroKicker: "Security Engineer & Software Developer",
  heroHeadline: "Building resilient\nsoftware by\nengineering for failure.",
  heroSub:
    "MSc Cyber Security (Distinction) with a background in enterprise incident triage and operational support for global telecom. I specialise in turning proactive threat models into practical, usable tools.",
};

export const caseStudies = [
  {
    id: "wards-and-firewalls",
    index: "01",
    name: "Wards & Firewalls",
    hook: "A D&D-inspired card game that made cybersecurity training something people actually wanted to finish.",
    cardSummary: "Measured a 92.5% increase in participant awareness in testing",
    color: "#F5B971",
    tags: ["Python", "Flask", "Jinja2", "Game Design"],
    url: "https://github.com/SSabariGirish/wards-and-firewalls",
    videoUrl: "https://youtu.be/M0zHOSZ1gc0",
    size: "lg",
    badges: ["High Commendation, DTII", "Appreciation, Cyber Innovation Hub"],
    problem:
      "Most cybersecurity awareness trainings involve slideshows that people click through to satisfy a compliance checkbox, and it shows. Attitudes and behaviour rarely change, because the format never asks anyone to actually think like an attacker or a defender.",
    challenge:
      "The hard part wasn't the game design, it was the accuracy: turning real attack patterns like phishing, social engineering, weak access control and SQL injection into card mechanics that stay honest to how those attacks actually work, without collapsing into a cartoon version of security that teaches the wrong instincts.",
    approach:
      "I built it as a 2-player game along the same lines as a tabletop card game, on the theory that a social, two-player format forces engagement in a way a single player game doesn't. Each card and mechanic maps to a real defensive or offensive concept, so playing a round of the game means rehearsing the actual reasoning security awareness training is trying to instil.",
    built:
      "A full card game including decks, rules, and a playable prototype was designed for non-technical audiences with no security background, plus the dissertation write-up analysing its effectiveness as a training method.",
    result:
      "Measured a 92.5% increase in participant awareness in testing, was submitted as my MSc dissertation and scored a High Distinction, and earned a High Commendation from the DTII along with praise from the Cyber Innovation Hub.",
    learned:
      "That the best security training doesn't just explain a concept. It makes you make the same mistake an attacker exploits, once, safely, so it sticks.",
  },
  {
    id: "threat-intelligence-dashboard",
    index: "02",
    name: "Threat Intel Dashboard",
    hook: "One search bar instead of four browser tabs during incident triage.",
    cardSummary: "Unified IP / hash reputation lookups into a single view",
    color: "#FB7185",
    tags: ["Flask", "REST APIs", "Threat Intel"],
    url: "https://github.com/SSabariGirish/threat-intelligence-dashboard",
    videoUrl: "https://youtu.be/ImAxuPiJyZM",
    size: "md",
    problem:
      "Checking a suspicious IP or file hash during triage usually means switching between several threat-intel sites by hand. It is slow, and breaks the investigator's focus at exactly the moment they need it most.",
    challenge:
      "AbuseIPDB and VirusTotal return reputation data in different shapes with different rate limits, so the real work was normalising both into one coherent view without the dashboard stalling every time an API throttled a request.",
    approach:
      "Built a Flask backend as a thin aggregation layer that queries both APIs and folds the results into a single reputation view, with a live security news feed alongside so context is one page instead of five.",
    built:
      "A dashboard where you paste an IP or hash once and get a combined reputation read, not a raw API dump.",
    result:
      "Turned a multi-tab manual lookup routine into a single search — small, but it's the kind of friction that adds up across a full triage shift.",
    learned:
      "Security tooling has to be designed for the APIs it depends on being slow or wrong sometimes, not just for the happy path.",
  },
  {
    id: "aeronet-telecom",
    index: "03",
    name: "AeroNet Telecom",
    hook: "Taking STRIDE threat modelling off the whiteboard and into a live containerised system.",
    cardSummary: "Reference architecture with defence-in-depth controls",
    color: "#60A5FA",
    tags: ["Docker", "AWS", "STRIDE"],
    url: "https://github.com/SSabariGirish/aeronet-telecom",
    size: "md",
    problem:
      "Threat modelling is usually taught on paper involving a diagram, a STRIDE checklist resulting in a report. That's useful, but it skips the part where a threat model actually has to survive contact with a real deployment.",
    challenge:
      "Applying STRIDE to a containerised microservices platform meant translating each abstract threat category into a concrete infrastructure decision. It was not just noting 'spoofing is a risk' but deciding exactly which service gets which role-based access policy.",
    approach:
      "Deployed a multi-service telecom platform on Docker and AWS, then ran a structured threat-modelling pass across it, mapping every identified threat to a specific defence-in-depth control rather than leaving it as a documented risk.",
    built:
      "A containerised microservices telecom platform with role-based access controls and telemetry, built specifically to be audited rather than just to run.",
    result:
      "A working reference architecture that shows threat modelling turned into actual infrastructure decisions, not just a report that sits in a drawer.",
    learned:
      "How much a threat model changes once you're the one who has to implement the fix, not just document it.",
  },
  {
    id: "ipl-14-0",
    index: "04",
    name: "14-0",
    hook: "A full IPL fantasy draft-and-simulation engine, built to settle arguments with actual mechanics.",
    cardSummary: "Client-side draft engine + tournament simulator, zero backend",
    color: "#8B7CF6",
    tags: ["React", "Vite", "Canvas API"],
    url: "https://github.com/SSabariGirish/14-0",
    liveUrl: "https://ssabarigirish.github.io/14-0/",
    size: "md",
    problem:
      "Cricket fans argue endlessly about the greatest all-time IPL XI with no way to settle it. The NBA fan game '82-0' proved this format works — draw your luck, draft a fantasy roster, simulate a season, see if it goes undefeated — but nothing like it existed for cricket.",
    challenge:
      "The interesting failure mode wasn't the simulation, it was the draft itself: with 12 rounds pulling from randomised franchise-and-era pools under role quotas and a 4-overseas-player cap, it's entirely possible to spin your way into a dead end — a required role with zero legal players left. The engine has to detect that before it happens and relax the search automatically, without the player noticing the seams.",
    approach:
      "Built it fully client-side in React and Vite with no backend — the draft engine, the tournament simulation, and the dataset all run in the browser. The simulation itself avoids naive stat-averaging: Batting Execution and Bowling Defense are weighted by each player's top-5 contributions with a credibility curve for low-sample players, then blended 40/40/20 with squad balance into one Overall Squad Power rating that drives 14 simulated fixtures.",
    built:
      "A 12-round drafting game with two modes (Classic, stats visible; 'Ball Knowledge', pure instinct with alphabetical-only sorting), a live overseas-quota counter that locks out picks at the cap, an 8-tier verdict system from '14-0: Undisputed Champions' down to 'Wooden Spoon Rebuild', and a Canvas-rendered shareable result card.",
    result:
      "Turned a tea stall argument into something with real mechanics behind it — and honestly, a decent answer to 'the security guy only fixes things, right?' I went 14-0 with my own dream XI once and then spent way too long trying to prove it wasn't a fluke.",
    learned:
      "Designing for graceful degradation isn't just a security-tooling principle — the same instinct that makes me want an IDS to fail safe is what made me build the draft engine to relax constraints instead of dead-ending. Good systems thinking doesn't care what the system is for.",
  },
  {
    id: "cybersim-flashcards",
    index: "05",
    name: "CyberSim Flashcards",
    hook: "A browser-based training platform with a custom vulnerability simulation engine.",
    cardSummary: "Hands-on SQLi / IDOR simulations with no live backend",
    color: "#34D399",
    tags: ["React", "TypeScript", "Vite"],
    url: "https://github.com/SSabariGirish/cybersim-flashcards",
    liveUrl: "https://ssabarigirish.github.io/cybersim-flashcards/",
    videoUrl: "https://youtu.be/oRZYsHNsSSI",
    size: "lg",
    problem:
      "Traditional security training often relies on rote memorisation rather than practical application. Learners need hands-on experience to truly understand concepts.",
    challenge:
      "Creating a simulation engine that accurately models vulnerabilities like SQL injection and IDOR without requiring a live backend, ensuring both educational value and performance.",
    approach:
      "Developed a client-side simulation engine using React, TypeScript and Vite, allowing users to interact with realistic security scenarios directly in the browser. Implemented a custom engine to emulate vulnerabilities effectively.",
    built:
      "A browser-based platform featuring interactive flashcards and simulations for various security vulnerabilities, providing a practical learning experience.",
    result:
      "Enabled learners to practice and understand complex security attacks through engaging, hands-on simulations without the need for backend infrastructure.",
    learned:
      "The importance of creating immersive, interactive experiences that bridge the gap between theoretical knowledge and practical application in cybersecurity education.",
  },
];

export const otherProjects = [
  {
    name: "Mini-CTF Platform",
    description:
      "A web-based Capture the Flag platform with SQLi, XSS, and other challenge categories.",
    url: "https://github.com/SSabariGirish/mini-ctf-platform",
    color: "#22D3EE",
  },
  {
    name: "GRC Risk Assessment Toolkit",
    description: "Structured governance, risk and compliance assessments against ISO 27001 and NIST.",
    url: "https://github.com/SSabariGirish/grc-risk-assessment-toolkit",
    color: "#FBBF24",
  },
  {
    name: "Log File Analyser",
    description: "Parses log files to surface anomalies and indicators of compromise.",
    url: "https://github.com/SSabariGirish/log-file-analyser",
    color: "#A78BFA",
  },
  {
    name: "Trivia Game",
    description: "A web trivia game where players choose their own topic via the Gemini API.",
    url: "https://github.com/SSabariGirish/trivia-game",
    color: "#F472B6",
  },
  {
    name: "PatientOS",
    description: "AI-assisted app for interpreting prescriptions and checking medication interactions.",
    url: "https://github.com/SSabariGirish/patientos",
    color: "#4ADE80",
  },
];

export const skillGroups = [
  { title: "Backend", icon: "server", skills: ["Python", "Java", "C / C++", "SQL", "Flask"], color: "#60A5FA" },
  { title: "Frontend", icon: "code", skills: ["JavaScript", "React.js", "HTML", "CSS", "Jinja2"], color: "#F472B6" },
  { title: "Cloud & Infra", icon: "cloud", skills: ["AWS", "Docker", "Git", "CI/CD"], color: "#34D399" },
  { title: "Penetration Testing", icon: "target", skills: ["Nmap", "Metasploit", "SQLmap", "Hydra", "John the Ripper"], color: "#F87171" },
  { title: "Networking", icon: "network", skills: ["TCP/IP & OSI", "Firewalls", "DNS & HTTP/S"], color: "#FBBF24" },
  { title: "Frameworks", icon: "shield", skills: ["MITRE ATT&CK", "Cyber Kill Chain", "STRIDE", "Pyramid of Pain"], color: "#A78BFA" },
  { title: "Malware & Logs", icon: "search", skills: ["ELK Stack", "Ghidra", "YARA", "Wireshark", "KQL"], color: "#FB923C" },
  { title: "Digital Forensics", icon: "fingerprint", skills: ["Autopsy", "FTK Imager", "tcpdump", "Volatility"], color: "#22D3EE" },
  { title: "Governance & Risk", icon: "scale", skills: ["ISO 27001 & NIST", "Incident Response", "GDPR"], color: "#2DD4BF" },
  { title: "AI & Data", icon: "cpu", skills: ["Pandas", "NumPy", "Scikit-Learn", "R"], color: "#FB7185" },
];

// How I approach a problem depending on which "hat" is on — rendered as a
// tabbed methodology breakdown in the Perspectives section.
export const perspectives = [
  {
    id: "blue-team",
    title: "Blue Team",
    icon: "blueTeam",
    tagline: "Defend - Find it before it finds you.",
    color: "#60A5FA",
    steps: [
      {
        title: "Model",
        description:
          "Start by mapping how a system could actually be attacked. Use STRIDE and the MITRE ATT&CK/CAPEC catalogues as a checklist, rather than guessing at what feels risky.",
      },
      {
        title: "Investigate",
        description:
          "Go look at what's actually happening versus what should be happening. Network and log analysis with Wireshark, the ELK Stack, and SQL to separate signals of IoCs from noise.",
      },
      {
        title: "Prioritise",
        description:
          "Find which vulnerability needs fixing first. Rank by real risk (impact × likelihood), weighed against ISO 27001 and NIST.",
      },
      {
        title: "Respond",
        description:
          "Use the Cyber Kill Chain to find where in an attack's lifecycle it's cheapest to break it, then harden specifically that stage rather than everything at once.",
      },
    ],
  },
  {
    id: "red-team",
    title: "Red Team",
    icon: "redTeam",
    tagline: "Attack - put yourself in the attacker's shoes.",
    color: "#F87171",
    steps: [
      {
        title: "Recon",
        description:
          "Map the attack surface first. See if there are open ports, exposed services, and the small misconfigurations nobody remembers to check, using tools like Nmap for an outline scan before touching anything.",
      },
      {
        title: "Exploit",
        description:
          "Turn a weakness into access. Try SQL injection, XSS, weak credentials, or a known CVE using tools like SQLmap, Metasploit, and Hydra, strictly inside the agreed rules of engagement.",
      },
      {
        title: "Escalate",
        description:
          "Privilege is always the primary goal. Chain small footholds into admin access using the lateral-movement logic the MITRE ATT&CK matrix catalogues.",
      },
      {
        title: "Report",
        description: "Ensure replicability of the exploit. Document the exact path so the defensive side can close it.",
      },
    ],
  },
  {
    id: "secure-swe",
    title: "Secure SWE",
    icon: "secureSwe",
    tagline: "Build - bake security in the software, not on it.",
    color: "#34D399",
    steps: [
      {
        title: "Design",
        description:
          "Thread security into the architecture before a line of code is written. Decide on the data flow, trust boundaries, and what happens when an unexpected input is provided.",
      },
      {
        title: "Build",
        description:
          "Write it the way OWASP would want it reviewed. Involve parameterised queries, validated input, least privilege and other secure principles from the very first step.",
      },
      {
        title: "Verify",
        description: "Test like it's already broken. The OWASP Top 10 categories are a checklist I actually run against my own code.",
      },
      {
        title: "Ship",
        description:
          "Wire security checks into CI/CD so a regression gets caught by a pipeline immediately, not under dire scenarios.",
      },
    ],
  },
];

export const timeline = [
  {
    dates: "2024 — 2025",
    title: "MSc Cyber Security",
    org: "Cardiff University",
    detail: "Distinction · Best Overall Student on the programme",
  },
  {
    dates: "2025",
    title: "1st Place, ISB Hackathon",
    org: "PixelTrue Engine",
    detail: "AI-driven deepfake detection system, 92% accuracy",
  },
  {
    dates: "2022 — 2024",
    title: "Advanced Application Engineering Analyst",
    org: "Accenture",
    detail: "Support, analysis and incident response for a global telecom client",
  },
  {
    dates: "2018 — 2022",
    title: "B.Tech Computer Science",
    org: "Vellore Institute of Technology",
    detail: "8.64 CGPA (First Class equivalent)",
  },
];

export const certifications = [
  "Google Cybersecurity Certificate",
  "Cisco Cybersecurity Operations Fundamentals",
  "TryHackMe — Pre-Security & Cyber Security 101",
  "SecureFlag OWASP Top 10:2021 (Python / Django)",
  "The Complete Cyber Security Course — StationX",
];

export const blogPosts = [];