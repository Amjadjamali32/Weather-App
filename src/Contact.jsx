import React, { useState } from 'react';
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputData.name.trim() === "" || inputData.mobile.trim() === "" || inputData.email.trim() === "" || inputData.desc.trim() === "") {
            alert("Please fill in all the fields.");
            return;
        }
        console.log("Form submitted", inputData);
    };

    return (
        <>
            <div className='text-white mt-[4rem] mx-4 md:p-4 text-center p-3 rounded-sm' style={{ color: darkMode ? "white" : "black" }}>
                <h2 className='font-bold text-4xl my-2 text-green-500 md:text-4xl md:font-semibold'>Contact Us</h2>
                <p className='mx-4 md:text-xl'>Get in touch if you have any questions or want to learn more about the app</p>
            </div>

            <div className='text-white shadow-md shadow-black my-6 text-center w-11/12 mx-auto bg-transparent sm:my-8 md:w-8/12 border-4 border-orange-400 rounded-md p-4'>
                <form 
                    action="/" 
                    method="POST" 
                    name="contact" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field" 
                    onSubmit={handleSubmit}
                >
                    {/* Honeypot field */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                        <label>Don’t fill this out: <input name="bot-field" /></label>
                    </p>

                    <div className='w-full mx-auto p-2'>
                        <h2 className='font-semibold text-3xl py-2' style={{ color: darkMode ? "white" : "orange" }}>Ask a Question</h2>

                        {/* Input fields */}
                        <div className='flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0'>
                            <div className='w-full md:w-1/2'>
                                <input 
                                    type="text" 
                                    placeholder='Your Name' 
                                    className='w-full focus:shadow-md rounded-sm p-2 text-gray-500 caret-orange-400 border-2 border-slate-400' 
                                    autoComplete='off' 
                                    name='name' 
                                    value={inputData.name} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                            <div className='w-full md:w-1/2'>
                                <input 
                                    type="text" 
                                    placeholder='Your Mobile Number' 
                                    className='w-full focus:shadow-md rounded-sm p-2 text-gray-500 caret-orange-400 border-2 border-slate-400' 
                                    autoComplete='off' 
                                    name='mobile' 
                                    value={inputData.mobile} 
                                    onChange={handleChange} 
                                    required 
                                />
                            </div>
                        </div>

                        <div className='w-full my-4'>
                            <input 
                                type="email" 
                                placeholder='Email' 
                                className='w-full focus:shadow-md rounded-sm p-2 text-gray-500 caret-orange-400 border-2 border-slate-400' 
                                autoComplete='off' 
                                name='email' 
                                value={inputData.email} 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        <div className='w-full my-4'>
                            <textarea 
                                name="desc" 
                                cols="30" 
                                rows="5" 
                                placeholder='Enter your message' 
                                className='w-full focus:shadow-md rounded-sm p-2 text-gray-500 caret-orange-400 border-2 border-slate-400' 
                                value={inputData.desc} 
                                onChange={handleChange} 
                                required>
                            </textarea>
                        </div>

                        {/* Netlify reCAPTCHA */}
                        <div className="mb-3">
                            <div className="input-group" data-netlify-recaptcha="true"></div>
                        </div>

                        <div className='my-2'>
                            <input type="submit" value='Submit' className='font-bold w-full md:w-36 bg-orange-400 text-white px-4 py-2 rounded-md hover:opacity-70' />
                        </div>
                    </div>
                </form>
            </div>

            {/* Contact Details Section */}
            <div className='text-center my-4' style={{ color: darkMode ? "white" : "black" }}>
                <p className='my-3'><span className='mx-2'><EmailIcon className='text-yellow-500' /></span>amjadalijamali41@gmail.com</p>
                <p className='my-3'><span className='mx-2'><FmdGoodIcon className='text-red-600' /></span>Nawabshah, Sindh, Pakistan.</p>
                <p className='my-3'><span className='mx-2'><WhatsAppIcon className='text-green-500' /></span>+923262600358</p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center">
                <a href="https://www.facebook.com/" className="mx-3"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/amjad-ali-271430253" className="mx-3"><LinkedInIcon /></a>
                <a href="https://www.instagram.com/" className="mx-3"><InstagramIcon /></a>
                <a href="https://github.com/Amjadjamali32/Simple-Calculator.git" className="mx-3"><GitHubIcon /></a>
                <a href="https://telegram.com" className="mx-3"><TelegramIcon /></a>
            </div>
        </>
    );
};

export default Contact;
