import LogoScroll from '@/app/components/LogoScroll';
import MoreButton from '@/components/sections/more_button';
import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="h-screen lg:h-full">
        <div className="BgImage">
          <div className="container mx-auto flex px-5 py-24 items-center justify-between flex-col h-screen md:h-screen">
            <div className="relative flex items-center w-full justify-center">
              <div className="relative flex flex-col justify-center items-center  p-6 text-gray-100 bg-opacity-25 bg-black backdrop-blur-md border border-gray-300/25  rounded-xl w-full">
                <p className="text-3xl font-bold">
                  Istražite Našu Ponudu Kvalitetnih Rabljenih Vozila!
                </p>
              </div>
            </div>
            <div className="text-center lg:w-2/3 w-full p-10 text-gray-100">
              <LogoScroll />
              <p className="leading-relaxed">U potrazi ste za autom?</p>
              <p className="mb-8 leading-relaxed">
                Pogledajte Naša Rabljena Vozila s Jamstvom!
              </p>
              <div className="flex justify-center">
                <MoreButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
