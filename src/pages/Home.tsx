// ULTRA-SIMPLE HOME COMPONENT FOR TESTING
export default function Home() {
  console.log('🏠 Home component is rendering!');
  
  return (
    <div style={{
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
      flexDirection: 'column'
    }}>
      <h1>🚀 DUNIYA RIDES</h1>
      <p>HOME PAGE IS WORKING!</p>
      <p style={{ fontSize: '16px', marginTop: '20px' }}>
        If you see this, React routing is working
      </p>
      <div style={{ 
        background: 'white', 
        color: 'black', 
        padding: '10px', 
        marginTop: '20px',
        borderRadius: '5px'
      }}>
        Navigation should be above this content
      </div>
    </div>
  );
}