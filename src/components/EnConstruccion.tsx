import React from "react";
import WIPImg from "../assets/img/WIPGMS.jpg";

const EnConstruccion: React.FC = () => {
  return (
    <div
      className="
      fixed inset-0 w-screen h-screen flex items-center justify-center z-[9999] bg-center bg-no-repeatbg-contain"
      style={{ backgroundImage: `url(${WIPImg})` }}
    >
      {/* Puedes agregar overlay o texto aquí si lo deseas */}
    </div>
  );
};

export default EnConstruccion;
