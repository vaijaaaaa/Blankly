import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="py-20 px-6 text-center bg-gradient-to-r from-blue-100 to-purple-100">
        <h1 className="text-5xl font-bold mb-4">Blankly</h1>
        <p className="text-xl mb-6">Watch YouTube without distractions. Hide the recommended videos and stay focused.</p>
        <a
          href="https://github.com/yourusername/blankly"
          target="_blank"
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800"
        >
          View on GitHub
        </a>
      </header>

      {/* How It Works */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Install Extension</h3>
            <p>Download and add Blankly to your Chrome browser.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Open YouTube</h3>
            <p>Watch any serious content like usual, but now without distractions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Stay Focused</h3>
            <p>Blankly removes the recommended sidebar so you can stay focused.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Blankly?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-2">🧠 Focus-First</h4>
              <p>Minimize visual clutter and regain control of your attention.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">⚡ Simple & Lightweight</h4>
              <p>No bloat, just a minimal tool that works instantly.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">🔒 Private</h4>
              <p>Does not collect any data. Fully open-source and transparent.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <p>Made with ❤️ by Vaiju Patil</p>
        <p>
          <a href="https://github.com/yourusername/blankly" className="underline" target="_blank">GitHub Repo</a> | 
          <span> No tracking, ever.</span>
        </p>
      </footer>
    </div>
  );
}
