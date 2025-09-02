import React from 'react'
import travelImg from '../../assets/travelbox.png';
import {MdFlight, MdOutlineLocalHotel} from 'react-icons/md';
import {IoIosWifi} from 'react-icons/io';
import {IoFastFoodSharp} from 'react-icons/io5';

const Explore = () => {
  return (
    <div className='min-h-[550px] bg-gray-100'>
      <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
        <div className='container mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            
            {/* Left Image */}
            <div>
              <img 
                src={travelImg} 
                alt="Travel" 
                data-aos='flip-up'
                className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover' 
              />
            </div>

            {/* Right Content */}
            <div  data-aos='fade-up' className='max-w-[450px] h-[350px]'>
              <h1 
                className='text-3xl font-bold sm:text-4xl'
              >
                Explore all corners of the world with us
              </h1>
              <p className='text-sm text-gray-500 tracking-wide leading-8'>
                Travel opens the door to new cultures. Every journey is a story waiting to be lived and cherished forever.
              </p>

             <div data-aos='zoom-in' className='grid grid-cols-2 gap-6 mt-6'>

  {/* Flight */}
  <div className='flex items-center gap-4'>
    <MdFlight className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
    <p>Flight</p>
  </div>

  {/* Wi-Fi */}
  <div className='flex items-center gap-4'>
    <IoIosWifi className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-100 dark:bg-blue-400' />
    <p>Wi-Fi</p>
  </div>

  {/* Hotel */}
  <div className='flex items-center gap-4'>
    <MdOutlineLocalHotel className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />
    <p>Hotel</p>
  </div>

  {/* Food */}
  <div className='flex items-center gap-4'>
    <IoFastFoodSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
    <p>Food</p>
  </div>
</div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore
