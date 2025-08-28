import React, { useEffect, useState } from "react";
import desktopImg from "../../assets/img/WIPGMS.jpg";
import mobileImg from "../../assets/img/wip-mobile.jpeg";

const WIP: React.FC = () => {
  const [bgImg, setBgImg] = useState(desktopImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBgImg(mobileImg);
      } else {
        setBgImg(desktopImg);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-screen min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Puedes agregar contenido encima si lo deseas */}
    </div>
  );
};

export default WIP;
