import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper.min.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Swiper() {
  // Ejemplo de imágenes, reemplaza por tus propias rutas
  const images = [
    "https://grupomarsori.com/images/home-Banner01.jpg",
    "https://grupomarsori.com/images/home-Banner02.jpg",
    "https://grupomarsori.com/images/home-Banner03.jpg",
    "https://grupomarsori.com/images/home-Banner04.jpg",
    "https://grupomarsori.com/images/home-Banner05.jpg",
  ];

  return (
    <div className="w-full max-w-8xl mx-auto py-0">
      <SwiperComponent
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className=" shadow-lg bg-white"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-62 md:h-96 w-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              {/* Slide {i + 1} */}
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}
