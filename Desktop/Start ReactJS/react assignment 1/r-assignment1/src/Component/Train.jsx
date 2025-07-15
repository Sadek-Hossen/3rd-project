import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

function Train() {
  return (
    <section className='bg-[]'>
        <div className='bg-[url(bg2.png)] w-[100%] mx-auto py-30 px-8 md:px-20'>
         <div  className='mx-auto md:w-[50%] text-white'>
            <h1 className='text-2xl md:text-4xl py-2 font-semibold'>Train your aiDR on your...</h1>
            <h2 className= 'text-xl md:text-3xl italic text-[#0FF1F6] py-2 '>prefered email st|</h2>
            <p className='text-gray-400 text-[14px] w-[50%] py-3 pb-10'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
            <div className=' text-[#14BCB2] grid  md:gap-y-5'>
            
              <div className='md:flex md:items-center   gap-4 text-[14px]  md:text-[16px]'>
                    <div className='flex gap-2 py-1 md:justify-center  md:items-center '> <CheckIcon className='border  rounded-full' /> <p>Quick to ramp</p></div>
                <div className='flex gap-2 py-1  md:justify-center md:items-center '> <CheckIcon className='border  rounded-full' /> <p>Easy to optimize</p></div>
              </div>
               
               <div className='md:flex items-center gap-4  text-[14px]  md:text-[16px]'>
                <div className='flex gap-2 py-1 md:justify-center md:items-center '> <CheckIcon className='border  rounded-full'/> <p>Quick to scale up</p></div>
                <div className='flex gap-2 py-1 md:justify-center md:items-center '> <CheckIcon className='border  rounded-full' /> <p>Works with all your existing tools</p></div>
               </div>
                
            </div>
         </div>


    </div>
    </section>

  )
}

export default Train