import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex flex-col justify-center'>
            <p  className='text-gray-800 mb-10 p-2 text-center md:text-lg px-[5%] md:px-0'>Would you like an offer? Are you interested in price? Do you have any comments? <br /> If so, please complete the form and we will respond as soon as possible. You can also call us or send us an e-mail.</p> 

            <form  className='bg-white shadow-lg md:shadow-xl rounded px-8 pt-6 w-full  pb-8 mb-4'>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Full name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your name" />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Email Address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email" />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Company name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Company" />
                </div>
                <div className='mb-4'>
                    <label className="block text-gray-700 text-sm font-bold mb-2" >
                        Your question
                    </label>
                    <textarea className="shadow appearance-none border rounded h-[150px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your question" />
                </div>
                <button className='shadow-lg float-right rounded-md hover:shadow-sky-600/50  md:w-auto text-sm md:text-md bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-[#003399]  text-white px-3 py-2'>
                      
                      Submit
                      
                    </button>
            </form>
        </div>
    )
}

export default ContactForm