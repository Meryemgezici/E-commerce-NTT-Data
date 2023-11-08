import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { ads } from "../utils/contants";

const AdSplide = () => {
  return (
    <div className="w-screen mt-3">
      <Splide
        options={{
          type: "fade",
          perPage: 1,
          autoplay: true,
          interval: 100000,
          rewind: true,
        }}
      >
        {ads.map((ad, i) => (
          <SplideSlide key={i}>
            {ad.map((src, imgIndex) => (
              <img
                key={imgIndex}
                src={src}
                alt={`Resim ${i + 1}`}
                className={`w-full h-full${
                  // Mobilde görüntüyü göster
                  imgIndex === 2 ? "block md:hidden lg:hidden xl:hidden" : ""
                }
            ${
              // Tablet için görüntüyü göster
              imgIndex === 1 ? "hidden md:block lg:hidden xl:hidden" : ""
            }
            ${
              // PC ve büyük ekranlar için görüntüyü göster
              imgIndex === 0 ? "hidden md:hidden lg:block xl:block" : ""
            }`}
              />
            ))}
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default AdSplide;
