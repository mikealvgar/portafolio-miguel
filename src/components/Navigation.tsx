import { Link, useLocation } from 'react-router-dom';
import { BookOpen, User } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();
  const isBlog = location.pathname.includes('/blog');

  return (
    <nav style={{ padding: '1.5rem 0', borderBottom: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)', background: 'rgba(255,255,255,0.03)', padding: '0.2rem 0.6rem', borderRadius: '6px', border: '1px solid var(--glass-border)' }}>
            <span className="text-accent">{'>_'}</span>
          </div>
        </Link>
        
        <div style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: !isBlog ? 'var(--accent-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
            <User size={18} /> Portafolio
          </Link>
          <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: isBlog ? 'var(--accent-color)' : 'var(--text-muted)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
            <BookOpen size={18} /> Blog
          </Link>
        </div>
      </div>
    </nav>
  );
}
