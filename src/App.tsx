import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Briefcase, Code2, Mail, Terminal, Download } from 'lucide-react';
import './index.css';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const TypewriterHeader = () => {
  const [phase, setPhase] = useState(0);
  const text1 = "Hola, soy ";
  const text2 = "Miguel Alvarez Garcia.";
  const [display1, setDisplay1] = useState('');
  const [display2, setDisplay2] = useState('');

  useEffect(() => {
    if (phase === 0) {
      if (display1.length < text1.length) {
        const timeout = setTimeout(() => setDisplay1(text1.slice(0, display1.length + 1)), 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setPhase(1), 300);
        return () => clearTimeout(timeout);
      }
    } else if (phase === 1) {
      if (display2.length < text2.length) {
        const timeout = setTimeout(() => setDisplay2(text2.slice(0, display2.length + 1)), 70);
        return () => clearTimeout(timeout);
      }
    }
  }, [phase, display1, display2]);

  return (
    <h1 className="heading-xl" style={{ minHeight: '120px' }}>
      {display1}
      {phase === 0 && <span className="blinking-cursor">_</span>}
      <br />
      <span className="text-gradient">{display2}</span>
      {phase === 1 && <span className="blinking-cursor" style={{ color: 'var(--accent-color)' }}>_</span>}
    </h1>
  );
};

function App() {
  return (
    <div className="container">
      
      {/* HERO SECTION */}
      <motion.section 
        className="section"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex-col-gap">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.8rem', borderRadius: '6px', border: '1px solid var(--glass-border)' }}>
              <span className="text-accent">{'>_'}</span>
            </div>
            <span className="text-accent" style={{ fontWeight: 500, letterSpacing: '0.05em' }}>SISTEMA INICIADO</span>
          </div>
          
          <TypewriterHeader />
          
          <h2 className="heading-lg text-muted" style={{ fontWeight: 400 }}>
            Ingeniero Informático & Desarrollador Frontend
          </h2>
          
          <p className="text-muted" style={{ maxWidth: '600px', fontSize: '1.1rem' }}>
            Especializado en el desarrollo Frontend Web y Móvil de alto rendimiento. 
            Apasionado por crear experiencias de usuario excepcionales mediante interfaces dinámicas, 
            Progressive Web Apps (PWAs) y arquitecturas escalables.
          </p>
          
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:miguel.ag.0109@gmail.com" className="btn-primary">
              <Mail size={18} />
              Contactar
            </a>
            <a href="/CV_Miguel_Alvarez.pdf" download className="btn-primary" style={{ background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-main)', border: '1px solid var(--glass-border)' }}>
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="header-icon">
          <Briefcase size={28} />
          <h2 className="heading-lg" style={{ marginBottom: 0 }}>Experiencia</h2>
        </motion.div>

        <div className="flex-col-gap" style={{ marginTop: '2rem' }}>
          
          {/* Stratplus */}
          <motion.div variants={fadeInUp} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Desarrollador Frontend & Flutter</h3>
                <p className="text-accent" style={{ fontWeight: 500, margin: '0.25rem 0' }}>Stratplus</p>
              </div>
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>Jun 2025 – Mar 2026</span>
            </div>
            
            <ul style={{ marginTop: '1.5rem', color: 'var(--text-muted)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><strong>App de Casino (Arquitectura y Rendimiento):</strong> Diseñé la arquitectura del monorepo que permitió unificar 3 aplicaciones móviles, optimizando las animaciones en Flutter para garantizar <strong>60 FPS estables</strong> incluso en dispositivos de gama baja.</li>
              <li><strong>Administrador de Cocina:</strong> Lideré el diseño y maqueta del panel web administrativo. La optimización del flujo de inventario y comandas mejoró la eficiencia operativa, reduciendo el tiempo de procesamiento en cocina en un <strong>25%</strong>.</li>
            </ul>
            
            <div className="flex-row-gap" style={{ marginTop: '1.5rem' }}>
              <span className="skill-chip">Flutter</span>
              <span className="skill-chip">Dart</span>
              <span className="skill-chip">React</span>
              <span className="skill-chip">TypeScript</span>
            </div>
          </motion.div>

          {/* Gtec Software */}
          <motion.div variants={fadeInUp} className="glass-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Desarrollador Frontend Web y Móvil</h3>
                <p className="text-accent" style={{ fontWeight: 500, margin: '0.25rem 0' }}>Gtec Software</p>
              </div>
              <span className="text-muted" style={{ fontSize: '0.9rem' }}>Ene 2020 – Jun 2025</span>
            </div>
            
            <ul style={{ marginTop: '1.5rem', color: 'var(--text-muted)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><strong>Sector Ganadero (Grupo Bal):</strong> Desarrollé módulos clave con sincronización offline robusta, permitiendo operar en zonas sin internet y asegurando el 100% de la integridad de los datos al reconectar.</li>
              <li><strong>Sector Asegurador (GNP):</strong> Automaticé la captura de la Constancia de Régimen Fiscal extrayendo datos desde PDFs, reduciendo el tiempo de ingreso de datos para los clientes en un <strong>40%</strong>.</li>
              <li><strong>Plataformas Fintech (Tekae):</strong> Lideré la actualización tecnológica del ecosistema (Vue.js / Flutter), optimizando la arquitectura base para reducir los tiempos de carga en un <strong>35%</strong> y agilizar el flujo de pagos.</li>
              <li><strong>DevOps & Gestión:</strong> Gestor de control de versiones con Git, encargado de los despliegues a producción y publicación continua en tiendas de aplicaciones.</li>
            </ul>

            <div className="flex-row-gap" style={{ marginTop: '1.5rem' }}>
              <span className="skill-chip">Flutter</span>
              <span className="skill-chip">Vue.js</span>
              <span className="skill-chip">Angular</span>
              <span className="skill-chip">React</span>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* AI & METHODOLOGIES SECTION */}
      <motion.section 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="header-icon">
          <Terminal size={28} />
          <h2 className="heading-lg" style={{ marginBottom: 0 }}>Desarrollo Asistido por IA</h2>
        </motion.div>

        <motion.div variants={fadeInUp} className="glass-card" style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>Flujos de Trabajo con IA & Agentic Coding</h3>
              <p className="text-accent" style={{ fontWeight: 500, margin: '0.25rem 0' }}>Ecosistema Inteligente</p>
            </div>
          </div>
          
          <ul style={{ marginTop: '1.5rem', color: 'var(--text-muted)', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><strong>Modelos & Asistentes:</strong> Integración profunda de modelos avanzados como Gemini, Claude, y entornos como OpenCode para acelerar la escritura, refactorización y depuración de código complejo.</li>
            <li><strong>Spec Driven Development (SDD) & Open Spec:</strong> Diseño y desarrollo guiado por especificaciones claras, asegurando que la IA genere código predecible y alineado con los requerimientos del producto desde la arquitectura base.</li>
            <li><strong>Alineación y "Grill Me":</strong> Uso de sesiones interactivas ("Grill-me") con agentes IA para alinear decisiones de diseño, debatir arquitectura y resolver ambigüedades antes de escribir la primera línea de código.</li>
          </ul>
          
          <div className="flex-row-gap" style={{ marginTop: '1.5rem' }}>
            <span className="skill-chip">Gemini</span>
            <span className="skill-chip">Claude</span>
            <span className="skill-chip">OpenCode</span>
            <span className="skill-chip">Spec Driven Development</span>
            <span className="skill-chip">Agentic Workflows</span>
          </div>
        </motion.div>
      </motion.section>

      {/* SKILLS SECTION */}
      <motion.section 
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="header-icon">
          <Code2 size={28} />
          <h2 className="heading-lg" style={{ marginBottom: 0 }}>Stack Tecnológico</h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
          
          <motion.div variants={fadeInUp} className="glass-card">
            <h3 style={{ color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Lenguajes</h3>
            <div className="flex-row-gap">
              {['JavaScript', 'TypeScript', 'Dart', 'Java', 'PHP', 'Python', 'HTML5/CSS3'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card">
            <h3 style={{ color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Frontend</h3>
            <div className="flex-row-gap">
              {['React', 'Vue', 'Angular', 'Astro', 'Next.js'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card">
            <h3 style={{ color: 'white', marginBottom: '1rem', fontWeight: 600 }}>Backend & DB</h3>
            <div className="flex-row-gap">
              {['Node.js', 'NestJS', 'Laravel', 'SQL', 'Firebase', 'Supabase', 'GraphQL'].map(skill => (
                <span key={skill} className="skill-chip">{skill}</span>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>
      
      {/* FOOTER */}
      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--glass-border)', marginTop: '2rem' }}>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Miguel Alvarez Garcia. Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
}

export default App;
