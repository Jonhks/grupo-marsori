import Swiper from "./components/Swiper/Swiper";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import { motion } from "framer-motion";

function App() {
  const Motion = motion.section;

  const images = [
    "https://grupomarsori.com/images/home-Banner01.jpg",
    "https://grupomarsori.com/images/home-Banner02.jpg",
    "https://grupomarsori.com/images/home-Banner03.jpg",
    "https://grupomarsori.com/images/home-Banner04.jpg",
    "https://grupomarsori.com/images/home-Banner05.jpg",
  ];

  return (
    <div className="">
      <Motion
        initial={{ opacity: 0, y: -100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center items-center">
          <img
            src={"https://grupomarsori.com/images/logomarsori.png"}
            alt="Logo"
            className="m-2 w-32 sm:w-40 md:w-56 lg:w-64"
          />
        </div>
        <Swiper images={images} />
      </Motion>
      <Motion
        initial={{ opacity: 0, y: 100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div>
          <p className="font-montserrat my-8  text-center text-[16px]">
            Grupo Marsori SA de CV es una empresa mexicana con amplia
            experiencia en el desarrollo de proyectos para la industria
            energética. Ha participado en el análisis, evaluación y factibilidad
            de proyectos relacionados con el almacenamiento, distribución y
            transporte de hidrocarburos.
          </p>
        </div>
        {/* Sección Servicios */}
        <Servicios />
      </Motion>
      {/* Sección Proyectos */}
      <Proyectos />
      {/* Sección Contacto */}
      <Contacto />
    </div>
  );
}

export default App;
