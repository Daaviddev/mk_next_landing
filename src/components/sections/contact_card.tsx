import React from 'react';

type Props = {
  icon: any;
  title: string;
  description: string;
  description2: string;
  additional: any;
  additional2?: any;
};

const ContactCard = (props: Props) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative flex flex-col justify-center items-center gap-5 p-6 text-gray-100 bg-opacity-50 bg-[rgba(23,26,33,0.05)] backdrop-blur-md border border-gray-300/25 shadow-black shadow-lg rounded-xl w-[300px]">
        <p className="text-lg font-semibold mt-[5%]">{props.icon}</p>
        <p className="text-2xl font-bold">{props.title}</p>
        <ul className="list-none p-0 flex flex-col justify-center items-center leading-relaxed space-y-2">
          <li>{props.description}</li>
          <li>{props.description2}</li>
        </ul>
        <div className="flex space-x-2">
          <button className="bg-gray-800 text-white py-2 px-4 rounded-xl flex">
            {props.additional}
          </button>
          {props.additional2 && (
            <button className="bg-gray-800 text-white py-2 px-4 rounded-lg">
              {props.additional2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
