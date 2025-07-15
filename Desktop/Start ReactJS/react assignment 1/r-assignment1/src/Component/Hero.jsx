import React from 'react'

function Hero() {
  return (
  <section >
    {/* hero sectio */}
    <div><img  className='w-full absolute z-0 h-[600px] md:h-auto ' src="bg.png" alt="" /></div>
   <div className='z-20 relative px-10 py-10 md:px-20 md:py-30 text-white flex flex-col   '>
     <div className=' w-[300px] md:w-[400px] pt-[50px] md:pt-[100px]'>
        <p className=' text-[Cyan] md:py-2'> AI SDRs (aiDRs)</p>
        <h1 className=' text-2xl md:text-5xl  py-2'><span className='font-bold'>More </span>  <span className='italic'>leads ,</span> <br /> <span className='font-bold'>less </span> <span className='italic'>people.</span></h1>
        <p className='py-2  md:py-5'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
        <button  className="bg-[#0FF1F6] text-black rounded-full px-4 py-1 hover:bg-[#62b5b5] transition-all">Sign Up for the Beta</button>
    
     </div>
   </div>
 


  </section>
  )
}

export default Hero