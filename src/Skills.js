import React from 'react';
// 1. IMPORT FRAMER MOTION
import { motion } from 'framer-motion';

// (Your icon imports are all perfect)
import { 
  DiPython, DiJava, DiNodejs, DiDatabase 
} from 'react-icons/di';
import { 
  SiFlask, SiSpringboot, SiCplusplus, SiJavascript, SiReact, 
  SiHtml5, SiCss3, SiWireshark, SiJinja,
  SiPandas, SiNumpy, SiScikitlearn, SiR, SiElasticstack
} from 'react-icons/si';
import { FaQuestionCircle, FaSitemap, FaUsersCog, FaTerminal,
    FaDatabase, FaKey, FaServer, FaLockOpen, FaMicroscope, 
    FaFileSignature, FaLinux, FaUpload, FaChartBar, FaLanguage,
    FaHdd, FaMemory, FaNetworkWired, FaInfoCircle, FaStethoscope
 } from 'react-icons/fa'; 
import {BsBroadcast} from 'react-icons/bs';

// 2. DEFINE THE ANIMATION VARIANTS
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.3
    }
  }
};

function Skills() {
  const iconMap = {
    'Python': <DiPython />,
    'Java': <DiJava />,
    'C / C++': <SiCplusplus />,
    'Flask': <SiFlask />,
    'Node.js': <DiNodejs />,
    'Spring Boot': <SiSpringboot />,
    'SQL': <DiDatabase />,
    'JavaScript': <SiJavascript />,
    'React.js': <SiReact />,
    'HTML': <SiHtml5 />,
    'CSS': <SiCss3 />,
    'Jinja2': <SiJinja />,
    'Object Oriented Programming': <FaSitemap />,
    'Data Structures': <FaUsersCog />,
    'Nmap': <BsBroadcast />,
    'Metasit': <FaTerminal />,
    'SQLmap': <FaDatabase />, 
    'Hydra': <FaKey />,
    'JohnTheRipper': <FaLockOpen />,
    'Shodan': <FaServer />,
    'ELK Stack': <SiElasticstack />,
    'Wireshark': <SiWireshark />,
    'Ghidra': <FaMicroscope />,
    'YARA': <FaFileSignature />,
    'REMnux': <FaLinux />,
    'VirusTotal': <FaUpload />,
    'Pandas': <SiPandas />,
    'NumPy': <SiNumpy />,
    'Scikit-Learn': <SiScikitlearn />,
    'Matplotlib / Seaborn': <FaChartBar />,
    'NLTK': <FaLanguage />,
    'R': <SiR />,
    'Autopsy': <FaHdd />,
    'FTK Imager': <FaStethoscope />,
    'Volatility': <FaMemory />,
    'tcpdump': <FaNetworkWired />,
    'ExifTool': <FaInfoCircle />,
  };

  const renderSkill = (skill) => {
    const icon = iconMap[skill] || <FaQuestionCircle />;
    return (
      <li key={skill}>
        {icon}
        <span>{skill}</span>
      </li>
    );
  };

  return (
    // 3. REPLACE <section> WITH <motion.section>
    <motion.section 
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Triggers when 30% is in view
    >
      <h2>My Technical Toolkit</h2>
      <p>
        Here are the key technologies and methodologies I've worked with 
        throughout my MSc and professional experience.
      </p>

      <div className="skills-grid">

        <div className="skill-category">
          <h3>Backend & Frameworks</h3>
          <ul>
            {['Python', 'Java', 'C / C++', 'Flask', 'Node.js', 'Spring Boot', 'SQL'].map(renderSkill)}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Frontend & Development</h3>
          <ul>
            {['JavaScript', 'React.js', 'HTML', 'CSS', 'Jinja2', 'Object Oriented Programming', 'Data Structures'].map(renderSkill)}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Penetration Testing</h3>
          <ul>
            {['Nmap', 'Metasit', 'SQLmap', 'Hydra', 'JohnTheRipper', 'Shodan'].map(renderSkill)}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Malware & Log Analysis</h3>
          <ul>
            {['ELK Stack', 'Wireshark', 'Ghidra', 'YARA', 'REMnux', 'VirusTotal'].map(renderSkill)}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Data Analysis</h3>
          <ul>
            {['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib / Seaborn', 'NLTK', 'R'].map(renderSkill)}
          </ul>
        </div>

        <div className="skill-category">
          <h3>Forensics & Tools</h3>
          <ul>
            {['Autopsy', 'FTK Imager', 'Volatility', 'tcpdump', 'ExifTool'].map(renderSkill)}
          </ul>
        </div>

      </div>
    </motion.section>
  );
}

export default Skills;