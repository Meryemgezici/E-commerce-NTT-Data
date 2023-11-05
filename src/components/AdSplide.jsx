import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const AdSplide = () => {
  return (
    <div className="w-screen mt-3">
    <Splide
      options={{
        type: 'fade', // Ekranları geçiş yaparken kaydırma yerine solmalarını kullan
        perPage: 1, // Her seferinde görünen öğe sayısı
        autoplay: true, // Otomatik oynatma etkinleştir
        interval: 100000, // Otomatik geçiş süresi (ms cinsinden)
        rewind: true,
      }}
    >
      <SplideSlide>
        <img src="src/assets/pcAd1.png" alt="Resim 1" className="w-full h-full hidden md:hidden lg:block xl:block" />
        <img src="src/assets/tabletAd1.png" alt="Resim 1" className="w-full h-full hidden md:block lg:hidden xl:hidden" />
        <img src="src/assets/mobilAd1.png" alt="Resim 1" className="w-full h-full md:hidden" />
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/pcAd2.png" alt="Resim 2" className="w-full h-full hidden md:hidden lg:block xl:block" />
        <img src="src/assets/tabletAd2.png" alt="Resim 2" className="w-full h-full hidden md:block lg:hidden xl:hidden" /> 
        <img src="src/assets/mobilAd2.png" alt="Resim 2" className="w-full h-full md:hidden" />
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/pcAd3.png" alt="Resim 3" className="w-full h-full hidden md:hidden lg:block xl:block" />
        <img src="src/assets/tabletAd3.png" alt="Resim 3" className="w-full h-full hidden md:block lg:hidden xl:hidden" />
        <img src="src/assets/mobilAd3.png" alt="Resim 3" className="w-full h-full md:hidden" />
      </SplideSlide>
      <SplideSlide>
        <img src="src/assets/pcAd4.png" alt="Resim 4" className="w-full h-full object-cover hidden md:hidden lg:block xl:block" />
        <img src="src/assets/pcAd4.png" alt="Resim 4" className="w-full h-full object-cover hidden md:block lg:hidden xl:hidden" />
        <img src="src/assets/mobilAd4.png" alt="Resim 4" className="w-full h-full object-cover md:hidden" />
      </SplideSlide>
    </Splide>
  </div>
  )
}

export default AdSplide
