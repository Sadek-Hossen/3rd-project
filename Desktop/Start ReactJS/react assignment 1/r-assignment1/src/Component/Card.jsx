import React from 'react'

function Card() {

    // for maping
    const instaInfo = [
        {id :1,
          img:"insta1.png",
          heading:"You’re in Control",
          para:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work."
        },
        {id :2,
          img:"insta2.png",
          heading:"Infinitely Scalable",
          para:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly."
        },
        {id :3,
          img:"insta3.png",
          heading:"Incredibly Flexible",
          para:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time."
        },
    ]
  return (
    <section>
{/* main div */}
        <div  className='w-full p-10 bg-[#002228]'>

            <div className=' md:flex md:p-4  md:gap-[30px] text-white'>
                {instaInfo.map((event)=>(
                    <div key={event.id} className='hover:bg-[#465356] p-3 w-[100%] md:w-[50%] transition-all  rounded-2xl'>
                        <img src={event.img} alt="insta" />
                        <h1 className='text-xl font-semibold p-3'>{event.heading}</h1>
                        <p className='text-gray-500'>{event.para}</p>

                    </div>
                ))}
            </div>
        </div>


        
    </section>

    
  )
}

export default Card