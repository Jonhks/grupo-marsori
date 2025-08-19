import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

interface FooterProps {
  menu?: string[];
  contacto?: string[];
  aviso?: string;
}

const defaultMenu = ["INICIO", "NOSOTROS", "SERVICIOS", "PROYECTOS"];
const defaultContacto = ["Contacto", "Aviso de Privacidad"];

const Footer: React.FC<FooterProps> = ({
  menu = defaultMenu,
  contacto = defaultContacto,
}) => {
  return (
    <footer className="w-full bg-black py-4 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <ul className="flex flex-col gap-2 text-[#b3b2b2] font-montserrat text-base md:text-lg">
            {menu.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2 text-[#b3b2b2] font-montserrat text-base md:text-lg md:ml-12">
            {contacto.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
          {/* Iconos sociales alineados a la derecha */}
          <a
            href="https://www.facebook.com/GrupoMarsori"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href="https://www.linkedin.com/company/grupomarsori/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={15} />
          </a>
          <a
            href="https://wa.me/521234567890?text=Hola%20quiero%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
