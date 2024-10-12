import TaskAltIcon from '@mui/icons-material/TaskAlt';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GppGoodIcon from '@mui/icons-material/GppGood';
import Image from 'next/image';
import mkIzlog from '@/app/assets/2.png'; // Update the image path to use Next.js Image optimization
import DealCard from '@/components/sections/deal_card';

const About = () => {
  return (
    <div className=" mask bg-gradient-to-b from-transparent via-[#171A21] to-transparent p-10 flex flex-col items-center justify-center">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12  bg-background2">
        <p className="mb-5 font-light text-gray-400 sm:text-xl ">Kvalitetna</p>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-200">
          Rabljena Vozila Osijek
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-6xl">
        {/* IMAGE */}
        <div className="w-full h-auto md:mr-4">
          <div className="mr-[-5%]">
            <Image src={mkIzlog} alt="automobili osijek" layout="responsive" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start space-y-5 w-full md:w-auto mt-6 md:mt-0">
          <DealCard
            icon={<TaskAltIcon style={{ fontSize: 35 }} />}
            title={'Provjerena Kvaliteta'}
            description={
              'Svako vozilo prošlo je temeljitu provjeru kvalitete kako bi osigurali najviši standard za naše kupce.'
            }
          />
          <DealCard
            icon={<LibraryBooksIcon style={{ fontSize: 35 }} />}
            title={'Servisna povijest'}
            description={
              'Pružamo detaljnu servisnu povijest za svako vozilo, transparentno pokazujući njegovu dosadašnju brigu i održavanje.'
            }
          />
          <DealCard
            icon={<GppGoodIcon style={{ fontSize: 35 }} />}
            title={'Premium jamstvo'}
            description={
              'Naša premium jamstva nude neusporedivu zaštitu i mir, osiguravajući da je vaša investicija sigurna.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
