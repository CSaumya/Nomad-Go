import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/nomad-go-logo.png';
import {FaCaretDown} from 'react-icons/fa';
import {HiMenuAlt3, HiMenuAlt1} from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'


const DropdownLinks = [
    {
        name : "Our Services",
        link : '/#services',
    },
    {
        name : "Top Brands",
        link : "/#mobile_brands",
    },
    {
        name : "Location",
        link : "/#location",
    },
]

const Navbar = ({handleOrderPopup}) => {
    
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    };

  return (
    <div className='fixed top-0 right-0 w-full bg-gradient-to-r from-black to-[#2541b2] text-white shadow-md z-10'>
        <div className='bg-gradient-to-r from-[#3c5cdc]
         to-[#00c3c7] text-white'>
        <div className="container py-[2px] sm:block hidden">
        <div className="flex justify-evenly">
            <p>20% off on next booking</p>
            <p>Mobile No. +91 123456789</p>
        </div>
        </div>
        </div>
        <div className="container py-3 sm:py-0">
            <div className='flex justify-evenly items-center'>
               { /*nav-logo*/ }
            <div>
                <Link to = '/' onClick={() => window.scrollTo(0,0)}>
                <img src={logo} alt="" className='h-14 md:h-12 sm:h-8'/>
                </Link>
            </div>

            {/* nav-links */}
            <div className='hidden sm:block'>
                <ul className='flex items-center gap-6 pr-9'>
                   <li className='py-4'>
                    <NavLink to = '/' activeClassName ='active'
                     onClick = {
                        () => window.scrollTo(0,0)
                    }>
                    Home
                    </NavLink>
                   </li> 
                   <li className='py-4'>
                    <NavLink to = '/blogs' activeClassName ='active' onClick = {
                        () => window.scrollTo(0,0)
                    }>
                    Blogs
                    </NavLink>
                   </li> <li className='py-4'>
                    <NavLink to = '/places' activeClassName ='active' onClick = {
                        () => window.scrollTo(0,0)
                    }>
                    Best Places
                    </NavLink>
                   </li> <li className='py-4'>
                    <NavLink to = '/about' activeClassName ='active' onClick = {
                        () => window.scrollTo(0,0)
                    }>
                    About
                    </NavLink>
                   </li> 
                   {/*drop-down*/}
                   <li className='py-4 relative group cursor-pointer'>
                    <div className='dropdown group flex items-center'>
                        <span>Quick Links</span>
                        <span>
                            <FaCaretDown className ='transition-all duration-200 ' />
                        </span>
                    </div>
                    <div className='absolute -left-9 z-[9999] hidden group-hover:block shadow-md text-white w-[150px] bg-[#2541b2] p-2'>
                        <ul>
                            {DropdownLinks.map((data) => {
                                return(
                                <li key ={data.name}>
                                    <a className='inline-block w-full rounded-md p-2 hover:bg-[#3c5cdc]/50'
                                    href={data.link}>
                                        {data.name}
                                    </a>
                                </li>
                                );
                                })}
                        </ul>
                    </div>
                   </li>
                </ul>
            </div>

            {/*Book now btn */}
            <div className='flex items-center gap-5'>
                <button
                 onClick={() => handleOrderPopup()}
                 className='bg-gradient-to-r from-[#3c5cdc] to-[#00c3c7] hover:bg-gradient-to-r hover:from-[#00c3c7] hover:to-[#3c5cdc] cursor-pointer transition-all duration-600 text-white px-3 py-1 rounded-full' >
                    Book Now
                </button>

                {/*hamburger menu */}

                <div className='md:hidden block'>
                    {showMenu ? (
                        <HiMenuAlt1 onClick ={toggleMenu}
                        className = 'cursor-pointer transition-all' size ={30}/>
                    ) : (
                        <HiMenuAlt3 onClick ={toggleMenu}
                        className = 'cursor-pointer transition-all' size ={30} />
                    )}
                </div>
            </div>
            </div>
        </div>
        <ResponsiveMenu setShowMenu= {setShowMenu} showMenu={showMenu} />
    </div>
  )
}

export default Navbar
