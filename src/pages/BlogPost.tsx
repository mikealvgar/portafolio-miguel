import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet-async';
import { posts } from '../data/posts';
import { ArrowLeft, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  const [content, setContent] = useState('');

  useEffect(() => {
    if (post) {
      fetch(`/posts/${post.file}`)
        .then(res => res.text())
        .then(text => setContent(text));
    }
  }, [post]);

  if (!post) return <div className="container" style={{ padding: '4rem 2rem' }}>Post no encontrado.</div>;

  return (
    <div className="container" style={{ maxWidth: '800px' }}>
      <Helmet>
        <title>{post.title} | Miguel Alvarez</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={window.location.origin + post.thumbnail} />
      </Helmet>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', textDecoration: 'none', marginBottom: '2rem' }}>
          <ArrowLeft size={16} /> Volver al Blog
        </Link>

        <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '16px', border: '1px solid var(--glass-border)', marginBottom: '2rem' }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span className="text-accent" style={{ fontWeight: 600 }}>{post.date} &bull; Por Miguel Alvarez</span>
          <button onClick={() => {
              if (navigator.share) navigator.share({ title: post.title, url: window.location.href })
              else navigator.clipboard.writeText(window.location.href).then(() => alert('Enlace copiado!'))
          }} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 600 }}>
            <Share2 size={18} /> Compartir
          </button>
        </div>

        <div className="markdown-body">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </motion.div>
    </div>
  );
}
