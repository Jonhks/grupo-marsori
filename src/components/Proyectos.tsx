import React from "react";
import { useNavigate } from "react-router-dom";
import ImgTermigas from "../assets/img/proyectos-home/PROYECTO_TRMIGAS.jpg";
import ImgMono from "../assets/img/proyectos-home/MONOPOLOS.jpg";
import ImgPemex from "../assets/img/proyectos-home/DOSBOCAS.jpg";
interface Proyecto {
  titulo: string;
  imagen: string;
}

interface ProyectosProps {
  titulo?: string;
  proyectos?: Proyecto[];
  onVerMas?: () => void;
}

const defaultProyectos: Proyecto[] = [
  {
    titulo: "TERMIGAS",
    imagen: ImgTermigas,
  },
  {
    titulo: "MONOPOLOS",
    imagen: ImgMono,
  },
  {
    titulo: "DOS BOCAS",
    imagen: ImgPemex,
  },
];

const Proyectos: React.FC<ProyectosProps> = ({
  titulo = "PROYECTOS DE GRUPO MARSORI",
  proyectos = defaultProyectos,
  onVerMas,
}) => {
  const navigate = useNavigate();
  const handleVerMas = () => {
    if (onVerMas) {
      onVerMas();
    } else {
      navigate("/proyectos");
    }
  };

  const handleProyectoClick = (proyecto: Proyecto) => {
    navigate("/proyectos", {
      state: { proyectoSeleccionado: proyecto.titulo.toUpperCase() },
    });
  };

  return (
    <section className="w-full flex flex-col items-center py-12 bg-white">
      <h2 className="font-montserrat font-bold text-2xl md:text-3xl text-[#000] text-center mb-10 tracking-tight">
        {titulo}
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center mb-8">
        {proyectos.map((proyecto, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-full md:w-1/3 cursor-pointer"
            onClick={() => handleProyectoClick(proyecto)}
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
        ))}
      </div>
      <button
        className="bg-black w-60 text-white font-montserrat font-medium text-md px-8 py-3 rounded-none hover:bg-gray-600 transition-all hover:cursor-pointer"
        onClick={handleVerMas}
      >
        VER MÁS
      </button>
    </section>
  );
};

export default Proyectos;
