import React from 'react'
import NatureVid from '../assets/naturevid.mp4'
import Hero from '../components/hero/Hero' 
import Places from '../components/places/Places'
import Banner from '../components/banner/Banner'
import BannerImg from '../assets/nomad-banner.jpg'
import Blogs from './Blogs'
import Explore from '../components/explore/Explore'
import Banner2 from '../components/banner2/Banner2'
import BannerImg2 from '../assets/bannerImg2.jpg'
import Testimonial from '../components/testimonials/Testimonial'
import PopUp from '../components/popUp/PopUp'

const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <div>
      <div className='relative h-[700px]'>
      <video autoPlay loop muted className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
       src={NatureVid} type="video/mp4" loading='lazy'>
       </video>
       <Hero />
       </div>
       <Places handleOrderPopup = { handleOrderPopup}/>
       <Banner img={BannerImg}/>
       <Blogs />
       <Explore />
       <Banner2 img2= {BannerImg2}/>
       <Testimonial />
       <PopUp orderPopup={orderPopup} 
       setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Home
