const Privacidad: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        AVISO DE PRIVACIDAD
      </h1>

      <p className="mb-4 font-bold">"GRUPO MARSORI, S.A. de C.V.".</p>
      <div className="max-w-4xl text-left text-gray-700 font-montserrat text-md leading-relaxed">
        <p className="mb-4">
          En cumplimiento con lo establecido en la Ley Federal de Protección de
          Datos Personales en Posesión de los Particulares, Grupo Marsori, S.A.
          de C.V. (en lo sucesivo “Grupo Marsori”), con domicilio en Insurgentes
          Sur 1853 Piso 5 Colonia Guadalupe Inn, Delegación Álvaro Obregón, CP
          01020, CDMX es responsable del tratamiento y protección de sus datos
          personales.
        </p>
        <div className=" w-full md:w-[80%] md:px-15">
          <h2 className="text-xl font-semibold mb-4 text-left w-full">
            1. Datos personales que recabamos
          </h2>
        </div>
        <ul className="list-disc pl-5 text-gray-700 font-montserrat text-md font-semibold">
          <li>
            Datos de identificación: nombre, domicilio, teléfono, correo
            electrónico, firma, RFC, CURP, identificación oficial.
          </li>
          <li>
            Datos laborales: puesto, empresa, referencias, historial laboral (en
            caso de candidatos o empleados).
          </li>
          <li>
            Datos financieros o patrimoniales: información bancaria, CLABE,
            cuentas, datos fiscales (únicamente cuando sea necesario para el
            cumplimiento de obligaciones legales y contractuales).
          </li>
        </ul>
        <p className="mb-4 md:p-8">
          No recabamos datos personales sensibles sin consentimiento expreso.
        </p>
        <div className=" w-full md:w-[80%] md:px-15">
          <h2 className="text-xl font-semibold mb-4 text-left w-full">
            2. Finalidades del tratamiento
          </h2>
        </div>
        <p className="mb-4">
          Sus datos personales serán utilizados para las siguientes finalidades
          primarias:
        </p>
        <ul className="list-disc pl-5 text-gray-700 font-montserrat text-md font-semibold">
          <li>Proveer los servicios y productos que ha solicitado.</li>
          <li>Dar cumplimiento a obligaciones contractuales.</li>
          <li>Facturación y cobranza.</li>
          <li>Evaluar la calidad del servicio.</li>
          <p className="m-2 text-light  font-normal">
            Y para las siguientes finalidades secundarias:
          </p>
          <li>Envío de información comercial, promociones y publicidad.</li>
          <li>Elaboración de perfiles de clientes y estadísticas.</li>
        </ul>
        <p className="mb-4">
          El titular puede negarse a que sus datos se usen para finalidades
          secundarias enviando un correo a: info@marsori.com .
        </p>
        <div className=" w-full md:w-[80%] md:px-15">
          <h2 className="text-xl font-semibold mb-4 text-left w-full">
            3. Transferencia de datos
          </h2>
        </div>
        <p className="mb-4">Sus datos podrán ser compartidos únicamente con:</p>
        <ul className="list-disc pl-5 text-gray-700 font-montserrat text-md font-semibold">
          <li>Autoridades competentes que lo requieran por mandato legal.</li>
          <li>
            Terceros proveedores de servicios relacionados estrictamente con la
            operación de Grupo Marsori, S.A. de C.V. (por ejemplo, mensajería,
            asesoría legal, auditoría o sistemas, servicios de ingeniería etc).
          </li>
        </ul>
        <p className="mb-4">
          En ningún caso se comercializarán sus datos personales.
        </p>
        <div className=" w-full md:w-[80%] md:px-15">
          <h2 className="text-xl font-semibold mb-4 text-left w-full">
            4. Derechos ARCO
          </h2>
        </div>
        <p className="mb-4">
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al
          tratamiento de sus datos personales (Derechos ARCO), así como a
          revocar el consentimiento otorgado.
        </p>
        <p className="mb-4">
          Para ejercer estos derechos deberá enviar una solicitud a través del
          correo electrónico: info@marsori.com o en el domicilio señalado, con
          atención al área de Protección de Datos Personales.
        </p>
        <p className="mb-4">La solicitud deberá contener:</p>
        <ul className="list-disc pl-5 text-gray-700 font-montserrat text-md font-semibold">
          <li>Nombre completo y medio de contacto.</li>
          <li>Identificación oficial.</li>
          <li>
            Descripción clara de los datos respecto de los cuales busca ejercer
            sus derechos.
          </li>
        </ul>
        <div className=" w-full md:w-[80%] md:px-15">
          <h2 className="text-xl font-semibold mb-4 text-left w-full">
            5. Medidas de seguridad
          </h2>
        </div>
        <p className="mb-4">
          Grupo Marsori, S.A. de C.V. ha implementado medidas de seguridad
          físicas, técnicas y administrativas para proteger sus datos personales
          contra daño, pérdida, alteración, destrucción, uso indebido, acceso no
          autorizado o tratamiento indebido.
        </p>
        <div className=" w-full md:w-[80%] md:px-15">
          <h2 className="text-xl font-semibold mb-4 text-left w-full">
            6. Cambios al aviso de privacidad
          </h2>
        </div>
        <p className="mb-4">
          Grupo Marsori se reserva el derecho de modificar o actualizar este
          Aviso de Privacidad en cualquier momento, para la atención de reformas
          legislativas o políticas internas. Las modificaciones estarán
          disponibles en nuestro domicilio y en la página web
        </p>
        <a
          className="text-blue-500 hover:underline"
          href="https://grupomarsori.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.grupomarsori.com
        </a>
        <p className="my-4 font-semibold text-center">
          Fecha de última actualización: 04 de septiembre del 2025
        </p>
      </div>
    </div>
  );
};

export default Privacidad;
