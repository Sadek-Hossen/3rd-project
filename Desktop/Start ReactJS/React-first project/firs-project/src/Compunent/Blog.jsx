import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { idID } from '@mui/material/locale';



function Blog() {

   const myInfo = [
    {
        id:1,
        img:"/image/drump2.png",
        heading:"Make myspace your best designed space",
        pera:"A lot of different components that will help you create the perfect look for your project",
        btn:"Design"
    },
    {
        id:2,
        img:"/image/drump2.png",
        heading:"My company culture has changed today",
        pera:"A lot of different components that will help you create the perfect look for your project",
        btn:"3D illustrations"
    },
    {
        id:3,
        img:"/image/drump3.png",
        heading:"Professionals in craft! All products were super great",
        pera:"A lot of different components that will help you create the perfect look for your project",
        btn:"Development "
    },


   ]

  return (

    <>
    
    <section className='w-full'>
        <div className=' md:flex md:col-span-2  justify-between items-center  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>
          <div>
        <h1 className='font-medium lg:text-4xl text-2xl w-[90%] lg:w-[80%]'>Get more from our blog</h1>
        <div className='lg:flex justify-between items-center gap-10 pt-6  '>
           <p className='lg:w-1/2 text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
            <button className=' px-4 py-3 bg-[#5F62E2] rounded-2xl  text-white transition-all duration-300 hover:bg-blue-400 mt-4'>Explore All < ArrowForwardIcon />  </button>
         </div>
     </div>
</div>
 

  <div className='lg:flex  justify-around items-center w-[80%] mx-auto gap-10 '>
  
  {myInfo.map((event)=>(
    <div className='bg-gray-200 p-2 rounded-2xl hover:translate-x-3 transition-all hover:bg-gray-300 duration-300 mt-4 lg:mt-0' key={event.id}>
        <img className='w-30 mx-auto ' src={event.img} alt="" />
        <h1 className='md:text-2xl  text-xl py-4'>{event.heading}</h1>
        <p className='lg:text-[16px] text-[10px] py-5 text-gray-400'>{event.pera}</p>
        <button className='bg-gray-400/50 text-green-500 p-2 rounded-2xl hover:bg-green-400 transition-all'>{event.btn}</button>

    </div>
))}

  </div>
  
    </section>

  

    </>
    
    
    
  )
}

export default Blog
