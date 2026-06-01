import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- ICONS ---
import { 
  DiPython, DiJava, DiNodejs, DiDatabase, DiDocker, DiAws, DiGit 
} from 'react-icons/di';
import { 
  SiFlask, SiSpringboot, SiCplusplus, SiJavascript, SiReact, 
  SiHtml5, SiCss3, SiWireshark, SiJinja, SiPandas, SiNumpy, 
  SiScikitlearn, SiR, SiElasticstack, SiPhp, SiGnubash 
} from 'react-icons/si';
import { 
  FaQuestionCircle, FaSitemap, FaTerminal, FaDatabase, FaKey, 
  FaServer, FaLockOpen, FaMicroscope, FaFileSignature, FaLinux, 
  FaUpload, FaChartBar, FaLanguage, FaHdd, FaMemory, FaNetworkWired, 
  FaInfoCircle, FaStethoscope, FaShieldAlt, FaFileAlt, FaProjectDiagram, 
  FaBug, FaSearch, FaClipboardCheck, FaBook
} from 'react-icons/fa'; 
import { BsBroadcast, BsFileEarmarkExcel } from 'react-icons/bs';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, duration: 0.3 } }
};

const tabVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } }
};

function Skills() {
  // --- STATE FOR TABS ---
  const [activeTab, setActiveTab] = useState('engineering');

  // --- ICON MAPPING ---
  const iconMap = {
    'Python': <DiPython />, 'Java': <DiJava />, 'AWS Fundamentals': <DiAws />, 'Docker': <DiDocker />,
    'Git/GitHub': <DiGit />, 'C / C++': <SiCplusplus />, 'Flask': <SiFlask />, 'Node.js': <DiNodejs />,
    'Spring Boot': <SiSpringboot />, 'SQL': <DiDatabase />, 'JavaScript': <SiJavascript />, 
    'React.js': <SiReact />, 'HTML': <SiHtml5 />, 'CSS': <SiCss3 />, 'Jinja2': <SiJinja />, 'PHP': <SiPhp />,
    'KQL': <FaSearch />, 'Nmap': <BsBroadcast />, 'Metasploit': <FaTerminal />, 'SQLmap': <FaDatabase />, 
    'Hydra': <FaKey />, 'JohnTheRipper': <FaLockOpen />, 'Shodan': <FaServer />, 'ELK Stack': <SiElasticstack />, 
    'Wireshark': <SiWireshark />, 'Ghidra': <FaMicroscope />, 'YARA': <FaFileSignature />, 'Linux': <FaLinux />, 
    'VirusTotal': <FaUpload />, 'Pandas': <SiPandas />, 'NumPy': <SiNumpy />, 'Scikit-Learn': <SiScikitlearn />, 
    'R': <SiR />, 'Autopsy': <FaHdd />, 'FTK Imager': <FaStethoscope />, 'Volatility': <FaMemory />, 
    'tcpdump': <FaNetworkWired />, 'ExifTool': <FaInfoCircle />, 'Steghide': <FaBug />, 'TCP/IP & OSI': <FaNetworkWired />,
    'Firewalls & Subnetting': <FaShieldAlt />, 'DNS & HTTP/S': <FaServer />, 'ISO27001 & NIST': <FaClipboardCheck />,
    'Incident Response': <FaProjectDiagram />, 'GDPR': <FaFileAlt />, 'Risk Management': <FaSitemap />,
    'MITRE ATT&CK / CAPEC': <FaBook />, 'Cyber Kill Chain': <SiGnubash />, 'STRIDE': <FaBug />, 
    'MS Excel': <BsFileEarmarkExcel />, 'Matplotlib / Seaborn': <FaChartBar />, 'NLTK': <FaLanguage />, 
    'CI/CD & Secure Coding': <FaShieldAlt />, 'PE File Analysis': <FaFileSignature />
  };

  const renderSkill = (skill) => {
    const icon = iconMap[skill] || <FaQuestionCircle />;
    return (
      <li key={skill}>
        {icon}<span>{skill}</span>
      </li>
    );
  };

  // --- TAB DATA STRUCUTRE ---
  const skillCategories = {
    engineering: {
      title: "Software Engineering",
      groups: [
        { name: "Backend", skills: ['Python', 'Java', 'C / C++', 'SQL', 'PHP', 'Flask'] },
        { name: "Frontend", skills: ['JavaScript', 'React.js', 'HTML','CSS', 'Jinja2'] },
        { name: "Cloud & Infra", skills: ['AWS Fundamentals', 'Docker', 'Git/GitHub', 'CI/CD & Secure Coding'] }
      ]
    },
    offensive: {
      title: "Offensive Security",
      groups: [
        { name: "Penetration Testing", skills: ['Nmap', 'Metasploit', 'SQLmap', 'Hydra', 'JohnTheRipper'] },
        { name: "Networking", skills: ['TCP/IP & OSI', 'Firewalls & Subnetting', 'DNS & HTTP/S'] },
        { name: "Frameworks", skills: ['MITRE ATT&CK / CAPEC', 'Cyber Kill Chain', 'STRIDE'] }
      ]
    },
    defensive: {
      title: "Defensive & Forensics",
      groups: [
        { name: "Malware & Logs", skills: ['ELK Stack', 'Ghidra', 'YARA', 'Linux', 'Wireshark', 'PE File Analysis', 'KQL'] },
        { name: "Digital Forensics", skills: ['Autopsy', 'FTK Imager', 'tcpdump', 'Volatility', 'ExifTool', 'Steghide'] }
      ]
    },
    dataGRC: {
      title: "Data & GRC",
      groups: [
        { name: "Governance & Risk", skills: ['ISO27001 & NIST', 'Incident Response', 'Risk Management', 'GDPR'] },
        { name: "AI & Data Analysis", skills: ['MS Excel', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib / Seaborn', 'NLTK', 'R'] }
      ]
    }
  };

  return (
    <motion.section 
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>My Technical Toolkit</h2>
      <p style={{ marginBottom: '20px' }}>
        A comprehensive breakdown of the technologies, frameworks, and methodologies 
        I have utilised in both academic and professional environments.
      </p>

      {/* --- TAB NAVIGATION BUTTONS --- */}
      <div className="skills-tabs">
        {Object.keys(skillCategories).map((key) => (
          <button 
            key={key}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {skillCategories[key].title}
          </button>
        ))}
      </div>

      {/* --- TAB CONTENT --- */}
      <div className="skills-tab-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="skills-grid"
          >
            {skillCategories[activeTab].groups.map((group) => (
              <div className="skill-category" key={group.name}>
                <h3>{group.name}</h3>
                <ul>{group.skills.map(renderSkill)}</ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </motion.section>
  );
}

export default Skills;