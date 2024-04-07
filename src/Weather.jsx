import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import icon from '../src/assets/humidity.png'
import uvicon from '../src/assets/uv.png'
import light from '../src/assets/light.png';
import uvindex from '../src/assets/uvindex.png'
import spinner from '../src/assets/spinner.gif'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Weather = (props) => {
    const [data, setData] = useState(null);
    const [cityName, setCityName] = useState('Nawabshah');
    const API = '636907694b514dd3b39104754232612';
    const [loading, setLoading] = useState(false);
    const darkMode = props.darkMode;

    // useMemo to memoize darkMode variable
    const memoizedDarkMode = useMemo(() => darkMode, [darkMode]);

    // setting the city name searched to the city name
    const handleChange = (e) => {
        setCityName(e.target.value);
    }

    // handle Remove button to remove the search text
    const handleRemoveButton = () => {
        setCityName('');
    }

    // click handler for search button and an async function for the getting data
    const handleClick = async () => {
        setLoading(true);
        try {
            await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API}&q=${cityName}&days=10&aqi=yes&alerts=yes`).then((response) => {
                if (!response.status) {
                    throw new Error('No Data Found!');
                }
                else {
                    setData(response.data);
                    setLoading(false);
                    // console.log(response)

                    return response;
                }
            })
        } catch (err) {
            setLoading(false);
            console.error(err);
        }
    }


    // loads first time with the provided cityName
    useEffect(() => {
        handleClick();
        // console.log(memoizedDarkMode);
    }, [memoizedDarkMode]);

    return (
        <>
            <div className='w-11/12 text-white mx-auto my-0 p-2' style={{ color: memoizedDarkMode ? "white" : "black" }}>
                <h1 className='text-center mt-20 mb-4 font-bold text-3xl text-orange-400 sm:text-6xl sm:mb-8 md:text-5xl'>Welcome to OpenWeather</h1>

                <div className='text-center items-center my-2'>

                    <span className='absolute left-14 mt-[10px] text-black sm:mt-8 sm:left-20 sm:me-8 md:mt-[11px] md:left-24 lg:left-28'>
                        <button onClick={handleRemoveButton}><CloseIcon /></button>
                    </span>

                    <input type="text" placeholder='Search City Name ...' onChange={handleChange} className='text-left mx-2 rounded-3xl px-10 py-2 w-11/12 text-black font-semibold text-md focus:outline-none focus:border-orange-400 border-2 focus:caret-orange-400 sm:py-6 sm:text-3xl sm:rounded-full md:py-2 md:text-xl md:font-norma sm:px-12' value={cityName} />

                    <span className='absolute right-12 mt-[10px] text-black mx-2 sm:right-20 sm:mt-8 md:right-24 md:mt-[12px] lg:right-28'><SearchIcon fontSize='medium' /></span>

                    {/* Search button to search the city */}
                    <button onClick={handleClick} title='Click to Search' className='my-4 bg-orange-400 text-white px-7 py-2 rounded-lg font-semibold hover:opacity-75 cursor-pointer text-xl text-center sm:text-4xl sm:px-16 sm:py-5 sm:my-6 md:text-2xl md:py-2 md:px-10' style={{ color: memoizedDarkMode ? "white" : "black" }}>Search</button>

                    {/* Main container for all three components */}
                    <div className='md:flex md:justify-between'>

                        {/* Container for only location and astronomy data */}
                        <div className='flex flex-col md:w-full md:justify-between md:flex md:flex-col md:mx-4'>
                            {/* Location Container */}
                            <div className='w-11/12 mx-auto text-left p-2 text-sm shadow-md shadow-black text-{toggleMode ? "white" : "black" } rounded-md sm:text-2xl sm:p-3 sm:w-full md:6/12 md:text-xl md:mx-2 border'>
                                <p className='text-center font-bold text-2xl text-orange-400 sm:text-5xl sm:mb-2 md:text-4xl'>Location</p>
                                {loading &&
                                    <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                                }
                                {data && (
                                    <>
                                        <p><span className='text-green-400 font-bold'>Name:</span> {data.location.name}</p>
                                        <p><span className='text-green-400 font-bold'>Region:</span> {data.location.region}</p>
                                        <p><span className='text-green-400 font-bold'>Country:</span> {data.location.country}</p>
                                        <p><span className='text-green-400 font-bold'>lat:</span> {data.location.lat}</p>
                                        <p><span className='text-green-400 font-bold'>lon:</span> {data.location.lon}</p>
                                        <p><span className='text-green-400 font-bold'>tz_id:</span> {data.location.tz_id}</p>
                                        <p><span className='text-green-400 font-bold'>local time:</span> {data.location.localtime}</p>
                                    </>
                                )}
                            </div>

                            {/* Astronomy data */}
                            <div className='text-left p-2 w-11/12 mx-auto my-4 text-sm shadow-md text-white shadow-black rounded-md sm:text-2xl sm:w-full md:text-xl border md:mx-2 flex-1' style={{ color: memoizedDarkMode ? "white" : "black" }}>
                                {data && (
                                    <>
                                        <p className='text-center text-orange-400 font-bold text-2xl my-2 sm:text-5xl sm:my-3 md:text-4xl'>Astronomy</p>
                                        <div>
                                            {loading &&
                                                <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                                            }
                                            <p><span className='text-green-400 font-bold'>Sunrise: </span>{data.forecast.forecastday[0]?.astro.sunrise}</p>
                                            <p><span className='text-green-400 font-bold'>Sunset: </span>{data.forecast.forecastday[0]?.astro.sunset}</p>
                                            <p><span className='text-green-400 font-bold'>Moonrise: </span>{data.forecast.forecastday[0].astro.moonrise}</p>
                                            <p><span className='text-green-400 font-bold'>Moonset: </span>{data.forecast.forecastday[0].astro.moonset}</p>
                                            <p><span className='text-green-400 font-bold'>Moon_phase: </span>{data.forecast.forecastday[0].astro.moon_phase}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>


                        {/* Current Weather Container */}
                        <div className='text-left p-2 w-11/12 mx-auto my-4 text-sm shadow-md text-white shadow-black rounded-md sm:text-2xl sm:w-full sm:my-6 md:6/12 md:my-0 md:text-xl md:mx-2 border' style={{ color: memoizedDarkMode ? "white" : "black" }}>
                            <p className='text-center font-bold text-2xl text-orange-400 sm:text-5xl sm:my-3 md:text-4xl'>Current Weather</p>
                            {loading &&
                                <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12 sm:w-3/122/' />
                            }
                            {data && (
                                <>
                                    {/* This will show the current weather icon of the searched city */}
                                    <img src={data.current.condition.icon} alt="This is an image" className='mx-auto w-4/6 md:w-3/6 md:my-1' />
                                    <p className='text-3xl text-center mb-2 font-bold sm:text-5xl sm:my-2 md:text-4xl md:my-1' style={{ color: memoizedDarkMode ? "white" : "black" }} >{data.current.temp_c}<span> &#8451;</span></p>
                                    <p className='text-center text-yellow-400 font-semibold mb-2 text-xl sm:text-4xl md:text-3xl'>{data.current.condition.text}</p>
                                    <p><span className='text-green-400 font-bold'>Temperature:</span> {data.current.temp_f} <span>&#8457;</span></p>
                                    <p><span className='text-green-400 font-bold'>Pressure:</span> {data.current.pressure_mb} mb</p>
                                    <p><span className='text-green-400 font-bold'>Cloud:</span> {data.current.cloud}</p>
                                    <p><span className='text-green-400 font-bold'>Feels Like:</span> {data.current.feelslike_c}&deg;</p>
                                    <p><span className='text-green-400 font-bold'>Wind Direction:</span> {data.current.wind_dir}</p>
                                </>
                            )}
                        </div>

                    </div>

                    <div className='md:flex justify-center md:my-3'>
                        <div className='flex justify-center sm:justify-between sm:my-6 md:justify-around md:mx-6 md:w-6/12'>

                            {data && (
                                <>
                                    {/* Precipitation container */}
                                    <div className='w-6/12 shadow-md shadow-black text-sm mx-2 p-2 text-center rounded-md sm:w-5/12 sm:mx-0 md:w-6/12 border'>

                                        <p className='text-center md:mt-3'>
                                            <i className="fa-solid fa-cloud-rain mx-3"></i>
                                            <span className='sm:text-2xl'>Precipitation</span>
                                        </p>
                                        {loading &&
                                            <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                                        }
                                        <p className='my-4 text-3xl font-bold sm:text-5xl md:mt-6'>{data.current.precip_mm}</p>
                                    </div>

                                    {/* Wind container */}
                                    <div className='w-6/12 shadow-md shadow-black text-sm mx-2 px-5 text-center rounded-md sm:w-5/12 sm:mx-0 md:w-6/12 border md:ms-4'>
                                        <p className='text-center md:mt-4 my-2'>
                                            <i className="fa-solid fa-wind mx-3 my-1"></i>
                                            <span className='my-2 sm:text-2xl'>Wind</span>
                                        </p>
                                        {loading &&
                                            <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                                        }
                                        <p className='text-xl font-semibold mt-5 sm:text-4xl sm:mt-6 md:mt-8'>{data.current.wind_kph} km/h</p>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className='flex justify-center my-2 sm:my-6 sm:justify-between md:justify-between md:w-6/12'>
                            {data && (
                                <>
                                    {/* humidity container */}
                                    <div className='w-6/12 shadow-md shadow-black text-sm mx-2 p-3 text-center rounded-md sm:mx-0 sm:w-6/12 border md:me-3'>
                                        <p className='md:my-2'>
                                            <img src={memoizedDarkMode ? icon : light} alt="image" className='mx-auto items-center text-center my-2' width={20} />
                                            <span className='sm:text-2xl'>Humidity</span>
                                        </p>
                                        {loading &&
                                            <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                                        }
                                        <p className='my-2 font-bold text-2xl sm:text-4xl md:mt-1'>{data.current.humidity} %</p>
                                    </div>

                                    {/* UV Index container */}
                                    <div className='w-6/12 shadow-md shadow-black text-sm mx-2 p-3 text-center rounded-md sm:mx-0 sm:w-6/12 border md:mx-2'>
                                        <p>
                                            <img src={memoizedDarkMode ? uvicon : uvindex} alt="image" className='mx-auto items-center text-center my-2' width={21} />
                                            <span className='sm:text-2xl'>UV Index</span>
                                        </p>
                                        {loading &&
                                            <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                                        }
                                        <p className='my-2 font-bold text-2xl sm:text-4xl'>{data.current.uv}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Next 72 Hours weather data */}
            <div className='text-white my-3 w-10/12 mx-auto py-3 text-center sm:w-11/12 sm:text-3xl sm:my-4 sm:shadow-none md:flex md:flex-row md:justify-center md:text-xl' style={{ color: memoizedDarkMode ? "white" : "black" }}>
                <p className='font-semibold text-xl sm:text-4xl md:text-2xl md:mx-4 md:my-14'><span><i className="fa-regular fa-clock mx-3"></i></span>Next 72 Hours</p>
                <div className='shadow-md shadow-black w-10/12 mx-auto p-2 text-center my-2 sm:w-full sm:my-4 md:w-8/12 md:mx-4 border rounded-md'>
                    {data && (
                        <>
                            {loading &&
                                <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                            }
                            <p className='text-orange-400 my-1 font-semibold'>{data.forecast.forecastday[0].date}</p>
                            <p>Max Temp: {data.forecast.forecastday[0].day.maxtemp_c}&deg; / {data.forecast.forecastday[0].day.maxtemp_f}&deg;</p>
                            <p>Min Temp: {data.forecast.forecastday[0].day.mintemp_c}&deg; / {data.forecast.forecastday[0].day.mintemp_f}&deg;</p>
                            <img src={data.forecast.forecastday[0].day.condition.icon} alt="Image" className='mx-auto' />
                            <p className='text-green-400'>{data.forecast.forecastday[0].day.condition.text}</p>
                        </>)}
                </div>

                <div className='shadow-md shadow-black w-10/12 mx-auto p-2 text-center my-2 sm:w-full sm:my-4 md:w-8/12 md:mx-4 border rounded-md'>
                    {data && (
                        <>
                            {loading &&
                                <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                            }
                            <p className='text-orange-400 my-1 font-semibold'>{data.forecast.forecastday[1].date}</p>
                            <p>Max Temp: {data.forecast.forecastday[1].day.maxtemp_c}&deg; / {data.forecast.forecastday[1].day.maxtemp_f}&deg;</p>
                            <p>Min Temp: {data.forecast.forecastday[1].day.mintemp_c}&deg; / {data.forecast.forecastday[1].day.mintemp_f}&deg;</p>
                            <img src={data.forecast.forecastday[1].day.condition.icon} alt="Image" className='mx-auto' />
                            <p className='text-green-400'>{data.forecast.forecastday[1].day.condition.text}</p>
                        </>)}
                </div>

                <div className='shadow-md shadow-black w-10/12 mx-auto p-2 text-center my-2 sm:w-full sm:my-4 md:w-8/12 md:mx-4 border rounded-md'>
                    {data && (
                        <>
                            {loading &&
                                <img src={spinner} alt='Loading...' className='p-2 mx-auto w-4/12' />
                            }
                            <p className='text-orange-400 my-1 font-semibold'>{data.forecast.forecastday[2].date}</p>
                            <p>Max Temp: {data.forecast.forecastday[2].day.maxtemp_c}&deg; / {data.forecast.forecastday[2].day.maxtemp_f}&deg;</p>
                            <p>Min Temp: {data.forecast.forecastday[2].day.mintemp_c}&deg; / {data.forecast.forecastday[2].day.mintemp_f}&deg;</p>
                            <img src={data.forecast.forecastday[2].day.condition.icon} alt="Image" className='mx-auto' />
                            <p className='text-green-400'>{data.forecast.forecastday[2].day.condition.text}</p>
                        </>)}
                </div>

            </div>

            <div className="flex flex-col justify-center">
                <span className="text-sm text-gray-500 dark:text-gray-400 mx-4 text-center my-4" style={{ color: memoizedDarkMode ? "white" : "black" }}>© 2024 <a href="/" className="text-orange-400 hover:underline">OpenWeather™</a>. All Rights Reserved.
                </span>
                <div className='justify-center my-3 mx-auto'>
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

export default React.memo(Weather);
