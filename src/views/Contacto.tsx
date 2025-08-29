import { useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const InformacionContacto = () => {
  const Motion = motion.section;

  return (
    <div
      className="w-full md:pb-30 md:w-1/2 px-4 flex flex-col items-center justify-between"
      style={{ fontFamily: "Montserrat" }}
    >
      <Motion
        initial={{ opacity: 0, y: -100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full flex flex-col justify-center items-center">
          <img
            src={"https://grupomarsori.com/images/logomarsori.png"}
            alt="Logo Marsori"
            className="w-56 mb-1"
          />
        </div>
        <div className="h-17 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0 gap-2 justify-center mb-4">
          <a
            href="https://www.facebook.com/GrupoMarsori"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:font-bold hover:border-gray-700 transition-colors"
            aria-label="Facebook"
          >
            <FaFacebookF size={15} />
          </a>
          <a
            href="https://www.linkedin.com/company/grupomarsori/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-black text-black hover:font-bold hover:border-gray-700 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={15} />
          </a>
        </div>
        <p className="text-[#4e4e4e] mb-0 text-center">Correo Electrónico</p>
        <p className="text-[#4e4e4e] mb-4 text-center">info@marsori.com</p>
        <p className="text-[#4e4e4e] mb-2 text-center">Teléfonos</p>
        <ul className="text-[#4e4e4e] space-y-1 text-center">
          <li>(55) 7587 6491</li>
          <li>(55) 7587 6492</li>
          <li>(55) 7587 6493</li>
          <li>(55) 7587 6495</li>
          <li>(55) 7587 6497</li>
        </ul>
      </Motion>
    </div>
  );
};

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const [buttonText, setButtonText] = useState("ENVIAR");

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: {
      nombre?: string;
      apellido?: string;
      email?: string;
      telefono?: string;
      mensaje?: string;
    } = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio.";
    if (!formData.apellido) newErrors.apellido = "El apellido es obligatorio.";
    if (!formData.email || !validateEmail(formData.email))
      newErrors.email = "El correo electrónico no es válido.";
    if (!formData.telefono || isNaN(Number(formData.telefono)))
      newErrors.telefono = "El teléfono debe ser un número válido.";
    if (!formData.mensaje) newErrors.mensaje = "El mensaje es obligatorio.";
    setErrors({ ...errors, ...newErrors });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      setButtonText("Enviando..."); // Cambiar el texto del botón
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            nombre: formData.nombre,
            apellido: formData.apellido,
            email: formData.email,
            telefono: formData.telefono,
            mensaje: formData.mensaje,
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            Swal.fire({
              title: "Correo enviado correctamente",
              icon: "success",
              confirmButtonColor: "#000000",
              confirmButtonText: "Aceptar",
              allowOutsideClick: false,
              draggable: true,
            });
            setFormData({
              nombre: "",
              apellido: "",
              email: "",
              telefono: "",
              mensaje: "",
            });
            setButtonText("ENVIAR"); // Restaurar el texto del botón
          },
          (error: string) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${error}`,
            });
            alert(
              "Hubo un error al enviar el correo. Por favor, inténtalo de nuevo."
            );
            setButtonText("ENVIAR"); // Restaurar el texto del botón
          }
        );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const Motion = motion.section;

  return (
    <div
      className="w-full md:w-1/2 px-4 py-8"
      style={{ fontFamily: "Montserrat" }}
    >
      <Motion
        initial={{ opacity: 0, y: 100 }} // Comienza abajo y transparente
        whileInView={{ opacity: 1, y: 0 }} // Termina en su lugar y visible
        transition={{ duration: 1.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1
          className="text-4xl font-bold text-center mb-8"
          style={{ color: "#000000" }}
        >
          CONTÁCTANOS
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium"
                style={{ color: "#737373" }}
              >
                Nombre
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border border-[#b9b8b8] rounded-md p-2"
              />
              {errors.nombre && (
                <p className="text-red-500 text-sm">{errors.nombre}</p>
              )}
            </div>
            <div>
              <label
                className="block text-sm font-medium"
                style={{ color: "#737373" }}
              >
                Apellido
              </label>
              <input
                type="text"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full border border-[#b9b8b8] rounded-md p-2"
              />
              {errors.apellido && (
                <p className="text-red-500 text-sm">{errors.apellido}</p>
              )}
            </div>
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: "#737373" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#b9b8b8] rounded-md p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: "#737373" }}
            >
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="w-full border border-[#b9b8b8] rounded-md p-2"
            />
            {errors.telefono && (
              <p className="text-red-500 text-sm">{errors.telefono}</p>
            )}
          </div>
          <div>
            <label
              className="block text-sm font-medium"
              style={{ color: "#737373" }}
            >
              Mensaje
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full border border-[#b9b8b8] rounded-md p-2"
            ></textarea>
            {errors.mensaje && (
              <p className="text-red-500 text-sm">{errors.mensaje}</p>
            )}
          </div>
          <div className=" flex items-center justify-center">
            <button
              type="submit"
              className="w-[50%] bg-black text-white py-2 rounded-md font-medium hover:cursor-pointer hover:bg-gray-700"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </Motion>
    </div>
  );
};

const Contacto = () => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row py-12 items-center justify-stretch">
      <InformacionContacto />
      <FormularioContacto />
    </div>
  );
};

export default Contacto;
