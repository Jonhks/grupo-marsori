import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  to: string;
}

interface FooterProps {
  menu?: MenuItem[];
  contacto?: string[];
  aviso?: string;
}

const defaultMenu = [
  { label: "INICIO", to: "/" },
  { label: "NOSOTROS", to: "/nosotros" },
  { label: "SERVICIOS", to: "/servicios" },
  { label: "PROYECTOS", to: "/proyectos" },
  { label: "CONTACTO", to: "/contacto" },
  { label: "AVISO DE PRIVACIDAD", to: "/" },
];

const Footer: React.FC<FooterProps> = ({ menu = defaultMenu }) => {
  return (
    <footer className="w-full bg-black py-4 px-4 flex flex-col items-center">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        {/* Mobile: menú/contacto a la izquierda, iconos a la derecha */}
        <div className="w-full flex flex-row justify-between items-start md:hidden">
          <div>
            <ul className="flex flex-col gap-2 text-[#b3b2b2] font-montserrat text-base">
              {menu.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="hover:text-white transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-row items-start gap-4">
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
            {/* <a
              href="https://wa.me/521234567890?text=Hola%20quiero%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a> */}
          </div>
        </div>
        {/* Desktop: menú/contacto a la izquierda, iconos a la derecha */}
        <div className="hidden md:flex flex-row justify-between items-center w-full">
          <div className="flex flex-row gap-8">
            <ul className="flex flex-col gap-2 text-[#b3b2b2] font-montserrat text-lg">
              {menu.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.to}
                    className="text-sm hover:text-white transition-colors"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2">
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
            {/* <a
              href="https://wa.me/521234567890?text=Hola%20quiero%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
