import React from 'react'

function Alocate() {

    const parsents = [
        {num:"32% ",
         pera:"Improvement in Open Rates"
        },
        {num:"75%" ,
         pera:"Improvement in Ramp Time"
        },
        {num:"35% ",
         pera:"Improvement in Meetings Booked"
        }
    ]
  return (
    <section className='bg-[url(bg3.png)] md:h-[550px] h-auto w-full ' >


   <div className='text-white flex flex-col justify-center w-[100%] md:w-[70%]  py-10 md:px-24 px-10'>
    <h1 className='text-3xl md:text-5xl py-3 '>Allocate effort where your reps make an inpact.</h1>
    <h4 className='italic text-xl md:text-3xl py-4 text-[#0FF1F6]'>Let us handle the rest.</h4>
    <p className='text-gray-500 text-[17px] w-[80%]'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
    <div className='md:flex gap-7 py-10'>
        {parsents.map((event,index)=>(
          <div key={index} className='grid' >
              <span className='font-bold text-3xl md:text-5xl text-[#0FF1F6] py-2 md:py-5'>{event.num}</span>
              <span className='text-[16px]   text-gray-500 '>{event.pera}</span>
          </div>
        ))}
    </div>
   </div>
   




    </section>
  )
}

export default Alocate