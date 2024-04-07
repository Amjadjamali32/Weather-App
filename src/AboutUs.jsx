import React, { useState } from 'react'
import myImage from '../src/assets/mypic.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

const AboutUs = (props) => {
  const darkMode = props.darkMode;
  console.log(darkMode);

  return (
    <>
      <div className='mt-[4rem] mx-4'>
        <div id="accordion-arrow-icon" data-accordion="open" className='shadow-md'>
          <h2 id="accordion-arrow-icon-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1" style={{ backgroundColor: darkMode ? "gray" : "orange", color: darkMode ? "white" : "black" }}>
              <span>
                What is OpenWeather?
              </span>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
            <div className="p-5 dark:bg-gray-900" style={{ backgroundColor: darkMode ? "black" : "rgb(247, 247, 247)", color: darkMode ? "white" : "black" }}>
              <p className="mb-2">Weather App is a web application. It provides you the correct current weather of any city in the world, Either it is a town or a big city you have to search its name and can access its location as well as current weather.</p>
            </div>
          </div>
        </div>
        <div id="accordion-arrow-icon" data-accordion="open" className='my-4 shadow-md'>
          <h2 id="accordion-arrow-icon-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1" style={{ backgroundColor: darkMode ? "gray" : "orange", color: darkMode ? "white" : "black" }}>
              <span>
                What is it's purpose? How it works?
              </span>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
            <div className="p-5 dark:bg-gray-900" style={{ backgroundColor: darkMode ? "black" : "rgb(247, 247, 247)", color: darkMode ? "white" : "black" }}>
              <p className="mb-2" >The main purpose of this weather app is to provide you the correct weather in a best understandable form with appropriate units. The working of this app is similar to the other apps. It makes an API call and get the data from that HTTP request and provide you in a best manner.</p>

            </div>
          </div>
        </div>
        <div id="accordion-arrow-icon" data-accordion="open" className='my-4 shadow-md'>
          <h2 id="accordion-arrow-icon-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1" style={{ backgroundColor: darkMode ? "gray" : "orange", color: darkMode ? "white" : "black" }}>
              <span>
                What are the main features used in OpenWeather?
              </span>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
            <div className="p-5" style={{ backgroundColor: darkMode ? "black" : "rgb(247, 247, 247)", color: darkMode ? "white" : "black" }}>
              <span className='font-bold text-orange-400'>The main features of this app are:</span>
              <ul className='my-2'>
                <li>It provides complete location of the searched city.</li>
                <li>It provides current weather of the city .</li>
                <li>It provides the next 72 hours weather of the city.</li>
                <li>It provides wind speed rain precipitation.</li>
                <li>It also provides humidity and UV index.</li>
              </ul>
              <span className='font-bold text-orange-400'>Future Features are:</span>
              <ul className='my-2'>
                <li>Hourly Forecast</li>
                <li>30 days Weather History</li>
                <li>Weather News and Alerts</li>
                <li>Weather Suggestions</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="accordion-arrow-icon" data-accordion="open" className='my-4 shadow-md'>
          <h2 id="accordion-arrow-icon-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1" style={{ backgroundColor: darkMode ? "gray" : "orange", color: darkMode ? "white" : "black" }}>
              <span>
                What are the technologies used in it?
              </span>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
            <div className="p-5" style={{ backgroundColor: darkMode ? "black" : "rgb(247, 247, 247)", color: darkMode ? "white" : "black" }}>
              <p className="mb-2">
                The technology used in OpenWeather is ReactJs and tailwind CSS. There are lot of other third party libraries are used in this app like axios for API request, React Router, Material UI for icons, and some other libraries are also used.
              </p>
            </div>
          </div>
        </div>
        <div id="accordion-arrow-icon" data-accordion="open" className='my-4 shadow-md'>
          <h2 id="accordion-arrow-icon-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1" style={{ backgroundColor: darkMode ? "gray" : "orange", color: darkMode ? "white" : "black" }}>
              <span>
                Who Developed it?
              </span>
            </button>
          </h2>
          <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
            <div className="p-5" style={{ backgroundColor: darkMode ? "black" : "rgb(247, 247, 247)", color: darkMode ? "white" : "black" }}>
              <p className="mb-2 text-center">
                This weather app is developed by:<a href="https://amjadjamali.netlify.app/"><span className='mx-2 font-bold text-md text-orange-400 hover:underline'>Amjad Ali</span></a>
                <img src={myImage} alt="This is an image" className='mx-auto my-4 w-6/12 rounded-3xl border-2 border-orange-400 sm:w-5/12 md:w-3/12' />
              </p>
              <p>Hi I'm <span className='text-orange-400 font-semibold text-md'>Amjad Ali, </span>I am a passionate <span className='text-orange-400 font-semibold text-md'>Front-End Web developer.</span>  I create front-end websites.I have a depth knowledge of front-end languages like HTML, CSS and JavaScript. I have also knowledge of front-end frameworks. I create front-end websites that are responsive, optimized, customizable and fast. I also develop the web applications like this.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <span className="text-sm text-center text-gray-500 dark:text-gray-400 mx-4 my-4" style={{ color: darkMode ? "white" : "black" }}>© 2024 <a href="/" className="text-orange-400 hover:underline">OpenWeather™</a>. All Rights Reserved.
        </span>
        <div className='my-3 mx-auto'>
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

    </>
  )
}

export default AboutUs
