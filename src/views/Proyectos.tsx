import { useState } from "react";
import proyectos from "../proyectos.json";
import PROYECTO_TRMIGAS from "../assets/img/proyectos-home/PROYECTO_TRMIGAS.jpg";
import DOSBOCAS from "../assets/img/proyectos-home/DOSBOCAS.jpg";
import MONOPOLOS from "../assets/img/proyectos-home/MONOPOLOS.jpg";

import TERMIGAS_01 from "../assets/img/carruselDinamico/termigas/TERMIGAS_01.jpg";

import DOSBOCAS_01 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_01.jpg";
import DOSBOCAS_02 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_02.jpg";
import DOSBOCAS_03 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_03.jpg";
import DOSBOCAS_04 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_04.jpg";
import DOSBOCAS_05 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_05.jpg";
import DOSBOCAS_06 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_06.jpg";
import DOSBOCAS_07 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_07.jpg";
import DOSBOCAS_08 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_08.jpg";
import DOSBOCAS_09 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_09.jpg";
import DOSBOCAS_10 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_10.jpg";
import DOSBOCAS_11 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_11.jpg";
import DOSBOCAS_12 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_12.jpg";
import DOSBOCAS_13 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_13.jpg";
import DOSBOCAS_14 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_14.jpg";
import DOSBOCAS_15 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_15.jpg";
import DOSBOCAS_16 from "../assets/img/carruselDinamico/dosBocas/DOSBOCAS_16.jpg";

import MONOPOLOS_01 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_01.jpg";
import MONOPOLOS_02 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_02.jpg";
import MONOPOLOS_03 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_03.jpg";
import MONOPOLOS_04 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_04.jpg";
import MONOPOLOS_05 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_05.jpg";
import MONOPOLOS_06 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_06.jpg";
import MONOPOLOS_07 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_07.jpg";
import MONOPOLOS_08 from "../assets/img/carruselDinamico/monopolos/MONOPOLOS_08.jpg";
import SliderDinamico from "../components/SliderDinamico";

const images: Record<string, string | string[]> = {
  PROYECTO_TRMIGAS,
  DOSBOCAS_HOME: DOSBOCAS,
  MONOPOLOS_HOME: MONOPOLOS,
  TERMIGAS: [TERMIGAS_01],
  DOSBOCAS: [
    DOSBOCAS_01,
    DOSBOCAS_02,
    DOSBOCAS_03,
    DOSBOCAS_04,
    DOSBOCAS_05,
    DOSBOCAS_06,
    DOSBOCAS_07,
    DOSBOCAS_08,
    DOSBOCAS_09,
    DOSBOCAS_10,
    DOSBOCAS_11,
    DOSBOCAS_12,
    DOSBOCAS_13,
    DOSBOCAS_14,
    DOSBOCAS_15,
    DOSBOCAS_16,
  ],
  MONOPOLOS: [
    MONOPOLOS_01,
    MONOPOLOS_02,
    MONOPOLOS_03,
    MONOPOLOS_04,
    MONOPOLOS_05,
    MONOPOLOS_06,
    MONOPOLOS_07,
    MONOPOLOS_08,
  ],
};

const Proyectos = () => {
  const [activeProyecto, setActiveProyecto] = useState(proyectos[0].id);

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      <div className="flex gap-4 mb-8">
        {proyectos.map((proyecto) => {
          return (
            <button
              key={proyecto.id}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex flex-col items-center ${
                activeProyecto === proyecto.id
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveProyecto(proyecto.id)}
            >
              <img
                src={
                  Array.isArray(images[proyecto.imgId])
                    ? (images[proyecto.imgId] as string[])[0]
                    : (images[proyecto.imgId] as string)
                }
                alt={proyecto.titulo}
                className="w-16 h-16 object-cover rounded-full"
              />
              <span className="block mt-2">{proyecto.titulo}</span>
            </button>
          );
        })}
      </div>

      {/* Contenido del proyecto seleccionado */}
      <div className="w-full max-w-6xl p-4 shadow-md">
        {proyectos.map(
          (proyecto) =>
            proyecto.id === activeProyecto && (
              <div key={proyecto.id}>
                <h2 className="text-2xl text-center font-bold mb-4">
                  {proyecto.titulo}
                </h2>
                <SliderDinamico
                  images={
                    Array.isArray(images[proyecto.key])
                      ? (images[proyecto.key] as string[])
                      : [images[proyecto.key] as string]
                  }
                />
                <p className="text-black flex justify-end mt-4">
                  {proyecto.imagenes.length}{" "}
                  {`${proyecto.imagenes.length > 1 ? "imágenes" : "imagen"}`}
                </p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Proyectos;
