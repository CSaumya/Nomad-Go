import React from 'react';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from '../../assets/testimonial1.jpg';
import Img2 from '../../assets/testimonial2.jpg';
import Img3 from '../../assets/testimonial3.webp';

const TestimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "I was amazed by the cultural richness and hospitality. The food tour was unforgettable, and I felt completely safe.",
    img: Img1,
  },
  {
    id: 2,
    name: "Amanda",
    text: "The experience was fantastic! Everything was well-organized and made my trip stress-free and memorable for me.",
    img: Img2,
  },
  {
    id: 3,
    name: "Brent",
    text: "A truly unforgettable journey. The people, food, and culture were beyond my expectations. Highly recommended!",
    img: Img3,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,   
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, initialSlide: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <p className="text-l bg-clip-text text-transparent bg-gradient-to-r from-[#3c5cdc] to-[#00c3c7]">
            What People Say
          </p>
          <h1 className="text-3xl font-bold mb-2">Testimonial</h1>
          <p className="text-xs text-gray-400">
            Our travelers’ stories reflect the unforgettable moments and cherished memories they experienced with us. Here’s what they have to say about their journey.
          </p>
        </div>

        <Slider {...settings}>
          {TestimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="my-6 px-4">
              <div className="relative shadow-lg rounded-xl p-6 flex flex-col items-center text-center bg-[#00c3c7]/20">
                <div className="relative">
                  <img
                    src={img}
                    alt={name}
                    className="w-20 h-20 rounded-full mb-4 object-cover"
                  />
                  {/* Decorative commas/quotes */}
                </div>
                <h1 className="text-lg font-semibold">{name}</h1>
                <p className="text-sm text-gray-600 mt-2">{text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
