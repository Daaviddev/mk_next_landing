import React from 'react';

interface DealCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const DealCard: React.FC<DealCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start w-full mb-5">
      <div className="relative w-full md:w-[500px] bg-gradient-to-b from-white/10 to-transparent border h-full border-white/20 shadow-lg shadow-black text-start flex flex-col justify-center items-center transition-transform duration-500 rounded-xl backdrop-blur-lg hover:transform hover:scale-105 hover:rotate-0">
        <div className="w-full bg-white/5 flex justify-center items-center text-gray-100 rounded-t-lg py-2 shadow-sm shadow-black">
          <h3 className="m-0 font-bold">{title}</h3>
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="mr-4 text-white">{icon}</div>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
