import React from 'react'
import Navbar from '../components/navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../components/footer/Footer'
import PopUp from '../components/popUp/PopUp'

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };

  return (
    <>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Outlet />
    <Footer />
    <PopUp orderPopup={orderPopup} 
    setOrderPopup={setOrderPopup} />
    </>
  )
}

export default Layout
