import React from 'react';
import OSLogo from '../assets/OSLogo.svg';

const OS = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={OSLogo} alt="OS Logo" className="w-32 h-32 object-contain" />
      <h1 className="text-2xl font-bold">Sistem Operasi (OS)</h1>
      <p className="text-base text-center">
        Sistem Operasi (OS) adalah software yang mengelola perangkat keras dan menyediakan layanan bagi program komputer.
      </p>
    </div>
  );
};

export default OS;