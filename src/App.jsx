import './App.css'

function App() {
  return (
    <>
      {/* Desktop: responsive banner */}
      <main className="banner-container">
        <img src="/banner.png" alt="Banner" className="responsive-banner" />
      </main>

      {/* Non-Desktop: error page with oops.png */}
      <div className="mobile-message">
        <img src="/oops.png" alt="Oops" className="oops-image" />
        <p>This website can be opened on desktop only.</p>
      </div>
    </>
  )
}

export default App
