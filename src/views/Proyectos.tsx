import { useNavigate } from "react-router-dom";
import proyectos from "../proyectos.json";

// import TERMIGAS_01 from "../assets/img/carruselDinamico/termigas/TERMIGAS_01.jpg";

// import DOSBOCAS_01 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_01.jpg";
// import DOSBOCAS_02 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_02.jpg";
// import DOSBOCAS_03 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_03.jpg";
// import DOSBOCAS_04 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_04.jpg";
// import DOSBOCAS_05 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_05.jpg";
// import DOSBOCAS_06 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_06.jpg";
// import DOSBOCAS_07 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_07.jpg";
// import DOSBOCAS_08 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_08.jpg";
// import DOSBOCAS_09 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_09.jpg";
// import DOSBOCAS_10 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_10.jpg";
// import DOSBOCAS_11 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_11.jpg";
// import DOSBOCAS_12 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_12.jpg";
// import DOSBOCAS_13 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_13.jpg";
// import DOSBOCAS_14 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_14.jpg";
// import DOSBOCAS_15 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_15.jpg";
// import DOSBOCAS_16 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_16.jpg";

// import MONOPOLOS_01 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_01.jpg";
// import MONOPOLOS_02 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_02.jpg";
// import MONOPOLOS_03 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_03.jpg";
// import MONOPOLOS_04 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_04.jpg";
// import MONOPOLOS_05 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_05.jpg";
// import MONOPOLOS_06 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_06.jpg";
// import MONOPOLOS_07 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_07.jpg";
// import MONOPOLOS_08 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_08.jpg";

// const images: Record<string, string | string[]> = {
//   PROYECTO_TRMIGAS: "https://grupomarsori.com/images/PROYECTO_TRMIGAS.jpg",
//   DOSBOCAS_HOME: "https://grupomarsori.com/images/DOSBOCAS.jpg",
//   MONOPOLOS_HOME: "https://grupomarsori.com/images/MONOPOLOS.jpg",
//   TERMIGAS: [TERMIGAS_01],
//   DOSBOCAS: [
//     DOSBOCAS_01,
//     DOSBOCAS_02,
//     DOSBOCAS_03,
//     DOSBOCAS_04,
//     DOSBOCAS_05,
//     DOSBOCAS_06,
//     DOSBOCAS_07,
//     DOSBOCAS_08,
//     DOSBOCAS_09,
//     DOSBOCAS_10,
//     DOSBOCAS_11,
//     DOSBOCAS_12,
//     DOSBOCAS_13,
//     DOSBOCAS_14,
//     DOSBOCAS_15,
//     DOSBOCAS_16,
//   ],
//   MONOPOLOS: [
//     MONOPOLOS_01,
//     MONOPOLOS_02,
//     MONOPOLOS_03,
//     MONOPOLOS_04,
//     MONOPOLOS_05,
//     MONOPOLOS_06,
//     MONOPOLOS_07,
//     MONOPOLOS_08,
//   ],
// };

const Proyectos = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-[#000] text-center mb-10 tracking-tight">
        {"PROYECTOS DE GRUPO MARSORI"}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl justify-center mb-8 flex-wrap">
        {proyectos.map((proyecto, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col items-center w-full md:w-1/3 lg:w-1/5 cursor-pointer"
              onClick={() => {
                navigate(`/proyecto/${proyecto.id}`, {
                  state: { proyectoSeleccionado: proyecto },
                });
              }}
            >
              <div className="w-full h-80 aspect-square overflow-hidden bg-gray-200 flex items-center justify-center group relative">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-all"></div>
              </div>
              <span className="font-montserrat font-medium text-xl md:text-2xl text-[#000] mt-4 text-center">
                {proyecto.titulo}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Proyectos;
