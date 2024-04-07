import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';


const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900 mt-auto">
                <div className="sm:flex sm:items-center sm:justify-between py-3 text-center bg-gray-900 w-full sm:absolute sm:bottom-0 md:absolute">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 mx-4">© 2024 <a href="/" className="text-orange-400 hover:underline">OpenWeather™</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 mx-4 justify-center">
                        <a href="https://www.facebook.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-orange-400">
                            <span><FacebookIcon /></span>
                        </a>
                        <a href="www.linkedin.com/in/amjad-ali-271430253" className="text-gray-500 hover:text-gray-900 dark:hover:text-orange-400 ms-5">
                            <span><LinkedInIcon /></span>
                        </a>
                        <a href="https://www.instagram.com/" className="text-gray-500 hover:text-gray-900 dark:hover:text-orange-400 ms-5">
                            <span><InstagramIcon /></span>
                        </a>
                        <a href="https://github.com/Amjadjamali32/Simple-Calculator.git" className="text-gray-500 hover:text-gray-900 dark:hover:text-orange-400 ms-5">
                            <span><GitHubIcon /></span>
                        </a>
                        <a href="https://telegram.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-orange-400 ms-5">
                            <span><TelegramIcon /></span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
