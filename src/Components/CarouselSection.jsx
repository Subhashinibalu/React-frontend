// CarouselComponent.js
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CarouselSection = ({caro}) => {
    const caroRef = useRef(null);
    const caro2Ref = useRef(null);
    const caro3Ref = useRef(null);
  // Slick settings
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow:<i className="bi bi-arrow-left-circle "></i>,
    prevArrow: <i className="bi bi-arrow-left-circle "></i>
  };

 

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center justify-center">
        <div className="ms-32 w-1/2 mb-10">
          <h2 className="text-5xl  text-[#2C2C51] mb-3">
            {caro.caroh}<br />
            <span className="font-bold">{caro.carospan}</span>
          </h2>
          <p className="text-gray-600 mb-5">
          {caro.carop}
          </p>
          <button className="orng text-white font-bold px-6 py-3 rounded-full shadow-md">
          {caro.carobtn}
          </button>
        </div>
        {/* Carousel Section */}
        <div className="w-1/2 mb-5">
        
        <div className="relative w-full mb-5">
      {/* Left Arrow */}
      <button
        id="left-arrow"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 border-0 bg-transparent text-black z-10"
        onClick={() => caroRef.current?.slickPrev()}
      >
        <i className="bi bi-arrow-left-circle text-2xl"></i>
      </button>

      {/* Carousel */}
      <Slider {...settings} ref={caroRef} className="carousel">
        {caro.div1img.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button
        id="right-arrow"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 border-0 bg-transparent text-black z-10"
        onClick={() => caroRef.current?.slickNext()}
      >
        <i className="bi bi-arrow-right-circle text-2xl"></i>
      </button>
    </div>
    <div className="relative w-full mb-5">
      {/* Left Arrow */}
      <button
        id="left-arrow"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 border-0 bg-transparent text-black z-10"
        onClick={() => caro3Ref.current?.slickPrev()}
      >
        <i className="bi bi-arrow-left-circle text-2xl"></i>
      </button>

      {/* Carousel */}
      <Slider {...settings} ref={caro3Ref} className="carousel">
        {caro.div2img.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button
        id="right-arrow"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 border-0 bg-transparent text-black z-10"
        onClick={() => caro3Ref.current?.slickNext()}
      >
        <i className="bi bi-arrow-right-circle text-2xl"></i>
      </button>
    </div>
    <div className="relative w-full mb-5">
      {/* Left Arrow */}
      <button
        id="left-arrow"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 border-0 bg-transparent text-black z-10"
        onClick={() => caro2Ref.current?.slickPrev()}
      >
        <i className="bi bi-arrow-left-circle text-2xl"></i>
      </button>

      {/* Carousel */}
      <Slider {...settings} ref={caro2Ref} className="carousel">
        {caro.div3img.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-4">
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </Slider>

      {/* Right Arrow */}
      <button
        id="right-arrow"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 border-0 bg-transparent text-black z-10"
        onClick={() => caro2Ref.current?.slickNext()}
      >
        <i className="bi bi-arrow-right-circle text-2xl"></i>
      </button>
    </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
