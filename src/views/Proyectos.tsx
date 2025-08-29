import { useState } from "react";
import { useLocation } from "react-router-dom";
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
import { motion } from "framer-motion";

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
  const location = useLocation();
  const proyectoSeleccionado = location.state?.proyectoSeleccionado;
  const [activeProyecto, setActiveProyecto] = useState(
    proyectoSeleccionado || proyectos[0].id
  );

  console.log(proyectoSeleccionado);
  console.log(activeProyecto);

  const Motion = motion.section;

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      <div className="flex max-w-[50%] justify-between items-center gap-8 mb-8">
        {proyectos.map((proyecto) => {
          return (
            <div
              key={proyecto.id}
              className={`cursor-pointer transition-transform transform hover:scale-105 flex flex-col items-center justify-center  ${
                activeProyecto === proyecto.id ? "opacity-100" : "opacity-70"
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
                className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full border-2 border-gray-300"
              />
              <span className="block text-[12px] md:text-[18px] mt-2 text-center">
                {proyecto.titulo}
              </span>
            </div>
          );
        })}
      </div>
      <Motion
        initial={{ opacity: 0, y: -100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Contenido del proyecto seleccionado */}
        <div className="w-full max-w-6xl p-4 shadow-sm">
          {proyectos.map(
            (proyecto) =>
              proyecto.id === activeProyecto && (
                <div key={proyecto.id}>
                  <h2 className="text-lg md:text-3xl text-center font-bold mb-4">
                    {proyecto.titulo}
                  </h2>
                  <SliderDinamico
                    images={
                      Array.isArray(images[proyecto.key])
                        ? (images[proyecto.key] as string[])
                        : [images[proyecto.key] as string]
                    }
                  />
                  <p className="flex justify-end mt-4 text-[#707070] font-montserrat text-md">
                    {proyecto.imagenes.length}{" "}
                    {`
                      ${proyecto.imagenes.length > 1 ? "imágenes" : "imagen"}`}
                  </p>

                  <div className="flex flex-col md:flex-row justify-between mt-8 pt-4 items-stretch">
                    <div className="md:w-1/2 text-center p-4 md:px-12 flex flex-col justify-center items-center text-[#707070] font-montserrat text-lg">
                      <p className="font-medium ">
                        Fabricación de Esferas de Almacenamiento de 20 MBLS
                      </p>
                      <p className="font-medium">
                        Fabricación de Tanques de Almacenamiento de 150 MBLS
                      </p>
                    </div>
                    <div
                      className="md:w-1/2 text-left p-4 md:px-12 md:border-l-[2px] border-[#707070]"
                      style={{}}
                    >
                      <ul className="list-disc pl-5 text-[#707070] font-montserrat text-md">
                        <li>
                          Trazo, corte, conformado, biselado de placa en taller
                          del fabricante.
                        </li>
                        <li>
                          Montaje, armado, punteo de placa del cuerpo en el
                          sitio de la obra.
                        </li>
                        <li>Soldadura del cuerpo.</li>
                        <li>Montaje de estructura soporte (patas).</li>
                        <li>Montaje, armado, soldado de boquillas.</li>
                        <li>Montaje, armado, soldadura de accesorios.</li>
                        <li>
                          Montaje, armado, soldado de escalera helicoidal.
                        </li>
                        <li>Inspecciones y pruebas.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </Motion>
    </div>
  );
};

export default Proyectos;
