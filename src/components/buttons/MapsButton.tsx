import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const MapsButton = () => {
  // Constructing the Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/place/MK+automobili/@45.5437334,18.6448449,18z/data=!4m6!3m5!1s0x475ce709c13e0b97:0xd827677591fe72e!8m2!3d45.5434023!4d18.6456501!16s%2Fg%2F11ss1g9xkh?entry=ttu`;

  return (
    <button className="flex items-center border-none shadow">
      <a
        className="container flex  justify-center items-center"
        target="_blank"
        href={googleMapsUrl}
      >
        <FontAwesomeIcon
          className="p-0 m-0 w-4 h-4 ml-0 mr-2"
          icon={faGoogle}
        />
        <p>Upute</p>
      </a>
    </button>
  );
};

export default MapsButton;
