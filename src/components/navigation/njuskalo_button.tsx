import njuska from '@/app/assets/Glavabg.png';

import Image from 'next/image';

const NjuskaloButton = () => {
  const link = 'https://www.njuskalo.hr/trgovina/mkautomobili';

  function clickHandler() {
    window.open(link, '_blank');
  }

  return (
    <div
      className="bg-[#fdcd00] hover:bg-[#f5c300] md:h-10 flex items-center justify-between p-2 md:p-3 rounded-xl cursor-pointer"
      onClick={clickHandler}
    >
      <div className="flex items-center space-x-2 p-0 md:pr-2">
        <Image className="w-6 h-6 md:w-7 md:h-7" src={njuska} alt="Njuskalo" />
        <p className="hidden md:block text-black text-sm font-normal m-0 p-0">
          Ponuda
        </p>
      </div>
    </div>
  );
};

export default NjuskaloButton;
