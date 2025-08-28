import { useState, type Key } from "react";

interface SliderDinamicoProps {
  images: string[];
}

const SliderDinamico = ({ images }: SliderDinamicoProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 max-h-[60vh] ">
      {/* Imagen grande */}
      <div className="flex-1">
        <img
          src={selectedImage}
          alt="Imagen seleccionada"
          className="w-full h-auto max-h-[60vh] rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex gap-4">
        {/* Primera columna */}
        <div className="grid gap-2 overflow-x-auto md:overflow-y-scroll md:w-40">
          {images
            .filter((_, index) => index % 2 === 0) // Imágenes en posiciones pares
            .map((img: string, index: Key | null | undefined) => (
              <img
                key={index}
                src={img}
                alt={`Miniatura ${index}`}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer rounded-md border-2 w-full h-auto transition-all duration-200
                ${
                  selectedImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-300"
                }`}
              />
            ))}
        </div>

        {/* Segunda columna */}
        <div className="grid gap-2 overflow-x-auto md:overflow-y-scroll md:w-40">
          {images
            .filter((_, index) => index % 2 !== 0) // Imágenes en posiciones impares
            .map((img: string, index: Key | null | undefined) => (
              <img
                key={index}
                src={img}
                alt={`Miniatura ${index}`}
                onClick={() => setSelectedImage(img)}
                className={`cursor-pointer rounded-md border-2 w-full h-auto transition-all duration-200
                ${
                  selectedImage === img
                    ? "border-blue-500 scale-105"
                    : "border-gray-300"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SliderDinamico;
