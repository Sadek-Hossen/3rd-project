import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function MakeTime() {
  return (

<>

{/* top side */}
<section>
  <div className='lg:flex  md:col-span-2 justify-between items-center lg:gap-10  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>
    {/* right side */}
     <div className='md:w-1/2 lg:px-10 px-4 py-4'>
         <img src="/image/cake1.png" alt="" />
         <button className=' px-4 py-3 bg-[#5F62E2] rounded-2xl  text-white transition-all duration-300 hover:bg-blue-400 mt-4'>Explore All < ArrowForwardIcon />  </button>
    
   </div>
  
    <div className='md:px-10 px-4  '>
        <h1 className=' text-2xl md:text-5xl  py-4 '>Make more time for the work</h1>
    <div className='gap-y-3 grid'>
       <div className='flex  items-center gap-4'> <CheckCircleOutlineIcon className='text-[#2AB691] ' /> <p className='text-[13px] w-full lg:text-[16px]'>Many ways to use illustrations in design</p></div>
       <div className='flex  items-center gap-4'> <CheckCircleOutlineIcon className='text-[#2AB691]' /> <p  className='text-[13px] w-full lg:text-[16px]'>Simply explained with illustrations</p></div>
       <div className='flex  items-center gap-4'> <CheckCircleOutlineIcon className='text-[#2AB691]' /> <p  className='text-[13px] w-full lg:text-[16px]'>Make more time for the work</p></div>

    </div>
    </div>
  </div>
</section>

{/* bottom side */}
<section>
  <div className='lg:flex  md:col-span-2 justify-between items-center lg:gap-10  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>
    {/* right side */}  
    <div className='md:px-10 px-4 '>
        <h1 className=' text-2xl md:text-5xl  py-4 '>Make more time for the work</h1>
    <div className='gap-y-3 grid'>
       <div className='flex  items-center gap-4'> <CheckCircleOutlineIcon className='text-[#2AB691]' /> <p  className='text-[13px] w-full lg:text-[16px]'>Many ways to use illustrations in design</p></div>
       <div className='flex  items-center gap-4'> <CheckCircleOutlineIcon className='text-[#2AB691]' /> <p  className='text-[13px] w-full lg:text-[16px]'>Simply explained with illustrations</p></div>
       <div className='flex  items-center gap-4'> <CheckCircleOutlineIcon className='text-[#2AB691]' /> <p  className='text-[13px] w-full lg:text-[16px]'>Make more time for the work</p></div>

    </div>
    </div>

     <div className='md:w-1/2 lg:px-10 px-4 py-4'>
         <img src="/image/cake 2.png" alt="cake 2" />
         <button className=' px-4 py-3 bg-[#5F62E2] rounded-2xl  text-white transition-all duration-300 hover:bg-blue-400 mt-4'>Explore All < ArrowForwardIcon />  </button>
    
   </div>
   
  </div>
</section>
{/* quckest section */}


<section className='bg-[#5F62E2] w-full h-auto'>

<div className='lg:flex  md:col-span-2 justify-between items-center lg:gap-10   px-[70px] md:px-[150px] '>
   
   {/* left section */}
    <div><h1 className='text-2xl md:text-5xl  py-4  text-white'>The quickest way to create  awesome presentaion</h1>
    <div className='flex gap-6'>
        <button className='bg-green-500 text-white p-2 rounded-2xl hover:bg-green-400 transition-all'>Get started </button>
        <button className='bg-gray-200/50 text-white p-2 rounded-2xl hover:bg-green-400 transition-all'>Get started </button>
     </div>
     </div>

    {/* right section */}

    <div>
    <img src="/image/bomb 1.png" alt="" />    
     </div>

</div>
</section>

</> 

  )
}

export default MakeTime
