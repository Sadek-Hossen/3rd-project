import React from 'react'

function Hiro() {
  return (
   <>
    <section className=' flex md:col-span-2 flex-col-reverse md:flex-col  justify-between items-center  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>

     <div className='px-2 pt-2 flex-1 '>
        <h1 className='font-bold md:text-5xl text-3xl text-black pb-2 items-start'>Simply explained with illustrations</h1>
        <p className='text-sm  pt-4 md:w-[300px]  text-gray-400'>There are a lot of different components that will help you create the perfect look for your project</p>

        <div className=' flex  gap-[20px] mt-5'>
            <button className=' px-2 py-2 lg:px-4 lg:py-3 bg-[#5F62E2] rounded-2xl  text-white transition-all duration-300 hover:bg-blue-400'>Get Started</button>
            <button className='px-2 py-2 lg:px-4 lg:py-3 bg-[#5F62E226] rounded-2xl  text-[#5F62E2] transition-all duration-300 hover:bg-blue-400  '>Learn More</button>
        </div>
     
     </div>

    
     <div className='px-2 pt-2 flex justify-center items-center '>
     <img className='w-full max-w-lg' src="image/Component 1 (1).png" alt="" />
     </div>


    </section>
   </>
  )
}

export default Hiro
