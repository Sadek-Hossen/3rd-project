import React, { useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function WorkTime() {

const InfoWork = [
    {
        image:"/image/logo.png",
        heading:"Make more time for the work that matters most",
        para : "Best software platform for running an internet business",
        rightImg:"/image/cartoon1.jpg",

    },
    {
        image:"/image/l1.png",
        heading:"heading more time for the work that matters most",
        para : "Best software platform for running an internet business",
        rightImg:"/image/cartoon2.jpeg",

    },
    {
        image:"/image/l2.png",
        heading:"our more time for the work that matters most",
        para : "Best software platform for running an internet business",
        rightImg:"/image/Group 35.png",

    }

];


const [CurrentIndex, SetCurrentIndex]=useState(0);
const prevInfoWork = ()=>{
    SetCurrentIndex((prevIndex)=>(prevIndex=== 0 ? InfoWork.length - 1:prevIndex-1 ))
}
const NextInfoWork = ()=>{
    SetCurrentIndex((prevIndex)=>(prevIndex===InfoWork.length - 1 ? 0 : prevIndex+1 ))
}

const {image,heading,para,rightImg } = InfoWork [CurrentIndex];



  return (

    <>
    <section className='w-full '>


        <div className=' md:flex md:col-span-2  justify-between items-center  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>

            <div className='lg:w-1/2 md:px-10 px-3'>
                <img src={image} alt="" />
                <h1 className='font-medium lg:text-4xl text-2xl w-[90%] lg:w-[80%]'>{heading}</h1>
                <p className=' pt:4 lg:pt-8 w-[90%] lg:w-[80%] text-gray-500'>{para}</p>
                
                 <div className=' flex gap-5 mt-10'>
                <button onClick={prevInfoWork} className='p-2 bg-gray-400 rounded-full hover:bg-gray-300 transition-all'> <ArrowBackIosNewIcon /></button>
                <button onClick={NextInfoWork} className='p-2 bg-gray-400 rounded-full hover:bg-gray-300 transition-all'> <ArrowForwardIosIcon /> </button>

                 </div>

            </div>

            <div className='lg:w-1/2 px-10 mt-6 lg:mt-0'>
          <img src= {rightImg} alt="" />
            </div>






        </div>
        {/* logos */}
        <div className=' md:flex md:col-span-2  justify-between items-center  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>
  
  <img src="/image/Logos.png" alt="" />

        </div>

    </section>

    {/* video section */}

    <section className='w-full'>

     <div className='flex flex-col   items-center  py-[30px] md:py-[90px] px-[70px] md:px-[150px]'>
        <h1 className='font-extrabold text-center text-2xl p-10'>Use illustrations in UI design</h1>
        <div className='w-full text-center'><iframe className='w-full md:h-[515px]' width="560"  src="https://www.youtube.com/embed/7FwDMzIbZrg?si=Qc-mQBCxDieINwGc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
     </div>
    </section>

    </>
  )
}

export default WorkTime
