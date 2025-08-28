import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import ImgBanner from "../assets/img/banner.jpg";
interface ContactoProps {
  telefono?: string[];
  correo?: string;
}

const Contacto: React.FC<ContactoProps> = ({
  telefono = [
    "(55) 7587 6491",
    "(55) 7587 6492",
    "(55) 7587 6495",
    "(55) 7587 6497",
  ],
  correo = "info@marsori.com",
}) => {
  return (
    <section className="w-full  flex flex-col items-center py-12 bg-white">
      {/* Banner superior con imagen de fondo y logo */}
      <div className="left-0 top-0 w-screen h-56 md:h-72 relative flex items-center justify-center overflow-hidden">
        <img
          src={ImgBanner}
          alt="Banner Marsori"
          className="w-full h-full object-cover opacity-80 block"
        />
      </div>
      {/* Sección de contacto */}
      <div className="w-full max-w-3xl flex flex-col items-center py-12">
        <h2 className="font-montserrat font-bold text-2xl md:text-4xl text-[#4e4e4e] text-center mb-8 tracking-tight">
          CONTÁCTANOS
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full mb-6">
          {/* Íconos */}
          {/* Iconos sociales alineados a la derecha */}
          <div className=" relative md:absolute h-17 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
            <a
              href="https://www.facebook.com/GrupoMarsori"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:font-bold hover:border-gray-700 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="https://www.linkedin.com/company/grupomarsori/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:font-bold hover:border-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>
            {/* <a
              href="https://wa.me/521234567890?text=Hola%20quiero%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:font-bold hover:border-gray-700 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-16 w-full">
          <div className="text-center">
            <span className="font-montserrat font-medium text-xl md:text-md text-[#000] block mb-2">
              Teléfonos
            </span>
            {telefono?.map((num: string, index: number) => (
              <p
                key={index}
                className="font-montserrat font-medium text-base md:text-md text-[#000]"
              >
                {num}
              </p>
            ))}
          </div>
          <div className="text-center">
            <span className="font-montserrat font-medium text-xl md:text-md text-[#000] block mb-2">
              Correo Electrónico
            </span>
            <span className="font-montserrat font-medium text-base md:text-md text-[#000]">
              {correo}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
