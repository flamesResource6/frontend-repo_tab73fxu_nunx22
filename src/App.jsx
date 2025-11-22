import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DataPreview from './components/DataPreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[48rem] rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-indigo-500/20 blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <FeatureGrid />
      <DataPreview />
      <Footer />
    </div>
  )
}

export default App
