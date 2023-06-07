import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return ( 
<> 
    
<div id="footer" className="p-4  md:px-6 md:py-8 bg-gray-900">
    <div className="sm:flex sm:items-center sm:justify-between py-5">
        <a href="#home" className="flex items-center mb-4 sm:mb-0">
            {/* <Image src="/images/logos/logo.png" className="mr-3 w-8" alt="jagger-welding Logo" width={100} height={18} /> */}
            <span className="text-gray-300 text-2xl pl-3">BNM d.o.o</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#about" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#pp" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#licence" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#contact" className="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
   

    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">© 2012 BNM avtomobilska industrija d.o.o. Vse pravice pridržane <br /> Oblikovanje: JK Izvedba: MD Consultico Mitja Divjak s.p.
            </span>
            <a href="https://www.facebook.com/profile.php?id=100008591616145" target="_blank" rel="noreferrer">
             <p className='text-sm pt-10 text-center text-white  hover:text-blue-700'>Made by Prince ❤️</p>
            </a>
</div>

</>
  )
}

export default Footer