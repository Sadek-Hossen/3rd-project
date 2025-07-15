import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Presentation() {


    const presentLogo=[
        {img : "image/l1.png",
         headeing:"Managment",
         pra :"Software platform for running your new internet business"
        },
        {img : "/image/l2.png",
         headeing:"Entertainment",
         pra :"Software platform for running your new internet business"
        },
        {img : "/image/l3.png",
         headeing:"Marketing",
         pra :"Software platform for running your new internet business"
        },
        {img : "/image/l4.png",
         headeing:"References",
         pra :"Software platform for running your new internet business"
        }

    ]
  return (
   <>
   
   <section className='bg-[#F9F9F9] '>

    <div className='md:flex md:col-span-2  justify-between items-center  py-[30px] md:py-[90px] px-[30px] md:px-[150px]'>


        <div className='grid grid-cols-2 gap-4 lg:gap-5 px-1 lg:px-3 lg:w-1/2'> 
          
        
            {presentLogo.map((even,index)=>(
                <div  className='flex flex-col p-2 lg:p-4 justify-center items-center bg-[#FFFFFF] rounded-2xl  transition-all hover:bg-gray-200' key={even.index}>
               <div >  <img src={even.img} className='bg-[#E2E2E2] rounded-full p-3 w-[70px] hover:bg-gray-400 transition-all ' alt="" /></div>
              <div className='mt-2 mb-2'><h1 className='lg:text-[19px] text-[13px] font-semibold'>{even.headeing}</h1></div>
            <div>  <p className='text-gray-500 text-[8px] lg:text-[14px]'>{even.pra}</p></div>
              </div>
            ))}
        

        </div>
        <div className='flex flex-col justify-center  lg:w-1/2 px-10'> <h1 className='font-semibold text-[20px] lg:text-[40px] pt-3 lg:pt-0 w-[80%]'>The quickest way to create modern presentation</h1> 
            <p className='text-gray-500 text-[10px] lg:text-[14px] pt-3.5'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
            <button className=' px-4 py-3 bg-[#5F62E2] rounded-2xl  text-white transition-all duration-300 hover:bg-blue-400 mt-4'>Explore All < ArrowForwardIcon />  </button>
        
        
        </div>
    </div>

   </section>
   
   
   
   </>

  )
}

export default Presentation
