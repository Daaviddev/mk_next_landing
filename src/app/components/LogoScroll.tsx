/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Audi from '@/app/assets/Logos/audi.svg';
import Nissan from '@/app/assets/Logos/nissan.svg';
import Peugeot from '@/app/assets/Logos/peugeot.svg';
import Citroen from '@/app/assets/Logos/citroen.svg';
import Volkswagen from '@/app/assets/Logos/volkswagen.svg';

import Image from 'next/image';

const marqueeItems = [
  {
    author: 'Audi',
    content: { Audi },
    uni: 'audi',
  },
  {
    author: 'Volkswagen',
    content: { Volkswagen },
    uni: 'volkswagen',
  },
  {
    author: 'Citroen',
    content: { Citroen },
    uni: 'citroen',
  },
  {
    author: 'Nissan',
    content: { Nissan },
    uni: 'nissan',
  },
  {
    author: 'Peugeot',
    content: { Peugeot },
    uni: 'peugeot',
  },
];

export default function MarqueeVariant1() {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div
        className="mb-4 w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div
          className="flex w-[200%] gap-4 pr-4"
          style={{
            animation: 'marquee 15s linear infinite',
          }}
        >
          {[0, 1].map((index) => (
            <div className="flex lg:flex-1 gap-4 p-0 lg:p-5 mb-10" key={index}>
              {marqueeItems.map((item, _index) => (
                <div
                  className="lg:flex-1 h-12 w-12 lg:h-full lg:w-full"
                  key={item.uni}
                >
                  <div className=" p-2 text-neutral-600  bg-gradient-to-b from-white/80 to-transparent border h-full border-white/50 border-b-0 shadow-md shadow-black/50 text-start flex flex-col justify-center items-center duration-500 rounded-xl backdrop-blur-lg ">
                    <Image
                      src={
                        item.content[item.author as keyof typeof item.content]
                      }
                      alt={item.author}
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
              ))}{' '}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
