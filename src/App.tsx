import Logo from "./assets/img/logomarsori.png";
import Swiper from "./components/Swiper/Swiper";
import Servicios from "./components/Servicios";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img
          src={Logo}
          alt="Logo"
          className="m-2 w-32 sm:w-40 md:w-56 lg:w-64"
        />
      </div>
      <Swiper />
      <div>
        <p className="font-montserrat my-8  text-center text-[16px]">
          Grupo Marsori SA de CV es una empresa mexicana con amplia experiencia
          en el desarrollo de proyectos para la industria energética. Ha
          participado en el análisis, evaluación y factibilidad de proyectos
          relacionados con el almacenamiento, distribución y transporte de
          hidrocarburos.
        </p>
      </div>
      {/* Sección Servicios */}
      <Servicios />
      {/* Sección Proyectos */}
      <Proyectos />
      {/* Sección Contacto */}
      <Contacto />
    </div>
  );
}

export default App;
