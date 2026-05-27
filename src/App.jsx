import React, { useState } from 'react';

// BULLETPROOF INLINE MATRIX STYLE SHEETS
const styles = {
  container: { minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#e5e5e5', fontFamily: 'monospace', padding: '0', margin: '0', position: 'relative', overflowX: 'hidden' },
  header: { borderBottom: '1px solid #262626', backgroundColor: 'rgba(10, 10, 10, 0.8)', sticky: 'top', padding: '1rem 2rem', display: 'flex', justifyContent: 'between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 },
  headerTitle: { fontWeight: 'bold', fontSize: '1.125rem', letterSpacing: '0.05em', color: '#34d399', display: 'flex', alignItems: 'center', gap: '0.5rem' },
  pulseDot: { width: '0.75rem', height: '0.75rem', borderRadius: '50%', backgroundColor: '#10b981' },
  main: { maxWidth: '1152px', margin: '0 auto', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', gap: '6rem' },
  heroSection: { display: 'grid', gridTemplateColumns: 'window.innerWidth > 1024 ? "1fr 1fr" : "1fr"', gap: '2rem', alignItems: 'center' },
  badge: { display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '4px', fontSize: '0.75rem', color: '#34d399', fontWeight: 'bold', textTransform: 'uppercase', width: 'fit-content' },
  headline: { fontSize: '2.5rem', fontWeight: '900', color: '#f5f5f5', lineHeight: '1.1', margin: '1rem 0' },
  gradientText: { color: '#22d3ee' },
  paragraph: { color: '#a3a3a3', fontSize: '1rem', lineHeight: '1.6', maxWidth: '32rem', fontFamily: 'sans-serif' },
  btnContainer: { display: 'flex', gap: '1rem', marginTop: '1.5rem' },
  primaryBtn: { padding: '0.75rem 1.25rem', backgroundColor: '#10b981', color: '#0a0a0a', fontWeight: 'bold', borderRadius: '4px', textDecoration: 'none', fontSize: '0.875rem' },
  secondaryBtn: { padding: '0.75rem 1.25rem', border: '1px solid #262626', backgroundColor: '#171717', color: '#d4d4d4', borderRadius: '4px', textDecoration: 'none', fontSize: '0.875rem' },
  terminalCard: { backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.7)' },
  terminalHeader: { backgroundColor: '#0a0a0a', padding: '0.5rem 1rem', display: 'flex', justifyContent: 'between', alignItems: 'center', borderBottom: '1px solid #262626' },
  dotContainer: { display: 'flex', gap: '0.375rem' },
  terminalBody: { padding: '1rem', fontSize: '0.75rem', height: '12rem', overflowY: 'auto', backgroundColor: 'rgba(10,10,10,0.4)' },
  grid3Col: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' },
  expCard: { padding: '1.5rem', backgroundColor: 'rgba(23,23,23,0.4)', border: '1px solid #262626', borderRadius: '8px', position: 'relative' },
  dateTag: { position: 'absolute', top: '1rem', right: '1rem', fontSize: '0.75rem', color: '#10b981', backgroundColor: 'rgba(16,185,129,0.1)', padding: '0.125rem 0.5rem', borderRadius: '4px', border: '1px solid rgba(16,185,129,0.2)' },
  sectionTitle: { fontSize: '1.25rem', fontWeight: 'bold', letterSpacing: '0.1em', color: '#f5f5f5', textTransform: 'uppercase', borderLeft: '4px solid #10b981', paddingLeft: '0.75rem', marginBottom: '2rem' },
  projectCard: { backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'between' },
  skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' },
  skillBlock: { padding: '1rem', backgroundColor: 'rgba(23,23,23,0.6)', border: '1px solid #262626', borderRadius: '8px' },
  footer: { borderTop: '1px solid #262626', backgroundColor: '#0a0a0a', marginTop: '6rem', padding: '2rem', fontSize: '0.75rem', color: '#737373', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }
};

const App = () => {
  const [terminalLine, setTerminalLine] = useState('');
  const [terminalOutput, setTerminalOutput] = useState('Type "help" or "skills" to probe the system...');

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = terminalLine.toLowerCase().trim();
      if (cmd === 'help') {
        setTerminalOutput('Available commands: clear, skills, status');
      } else if (cmd === 'skills') {
        setTerminalOutput('Core: Python, C/C++, Embedded C, OpenCV, PyTorch, LLaMA3, MediaPipe');
      } else if (cmd === 'status') {
        setTerminalOutput('System: Nominal. AI Edge Pipeline: Connected. Hardware Bus: Active.');
      } else if (cmd === 'clear') {
        setTerminalOutput('');
      } else {
        setTerminalOutput(`Command not recognized: "${cmd}". Type "help"`);
      }
      setTerminalLine('');
    }
  };

  return (
    <div style={styles.container}>
      
      {/* HEADER / NAVIGATION */}
      <header style={styles.header}>
        <div style={styles.headerTitle}>
          <div style={styles.pulseDot}></div>
          <span>RAJAN PANDEY // SYSTEM_INIT</span>
        </div>
      </header>

      <main style={styles.main}>
        
        {/* HERO / INTERACTIVE TERMINAL SECTION */}
        <section style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2rem', justifyItems: 'center'}}>
          <div style={{flex: '1', minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <div style={styles.badge}>
              Electronics, Communication & Information Engineering
            </div>
            <h1 style={styles.headline}>
              Bridging <span style={styles.gradientText}>Silicon & Software</span>
            </h1>
            <p style={styles.paragraph}>
              I specialize in building intelligent ecosystems—spanning from low-level embedded hardware mechanics to localized computer vision and machine learning architectures. Passionate about deploying production-ready intelligence directly to the edge.
            </p>
            <div style={styles.btnContainer}>
              <a href="#projects" style={styles.primaryBtn}>View Systems</a>
              <a href="https://www.linkedin.com/in/rajan-pandey-sarkar-rajan/" target="_blank" rel="noreferrer" style={styles.secondaryBtn}>LinkedIn Secure</a>
            </div>
          </div>

          {/* INTERACTIVE TERMINAL MODULE */}
          <div style={{flex: '1', minWidth: '320px'}}>
            <div style={styles.terminalCard}>
              <div style={styles.terminalHeader}>
                <div style={styles.dotContainer}>
                  <div style={{width:'0.5rem', height:'0.5rem', borderRadius:'50%', backgroundColor:'#ef4444'}}></div>
                  <div style={{width:'0.5rem', height:'0.5rem', borderRadius:'50%', backgroundColor:'#eab308'}}></div>
                  <div style={{width:'0.5rem', height:'0.5rem', borderRadius:'50%', backgroundColor:'#22c55e'}}></div>
                </div>
                <span style={{color: '#737373'}}>bash - rpandey@edge-node</span>
              </div>
              <div style={styles.terminalBody}>
                <div style={{color: '#737373', marginBottom: '0.5rem'}}>// Welcome to the interactive kernel console</div>
                <div style={{color: '#10b981', marginBottom: '0.5rem'}}>{`> ${terminalOutput}`}</div>
                <div style={{display: 'flex', alignItems: 'center', color: '#22d3ee'}}>
                  <span style={{marginRight: '0.5rem'}}>$</span>
                  <input 
                    type="text"
                    value={terminalLine}
                    onChange={(e) => setTerminalLine(e.target.value)}
                    onKeyDown={handleCommand}
                    style={{backgroundColor: 'transparent', border: 'none', color: '#f5f5f5', outline: 'none', width: '100%', fontFamily: 'monospace'}}
                    placeholder="type command..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE EXPERIENCE */}
        <section id="experience">
          <h2 style={styles.sectionTitle}>.Core_Exp()</h2>
          <div style={styles.grid3Col}>
            <div style={styles.expCard}>
              <span style={styles.dateTag}>Aug - Sep 2025</span>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0.5rem 0'}}>AI & Decentralized Intern</h3>
              <p style={{fontSize: '0.75rem', color: '#737373', margin: '0 0 1rem 0'}}>BlockseBlock</p>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.5'}}>
                Architected edge-optimized software models, marrying customized computer vision systems with decentralized tracking operations.
              </p>
            </div>

            <div style={styles.expCard}>
              <span style={styles.dateTag}>Active</span>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0.5rem 0'}}>Competitive Robotics</h3>
              <p style={{fontSize: '0.75rem', color: '#737373', margin: '0 0 1rem 0'}}>Manual Chassis Design</p>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.5'}}>
                Engineered robust, high-performance manual control robots for intense competitive arenas including Robo Sumo and Robo Race modules.
              </p>
            </div>

            <div style={styles.expCard}>
              <span style={styles.dateTag}>3rd Year</span>
              <h3 style={{fontSize: '1.125rem', fontWeight: 'bold', margin: '0.5rem 0'}}>B.E. Student</h3>
              <p style={{fontSize: '0.75rem', color: '#737373', margin: '0 0 1rem 0'}}>Kathford College, IOE</p>
              <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.5'}}>
                Specializing in Electronics, Communication & Information systems with research focuses on local automation pipelines.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 style={styles.sectionTitle}>.Systems_Deployed()</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem'}}>
            <div style={styles.projectCard}>
              <div style={{padding: '1.5rem'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#f5f5f5'}}>Vision Attendance Rig</h3>
                <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', marginTop: '1rem', lineHeight: '1.5'}}>
                  Engineered an academic minor tracking rig driven by a <strong>Raspberry Pi 5</strong> processing core paired with real-time <strong>OpenCV</strong> streams. Implements a Random Forest Classifier infrastructure to authenticate attendance instantly.
                </p>
              </div>
              <div style={{padding: '1rem 1.5rem', backgroundColor: '#0a0a0a', borderTop: '1px solid #262626', color: '#10b981', fontSize: '0.75rem'}}>
                RPi 5 // OpenCV // Random Forest
              </div>
            </div>

            <div style={styles.projectCard}>
              <div style={{padding: '1.5rem'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#f5f5f5'}}>Local Automation Assistant</h3>
                <p style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#a3a3a3', marginTop: '1rem', lineHeight: '1.5'}}>
                  Developed an offline localized conversational agent running native <strong>LLaMA3</strong> structures managed entirely via <strong>Ollama</strong>. Integrated optimized python automation middleware to deliver fluid multilingual processing loops.
                </p>
              </div>
              <div style={{padding: '1rem 1.5rem', backgroundColor: '#0a0a0a', borderTop: '1px solid #262626', color: '#22d3ee', fontSize: '0.75rem'}}>
                Ollama // LLaMA3 // Python Automation
              </div>
            </div>
          </div>
        </section>

        {/* TECH MATRIX */}
        <section id="skills">
          <h2 style={styles.sectionTitle}>.Tech_Stack()</h2>
          <div style={styles.skillsGrid}>
            <div style={styles.skillBlock}>
              <div style={{color: '#10b981', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>// 01 / MACHINE LEARNING</div>
              <div style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#d4d4d4', lineHeight: '1.6'}}>
                PyTorch, OpenCV, MediaPipe, Random Forest Classifier models.
              </div>
            </div>
            <div style={styles.skillBlock}>
              <div style={{color: '#22d3ee', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>// 02 / EMBEDDED SYSTEMS</div>
              <div style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#d4d4d4', lineHeight: '1.6'}}>
                Raspberry Pi 5 single board dev kits, Manual Robotics Control, C/C++.
              </div>
            </div>
            <div style={styles.skillBlock}>
              <div style={{color: '#10b981', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem'}}>// 03 / KERNEL & INFRA</div>
              <div style={{fontFamily: 'sans-serif', fontSize: '0.875rem', color: '#d4d4d4', lineHeight: '1.6'}}>
                Python Automation Scripting, Ollama APIs, Git, Linux Shells.
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div>© 2026 RAJAN PANDEY. ALL CORE PIPELINES OPERATIONAL.</div>
        <div style={{display: 'flex', gap: '1.5rem'}}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{color: '#10b981', textDecoration: 'none'}}>LinkedIn Node</a>
          <span style={{color: '#262626'}}>|</span>
          <span style={{color: '#737373'}}>Secure_Comms</span>
        </div>
      </footer>
    </div>
  );
};

export default App;