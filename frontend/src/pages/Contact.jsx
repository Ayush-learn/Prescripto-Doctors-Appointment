import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      {/* HEADER */}
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      {/* MAIN SECTION */}
      <div className='my-10 flex flex-col md:flex-row items-center gap-12 mb-28 text-sm'>

        {/* IMAGE */}
        <img className='w-full md:max-w-[400px]' src={assets.contact_image} alt="" />

        {/* RIGHT CONTENT */}
        <div className='flex flex-col justify-center gap-6 md:w-1/2'>

          <div>
            <p className='font-semibold text-lg text-gray-700'>OUR OFFICE</p>
            <p className='text-gray-500 mt-2'>
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p className='text-gray-500 mt-2'>
              Tel: (415) 555-0132 <br />
              Email: greatstackdev@gmail.com
            </p>
          </div>

          <div>
            <p className='font-semibold text-lg text-gray-700'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500 '>
              Learn more about our teams and job openings.
            </p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white  transition-all duration-500'>
              Explore Jobs
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contact