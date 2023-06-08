/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Marquee from "react-fast-marquee";


const refImg =[
    {
        id:1,
        img:'/images/logos/logo-wagon.png'
    },
    {
        id:2,
        img:'/images/logos/logo-starkom.png'
    },
    {
        id:3,
        img:'/images/logos/logo-radkersburger.png'
    },
    {
        id:4,
        img:'/images/logos/logo-dastaro.png'
    },
    {
        id:5,
        img:'/images/logos/logo-ahk.png'
    },
    {
        id:6,
        img:'/images/logos/logo-zonatezno.png'
    }
]

const Reference = () => {
  return (
    <div className='py-10 mb-5'>
        <h2  className="text-center text-2xl sm:text-4xl font-bold text-gray-700 pb-10 md:pb-20">Reference</h2>
         <Marquee pauseOnHover={false} loop={0} speed={30}>
            {
               refImg.map(data => <img className='sm:mx-20 mx-10' key={data.id} src={data.img} alt={data.id} />) 
            }        
            
        </Marquee>
    </div>
  )
}

export default Reference