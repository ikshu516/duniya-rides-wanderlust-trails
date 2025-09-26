import { useEffect } from "react";

// ULTRA-SIMPLE DUNIYA RIDES WEBSITE
const App = () => {
  useEffect(() => {
    console.log('🚀 Duniya Rides app loaded successfully');
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.style.backgroundColor = 'transparent';
      console.log('✅ App background cleared - React takeover complete');
    }
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6 }}>
      {/* Navigation */}
      <nav style={{
        background: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '1rem 2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2563eb' }}>
            🌍 Duniya Rides
          </div>
          <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
            India's Most Trusted Trip Planner
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '120px 2rem 80px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Explore India with Duniya Rides
        </h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem', opacity: 0.9 }}>
          Your trusted partner for unforgettable journeys across incredible India
        </p>
        <a 
          href="https://wa.me/919876543210" 
          style={{
            display: 'inline-block',
            background: '#25d366',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s ease'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          💬 Plan Your Trip on WhatsApp
        </a>
      </section>

      {/* Destinations */}
      <section style={{ padding: '80px 2rem', background: '#f8fafc' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>
          Popular Destinations
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { name: '🏖️ Goa', desc: 'Pristine beaches and vibrant nightlife', color: '#f59e0b' },
            { name: '🏔️ Manali', desc: 'Snow-capped mountains and adventure sports', color: '#3b82f6' },
            { name: '🏰 Jaipur', desc: 'Royal palaces and rich heritage', color: '#ec4899' },
            { name: '🌿 Kashmir', desc: 'Paradise on earth with scenic valleys', color: '#10b981' },
            { name: '🚤 Kerala', desc: 'Backwaters and tropical beauty', color: '#8b5cf6' },
            { name: '🐪 Rajasthan', desc: 'Desert landscapes and grand forts', color: '#f97316' }
          ].map((dest, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '15px',
              padding: '2rem',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: `3px solid ${dest.color}`,
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: dest.color }}>
                {dest.name}
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>{dest.desc}</p>
              <a 
                href={`https://wa.me/919876543210?text=I'm interested in ${dest.name.replace(/[🏖️🏔️🏰🌿🚤🐪]/g, '').trim()}`}
                style={{
                  display: 'inline-block',
                  background: dest.color,
                  color: 'white',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}
              >
                Explore Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: '80px 2rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>
          Why Choose Duniya Rides?
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { icon: '✅', title: 'Custom Planning', desc: 'Personalized itineraries tailored to your preferences' },
            { icon: '🗺️', title: 'Pan India Reach', desc: 'Comprehensive coverage across all major destinations' },
            { icon: '📞', title: '24/7 Support', desc: 'Round-the-clock assistance throughout your journey' },
            { icon: '💰', title: 'Best Prices', desc: 'Transparent pricing with no hidden costs' }
          ].map((feature, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '2rem',
              borderRadius: '15px',
              background: '#f1f5f9',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#1f2937' }}>{feature.title}</h3>
              <p style={{ color: '#6b7280' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        color: 'white',
        padding: '80px 2rem',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Ready to Start Your Adventure?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Contact us today and let's plan your perfect Indian getaway!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://wa.me/919876543210"
            style={{
              display: 'inline-block',
              background: '#25d366',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            💬 WhatsApp
          </a>
          <a 
            href="tel:+919876543210"
            style={{
              display: 'inline-block',
              background: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}
          >
            📞 Call Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        color: 'white',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.8 }}>
          © 2024 Duniya Rides - India's Most Trusted Trip Planner | All Rights Reserved
        </p>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/919876543210" 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#25d366',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          zIndex: 1000,
          fontSize: '1.5rem',
          animation: 'pulse 2s infinite'
        }}
      >
        💬
      </a>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { margin: 0; }
      `}</style>
    </div>
  );
};

export default App;
