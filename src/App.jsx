import React from 'react';
import { Download, Info, Home } from 'lucide-react';

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans scroll-smooth relative">

      {/* Glass Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-md text-black px-10 py-3 rounded-full shadow-lg z-50 flex gap-10 items-center font-medium text-sm border border-gray-300/30 backdrop-saturate-150">
  <a href="#home" className="flex items-center gap-2 hover:text-blue-600 transition">
    <Home size={16} /> Home
  </a>
  <a href="#download" className="flex items-center gap-2 hover:text-blue-600 transition">
    <Download size={16} /> Download
  </a>
  <a href="#about" className="flex items-center gap-2 hover:text-blue-600 transition">
    <Info size={16} /> About
  </a>
</nav>


      {/* Hero */}
      <header id="home" className="pt-36 pb-20 px-6 text-center">
        <h1 className="text-6xl font-bold mb-4">Blankly</h1>
        <p className="text-xl max-w-2xl mx-auto mb-6">Watch YouTube without distractions. Hide the recommendations and stay focused with just one click.</p>
        <a href="https://github.com/vaijaaaaa/Blankly" target="_blank" className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          View on GitHub
        </a>
      </header>

      {/* Video Section */}
      <section id="download" className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Demo Video</h2>
        <div className="w-full h-[360px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Blankly Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">1. Install Extension</h3>
            <p>Download and add Blankly to your Chrome browser.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">2. Open YouTube</h3>
            <p>Start watching your videos as usual—without distractions.</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">3. Stay Focused</h3>
            <p>The sidebar disappears, leaving just what matters—your video.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <p>Made with ❤️ by Vaiju Patil</p>
        <p>
          <a href="https://github.com/vaijaaaaa/Blankly" className="underline" target="_blank">GitHub Repo</a> | 
          <span> No tracking, ever.</span>
        </p>
      </footer>
    </div>
  );
}
