// All portfolio content lives here.
//
// A NOTE ON THE CASE STUDY PROSE:
// The "Wards and Firewalls" case study below is written in full — problem,
// challenge, approach, result, what you learned. I drafted the technical
// specifics (the challenge and approach paragraphs especially) from your
// one-paragraph description and the game screenshot you shared, since I
// don't know the actual game mechanics. You built it — please fact-check
// those two paragraphs before publishing anything. Same goes for the two
// lighter case studies (Threat Intelligence Dashboard, AeroNet Telecom):
// the shape of the story is inferred from your descriptions, not lifted
// from the repos themselves.
//
// The "14-0" case study is the one exception — I read the actual README
// on GitHub for that one, so problem/challenge/approach/built are drawn
// from real documented mechanics, not inference. Still worth a read-through
// since I wrote the framing (especially "result" and "learned").

export const profile = {
  name: "Sabari Girish Srinivasan",
  initials: "SS",
  title: "Cyber Security Engineer",
  location: "London, United Kingdom",
  email: "sabarigirish28nov@gmail.com",
  github: "https://github.com/SSabariGirish",
  linkedin: "https://www.linkedin.com/in/sabari-girish-srinivasan/", // TODO: add your real LinkedIn URL
  heroLines: [
    "Bridging the gap between proactive",
    "threat hunting and secure software engineering",
  ],
  heroSub:
    "Cyber Security Engineer based in London. MSc Cyber Security (Distinction, Best Overall Student), a year and a half in a support environment, and a habit of turning security ideas into things people can actually use.",
};

export const caseStudies = [
  {
    id: "wards-and-firewalls",
    index: "01",
    name: "Wards and Firewalls",
    hook: "A D&D-inspired card game that made cybersecurity training something people actually wanted to finish.",
    visual: "shield",
    badges: ["High Commendation, DTII", "Appreciation, Cyber Innovation Hub"],
    problem:
      "Most cybersecurity awareness trainings involve slideshows that people click through to satisfy a compliance checkbox, and it shows. Attitudes and behaviour rarely change, because the format never asks anyone to actually think like an attacker or a defender.",
    challenge:
      "The hard part wasn't the game design, it was the accuracy: turning real attack patterns like phishing, social engineering, weak access control and SQL injection into card mechanics that stay honest to how those attacks actually work, without collapsing into a cartoon version of security that teaches the wrong instincts.",
    approach:
      "I built it as a 2-player game along the same lines as a tabeltop card game, on the theory that a social, two-player format forces engagement in a way a single player game doesn't. Each card and mechanic maps to a real defensive or offensive concept, so playing a round of the game means rehearsing the actual reasoning security awareness training is trying to instil.",
    built:
      "A full card game — decks, rules, and a playable prototype — designed for non-technical audiences with no security background, plus the dissertation write-up analysing its effectiveness as a training method.",
    result:
      "Measured a 92.5% increase in participant awareness in testing, was submitted as my MSc dissertation and scored a High Distinction, and earned a High Commendation from the DTII along with praise from the Cyber Innovation Hub.",
    learned:
      "That the best security training doesn't explain a concept — it makes you make the same mistake an attacker exploits, once, safely, so it sticks.",
    tags: ["Python", "Flask", "HTML/CSS", "Jinja2", "Game Design"],
    url: "https://github.com/SSabariGirish/wards-and-firewalls",
  },
  {
    id: "threat-intelligence-dashboard",
    index: "02",
    name: "Threat Intelligence Dashboard",
    hook: "One search bar instead of four browser tabs during incident triage.",
    visual: "radar",
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
    tags: ["Flask", "REST APIs", "Threat Intel"],
    url: "https://github.com/SSabariGirish/threat-intelligence-dashboard",
  },
  {
    id: "aeronet-telecom",
    index: "03",
    name: "AeroNet Telecom",
    hook: "Taking threat modelling off the whiteboard and into a live system.",
    visual: "mesh",
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
    tags: ["Docker", "AWS", "Threat Modelling"],
    url: "https://github.com/SSabariGirish/aeronet-telecom",
  },
  {
    id: "ipl-14-0",
    index: "04",
    name: "14-0",
    hook: "A full IPL fantasy draft-and-simulation engine, built to settle arguments with actual mechanics.",
    visual: "wicket",
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
    tags: ["React", "Vite", "Canvas API"],
    url: "https://github.com/SSabariGirish/14-0",
    liveUrl: "https://ssabarigirish.github.io/14-0/",
  },
];

export const otherProjects = [
  {
    name: "Mini-CTF Platform",
    description:
      "A web-based Capture the Flag platform with SQL injection, XSS, and other challenge categories for practising offensive security techniques.",
    url: "https://github.com/SSabariGirish/mini-ctf-platform",
  },
  {
    name: "CyberSim Flashcards",
    description:
      "A browser-based training platform with a custom simulation engine that emulates vulnerabilities like SQL injection and IDOR without needing a live backend.",
    url: "https://github.com/SSabariGirish/cybersim-flashcards",
  },
  {
    name: "GRC Risk Assessment Toolkit",
    description:
      "A toolkit for running structured governance, risk, and compliance assessments against frameworks like ISO 27001 and NIST.",
    url: "https://github.com/SSabariGirish/grc-risk-assessment-toolkit",
  },
  {
    name: "Log File Analyser",
    description:
      "A tool for parsing and analysing log files to surface anomalies and indicators of compromise.",
    url: "https://github.com/SSabariGirish/log-file-analyser",
  },
  {
    name: "Trivia Game",
    description: "A web-based trivia game project.",
    url: "https://github.com/SSabariGirish/trivia-game",
  },
  {
    name: "PatientOS",
    description:
      "An AI-assisted web application enabling patients to interpret prescriptions and check medication interactions.",
    url: "https://github.com/SSabariGirish/patientos",
  },
];

// "How I Think" is presented as three parallel mindsets rather than one
// flat process — grounded in the actual tools/frameworks from your skill
// list for each column, not generic bullet points.
export const perspectives = [
  {
    id: "blue-team",
    title: "Blue Team",
    icon: "blueTeam",
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
          "I need to find which vulnerability needs to be fixed first. Rank by real risk (impact x likelihood), weighed against ISO 27001 and NIST.",
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
    steps: [
      {
        title: "Recon",
        description:
          "Map the attack surface first. See if there are open ports, exposed services, and the small misconfigurations nobody remembers to check. Use tools like Nmap to perform this outline scan before touching anything.",
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
        description:
          "Ensure replicability of the exploit. Document the exact path so the defensive side can close it.",
      },
    ],
  },
  {
    id: "secure-swe",
    title: "Secure SWE",
    icon: "secureSwe",
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
        description:
          "Test like it's already broken. The OWASP Top 10 categories are a checklist I actually run against my own code.",
      },
      {
        title: "Ship",
        description:
          "Wire security checks into CI/CD so a regression gets caught by a pipeline immediately and not under dire scenarios.",
      },
    ],
  },
];

// Curated = always visible. Full detail (bullets, certifications) shows
// behind the "Show full timeline" toggle.
export const timeline = [
  {
    dates: "2024 - 2025",
    title: "MSc Cyber Security",
    org: "Cardiff University",
    detail: "Distinction · Best Overall Student on the programme",
    bullets: [
      "Vice-Chancellor's International Scholarship",
      "High Distinction (>80%) in Dissertation, Business Continuity and Transformation, and Cybersecurity Operations",
      "Distinction (>70%) in Cybersecurity and Risk Management, Computer and Network Forensics, and Developing Secure Systems and Applications",
    ],
  },
  {
    dates: "2025",
    title: "1st Place, ISB Hackathon",
    org: "PixelTrue Engine",
    detail: "AI-driven deepfake detection system achieving 92% accuracy",
  },
  {
    dates: "2022 - 2024",
    title: "Advanced Application Engineering Analyst",
    org: "Accenture",
    detail: "Support, analysis and incident response for a 15-year global telecommunications client",
    bullets: [
      "Engineered Python automation that cut manual workflow labour by ~50% and improved component performance by 40%",
      "Built ELK Stack + SQL log pipelines to correlate large datasets and proactively flag indicators of compromise",
      "Investigated and resolved 40+ monthly security incidents",
      "Co-authored incident response playbooks that cut new-hire onboarding time by 50%",
      "Reduced incident backlogs by 25% by prioritising risk across the client's stakeholder groups",
    ],
  },
  {
    dates: "2018 - 2022",
    title: "B.Tech Computer Science",
    org: "Vellore Institute of Technology",
    detail: "8.64 CGPA (First Class equivalent)",
    bullets: [
      "Dissertation: An image repost detection algorithm that uses three existing algorithms under different thresholds to acknowledge pirated copyrighted images posted in a skewed manner to avoid being caught by existing detection algorithms",
      "Member of the Debate Society",
      "Research: Historial origins, similarities, spread and dialects of Dravidian languages - Tamil, Malayalam, Telugu, Kannada and Tulu"
    ],
  },
];

export const certifications = [
  "Google Cybersecurity Certificate",
  "Cisco Cybersecurity Operations Fundamentals Certificate",
  "Pre-Security — TryHackMe",
  "Cyber Security 101 — TryHackMe",
  "The Complete Cyber Security Course (Parts 1 - 4) — StationX",
  "SecureFlag OWASP Top 10:2021 in Python with Django",
  "100 Days of Code: The Complete Python Pro Bootcamp — The App Brewery",
  "The Complete Full-Stack Web Development Bootcamp — The App Brewery",
];

export const skillGroups = [
  { title: "Backend", skills: ["Python", "Java", "C / C++", "SQL", "PHP", "Flask"] },
  { title: "Frontend", skills: ["JavaScript", "React.js", "HTML", "CSS", "Jinja2"] },
  { title: "Cloud & Infra", skills: ["AWS Fundamentals", "Docker", "Git / GitHub", "CI/CD & Secure Coding"] },
  { title: "Penetration Testing", skills: ["Nmap", "Metasploit", "SQLmap", "Hydra", "John the Ripper"] },
  { title: "Networking", skills: ["TCP/IP & OSI", "Firewalls & Subnetting", "DNS & HTTP/S"] },
  { title: "Frameworks", skills: ["MITRE ATT&CK / CAPEC", "Cyber Kill Chain", "STRIDE"] },
  { title: "Malware & Logs", skills: ["ELK Stack", "Ghidra", "YARA", "Linux", "Wireshark", "PE File Analysis", "KQL"] },
  { title: "Digital Forensics", skills: ["Autopsy", "FTK Imager", "tcpdump", "Volatility", "ExifTool", "Steghide"] },
  { title: "Governance & Risk", skills: ["ISO 27001 & NIST", "Incident Response", "Risk Management", "GDPR"] },
  { title: "AI & Data Analysis", skills: ["MS Excel", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib / Seaborn", "NLTK", "R"] },
];

// Grounded in your resume: PatientOS (NHS Hack Day) and debate society.
// Edit freely — this is meant to be the one paragraph that sounds like
// you, not a resume summary.
export const interests =
  "Outside of security work I've dabbled in gaming, learning new languages and health-tech — I built PatientOS, a plain-language blood test and prescription interpreter, at NHS Hack Day 2026. Four years in my university's debate society also taught me more about structuring an argument than most incident reports ever have.";

export const languages = [
  {
    name: "English",
    level: "Full professional proficiency",
    note: "Educated entirely in English. Schooling in the UAE and India, MSc in the UK. IELTS Band 8.",
  },
  {
    name: "Tamil",
    level: "Native",
    note: "My mother tongue — fully fluent reading, writing, and speaking.",
  },
  {
    name: "Hindi",
    level: "Fluent",
    note: "Formal proficiency via the Dakshin Bharat Hindi Prachar Sabha exams, up to Praveshika level.",
  },
  {
    name: "Japanese",
    level: "Basic",
    note: "Self-taught in hiragana and katakana — a hobby driven by Japanese media and games.",
  },
];

export const hobbies = [
  "Deep, story-focused video games — The Witcher, Yakuza, Dishonored, Assassin's Creed, Batman Arkham series, Vampyr",
  "Picking apart character behaviour and narrative structure in whatever I'm playing or watching",
  "Strategic tabletop games — Terraforming Mars, Splendor, and D&D (which inspired Wards and Firewalls)",
  "Cooking Indian food (I'm told I'm rather good at it)",
  "Japanese manga and Korean manhwa",
  "Cricket, Football and Basketball",
];