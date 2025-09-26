// ULTRA-SIMPLE HOME COMPONENT FOR TESTING
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('🏠 Home component mounted!');
    console.log('📍 Current URL:', window.location.href);
    console.log('📍 Current pathname:', window.location.pathname);
    
    // Add a visible indicator to the document title
    document.title = '🔴 HOME COMPONENT LOADED - Duniya Rides';
    
    // Add a global style to ensure visibility
    const style = document.createElement('style');
    style.textContent = `
      .debug-home-component {
        background: #ff0000 !important;
        color: white !important;
        position: relative !important;
        z-index: 9999 !important;
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div 
      className="debug-home-component"
      style={{
        background: '#ff0000',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: 'bold',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 9999,
        visibility: 'visible',
        opacity: 1
      }}
    >
      <h1>🚀 DUNIYA RIDES</h1>
      <p>HOME PAGE IS WORKING!</p>
      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        ✅ React Router Fixed with basename
      </p>
      <p style={{ fontSize: '14px', marginTop: '10px' }}>
        URL: {window.location.pathname}
      </p>
      <div style={{ 
        background: 'white', 
        color: 'black', 
        padding: '10px', 
        marginTop: '20px',
        borderRadius: '5px'
      }}>
        🎯 BASENAME ROUTING TEST SUCCESS
      </div>
    </div>
  );
}