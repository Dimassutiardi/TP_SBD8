import React from 'react';
import SBDLogo from '../assets/SBDLogo.svg';

const SBD = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={SBDLogo} alt="SBD Logo" className="w-32 h-32 object-contain" />
      <h1 className="text-2xl font-bold">Sistem Basis Data (SBD)</h1>
      <p className="text-base text-center">
        Sistem Basis Data (SBD) membahas bagaimana menyimpan, mengelola, dan mengambil data secara efisien.
      </p>
    </div>
  );
};

export default SBD;