'use client';

import TestemonialSlider from '@/components/sections/testemonials_slider';
import React from 'react';

const Testemonial = () => {
  return (
    <div className="bg-gradient-to-t from-[#21243380] to-[#171A21] p-6 md:p-12 text-center text-white flex flex-col items-center justify-center">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12  ">
        <p className="mb-5 font-light text-gray-400 sm:text-xl ">Iskustva</p>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-200">
          Recenzije Naših Kupaca
        </h2>
      </div>
      <TestemonialSlider />
    </div>
  );
};

export default Testemonial;
