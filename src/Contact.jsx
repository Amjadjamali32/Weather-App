import React from 'react'
import { useState } from 'react';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';


const Contact = (props) => {
    const data = { name: "", mobile: "", email: "", desc: "" };
    const [inputData, setInputData] = useState(data);
    const darkMode = props.darkMode;

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
        // console.log(inputData);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // checking all the fields are filled properly
        if ((inputData.name.trim() === "") || (inputData.mobile.trim() === "") || (inputData.email.trim() === "") || (inputData.desc.trim() === "")) {
            alert("Please fill in the name field.");
            return;
        }

        // checking minimum the length of name field
        if (inputData.name.length < 5) {
            alert("Too short length");
            return;
        }

        // checking the maximum length of name field
        if (inputData.name.length > 15) {
            alert("Too long length");
            return;
        }

        console.log("form is submitted", inputData);

    }

    return (
        <>
            <div>
                <div className='text-white mt-[4rem] mx-4 md:p-4 text-center p-3 rounded-sm' style={{ color: darkMode ? "white" : "black" }}>
                    <h2 className='font-bold text-4xl my-2 text-green-500 md:text-4xl md:font-semibold'>Contact Us</h2>
                    <p className='mx-4 md:text-xl'>Get in touch if you have any questions or want to get some knowledge about the app</p>
                </div>
            </div>

            <div className='text-white shadow-md shadow-black my-6 text-center w-11/12 mx-auto bg-transparent sm:my-8 md:w-8/12 border-4 border-orange-400 rounded-md p-4'>

                <form action="/" method='post' name='contact' data-netlify="true" onSubmit={handleSubmit} >
                    <div className='w-11/12 mx-auto p-2'>
                        <h2 className='font-semibold text-3xl py-2 text-white' style={{ color: darkMode ? "white" : "orange" }}>Ask a Question</h2>
                        <div className='flex flex-col mx-auto md:flex-row justify-center md:my-2'>
                            <input type="hidden" name="contact" value="contact" />
                            <div className='my-2 sm:my-4 md:w-11/12'>
                                <input type="text" placeholder='Your Name' className='focus: shadow-md focus:shadow-black focus:outline-none rounded-sm p-2 text-gray-500 caret-orange-400 sm:w-10/12 md:w-70 md:text-md border-2 border-slate-400 md:rounded-md' autoComplete='off' name='name' value={inputData.name} onChange={handleChange} />
                            </div>
                            <div className='mt-2 sm:my-4 md:w-11/12'>
                                <input type="text" placeholder='Your mobile Number' className='focus: shadow-md focus:shadow-black focus:outline-none rounded-sm p-2 text-gray-500 caret-orange-400 sm:w-10/12 md:w-70 md:text-md border-2 border-slate-400 md:rounded-md' autoComplete='off' name='mobile' value={inputData.mobile} onChange={handleChange} />
                            </div>
                        </div>

                        <div className='my-4 sm:my-4 md:w-11/12 md:mx-auto flex justify-center md:mb-7'>
                            <input type="email" placeholder='Email' className='focus:shadow-md focus:shadow-black focus:outline-none rounded-sm p-2 text-gray-500 caret-orange-400 sm:w-10/12 md:text-md border-2 border-slate-400 md:rounded-md md:w-full md:mx-0' autoComplete='off' name='email' value={inputData.email} onChange={handleChange} />
                        </div>

                        <div className='my-4 sm:my-8 md:my-6'>
                            <textarea name="desc" id="message" cols="25" rows="4" placeholder='Enter your message' className='focus: shadow-md focus:shadow-black focus:outline-none rounded-sm p-2 text-gray-500 caret-orange-400 sm:w-10/12 md:w-11/12 md:text-md border-2 border-slate-400 md:rounded-md' value={inputData.desc} onChange={handleChange}></textarea>
                        </div>

                        <div className="mb-3 mx-4 my-4">
                            <div className="input-group" data-netlify-recaptcha="true">
                            </div>
                        </div>

                        <div className='my-2 sm:my-4 md:my-6'>
                            <input type="submit" value='Submit' className='font-bold w-36 bg-orange-400 text-white px-4 py-2 rounded-md hover:cursor-pointer sm:w-80 md:w-11/12 md:text-2xl hover:opacity-70' style={{ color: darkMode ? "white" : "black" }} />
                        </div>
                    </div>
                </form>
            </div>
            <div className='text-white text-center my-4' style={{ color: darkMode ? "white" : "black" }}>
                <p className='my-3'><span className='mx-2'><EmailIcon className='text-yellow-500' /></span>amjadalijamali41@gamil.com</p>
                <p className='my-3'><span className='mx-2'><FmdGoodIcon className='text-red-600' /></span>Nawabshah, Sindh, Pakistan.</p>
                <p className='my-3'><span className='mx-2'><WhatsAppIcon className='text-green-500' /></span>+923262600358</p>
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

export default Contact
