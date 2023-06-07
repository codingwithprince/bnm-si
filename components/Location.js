import React from 'react'

const Location = () => {
  return (
    <div id="location" className='services py-[20px] pb-[50px] px-[5%] bg-white'>
        <h3 data-aos="fade-up" className='font-bold text-center text-gray-700 text-2xl md:text-4xl pb-10'>Location</h3>
        <div className="text-center w-full">
        <div className="text-location">
                <p data-aos="fade-up" className='text-2xl text-[#003399] font-bold'>▪ B ▪ N ▪ M ▪ </p>
                <p data-aos="fade-up" className='text-md bg-yellow-200 font-semibold py-1 my-10 text-gray-700 capitalize'>CESTA K TAMU 37<br />
                    2000 Maribor <br />
                    Slovenia</p>
             </div>
             {/* <iframe data-aos="fade-up" className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10980.617712444178!2d15.6619642!3d46.5248459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f775fe7e887e9%3A0xce460bf9306f234!2sB%20n%20m%20%2C%20Avtomobilska%20industrija%2C%20d.o.o.!5e0!3m2!1sen!2ssi!4v1685957989011!5m2!1sen!2ssi"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
             <iframe data-aos="fade-up" className='w-full h-[400px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.1544295708727!2d15.659389275970845!3d46.524845871111154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f775fe7e887e9%3A0xce460bf9306f234!2sB%20n%20m%20%2C%20Avtomobilska%20industrija%2C%20d.o.o.!5e0!3m2!1sen!2ssi!4v1686175556491!5m2!1sen!2ssi"  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Location