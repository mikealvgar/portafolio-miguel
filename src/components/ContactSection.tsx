import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Calendar } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Nuevo mensaje de portafolio de: ${formData.name}`);
    const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`);
    
    window.location.href = `mailto:miguel.ag.0109@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section 
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
    >
      <motion.div variants={fadeInUp} className="header-icon">
        <Mail size={28} />
        <h2 className="heading-lg" style={{ marginBottom: 0 }}>Contacto</h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Left Side */}
        <motion.div variants={fadeInUp} className="glass-card flex-col-gap">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'white' }}>¿Hablamos?</h3>
          <p className="text-muted" style={{ lineHeight: 1.6 }}>
            Soy un desarrollador con experiencia en las áreas que menciono en mi CV y portafolio. 
            Si tienes un proyecto en mente o una oportunidad laboral, no dudes en contactarme.
          </p>
          
          <div className="flex-col-gap" style={{ marginTop: '1rem', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
              <Mail className="text-accent" size={20} />
              <span>miguel.ag.0109@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
              <MapPin className="text-accent" size={20} />
              <span>Puebla</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
              <Calendar className="text-accent" size={20} />
              <span>Remoto, híbrido, presencial</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div variants={fadeInUp} className="glass-card">
          <form onSubmit={handleSubmit} className="flex-col-gap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Nombre</label>
              <input 
                type="text" 
                id="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                className="form-input" 
                style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white' }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                className="form-input" 
                style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white' }} 
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Mensaje</label>
              <textarea 
                id="message" 
                required 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="form-input" 
                style={{ padding: '0.75rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', resize: 'vertical' }}
              ></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              Enviar Mensaje
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
