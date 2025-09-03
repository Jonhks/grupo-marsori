import { useLocation, useNavigate, useParams } from "react-router-dom";
import proyectos from "../proyectos.json";
import SliderDinamico from "../components/SliderDinamico";

const ProyectoDetalle = () => {
  const location = useLocation();
  const { id } = useParams();
  const proyecto = location.state?.proyectoSeleccionado;
  const navigate = useNavigate();

  if (!proyecto) {
    return <p>Proyecto no encontrado {id}</p>;
  }

  return (
    <div className="w-full flex flex-col items-center py-12 bg-white">
      {proyectos.map(
        (proyecto) =>
          proyecto.id === id && (
            <div
              key={proyecto.id}
              className="max-w-[70vw]"
            >
              <button
                className="bg-black text-white font-montserrat font-medium text-md px-4 py-2 rounded hover:bg-gray-400 transition-all mb-4"
                onClick={() => navigate(-1)} // Regresa a la página anterior
              >
                Atrás
              </button>
              <h2 className="text-lg md:text-3xl text-center font-bold mb-4">
                {proyecto.titulo}
              </h2>
              <SliderDinamico
                images={
                  Array.isArray(proyecto.imagenes)
                    ? proyecto.imagenes
                    : [proyecto.imagen]
                }
              />
              <div className="flex flex-col md:flex-row justify-between mt-8 pt-4 items-stretch">
                <div className="md:w-1/2 text-center p-4 md:px-12 flex flex-col justify-center items-center text-[#707070] font-montserrat text-lg">
                  {proyecto["texto-izquierdo"]}
                </div>
                <div
                  className="md:w-1/2 text-left p-4 md:px-12 md:border-l-[2px] border-[#707070]"
                  style={{}}
                >
                  <ul className="list-disc pl-5 text-[#707070] font-montserrat text-md">
                    {proyecto["text-derecho"]
                      .split("\n")
                      .map((linea, index) => (
                        <li key={index}>{linea.trim()}</li> // Renderiza cada línea como un <li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default ProyectoDetalle;
