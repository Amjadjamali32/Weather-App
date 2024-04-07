import React, { useState } from 'react'
import logo from '../src/assets/logo.png'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { Link } from 'react-router-dom';

const Header = (props) => {
    const [toggleMenu, setToggleMenu] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(true)

    // toggle menu
    const toggleMenuHandler = () => {
        setToggleMenu(prevToggleMenu => !prevToggleMenu);
    };

    // function to set Dark mode 
    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
        props.getDarkMode(!isDarkMode);
    }

    return (
        <>
            <nav id='navMenu' className="bg-white border-gray-200 dark:bg-gray-950 dark:border-gray-700 fixed w-full top-0 left-0 right-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="open weather logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-orange-400">OpenWeather</span>
                    </Link>
                    <button onClick={toggleMenuHandler} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    <div className="hidden w-full md:block md:w-auto mx-2" id="navbar-dropdown" style={{ display: toggleMenu ? 'block' : 'none' }}>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-950 dark:border-gray-950 ">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:bg-transparent font-light text-small hover:text-orange-400" aria-current="page">Home</Link>
                            </li>

                            <li>
                                <Link to="/Contact" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:bg-transparent font-light text-small hover:text-orange-400">Contact</Link>
                            </li>

                            <li>
                                <Link to="/AboutUs" className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:bg-transparent font-light text-small hover:text-orange-400">About Us</Link>
                            </li>
                            <li>
                                <button className='text-white text-center ms-2 md:m-0 sm:m-0' onClick={handleClick}>
                                    <span>
                                        <DarkModeIcon className='hover:text-orange-400' style={{ display: isDarkMode ? "none" : "block" }} />
                                    </span>
                                    <span>
                                        <LightModeIcon className='visible hover:text-orange-400' style={{ display: isDarkMode ? "block" : "none" }} />
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
