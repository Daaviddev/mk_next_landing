import React from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import SettingsIcon from '@mui/icons-material/Settings';

import Image from 'next/image';

interface CarCardProps {
  link: string;
  name: string;
  image: string;
  price: string;
  year: string;
  km: string;
  fuel: string;
  gear: string;
  sold: boolean;
}

const CarCard: React.FC<CarCardProps> = ({
  link,
  name,
  image,
  price,
  year,
  km,
  fuel,
  gear,
  sold,
}) => {
  const handleClick = () => {
    if (!sold) {
      window.open(link, '_blank');
    }
  };

  //   console.log(image);

  return (
    <div
      className={`relative bg-gradient-to-b from-white/10 to-transparent border backdrop-blur-lg rounded-xl border-white/20 shadow-lg shadow-black p-5 text-center text-white transition-transform duration-300 w-full max-w-[300px] min-w-[200px] ${
        sold ? 'cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={handleClick}
    >
      {sold && (
        <>
          <div className="absolute inset-0 bg-black/35 bg-opacity-50 rounded-xl z-10" />
          <div className="absolute top-1/2 text-gray-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-700 rounded-xl shadow-lg shadow-black py-2 px-4 text-xl font-bold z-20">
            PRODANO
          </div>
        </>
      )}
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className={`w-full max-h-[200px] object-cover mb-4 rounded-xl ${
          sold ? 'blur-sm' : ''
        }`}
      />
      <h3 className="truncate text-lg font-semibold mb-2">{name}</h3>
      <div className="flex justify-center bg-white/5  items-center py-2 px-4 rounded-xl mb-4 text-gray-100 shadow-sm shadow-black/50">
        <p className="font-bold text-lg">{price} €</p>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
        <div className="flex items-start justify-start gap-2">
          <CalendarMonthIcon />
          <p>{year}</p>
        </div>
        <div className="flex items-end justify-end gap-2">
          <SpeedIcon />
          <p>{km}</p>
        </div>
        <div className="flex items-start justify-start  gap-2">
          <LocalGasStationIcon />
          <p>{fuel}</p>
        </div>
        <div className="flex items-end justify-end gap-2">
          <SettingsIcon />
          <p>{gear}</p>
        </div>
      </div>
      <button
        className={`w-full py-2 rounded-xl text-gray-100 transition-colors ${
          sold
            ? 'shadow-sm shadow-black cursor-not-allowed bg-white/25'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        disabled={sold}
      >
        Pogledaj
      </button>
    </div>
  );
};

export default CarCard;
