import mkIzlog from '@/app/assets/MKAutoLogoWhite.png';

import Image from 'next/image';

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-[#151414] text-white">
      <div className="flex w-full max-w-5xl justify-between py-5 border-b border-gray-700 flex-wrap text-center md:text-left">
        {/* Location */}
        <div className="w-full md:w-1/4 mb-5 md:mb-0">
          <h3 className="text-lg font-semibold">Lokacija</h3>
          <p className="text-sm">Osijek</p>
          <p className="text-sm">Industrijska zona (Čepinska)</p>
        </div>
        {/* Logo */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-5 md:mb-0">
          <Image
            src={mkIzlog}
            alt="MKAutomobili Logo"
            className="w-4/5 h-auto"
          />
        </div>
        {/* Contact */}
        <div className="w-full md:w-1/4 mb-5 md:mb-0">
          <h3 className="text-lg font-semibold">Kontakt</h3>
          <p className="text-sm">Daniel : 099/594-8180</p>
          <p className="text-sm">Samuel : 091/625-4631</p>
        </div>
      </div>

      {/* Logo and description */}
      <div className="w-full max-w-xl text-center py-5 border-b border-gray-700">
        <h1 className="text-2xl font-bold">MKAutomobili</h1>
        <p className="mt-2 text-sm p-3">
          MKAutomobili d.o.o. tvrtka je s višegodišnjim iskustvom u prodaji
          rabljenih vozila. U ponudi imamo veliki izbor kvalitetnih osobnih
          vozila sa stranog tržišta. Osim prodaje vozila nudimo Vam i mogućnost
          otkupa Vašeg vozila.
        </p>
      </div>

      {/* Copyright */}
      <div className="py-5">
        <p className="text-sm">Copyright@2024</p>
      </div>
    </div>
  );
};

export default Footer;
