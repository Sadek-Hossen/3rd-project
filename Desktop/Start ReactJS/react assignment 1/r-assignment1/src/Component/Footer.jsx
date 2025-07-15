import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';//mui button

function Footer() {
  return (
    <section className='w-full text-white text-center h-[300px] '>
    <div className='w-[80%] flex flex-col justify-center items-center py-6 mx-auto '>
        <h1 className='text-[#0FF1F6] py-5 text-2xl'>GET STARTED</h1>
        <h1 className=' text-4xl py-4'> <span className='italic '>Embrace</span>  <span className='font-bold'>the new era of</span> <span className='italic '> outbound.</span></h1>
        <p className='text-gray-500 md:w-[50%] py-4'>Wizia lets you train, activate, and optimize aiDRs. 
Take your outbound to new levels of performance and efficiency.</p>

         {/* button */}

          <button  className="bg-[#0FF1F6] text-black rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all mt-4">Sign Up for the Beta <ArrowOutwardIcon  /> </button>
              
    </div>

    <hr className='text-gray-600' />

    <div className=''>
        <div className='grid md:grid-cols-2 mx-auto md:justify-between justify-center items-center  md:px-8 py-10 '>
        <div className='flex  justify-center items-center py-4 '> <img className='' src="Logo.png" alt="" /></div> 
        <p className='text-gray-600 w-full'>Copyright © 2023 Wizia. All rights reserved.</p>
        </div>
    </div>


    </section>
  )
}

export default Footer