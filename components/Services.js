/* eslint-disable @next/next/no-img-element */
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { MdLibraryBooks, MdPerson } from 'react-icons/md'
import { FaCheck, FaShoppingCart, FaHistory, FaLeaf } from 'react-icons/fa'
import { BsGraphUp,  } from 'react-icons/bs'
import {  RiTeamFill } from 'react-icons/ri'



const Services = () => {
    const services = [
        {
            id:1,
            title: '111 REO (manual electric-arc welding)'
        },
        {
            id:2,
            title: '131 MIG (Aluminium welding process)'
        },
        {
            id:3,
            title: '135 MAG (solid wire welding process)'
        },
        {
            id:4,
            title: '136 MAG (solid wire welding process)'
        },
        {
            id:5,
            title: '138 MAG (solid wire welding process)'
        },
        {
            id:6,
            title: '141 WIG (TIG) (inox welding)'
        },
        {
            id:7,
            title: '141 WIG (TIG) (carbon welding)'
        },
        {
            id:8,
            title: '141 WIG (TIG) (aluminium welding)'
        },
        {
            id: 9,
            title: '141/111 WIG (TIG) / REO'
        }
        

    ]

    const images =[
          {
            id: 1,
            src: '/images/services/s-1.jpg'
          }
    ]

    const serviceList = [
        {
            id:1,
            title: 'Mission',
            desc: 'We specialize in sheet metal transformation and appropriate further processing. With high quality products and services at competitive prices, we cooperate with customers.',
            icon: <MdLibraryBooks />
        },
        {
            id:2,
            title: 'Objective',
            desc: 'Our objective is to become a recognized partner in the field of sheet metal transformation and additional processing for the automotive industry and other industries.',
            icon: <BsGraphUp />
        },
        {
            id:3,
            title: 'Quality',
            desc: 'The measure of our quality policy is the "0-defect" strategy from the automotive industry, which we support with quality management certificates.',
            icon: <FaCheck />
        },
        {
            id:4,
            title: 'Customers',
            desc: 'BNM transforms sheet metal into products for the automotive industry. Machine capacities and knowledge enable us to cooperate with other industries that need such products or services.',
            icon: <FaShoppingCart />
        },
        {
            id:5,
            title: 'Management',
            desc: 'The way of management in the company is shaped by openness, respect and reliability towards our colleagues and business partners.',
            icon: <MdPerson />
        },
        {
            id:6,
            title: 'Team',
            desc: 'Our colleagues are professionally trained and are an extremely important part of the company. Here we support entrepreneurial thinking and cooperation, and above all, we appreciate a job well done.',
            icon: <RiTeamFill />
        },
        {
            id:7,
            title: 'History',
            desc: 'Our company is located in the Production and Business Zone Maribor - Tezno. TAM trucks and buses were produced here until 1996. We took knowledge and experience into the company and connected them with modern methods.',
            icon: <FaHistory />
        },
        {
            id:5,
            title: 'Environment',
            desc: 'We are aware of our responsibility towards the environment, so we treat our resources responsibly. In the company, we are committed to ensuring that each employee contributes his or her share to protecting the environment.',
            icon: <FaLeaf />
        },
    ]
  return (
    <div id="services" className='services py-[20px] pb-[50px] px-[2%] bg-slate-100'>
         {/* <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Services</h3> */}
         <div className="service-cards flex flex-wrap justify-center pt-10">
            {
                serviceList.map(item => {
                    return (
                        <div key={item.id} data-aos="fade-up" className="s-card  text-gray-700 hover:text-[#003399] w-[300px] bg-white  flex flex-col items-center shadow-xl  px-5 rounded m-3 hover:shadow-2xl ease-in-out duration-300 p-5">
                            <div className="card-header ease-in-out duration-300 flex flex-col items-center justify-center h-[150px] w-[150px] rounded-full text-6xl">
                               {item.icon}
                            </div>
                            <div className="s-card-title mb-2">
                                <h3 className='font-bold text-2xl md:text-2xl  text-center'>
                                    {item.title}
                                </h3>  
                            </div>
                            <div className="s-card-desc">
                                <p className='py-5 text-gray-600 text-center px-2'>
                                        {
                                            item.desc
                                        }
                                </p>
                            </div>
                        </div>
                    )
                })
            }
            
         </div>
         {/* <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
            <div className="gif-welding mx-5 mb-3">
                <Carousel autoPlay={true} showIndicators={false} showStatus={false} infiniteLoop={true} showThumbs={false}>
                    {
                    images.map(item => {
                        return(
                        <div key={item.id}>
                        <img className='shadow-full w-[320px] rounded-lg' src={item.src} alt='jagger-welding-man-welding'/>
                          
                        </div>
                        )
                    })
                    }
                </Carousel>
            </div>
            <div className="services-text mx-auto">
                <h5 className='text-gray-800 font-bold text-lg'>We carry out the following welding processes</h5>
                <ul className='list-disc pl-5 mt-2 text-left py-3'>
                    {
                        services.map(item => {
                            return (
                                <li key={item.id} className='text-green-600 text-lg pt-1'>
                                    <div className='text-gray-700'>
                                        {
                                            item.title
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

         </div> */}
    </div>
  )
}

export default Services