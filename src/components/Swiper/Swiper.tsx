import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import "../../../node_modules/swiper/swiper.min.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Swiper.css"; // Importa un archivo CSS personalizado para Swiper

interface SwiperProps {
  images: string[];
}

export default function Swiper({ images }: SwiperProps) {
  return (
    <div className="w-full max-w-8xl mx-auto py-0">
      <SwiperComponent
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
