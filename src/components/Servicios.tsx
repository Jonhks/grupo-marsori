import React from "react";

interface ServiciosProps {
  titulo?: string;
  ingenieriaTitulo?: string;
  ingenieriaItems?: string[];
  gestionTitulo?: string;
  gestionItems?: string[];
}

const defaultIngenieria = [
  "Ingeniería de Procesos",
  "Ingeniería Mecánica",
  "Ingeniería Civil",
  "Ingeniería Eléctrica",
  "Ingeniería Química",
  "Ingeniería Industrial",
  "Ingeniería Mecatrónica",
  "Arquitectura",
  "Economía y Finanzas",
];

const defaultGestion = [
  "Gestión de Riesgos",
  "Administración de Empresas",
  "Logística y Comercio Exterior",
  "Gestión de la Cadena de Abastecimiento",
  "Comercialización de productos petrolíferos y sus derivados",
];

const Servicios: React.FC<ServiciosProps> = ({
  titulo = "NUESTROS SERVICIOS",
  ingenieriaTitulo = "INGENIERÍA",
  ingenieriaItems = defaultIngenieria,
  gestionTitulo = "GESTIÓN DE PROYECTOS",
  gestionItems = defaultGestion,
}) => {
  return (
    <section className="w-full flex flex-col items-center py-12 bg-white">
      <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-[#181818] text-center mb-10 tracking-tight">
        {titulo}
      </h2>
      <div className="relative flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        {/* Título vertical Ingeniería fuera del cuadro */}
        <div className="hidden md:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2 z-10">
          <span className="font-montserrat font-medium text-2xl md:text-3xl text-[#4e4e4e] tracking-tight rotate-[-90deg]">
            {ingenieriaTitulo}
          </span>
        </div>
        {/* Columna Ingeniería */}
        <div className="flex-1 border border-gray-300 bg-white min-h-[350px] flex items-center md:ml-16">
          <ul className="pl-8 py-8 space-y-2 w-full">
            {ingenieriaItems.map((item, idx) => (
              <li
                key={idx}
                className="font-montserrat font-medium text-lg md:text-xl text-[#4e4e4e]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Columna Gestión */}
        <div className="flex-1 border border-gray-300 bg-white min-h-[350px] flex items-center md:mr-16">
          <ul className="pl-8 py-8 space-y-2 w-full">
            {gestionItems.map((item, idx) => (
              <li
                key={idx}
                className="font-montserrat font-medium text-lg md:text-xl text-[#4e4e4e]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Título vertical Gestión fuera del cuadro */}
        <div className="hidden md:flex absolute right-[-8.5rem] top-1/2 -translate-y-1/2 z-10">
          <span className="font-montserrat font-medium text-2xl md:text-3xl text-[#4e4e4e] tracking-tight rotate-90">
            {gestionTitulo}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
