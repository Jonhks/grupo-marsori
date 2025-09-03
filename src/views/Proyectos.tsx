import { useNavigate } from "react-router-dom";
import proyectos from "../proyectos.json";
import { motion } from "framer-motion";

const Proyectos = () => {
  const navigate = useNavigate();
  const Motion = motion.section;

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      <Motion
        initial={{ opacity: 0, y: -100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
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
      </Motion>
    </div>
  );
};

export default Proyectos;
