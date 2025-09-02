import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [priceValue, setPriceValue] = React.useState(400);

    useEffect(() => {
    AOS.init({ duration: 800, once: true });
    }, []);

  return (
    <div className="bg-black/20 h-full pt-16">  
      <div className="h-full flex justify-center items-center p-4 bg-[#3c5cdc]/10">
        <div className="container grid grid-cols-1 gap-6">
          
          {/* Heading */}
          <div className="text-white text-center">
            <p data-aos="fade-up"
              data-aos-delay="300"
              className="uppercase tracking-wide">
                Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="font-bold text-2xl sm:text-3xl md:text-4xl">
              Search Your Destination
            </p>
          </div>

          {/* Search Box */}
          <div 
          data-aos='fade-up'
          data-aos-delay='700'
           className="space-y-4 bg-white rounded-2xl shadow-lg p-6 relative pb-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Destination */}
              <div>
                <label htmlFor="destination" className="opacity-70 text-sm">
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 rounded-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3c5cdc]" />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="travel-date" className="opacity-70 text-sm">
                  Date
                </label>
                <input
                  type="date"
                  id="travel-date"
                  className="w-full bg-gray-100 my-2 rounded-full p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3c5cdc]"
                />
              </div>

              {/* Price Range */}
              <div>
                <label htmlFor="max-price" className="opacity-70 text-sm block">
                  <div className="flex justify-between items-center">
                    <span>Max Price</span>
                    <span className="font-bold text-lg">${priceValue}</span>
                  </div>
                </label>
                <div className="bg-gray-100 p-2 rounded-full">
                <input
                  type="range"
                  id="max-price"
                  min="150"
                  max="1000"
                  step="10"
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                  className="w-full accent-[#3c5cdc] my-2"
                />
              </div>
              </div>
            </div>

            {/* Search Button (inside card) */}
            <button className="bg-[#3c5cdc] hover:bg-[#2f49b5] text-white absolute font-semibold px-6 py-3 rounded-full 
            shadow-md duration-200 left-1/2 -translate-x-1/2 -bottom-5">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
