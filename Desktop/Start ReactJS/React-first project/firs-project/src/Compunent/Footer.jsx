import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
 const myFooter = [
    {
        heading:"Home",
        ling:['Become Afiliate', 'Go Ultimate', 'Survice'],

    },
    {
        heading:"Pruducts",
        ling:['Design', 'Systems', 'Themes & Templates','Mockups','Presentations','Wireframes Kits','UI Kits']

    },
    {
        heading:"Legals",
        ling:['License','Refund', 'Policy','About Us','Contacts'],

    },
    {
        heading:"Blog",
        ling:['Business Stories','Digital Store','Learning','Social Media']

    },
 ]

  return (
<>

<section className='bg-black text-white w-full h-auto mt-7'>
  <div className='grid lg:grid-cols-3 grid-cols-2 mx-auto justify-between m-4 pb-10 pt-10 pl-5 pr-5'>
    <div className='lg:col-span-1 '> <img src="/image/whitelogo.png" alt="" /> </div>
    <div className='col-span-2'>
        <div className='grid grid-cols-2  lg:grid-cols-4 justify-between lg:mr-10'>
            {myFooter.map((event,index)=>(
                <div className=' lg:mt-6' key={index} >
                    <h1 className='font-semibold pb-4'>{event.heading}</h1>
                      {event.ling.map((item,i)=>(
                        <ul key={i}>
                            <li className='text-[10px] lg:text-[14px] text-gray-500 pb-1 lg:pb-2'> {item} </li>
                        </ul>

                      ))}
                </div>
            ))}
        </div>

        
    </div>


  </div>

    {/* icon */}

      <hr className='text-gray-500' />
  <div className='w-full'>
<div className='flex justify-between items-center py-6  px-10  mb-0 '>
  <p className='text-gray-600'>Copyright degic @ 2020</p>
  <div className='flex gap-3'>
  <FacebookIcon/>
  <InstagramIcon />
  <TwitterIcon />
  </div>

</div>
  </div>

</section>




</>
  )
}

export default Footer
