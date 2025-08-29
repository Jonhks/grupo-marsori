import ImgServicios from "../assets/img/servicios/SERVICIOS_01 WEB.jpg";

const Servicios = () => {
  return (
    <section className="w-full flex flex-col items-center py-12 bg-white">
      {/* Banner superior */}
      <div className="left-0 top-0 w-screen h-56 md:h-72 relative flex items-center justify-center overflow-hidden">
        <img
          src={ImgServicios}
          alt="Banner Marsori"
          className="w-full h-full object-cover opacity-80 block"
        />
      </div>

      {/* Sección de título */}
      <div className="text-center mb-12 px-8 mt-16">
        <h1 className="text-4xl font-bold text-black">NUESTROS SERVICIOS</h1>
      </div>

      {/* Contenido principal */}
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-16 px-8">
        {/* Ingeniería */}
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full ">
          <h2 className="text-3xl font-bold text-[#818181] mb-4 w-full md:w-1/2 text-center">
            INGENIERÍA
          </h2>
          <ul className="text-lg text-[#707070] font-medium text-left w-full md:w-1/2">
            <li>Ingeniería de Procesos</li>
            <li>Ingeniería Mecánica</li>
            <li>Ingeniería Civil</li>
            <li>Ingeniería Eléctrica</li>
            <li>Ingeniería Química</li>
            <li>Ingeniería Industrial</li>
            <li>Ingeniería Mecatrónica</li>
            <li>Arquitectura</li>
            <li>Economía y Finanzas</li>
          </ul>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-16 px-8 mt-14 mb-16">
        {/* Ingeniería */}
        <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
          <h2 className="text-3xl font-bold text-[#818181] mb-4 w-full md:w-1/2 text-center">
            GESTIÓN <br /> PROYECTOS
          </h2>
          <ul className="text-lg text-[#707070] font-medium text-left w-full md:w-1/2">
            <li>Gestión de Riesgos</li>
            <li>Administración de Empresas</li>
            <li>Logística y Comercio Exterior</li>
            <li>Gestión de la Cadena de Abastecimiento</li>
            <li>Comercialización de productos petrolíferos y sus derivados</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
