import React, { useState, useEffect } from 'react';

// DESIGN MODULE SYSTEM WITH DEDICATED CENTERED CONTACT SECTION
const styles = {
  container: { minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e5e5e5', fontFamily: 'monospace', padding: '0', margin: '0', position: 'relative', overflowX: 'hidden' },
  header: { borderBottom: '1px solid #262626', backgroundColor: 'rgba(10, 10, 10, 0.8)', padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(8px)' },
  headerTitle: { fontWeight: 'bold', fontSize: '1.125rem', letterSpacing: '0.05em', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  pulseDot: { width: '0.5rem', height: '0.5rem', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' },
  main: { maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', gap: '6rem' },
  
  // HERO ARCHITECTURE GRID
  heroLayout: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', justifyContent: 'center' },
  profileColumn: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', textAlign: 'center' },
  avatarBigCircle: { width: '13rem', height: '13rem', borderRadius: '50%', border: '3px solid #10b981', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s ease-in-out', backgroundColor: '#171717', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(16, 185, 129, 0.15)' },
  
  infoColumn: { display: 'flex', flexDirection: 'column', gap: '1.25rem' },
  badge: { display: 'inline-block', padding: '0.35rem 0.85rem', backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '4px', fontSize: '0.75rem', color: '#34d399', fontWeight: 'bold', textTransform: 'uppercase', width: 'fit-content' },
  headline: { fontSize: '2.75rem', fontWeight: '900', color: '#f5f5f5', lineHeight: '1.1', margin: '0' },
  gradientText: { color: '#22d3ee' },
  paragraph: { color: '#a3a3a3', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '36rem', fontFamily: 'sans-serif', margin: '0' },
  btnContainer: { display: 'flex', gap: '1rem', marginTop: '0.5rem' },
  primaryBtn: { padding: '0.75rem 1.5rem', backgroundColor: '#10b981', color: '#0a0a0a', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none', fontSize: '0.875rem' },
  secondaryBtn: { padding: '0.75rem 1.5rem', border: '1px solid #262626', backgroundColor: '#171717', color: '#d4d4d4', borderRadius: '4px', textDecoration: 'none', fontSize: '0.875rem' },
  
  // INTERACTIVE KERNEL CONSOLE
  terminalCard: { backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.7)', display: 'flex', flexDirection: 'column' },
  terminalHeader: { backgroundColor: '#0a0a0a', padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #262626' },
  dotContainer: { display: 'flex', gap: '0.375rem' },
  terminalBody: { padding: '1.25rem', fontSize: '0.825rem', backgroundColor: 'rgba(10,10,10,0.4)', minHeight: '130px' },
  
  // DYNAMIC SECTION GRIDS
  grid3Col: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
  grid2Col: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' },
  
  expCard: { padding: '1.5rem', backgroundColor: 'rgba(23,23,23,0.4)', border: '1px solid #262626', borderRadius: '8px', position: 'relative' },
  dateTag: { position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.75rem', color: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', padding: '0.125rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(16,185,129,0.2)' },
  sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#f5f5f5', textTransform: 'uppercase', borderLeft: '4px solid #10b981', paddingLeft: '0.75rem', marginBottom: '2rem' },
  
  projectCard: { backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' },
  projectBody: { padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' },
  projectTitle: { fontSize: '1.25rem', fontWeight: 'bold', color: '#f5f5f5', margin: 0 },
  projectText: { fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.5', margin: 0 },
  projectTagFooter: { padding: '1rem 1.5rem', backgroundColor: '#0a0a0a', borderTop: '1px solid #262626', color: '#10b981', fontSize: '0.75rem', fontWeight: 'bold' },
  
  skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' },
  skillBlock: { padding: '1.25rem', backgroundColor: 'rgba(23,23,23,0.6)', border: '1px solid #262626', borderRadius: '8px' },
  skillTitle: { fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem', letterSpacing: '0.05em' },
  skillList: { fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#d4d4d4', lineHeight: '1.6', margin: 0 },
  
  achievementsContainer: { backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px', overflow: 'hidden' },
  achievementRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', borderBottom: '1px solid #212121', fontSize: '0.875rem' },
  
  // CENTERED CONNECT METRIC HUB STYLES
  contactWrapper: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '3.5rem 2rem', backgroundColor: 'rgba(23, 23, 23, 0.4)', border: '1px solid #262626', borderRadius: '12px', gap: '1.5rem' },
  socialDockCentered: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', marginTop: '1rem' },
  largeSocialIcon: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#a3a3a3', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', textDecoration: 'none', gap: '0.75rem' },
  iconLabel: { fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#737373', transition: 'color 0.3s' },

  // MODAL VIEWPORT OVERLAY
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(5, 5, 5, 0.96)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 100, cursor: 'zoom-out' },
  modalImage: { maxWidth: '85%', maxHeight: '80%', borderRadius: '12px', border: '2px solid #10b981', boxShadow: '0 0 40px rgba(16, 185, 129, 0.3)' },
  modalCloseText: { color: '#737373', fontSize: '0.875rem', marginTop: '1.5rem', letterSpacing: '0.1em' },
  footer: { borderTop: '1px solid #262626', backgroundColor: '#0a0a0a', padding: '2rem', fontSize: '0.75rem', color: '#525252', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }
};

const App = () => {
  const [terminalLine, setTerminalLine] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('Type "help", "skills", "education", or "clear" to query the system...');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const photoMatrix = [
   "/img12.jpeg", "/img1.jpeg", "/img2.jpeg", "/img3.jpeg", "/img4.jpeg", "/img5.jpeg",
    "/img6.jpeg", "/img7.jpeg", "/img8.jpeg", "/img9.jpeg", "/img10.jpeg", "/img11.jpeg", 
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % photoMatrix.length);
    }, 2000); 
    return () => clearInterval(slideTimer);
  }, [photoMatrix.length]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalLine.toLowerCase().trim();
      if (cmd === 'help') {
        setTerminalOutput('Available queries: status, skills, education, internships, clear');
      } else if (cmd === 'skills') {
        setTerminalOutput('AI/ML: scikit-learn, numpy, pandas, matplotlib, Transformers. Full-Stack: Python, Flask, Node.js, SQL, MongoDB, JS. Embedded: Arduino, Raspberry Pi, STM32, PCB Layout.');
      } else if (cmd === 'education') {
        setTerminalOutput('Tribhuwan University (IOE Kathford) [2022-2026] // Pentagon Int College [GPA: 3.19] // Mahendra School [GPA: 3.65]');
      } else if (cmd === 'internships') {
        setTerminalOutput('1. AI & Decentralized Intern @ BlockSeBlock (India) // 2. Embedded Systems Intern @ Mach24Orbitals, NAST');
      } else if (cmd === 'status') {
        setTerminalOutput('All pipelines normal. Core Stack: Full-Stack ML Integration & Hardware Intelligence Ecosystem.');
      } else if (cmd === 'clear') {
        setTerminalOutput('');
      } else {
        setTerminalOutput(`Command sequence "${cmd}" unverified. Type "help"`);
      }
      setTerminalLine('');
    }
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER NODAL BAR */}
      <header style={styles.header}>
        <div style={styles.headerTitle}>
          <div style={styles.pulseDot}></div>
          <span>RAJAN PANDEY // MULTI_STACK_NODE</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: '#737373' }}>[ Rajan Sarkar's Portfolio ]</div>
      </header>

      <main style={styles.main}>
        
        {/* CENTERED HERO LAYOUT WITH PORTRAIT */}
        <section style={styles.heroLayout}>
          <div style={styles.profileColumn}>
            <div 
              style={styles.avatarBigCircle} 
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={(e) => { 
                e.currentTarget.style.transform = 'scale(1.04)'; 
                e.currentTarget.style.borderColor = '#22d3ee';
                e.currentTarget.style.boxShadow = '0 0 30px rgba(34, 211, 238, 0.3)';
              }}
              onMouseLeave={(e) => { 
                e.currentTarget.style.transform = 'scale(1)'; 
                e.currentTarget.style.borderColor = '#10b981';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.15)';
              }}
              title="Click to zoom identity frame"
            >
              <img src={photoMatrix[currentImgIndex]} alt="Rajan Pandey Matrix Node" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.4s ease-in-out' }} />
            </div>
            <div style={{ color: '#737373', fontSize: '0.75rem' }}>
              REVOLVING REGISTER: <span style={{ color: '#10b981' }}>0{currentImgIndex + 1}</span> / {photoMatrix.length}
            </div>
          </div>

          <div style={styles.infoColumn}>
            <div style={styles.badge}>Electronics, Communication & Information Engineering</div>
            <h1 style={styles.headline}>Bridging <span style={styles.gradientText}>Silicon, Full-Stack</span> & AI</h1>
            <p style={styles.paragraph}>
              Engineering student specializing in Electronics, Communication, and Information Engineering with hands-on experience designing and implementing machine learning models and AI-powered agents. Proficient in Python and scikit-learn, with full-stack expertise in integrating ML workflows into web applications. Passionate about applying end-to-end ML solutions to enhance user experience in a collaborative internship setting.
            </p>
            <div style={styles.btnContainer}>
              <a href="#projects" style={styles.primaryBtn}>Execute Core Systems</a>
              <a href="#contact" style={styles.secondaryBtn}>Secure Handshake</a>
            </div>
          </div>
        </section>

        {/* INTERACTIVE SYSTEM BASH KERNEL */}
        <section style={{ marginTop: '-2rem' }}>
          <div style={styles.terminalCard}>
            <div style={styles.terminalHeader}>
              <div style={styles.dotContainer}>
                <div style={{width:'0.5rem', height:'0.5rem', borderRadius:'50%', backgroundColor:'#ef4444'}}></div>
                <div style={{width:'0.5rem', height:'0.5rem', borderRadius:'50%', backgroundColor:'#eab308'}}></div>
                <div style={{width:'0.5rem', height:'0.5rem', borderRadius:'50%', backgroundColor:'#22c55e'}}></div>
              </div>
              <span style={{color: '#737373'}}>bash - rpandey@fullstack-edge</span>
            </div>
            <div style={styles.terminalBody}>
              <div style={{color: '#737373', marginBottom: '0.5rem'}}>// System operational. Query matrix logs below:</div>
              <div style={{color: '#10b981', marginBottom: '0.75rem'}}>{`> ${terminalOutput}`}</div>
              <div style={{display: 'flex', alignItems: 'center', color: '#22d3ee'}}>
                <span style={{marginRight: '0.5rem', fontWeight: 'bold'}}>$</span>
                <input 
                  type="text"
                  value={terminalLine}
                  onChange={(e) => setTerminalLine(e.target.value)}
                  onKeyDown={handleCommand}
                  style={{backgroundColor: 'transparent', border: 'none', color: '#f5f5f5', outline: 'none', width: '100%', fontFamily: 'monospace', fontSize: '0.85rem'}}
                  placeholder="type command..."
                />
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIAL INTERNSHIP LOGS */}
        <section id="experience">
          <h2 style={styles.sectionTitle}>.Internship_Registry()</h2>
          <div style={styles.grid2Col}>
            <div style={styles.expCard}>
              <span style={styles.dateTag}>2025</span>
              <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fff'}}>Decentralized AI Intern</h3>
              <p style={{fontSize: '0.8rem', color: '#10b981', margin: '0 0 1rem 0'}}>BlockSeBlock — India (Remote Collaboration)</p>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.6'}}>
                Developed robust full-stack web applications and AI-powered agents by integrating models into active production frameworks, focusing specifically on decentralized systems like OpenXai and Ollama. Built optimized python backend configurations via Flask and engineered fluid interfaces while debugging and testing applications for clean, scalable operations.
              </p>
            </div>

            <div style={styles.expCard}>
              <span style={styles.dateTag}>2025</span>
              <h3 style={{fontSize: '1.2rem', fontWeight: 'bold', margin: '0.5rem 0', color: '#fff'}}>Embedded Systems Intern</h3>
              <p style={{fontSize: '0.8rem', color: '#22d3ee', margin: '0 0 1rem 0'}}>Mach24Orbitals, NAST — Lalitpur, Nepal</p>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.6'}}>
                Engineered custom microcontroller-based automation prototypes. Designed, integrated, and verified low-level data telemetry firmware and secure wireless communication modules to link local hardware architectures cleanly with remote testing configurations.
              </p>
            </div>
          </div>
        </section>

        {/* SYSTEMS DEPLOYED / DEEP PROJECTS SCHEMATICS */}
        <section id="projects">
          <h2 style={styles.sectionTitle}>.Systems_Architecture_Log()</h2>
          <div style={styles.grid2Col}>
            <div style={styles.projectCard}>
              <div style={styles.projectBody}>
                <h3 style={styles.projectTitle}>Vision Automated Attendance system</h3>
                <p style={styles.projectText}>
                  Academic Minor Project consisting of an end-to-end real-time machine learning pipeline. Implements face tracking via <strong>MediaPipe</strong> and <strong>OpenCV</strong> on a <strong>Raspberry Pi core</strong>, passing processed grayscale frames into a Random Forest Classifier model. Manages record keeping via a custom <strong>Flask backend</strong> featuring <strong>SQLAlchemy</strong> data pipes and <strong>MySQL</strong> with strict duplicate suppression constraints.
                </p>
              </div>
              <div style={styles.projectTagFooter}>Raspberry Pi // OpenCV // Flask // SQLAlchemy // MySQL</div>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectBody}>
                <h3 style={styles.projectTitle}>Local Cyber Watchdog Agent</h3>
                <p style={styles.projectText}>
                  AI protection tool leveraging <strong>Hugging Face Transformers</strong> (specifically the <code>facebook/bart-large-mnli</code> model) to perform intelligent zero-shot text classification. Instantly labels incoming data matrices as Phishing, Malware, Spam, or Credential Harvesting, and dynamically generates multi-language analytical summaries across both English and Nepali parameters.
                </p>
              </div>
              <div style={styles.projectTagFooter}>Transformers // Hugging Face // Zero-Shot Text Classification</div>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectBody}>
                <h3 style={styles.projectTitle}>Ollama Multilingual Chat/Voice Bot</h3>
                <p style={styles.projectText}>
                  A conversational framework running localized <strong>LLaMA3 structures via Ollama</strong>. Supports native real-time text and speech conversion pipelines (STT & TTS) with secure user authorization powered by **JWT**. Stores persistent conversation maps dynamically within <strong>MongoDB Atlas</strong> database environments.
                </p>
              </div>
              <div style={styles.projectTagFooter}>Ollama LLaMA3 // JWT Secure // MongoDB Atlas // Speech-to-Text</div>
            </div>

            <div style={styles.projectCard}>
              <div style={styles.projectBody}>
                <h3 style={styles.projectTitle}>E-Commerce Platform & Rocket Subsystems</h3>
                <p style={styles.projectText}>
                  Full-stack marketplace framework deployed using <strong>Flask and Oracle relational architectures</strong> with embedded cart checkout structures. Parallel hardware projects include designing a telemetry-driven <strong>Flight Computer Prototype</strong> with sensor fusion and an RF-controlled safety <strong>Ignition Module</strong> built on high-power MOSFET nodes.
                </p>
              </div>
              <div style={styles.projectTagFooter}>Flask // Oracle Database // Telemetry Fusion // Circuit Schematics</div>
            </div>
          </div>
        </section>

        {/* DYNAMIC TECH MATRIX CORNER */}
        <section id="skills">
          <h2 style={styles.sectionTitle}>.Core_Tech_Matrix()</h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillBlock}>
              <div style={{ ...styles.skillTitle, color: '#10b981' }}>// 01 / SOFTWARE & AI/ML</div>
              <p style={styles.skillList}>Python, scikit-learn, Hugging Face, NumPy, Pandas, Matplotlib, Plotly, Machine Learning Pipelines.</p>
            </div>
            <div style={styles.skillBlock}>
              <div style={{ ...styles.skillTitle, color: '#22d3ee' }}>// 02 / FULL-STACK INTEGRATION</div>
              <p style={styles.skillList}>Flask, Node.js, JavaScript, HTML, CSS, SQL, SQLAlchemy, MySQL, MongoDB Atlas, Oracle DB.</p>
            </div>
            <div style={styles.skillBlock}>
              <div style={{ ...styles.skillTitle, color: '#10b981' }}>// 03 / HARDWARE & EMBEDDED</div>
              <p style={styles.skillList}>Raspberry Pi, Arduino, STM32, IoT Microcontrollers, Circuit Design, PCB Layout, Sensor Integration.</p>
            </div>
            <div style={styles.skillBlock}>
              <div style={{ ...styles.skillTitle, color: '#22d3ee' }}>// 04 / UTILITIES & SECURITY</div>
              <p style={styles.skillList}>Git Core, Linux Terminal, Docker Basics, Network Security, Cryptography Basics, Secure Coding.</p>
            </div>
          </div>
        </section>

        {/* ACADEMIC MAP NODES */}
        <section id="education">
          <h2 style={styles.sectionTitle}>.Academic_Telemetry()</h2>
          <div style={styles.grid3Col}>
            <div style={styles.expCard}>
              <span style={styles.dateTag}>2022 - 2026</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0' }}>B.E. Electronics & Info</h3>
              <p style={{ fontSize: '0.8rem', color: '#737373', margin: '0 0 0.5rem 0' }}>Kathford College // Tribhuwan University IOE</p>
              <p style={{ fontSize: '0.85rem', color: '#a3a3a3', margin: 0 }}>focused on hardware integration, backend systems, cybersecurity, and AI applications</p>
            </div>
            <div style={styles.expCard}>
              <span style={styles.dateTag}>High School</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0' }}>Higher Secondary Level</h3>
              <p style={{ fontSize: '0.8rem', color: '#737373', margin: '0 0 0.5rem 0' }}>Pentagon International College</p>
              <p style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: 'bold', margin: 0 }}>GPA Metric: 3.19</p>
            </div>
            <div style={styles.expCard}>
              <span style={styles.dateTag}>SEE </span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0.5rem 0' }}>Secondary Education</h3>
              <p style={{ fontSize: '0.8rem', color: '#737373', margin: '0 0 0.5rem 0' }}>Mahendra Higher Secondary School</p>
              <p style={{ fontSize: '0.85rem', color: '#22d3ee', fontWeight: 'bold', margin: 0 }}>GPA Metric: 3.65</p>
            </div>
          </div>
        </section>

        {/* ROBOTICS LEAGUE SCOREBOARD */}
        <section id="achievements">
          <h2 style={styles.sectionTitle}>.Robotics_Championship_Registry()</h2>
          <div style={styles.achievementsContainer}>
            <div style={{ ...styles.achievementRow, backgroundColor: '#0a0a0a', borderBottom: '1px solid #262626', color: '#34d399', fontWeight: 'bold' }}>
              <span>EVENT MODULE // ARENA</span>
              <span>TEAM NAME</span>
              <span>STANDING REGISTERED</span>
            </div>
            <div style={styles.achievementRow}><span>Robo Sumo — EEPEX 2025, Kathmandu University</span><span style={{ color: '#22d3ee' }}>Team The Boatminds</span><span style={{ color: '#10b981', fontWeight: 'bold' }}>CHAMPION (1st Position)</span></div>
            <div style={styles.achievementRow}><span>Robo Race — Yathartha 2.0, IOE Thapathali Campus</span><span style={{ color: '#22d3ee' }}>Team The Boatminds</span><span style={{ color: '#10b981', fontWeight: 'bold' }}>CHAMPION (1st Position)</span></div>
            <div style={styles.achievementRow}><span>Robo Football — KEC Lite, Kantipur Engineering College</span><span style={{ color: '#22d3ee' }}>Team The Boatminds</span><span style={{ color: '#10b981', fontWeight: 'bold' }}>CHAMPION (1st Position)</span></div>
            <div style={styles.achievementRow}><span>Robo War — Locus 2025, Pulchowk Campus</span><span style={{ color: '#737373' }}>Team The Boatminds</span><span style={{ color: '#eab308' }}>1st Runner Up</span></div>
            <div style={styles.achievementRow}><span>Robo Soccer — Locus 2025, Pulchowk Campus</span><span style={{ color: '#737373' }}>Team The Boatminds</span><span style={{ color: '#eab308' }}>1st Runner Up</span></div>
            <div style={styles.achievementRow}><span>Robo Race — Orbit Engineering Expo 2.0</span><span style={{ color: '#737373' }}>Team The Binary Bots</span><span style={{ color: '#eab308' }}>1st Runner Up</span></div>
            <div style={styles.achievementRow}><span>Robo Drift — Dristi 3.0, Kathmandu Engineering College</span><span style={{ color: '#737373' }}>Team The Boatminds</span><span style={{ color: '#eab308' }}>1st Runner Up</span></div>
            <div style={styles.achievementRow}><span>Robo Yuddha — Manual Sumo Competition 2081, Khwopa</span><span style={{ color: '#737373' }}>Team The Binary Bots</span><span style={{ color: '#a3a3a3' }}>2nd Runner Up</span></div>
          </div>
        </section>

        {/* NEW DEDICATED CENTERED CONNECT / CONTACT SECTION */}
        <section id="contact">
          <h2 style={styles.sectionTitle}>.Connect_Me()</h2>
          <div style={styles.contactWrapper}>
            <div style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#22d3ee' }}>// INITIALIZE PORTS FOR SYSTEM HANDSHAKE</div>
            <p style={{ fontFamily: 'sans-serif', color: '#a3a3a3', margin: '0 0 1rem 0', maxWidth: '28rem', fontSize: '0.875rem', lineHeight: '1.5' }}>
              Select an external link protocol below to coordinate direct communication channels or view active platform nodes.
            </p>
            
            <div style={styles.socialDockCentered}>
              
              {/* LINKEDIN PROFILE ACCESS PORT */}
              <a 
                href="https://www.linkedin.com/in/rajan-pandey-sarkar-rajan/" 
                target="_blank" 
                rel="noreferrer" 
                style={styles.largeSocialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.lastChild.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a3a3a3';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.lastChild.style.color = '#737373';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span style={styles.iconLabel}>LinkedIn</span>
              </a>

              {/* FACEBOOK LINK PORT */}
              <a 
                href="https://www.facebook.com/rajan.pandey.393950" 
                target="_blank" 
                rel="noreferrer" 
                style={styles.largeSocialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.lastChild.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a3a3a3';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.lastChild.style.color = '#737373';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span style={styles.iconLabel}>Facebook</span>
              </a>

              {/* EMAIL MAILTO RELAY PORT */}
              <a 
                href="mailto:rajanpandey492222@gmail.com" 
                style={styles.largeSocialIcon}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#10b981';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.lastChild.style.color = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#a3a3a3';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.lastChild.style.color = '#737373';
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span style={styles.iconLabel}>Email</span>
              </a>

            </div>
          </div>
        </section>

      </main>

      {/* DYNAMIC MODAL LAYER */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <img src={photoMatrix[currentImgIndex]} alt="Active Fullscreen View" style={styles.modalImage} onClick={(e) => e.stopPropagation()} />
          <div style={styles.modalCloseText}>[&lt; ACCESSING ACTIVE FRAME INDEX 0{currentImgIndex + 1} // CLICK ANYWHERE TO CLOSE &gt;]</div>
        </div>
      )}

      {/* FOOTER METADATA PIPELINE */}
      <footer style={styles.footer}>
        <div>© 2026 RAJAN PANDEY. ALL PLATFORM NETWORKS SECURED.</div>
        <div>LOC // KATHMANDU, NEPAL</div>
      </footer>
    </div>
  );
};

export default App;