import { motion } from "framer-motion";

const Nosotros = () => {
  const Motion = motion.section;

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-white py-12">
      <Motion
        initial={{ opacity: 0, y: -100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto gap-8 items-center">
          {/* Imagen */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <img
              src={"https://grupomarsori.com/images/nosotros01.jpg"}
              alt="Instalación Marsori"
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>
          {/* Texto y logo */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
            <img
              src={"https://grupomarsori.com/images/logomarsori.png"}
              alt="Logo Marsori"
              className="w-56 mb-6"
            />
            <p className="font-montserrat text-base md:text-[14px] text-[#444] mb-6">
              Grupo Marsori SA de CV es una empresa mexicana con amplia
              experiencia en el desarrollo de proyectos para la industria
              energética. Ha participado en el análisis, evaluación y
              factibilidad de proyectos relacionados con el almacenamiento,
              distribución y transporte de hidrocarburos. También ha participado
              en proyectos relacionados con la importación de productos
              petrolíferos y GNL, así como en el desarrollo de plantas
              industriales y proyectos de ductos.
            </p>
          </div>
        </div>
        <div className="w-full max-w-6xl mx-auto mt-8">
          <p className="font-montserrat text-sm md:text-[14px] text-[#444] text-justify">
            Grupo Marsori también ofrece consultoría, supervisión, gestión de
            proyectos, cálculo de tarifas, elaboración de ingeniería conceptual,
            básica y de detalle, obtención y gestión de permisos municipales,
            estatales y federales (a solicitud del cliente), adquisición de
            equipos y materiales, así como la construcción, comisionamiento,
            arranque, operación y mantenimiento de plantas industriales, ductos,
            estaciones de bombeo y muelles. Esto se ha logrado gracias a la
            amplia experiencia y conocimiento de Grupo Marsori, ya que la
            mayoría de su personal son jubilados de Pemex, y al profesionalismo
            de jóvenes especialistas en diversas disciplinas.
          </p>
        </div>
      </Motion>
      <Motion
        initial={{ opacity: 0, y: 100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="mt-14 left-0 top-0 w-screen h-56 md:h-72 relative flex items-center justify-center overflow-hidden">
          <img
            src={"https://grupomarsori.com/images/MISION.jpg"}
            alt="Banner Misión"
            className="w-full h-full object-cover opacity-80 block"
          />
        </div>
        {/* Sección Misión, Visión, Política debajo del banner */}
        <div className="w-full max-w-4xl mx-auto mt-16 mb-12 flex flex-col gap-12">
          <div>
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-[#181818] mb-4">
              MISIÓN
            </h3>
            <p className="font-montserrat text-[14px] text-[#444]">
              Desarrollar negocios nacionales de ingeniería, compras y
              construcción relacionados con el manejo y almacenamiento de gas
              natural, gas LP y derivados del petróleo, así como la gestión de
              las importaciones de hidrocarburos. Mejoramos continuamente
              nuestra calidad, puntualidad y rentabilidad, satisfaciendo las
              necesidades de nuestros clientes dentro del marco regulatorio de
              seguridad, salud ocupacional y protección ambiental, mediante el
              compromiso de quienes trabajamos en esta empresa de ser
              eficientes, eficaces y confiables, para ser una organización
              rentable y productiva.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-[#181818] mb-4">
              VISIÓN
            </h3>
            <p className="font-montserrat text-[14px] text-[#444]">
              Ser la empresa líder en el sector energético en el desarrollo de
              ingeniería, compras, construcción, operación, mantenimiento,
              distribución, importación y exportación de gas natural, gas LP y
              derivados del petróleo. Nuestro personal está comprometido con la
              calidad, la seguridad y salud ocupacional y la protección del
              medio ambiente. Buscamos alcanzar y aumentar nuestra capacidad,
              manteniendo una infraestructura de vanguardia que garantice un
              suministro eficiente y confiable, superando las expectativas de
              los clientes y cumpliendo siempre con la normativa vigente.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-bold text-3xl md:text-4xl text-[#181818] mb-4">
              POLÍTICA
            </h3>
            <p className="font-montserrat text-[14px] text-[#444]">
              Grupo Marsori establece su compromiso con el desarrollo de
              negocios nacionales e internacionales en la ingeniería, procura,
              construcción, operación y mantenimiento de terminales y ductos
              relacionados con el manejo, almacenamiento y transporte de gas
              natural, gas LP y derivados del petróleo, así como la gestión de
              las importaciones de hidrocarburos, con base en el Sistema
              Integrado de Gestión (ISO 9001:2015, ISO 14001:2015 y OHSAS
              18001:2007), para satisfacer a sus clientes y grupos de interés
              mediante el cumplimiento de los requisitos legales y
              reglamentarios aplicables con el cuidado y protección del medio
              ambiente, el uso racional de los recursos, así como la seguridad y
              salud de todo el personal, los objetivos estratégicos
              desarrollados al personal de manera integral y promoviendo la
              mejora continua de sus procesos.
            </p>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default Nosotros;
