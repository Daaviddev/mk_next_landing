import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsappButton = () => {
  return (
    <button className="flex items-center border-none shadow">
      <a
        className="container flex  justify-center items-center"
        target="_blank"
        href="https://wa.me/+385995948180/"
      >
        <FontAwesomeIcon
          className="p-0 m-0 w-4 h-4 ml-0 mr-2"
          icon={faWhatsapp}
        />
        <p>Poruka</p>
      </a>
    </button>
  );
};

export default WhatsappButton;
