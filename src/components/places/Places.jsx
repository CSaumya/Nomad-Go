import React from 'react'
import PlacesCard from './PlacesCard';
import Img1 from '../../assets/boat.jpg';
import Img2 from '../../assets/taj mahal.jpg';
import Img3 from '../../assets/Img3.jpg';
import Img4 from '../../assets/Img4.webp';
import Img5 from '../../assets/Img5.jpg';
import Img6 from '../../assets/Img6.jpg';


const PlacesData = [
    {
        img : Img1,
        title : "Boat Tour",
        location : "USA",
        description : "Offers travelers a unique way to explore scenic coastlines, rivers, and lakes.",
        price : 100,
        type : "Cultural Relax",
    },
    {
        img : Img2,
        title : "Taj Mahal",
        location : "India",
        description : "It is one of the world’s most iconic monuments and a UNESCO World Heritage Site.",
        price : 6700,
        type : "Cultural Relax",
    },
    {
        img : Img3,
        title : "Underwater",
        location : "USA",
        description : "Dive beneath the surface to witness vibrant coral reefs, exotic marine life, and breathtaking seascapes.",
        price : 6200,
        type : "Cultural Relax",
    },
    {
        img : Img4,
        title : "Sydney",
        location : "Australia",
        description : "It is famous for the stunning Sydney Opera House, Harbour Bridge, and beautiful beaches like Bondi.",
        price : 6700,
        type : "Cultural Relax",
    },
    {
        img : Img5,
        title : "Los Angeles",
        location : "USA",
        description : "It is home to Hollywood, stunning beaches, and a vibrant cultural scene.",
        price : 6700,
        type : "Cultural Relax",
    },
    {
        img : Img6,
        title : "Las Vegas",
        location : "USA",
        description : "Known as “The Entertainment Capital of the World,” it’s a place where the lights never go out.",
        price : 6200,
        type : "Cultural Relax",
    },
]

const Places = ({handleOrderPopup}) => {
  return (
    <div className='bg-gray-100 py-10'>
      <div data-aos='fade-up'
          data-aos-delay='400' 
          className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='my-8 border-l-8 border-[#3c5cdc] py-2 pl-2 text-3xl font-bold'>Best Places To Visit</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
              PlacesData.map((item, index) => (
                <PlacesCard
                 handleOrderPopup ={handleOrderPopup}
                 key={index} {...item} />
              ))  
            }
        </div>
      </div>
    </div>
  )
}

export default Places
