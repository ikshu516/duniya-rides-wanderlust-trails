import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

// Simplified Layout component for GitHub Pages
export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Simple Navigation */}
      <header style={{
        background: 'white',
        borderBottom: '1px solid #e5e7eb',
        padding: '1rem 2rem',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(255, 255, 255, 0.95)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
            🌍 Duniya Rides
          </div>
          <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            India's Most Trusted Trip Planner
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>

      {/* Simple Footer */}
      <footer style={{
        background: '#1f2937',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
        marginTop: 'auto'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>
          © 2024 Duniya Rides - India's Most Trusted Trip Planner
        </p>
      </footer>

      {/* WhatsApp Button */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 50
      }}>
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            backgroundColor: '#25d366',
            borderRadius: '50%',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <span style={{ fontSize: '24px', color: 'white' }}>💬</span>
        </a>
      </div>
    </div>
  );
}