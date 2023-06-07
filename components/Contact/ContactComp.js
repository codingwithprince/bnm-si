/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";

const admins = [
  {
    id: 1,
    name: "Gal Černe",
    title: "CTO",
    phone: "00386 (0)59 096 311",
    email: "gal.cerne@bnm.si",
  },
  {
    id: 2,
    name: "Janja Jakopin",
    title: "Sales",
    phone: "00386 (0)59 096 307",
    email: "janja.jakopin@bnm.si",
  },
  {
    id: 3,
    name: "Mirjana Vreča",
    title: "Quality",
    phone: "00386 (0)59 096 312",
    email: "mirjana.vreca@bnm.si",
  },
  {
    id: 4,
    name: "Nina Bogme Šešerko",
    title: "Logistics/Purchase",
    phone: "00386 (0)59 096 304",
    email: "nina.bogme@bnm.si",
  },
];

const ContactComp = () => {
  return (
    <div id="contact">
      <h2
        data-aos="fade-up"
        className="text-center text-2xl sm:text-4xl font-bold text-gray-700 pb-5"
      >
        Contact
      </h2>
      <div className="contact-hero mt-5 grid md:grid-cols-2 justify-around items-center">
        <div className="contact-admins flex flex-col flex-wrap justify-center">
          <div className="ceo flex flex-wrap justify-center gap-2 items-center">
            <img data-aos="fade-up" className="rounde" src="/images/gorazd_brecko.jpg" alt="" />
            <div
              data-aos="fade-up"
              className="ceo-text p-2 sm:text-left text-center"
            >
              <h4 className="text-gray-700 text-2xl font-semibold">
                Gorazd Brečko <span className="text-gray-600">( CEO )</span>
              </h4>
              <br />
              <p>
                <FaPhoneAlt
                  size={20}
                  color="gray"
                  className="inline-block pr-1"
                />{" "}
                00386 (0)59 096 301
              </p>
              <p className="font-semibold hover:underline">
                <MdEmail size={20} color="gray" className="inline-block pr-1" />{" "}
                <a className="text-blue-700" href="mailto:gorazd.brecko@bnm.si">
                  gorazd.brecko@bnm.si
                </a>
              </p>
            </div>
          </div>
          <div className="other-admins mt-10 grid grid-cols-2 px-[7%] justify-items-center sm:grid-cols-3">
            {admins.map((data) => (
              <div data-aos="fade-up" key={data.id} className="m-5 py-5">
                <h4 className="text-gray-700 md:text-lg text-sm font-bold">
                  {data.name}{" "}
                </h4>
                <span className="text-gray-600 text-sm">( {data.title} )</span>
                <p className="mt-2 text-xs md:text-md">
                  <FaPhoneAlt
                    size={17}
                    color="gray"
                    className="inline-block pr-1"
                  />
                  {data.phone}
                </p>
                <p className="font-semibold mt-1 hover:underline flex items-center">
                  <MdEmail
                    size={17}
                    color="gray"
                    className="inline-block pr-1"
                  />{" "}
                  <a className="text-blue-700 text-xs" href={`mailto:${data.email}`}>
                    {data.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2"></div>
        </div>
        <div className="form sm:px-[14%]  py-5">
          <ContactForm />
        </div>
        {/* <div data-aos='fade-up' className="bnm-contact  shadow-lg rounded-md px-5 py-10 object-center flex flex-col items-center justify-center text-center">
                <img className='animate-bounce' src='/images/logos/logo.png' alt='bnm-logo' />
                <p className='mt-7 text-gray-600 font-semibold'>BNM d.o.o., Cesta k Tamu 37 <br />
                    SI-2000 Maribor</p>
                <p className='mt-3 text-gray-600 font-semibold'>Tel: 00386 59 096 300 <br />
                Email : <a href="mailto:info@bnm.si" className="text-blue-700">info@bnm.si</a></p>
                <p className='mt-3 text-gray-600 font-semibold'>VAT ID: SI77641949 <br />
                Registration number: 6004741000</p>
            </div> */}
      </div>
      <hr className="my-5" />
      {/* <div className="form sm:px-[14%] mt-10 py-10">
            <ContactForm />
        </div> */}
    </div>
  );
};

export default ContactComp;
