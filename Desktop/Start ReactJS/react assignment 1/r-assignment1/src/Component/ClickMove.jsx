import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ClickMove() {
    const OfficarInfo = [
        {img:"/coma.png",
         pera : "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
         name:"Kenar king",
         crector:"Sineor Officer @ Company"
        },
        {img:"/coma.png",
         pera : "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
         name:"Soraj Due",
         crector:" sicroty Officer @ Company"
        },
        {img:"/coma.png",
         pera : "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
         name:"John Due",
         crector:"Chief Strategy Officer @ Company"
        },

    ];

    const [currentIndex , setIndex] = useState(0);
    const prevusIndex = ()=>{
     setIndex((prevus)=>(prevus===0 ? OfficarInfo.length -1 :prevus -1))

    };
    const nextpre = ()=>{
        setIndex((prevus)=>( prevus === OfficarInfo.length -1 ? 0: prevus+1))
    }

    const {img,pera,name,crector} = OfficarInfo [currentIndex]
  return (
    <section className='w-full bg-[#002228] '>

  <div className='flex h-[500px] text-white md:w-[70%] mx-auto px-4 py-10 justify-between items-center gap-10 '>
    <div className='bg-gray-500 hover:bg-gray-600 rounded-full p-2 cursor-pointer' onClick={prevusIndex} >< ArrowBackIosIcon /></div>
    <div className='flex flex-col justify-center items-center w-[70%]'> <img className='mb-5' src={img} alt="logo" />
          <p className='md:text-[20px] text-gray-500 md:px-10'>{pera}</p>
          <h1 className ='text-[#0FF1F6] font-bold p-4'>{name}</h1>
          <p className ='text-[10px] md:text-[16px] text-gray-400'>{crector}</p>


    </div>
    <div className='bg-gray-500 hover:bg-gray-600 rounded-full p-2 cursor-pointer' onClick={nextpre}>  <ArrowForwardIosIcon /> </div>

  </div>
    </section>
  )
}

export default ClickMove