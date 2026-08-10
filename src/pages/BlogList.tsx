import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { Terminal, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function BlogList() {
  return (
    <div className="container">
      <Helmet>
        <title>Blog | Miguel Alvarez Garcia</title>
        <meta name="description" content="Artículos sobre desarrollo de software, IA y tecnologías modernas." />
      </Helmet>
      
      <motion.section 
        className="section" style={{ paddingTop: '2rem' }}
        initial="hidden" animate="visible" variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="header-icon">
          <Terminal size={28} />
          <h2 className="heading-lg" style={{ marginBottom: 0 }}>Terminal / Blog</h2>
        </motion.div>
        
        <div className="flex-col-gap" style={{ marginTop: '2rem' }}>
          {posts.map(post => (
            <motion.div key={post.id} variants={fadeInUp} className="glass-card" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <img src={post.thumbnail} alt={post.title} style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '12px', border: '1px solid var(--glass-border)' }} />
              <div style={{ flex: 1, minWidth: '250px' }}>
                <span className="text-accent" style={{ fontSize: '0.875rem', fontWeight: 600 }}>{post.date} &bull; Por Miguel Alvarez</span>
                <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-main)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{post.title}</h3>
                </Link>
                <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{post.description}</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link to={`/blog/${post.id}`} className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Leer Post</Link>
                  <button onClick={() => {
                    if (navigator.share) navigator.share({ title: post.title, url: window.location.origin + '/blog/' + post.id })
                    else navigator.clipboard.writeText(window.location.origin + '/blog/' + post.id).then(() => alert('Enlace copiado!'))
                  }} className="btn-primary" style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}>
                    <Share2 size={16} /> Compartir
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
