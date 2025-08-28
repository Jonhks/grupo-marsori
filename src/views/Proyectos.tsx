import { useState } from "react";
import proyectos from "../proyectos.json";
import PROYECTO_TRMIGAS from "../assets/img/proyectos-home/PROYECTO_TRMIGAS.jpg";
import DOSBOCAS from "../assets/img/proyectos-home/DOSBOCAS.jpg";
import MONOPOLOS from "../assets/img/proyectos-home/MONOPOLOS.jpg";

const images: Record<string, string> = {
  PROYECTO_TRMIGAS,
  DOSBOCAS,
  MONOPOLOS,
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
                src={images[proyecto.imgId]}
                alt={proyecto.titulo}
                className="w-16 h-16 object-cover rounded-full"
              />
              <span className="block mt-2">{proyecto.titulo}</span>
            </button>
          );
        })}
      </div>

      {/* Contenido del proyecto seleccionado */}
      <div className="w-full max-w-4xl p-4 border rounded-lg shadow-md">
        {proyectos.map(
          (proyecto) =>
            proyecto.id === activeProyecto && (
              <div key={proyecto.id}>
                <h2 className="text-2xl font-bold mb-4">{proyecto.titulo}</h2>
                <p className="text-lg text-gray-800">{proyecto.texto}</p>
                <a
                  // href={proyecto.imagenenPrincipal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-4 block"
                >
                  Ver imágenes
                </a>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Proyectos;
