import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "https://via.placeholder.com/800x500?text=Imagen+1",
    "https://via.placeholder.com/800x500?text=Imagen+2",
    "https://via.placeholder.com/800x500?text=Imagen+3",
    "https://via.placeholder.com/800x500?text=Imagen+4",
    "https://via.placeholder.com/800x500?text=Imagen+5",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Imagen grande */}
      <div className="flex-1">
        <img
          src={selectedImage}
          alt="Imagen seleccionada"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:w-40">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Miniatura ${index}`}
            onClick={() => setSelectedImage(img)}
            className={`cursor-pointer rounded-md border-2 transition-all duration-200
              ${
                selectedImage === img
                  ? "border-blue-500 scale-105"
                  : "border-gray-300"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
