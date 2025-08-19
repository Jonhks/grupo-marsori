import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Navbar: React.FC = () => {
  const navigation = [
    { name: "Inicio", path: "/", current: true },
    { name: "Nosotros", path: "/nosotros", current: false },
    { name: "Servicios", path: "/servicios", current: false },
    { name: "Proyectos", path: "/proyectos", current: false },
    { name: "Contacto", path: "/contacto", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure
      as="nav"
      className="relative bg-black after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden text-white"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center"></div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-2">
            {/* Iconos sociales alineados a la derecha */}
            <a
              href="https://www.facebook.com/GrupoMarsori"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </a>
            <a
              href="https://www.linkedin.com/company/grupomarsori/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://wa.me/521234567890?text=Hola%20quiero%20información"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-400 text-gray-400 hover:text-white hover:border-white transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={15} />
            </a>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.path}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-950/50 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Navbar;
