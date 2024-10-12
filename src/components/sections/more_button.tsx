import Link from 'next/link';
import React from 'react';

const MoreButton = () => {
  return (
    <Link
      href="/vozila"
      className="overflow-hidden w-32 p-2 h-12 text-gray-100 bg-opacity-50 bg-[rgba(23,26,33,0.05)] backdrop-blur-md border border-gray-300/25 shadow-black/40 shadow-md rounded-xl  text-xl font-bold cursor-pointer relative z-10 group"
    >
      Ponuda
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
      <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
      <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
        Ponuda
      </span>
    </Link>
  );
};

export default MoreButton;
