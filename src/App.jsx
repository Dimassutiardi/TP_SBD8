import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

import SBD from './Pages/SBD';
import DMJ from './Pages/DMJ';
import OS from './Pages/OS';
import NTLAB from './Pages/NTLAB';
import Home from './Pages/Home';

import SBDLogo from './assets/SBDLogo.svg';
import DMJLogo from './assets/DMJLogo.svg';
import OSLogo from './assets/OSLogo.svg';
import NetlabLogo from './assets/Logo.svg';

function App() {
  const [darkMode, setDarkMode] = useState(false); // State untuk dark mode

  // Fungsi untuk toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen w-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} font-sans`}>
      {/* Header */}
      <header className={`flex items-center justify-between px-8 py-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="flex items-center gap-3">
          <img src={NetlabLogo} alt="NETLAB logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">NETLAB</h1>
        </div>
        <nav className="flex items-center gap-6 text-sm font-semibold">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/sbd" className="hover:text-blue-600">SBD</Link>
          <Link to="/dmj" className="hover:text-blue-600">DMJ</Link>
          <Link to="/os" className="hover:text-blue-600">OS</Link>
          <Link to="/ntlab" className="hover:text-blue-600">NTLAB</Link>
        </nav>
        {/* Tombol Toggle Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className={`px-4 py-2 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'} hover:bg-gray-500`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-10 p-10 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sbd" element={<SBD />} />
          <Route path="/dmj" element={<DMJ />} />
          <Route path="/os" element={<OS />} />
          <Route path="/ntlab" element={<NTLAB />} />
        </Routes>

        {/* Section: SBD */}
        <section className={`flex flex-col md:flex-row items-center gap-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
          <img src={SBDLogo} alt="SBD Logo" className="w-32 h-32 object-contain" />
          <div>
            <h2 className="text-2xl font-bold mb-2">SBD</h2>
            <p className="text-base">
              Sistem Basis Data (SBD) membahas bagaimana menyimpan, mengelola, dan mengambil data secara efisien.
            </p>
          </div>
        </section>

        {/* Section: DMJ */}
        <section className={`flex flex-col md:flex-row items-center gap-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
          <img src={DMJLogo} alt="DMJ Logo" className="w-32 h-32 object-contain" />
          <div>
            <h2 className="text-2xl font-bold mb-2">DMJ</h2>
            <p className="text-base">
              Desain Manajemen dan Jaringan (DMJ) fokus pada perangkat keras dan jaringan komputer.
            </p>
          </div>
        </section>

        {/* Section: OS */}
        <section className={`flex flex-col md:flex-row items-center gap-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}>
          <img src={OSLogo} alt="OS Logo" className="w-32 h-32 object-contain" />
          <div>
            <h2 className="text-2xl font-bold mb-2">OS</h2>
            <p className="text-base">
              Sistem Operasi (OS) adalah software yang mengelola perangkat keras dan menyediakan layanan bagi program komputer.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;