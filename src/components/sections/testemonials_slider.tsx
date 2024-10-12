'use client';

import kupac1 from '@/app/assets/kupci/kupac1.jpg';
import kupac2 from '@/app/assets/kupci/kupac2.jpg';
import kupac3 from '@/app/assets/kupci/kupac3.jpg';
import kupac4 from '@/app/assets/kupci/kupac4.jpg';

import Image from 'next/image';

const marqueeItems = [
  {
    author: 'Mario ⭐⭐⭐⭐⭐',
    content:
      'Oduševljen sam posvećenošću tima i podrškom koju sam dobio. Moje iskustvo kupnje bilo je iznad očekivanja.',
    link: '#',
    image: kupac1,
  },
  {
    author: 'Ivica ⭐⭐⭐⭐⭐',
    content:
      'Kupnja mog auta bila je zadovoljstvo. Prodajni tim je bio iskren, a ja sam se osjećao sigurno u svojoj odluci.',
    link: '#',
    image: kupac2,
  },
  {
    author: 'Julija ⭐⭐⭐⭐⭐',
    content:
      'Financiranje je bilo iznenađujuće jednostavno. Financijski odjel pomogao mi je pronaći najbolje stope bez pritiska.',
    link: '#',
    image: kupac3,
  },
  {
    author: 'Noa ⭐⭐⭐⭐⭐',
    content:
      'Najviše me impresionirala podrška nakon prodaje. Jasno je da brinu o dugoročnom zadovoljstvu svojih kupaca.',
    link: '#',
    image: kupac4,
  },
];

export default function TestemonialSlider() {
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
            animation: 'marquee 30s linear infinite',
          }}
        >
          {[0, 1].map((index) => (
            <div className="flex flex-1 gap-4" key={index}>
              {marqueeItems.map((item) => (
                <div
                  className="flex-1 w-[150px] md:w-[50px]"
                  key={item.content}
                >
                  <div className=" h-full max-w-60 rounded-xl bg-neutral-100 p-2 text-neutral-600 dark:bg-neutral-800">
                    <div>
                      {item.image && (
                        <Image
                          src={item.image}
                          alt="kupac"
                          width={250}
                          height={250}
                        />
                      )}
                    </div>
                    <div className="flex items-start gap-2 ">
                      <p className=" font-semibold text-neutral-600 text-md dark:text-neutral-400 pt-2">
                        {item.author}
                      </p>
                    </div>
                    <p className="mt-2 text-neutral-600 text-sm text-left dark:text-neutral-300">
                      {item.content}
                    </p>
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
