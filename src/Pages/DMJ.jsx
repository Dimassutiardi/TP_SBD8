import React from 'react';
import DMJLogo from '../assets/DMJLogo.svg';

const DMJ = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <img src={DMJLogo} alt="DMJ Logo" className="w-32 h-32 object-contain" />
      <h1 className="text-2xl font-bold">Desain Manajemen Jaringan (DMJ)</h1>
      <p className="text-base text-center">
        Desain Manajemen dan Jaringan (DMJ) fokus pada perangkat keras dan jaringan komputer.
      </p>
    </div>
  );
};

export default DMJ;