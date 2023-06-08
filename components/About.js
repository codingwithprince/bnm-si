/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const About = () => {
  const images = [
    {
      id: 1,
      src: "/images/carousel/image1.jpeg",
    },
    {
      id: 2,
      src: "/images/carousel/image2.webp",
    },
    {
      id: 3,
      src: "/images/carousel/image3.webp",
    },
    {
      id: 4,
      src: "/images/carousel/image4.jpeg",
    },
    {
      id: 5,
      src: "/images/carousel/image5.webp",
    },
  ];

  const weldingTypes = [
    "complex production of cabins for trucks",
    "elements with sheet metal transformation and assembly for other customers",
    "components for the metal industry.",
  ];
  return (
    <div id="about" className="about py-[20px] px-[5%]">
      <h3
        // data-aos="fade-upz"
        className="font-bold text-center text-gray-700 text-2xl md:text-4xl my-3 md:my-10"
      >
        About BNM d.o.o.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-between items-center py-5">
        <div
          data-aos="fade-up"
          className="about-text text-gray-600 text-md md:text-lg mb-5 md:mr-10"
        >
          <p className="text-justify leading-6">
            {" "}
            Our company{" "}
            <span className="bg-yellow-300 text-black font-semibold px-1">
              B N M d.o.o.
            </span>{" "}
            is a manufacturing company in the field of metal processing industry
            and has a significant influence on the Podravska region. The company
            was founded in July 2011 with the aim of establishing the production
            of cabins for the UNIMOG commercial vehicle and is classified as a
            medium-sized company. The business and production zone Tezno,
            Maribor, where our company operates, has more than 60 years of
            tradition in the transformation of metal materials.
          </p>
          <h3 className="font-semibold bg-yellow-300 text-black mt-10 pl-2">
            We carry out the following processes
          </h3>
          <ul className="list-disc list-inside mt-5 text-md pl-1">
            {weldingTypes.map((i) => {
              return <li key={i}>{i}</li>;
            })}
          </ul>
        </div>
        <div data-aos="fade-up" className="about-img">
          <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {images.map((item) => {
              return (
                <div key={item.id}>
                  <Image
                    className="object-cover"
                    src={item.src}
                    height={610}
                    width={900}
                    alt=""
                  />
                  {/* <img className='shadow-full' src={item.src} alt='jagger-welding-man-welding'/> */}
                  {/* <p className="legend bg-pink-500">Jagger d.o.o</p> */}
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="about-text text-gray-600 text-md md:text-lg mb-5 "
      >
        <p className="text-justify leading-6">
          Until {" "}
          <span className="bg-yellow-300 text-black font-semibold px-1">
            1996,
          </span>{" "}
          AM trucks and buses were produced at this location in all stages up to
          the final product. Individual segments of the production phases
          continued even later in the newly established companies. We have
          transferred knowledge, positive experience and long-standing tradition
          to our company, and upgraded it with modern management and business
          methods, as we are convinced that the latter is extremely important
          for success.
        </p>
        <h3 className="font-semibold text-center bg-yellow-300 text-black mt-10 pl-2">
          How we complete the process?
        </h3>
        <p className="text-justify leading-6  mt-10">
          The material is cut to a suitable size for further transformation with
          transformation tools on presses with a compression power of 100 to
          1,600 tons. Pressed elements are trimmed to the correct shape with
          tools and with the help of 3D laser cutting. The finally formed and
          trimmed elements are assembled into components in clamping
          preparations and combined with spot welding and MAG welding processes
          into complex products such as cabins and other products. Welding
          procedures are performed manually and mechanically with welding
          machines and welding robots. Products are sent to customers in
          suitable packaging.
        </p>
      </div>
    </div>
  );
};

export default About;
