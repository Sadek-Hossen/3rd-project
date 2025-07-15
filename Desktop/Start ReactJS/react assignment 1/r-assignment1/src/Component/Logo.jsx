import React from 'react'

function Logo() {
  return (
    <section className='bg-[#07292F] w-full h-auto  mt-5 pb-10 relative'>
   <div className=' w-[80%] mx-auto flex flex-col  items-center'>

   <h2 className='text-center text-[#0FF1F6] pt-10'>our trusted partners</h2>

{/* image */}
   <div className='grid gap-10 mt-7  grid-cols-2 md:grid-cols-5 mb-10 mx-auto'>
   <img src="BackHub logo.png" alt="logo" />
   <img src="CableLabs logo.png" alt="logo" />
   <img src="Group.png" alt="logo" />
   <img src="chn1.png" alt="logo" />
   <img src="AMD logo.png" alt="logo" />
   </div>

   </div>


    </section>
  )
}

export default Logo