import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper/modules";
import Img2 from "../../assets/img/swiper/GRUPOMARSORI_BANNER02.png";
import Img3 from "../../assets/img/swiper/GRUPOMARSORI_BANNER03.jpg";
import Img4 from "../../assets/img/swiper/GRUPOMARSORI_BANNER04.png";
import Img5 from "../../assets/img/swiper/GRUPOMARSORI_BANNER05.png";

export default function Swiper() {
  // Ejemplo de imágenes, reemplaza por tus propias rutas
  const images = [Img2, Img3, Img4, Img5, Img2];

  return (
    <div className="w-full max-w-8xl mx-auto py-0">
      <SwiperComponent
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="rounded-lg shadow-lg bg-white"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              className="h-62 md:h-96 w-full bg-cover bg-center rounded-lg flex items-center justify-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Slide {i + 1} */}
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </div>
  );
}
