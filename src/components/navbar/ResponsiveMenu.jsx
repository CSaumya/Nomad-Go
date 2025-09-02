import React from 'react'
import {FaUserCircle} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const navbarLinks = [
    {
        name : "Home",
        link :'/',
    },
    {
        name : "About",
        link :'/about',
    },
    {
        name : "Blogs",
        link :'/blogs',
    },
    {
        name : "Best Places",
        link :'/places',
    },
];

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${showMenu? 'left-0' : '-left-[100%]'} fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-[#2541b2] dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
       <div className='navbar_card'>
        <div>
            <div className='flex items-center justify-start gap-4'>
            <FaUserCircle size={50} className='text-white'/>
            <div>
                <h1>Hello User</h1>
                <h1 className='text-sm text-slate-100'>Premium User</h1>
            </div>
            </div>
        </div>
        <div className='text-white mt-12'>
            <ul>
                {
                    navbarLinks.map(({name, link}) => (
                        <li key={name}>
                            <Link to={link} onClick={() => setShowMenu(false)} className='mb-5 inline-block'>
                            {name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>
        </div> 
  )
}

export default ResponsiveMenu
