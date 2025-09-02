import React from 'react'
import Location from '../components/location/Location'

const About = () => {
  return (
    <div className='continer p-10 pt-14'>
      <div className='py-10'>
        <h1 className='my-8 border-l-8 border-[#3c5cdc] py-2 pl-2 text-3xl font-bold'>About Us</h1>
        <p>A travel website is a digital platform that helps people explore destinations, plan trips, and find inspiration for their journeys. It provides detailed information about tourist attractions, hotels, restaurants, culture, and local experiences. Along with blogs, guides, and recommendations, a travel website often includes booking options and essential travel tips to make trips easier and more enjoyable. By combining information, visuals, and resources, it acts as a one-stop solution for travelers to discover new places and create memorable experiences.</p>
        <br />
        <hr />
        <br />
        <p>A travel website serves as a comprehensive guide for travelers, offering information about destinations, attractions, accommodations, and cultural experiences. It helps users plan their trips efficiently by providing tips, itineraries, and recommendations. With engaging content such as blogs, photos, and videos, a travel website inspires exploration and adventure while making the travel experience easier and more enjoyable for everyone.</p>
      </div>
      <Location />
    </div>
  )
}

export default About
