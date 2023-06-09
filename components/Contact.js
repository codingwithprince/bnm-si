import React from 'react'
import { IoLocationSharp, IoCall, IoMailSharp, IoGlobeSharp } from 'react-icons/io5'
const Contact = () => {
  return (

    <div data-aos='up' id="contact" className='services pt-[20px] pb-[50px] px-[5%] white bg-slate-100'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-5'>Contact</h3>
        <div className="contact-section grid grid-cols-1 lg:grid-cols-2 justify-items-center">
            <div data-aos='fade-up' className="contact-form bg-white mb-5 w-full px-5 md:w-[50%] lg:w-[60%] py-5  rounded-lg shadow-md">
                <form>
                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Name
                            </label>
                            <input className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight " id="name" type="text" placeholder="full name" />
                    </div>

                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Email
                            </label>
                            <input className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="email" placeholder="email" />
                    </div>
                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Company
                            </label>
                            <input className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" placeholder="company" />
                    </div>

                    <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username" >
                                Message
                            </label>
                            <textarea rows={5} className="focus:outline-sky-500 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" id="email" type="text" placeholder="message" />
                    </div>
                    <br />
                    <button type="submit" className='float-right shadow-lg rounded-md hover:shadow-sky-600/50  md:w-auto bg-gradient-to-b hover:bg-gradient-to-t from-sky-500 to-sky-700 text-white px-3 py-2'>
                        Submit
                    </button>
                </form>
            </div>
            <div data-aos='fade-up' className="contact-info mt-5 ">
                <p className='text-2xl font-semibold text-gray-600 flex items-center gap-2'> <IoLocationSharp />BNM d.o.o.</p>
                <p className='text-gray-500 mt-2'>Cesta k Tamu 37 </p>
                <p className='text-gray-500'>2000 Maribor</p>
                <p className='text-gray-500'>Slovenia</p>
                <br />
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoCall />  00386 59 096 300</p>
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoMailSharp /> info@bnm.si</p>
                <p className='gap-2 flex items-center text-gray-500 hover:underline hover:text-sky-600 mt-1'><IoGlobeSharp /> www.bnm.si</p>
            </div>
        </div>
    </div>
  )
}

export default Contact