// This is your main React component for the homepage.
export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f4f4f4',
      color: '#111',
      textAlign: 'center',
      padding: '20px'
    }}>
      <main>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: '700' }}>
          This is a website I built
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)', marginTop: '10px', color: '#333' }}>
          and it's hosted on Webflow!
        </p>
      </main>
    </div>
  );
}

