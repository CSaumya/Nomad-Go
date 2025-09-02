import React from 'react'

const Banner = ({img}) => {
    const bgImg = {
        backgroundImage: `url(${img})`,
        backgroundSize : "cover",
        backgroundPosition : "center",
        height : "400px",
    };
  return (
    <div data-aos = "zoom-in" className='h-[400px] w-[80%] mx-auto px-4 sm:px-6 lg:px-8' style={bgImg}> 
    </div>
  )
} 

export default Banner
