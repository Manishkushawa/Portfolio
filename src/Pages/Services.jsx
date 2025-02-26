import React from 'react';

function Services() {
  return (
    <div>
    <div className='w-[100%] h-[70vh] bg-gray-800'>
      <div className='flex justify-between px-24 h-[10vh] '>
        <div className=''> <h5 className='text-4xl mt-6 font-semibold text-white'>Serviser I provide</h5> </div>
         <div className=' '> <button className='bg-gray-800 px-6 py-3 mt-6  rounded-4xl text-white border border-white'>View all Services</button></div>
      </div>
   

        <div className=' h-[60vh] flex'>
           <div className=' w-[100%] max-sm:w-[100%] h-[60vh] px-24 flex items-center gap-4 '>
            <div className='about-skill border-1 border-white w-[50%] h-[55vh] px-6 py-6 md:rounded-lg bg-gray-900'>
                <div className='border-1 border-white w-[8vh] h-[8vh] rounded-full '></div>
                <h2 className='text-3xl py-4 font-medium text-white'>Ui/Ux degsiner</h2>
               <p className='py-4 text-gray-400 '>I design intuitive, user-friendly, and visually engaging interfaces that
                 enhance user experiences, improve accessibility, and drive engagement by blending creativity, 
                 functionality, and usability to create seamless digital interactions that delight users</p>
                 <button className='border-1 border-white w-full h-[6.5vh] mt-6 text-white font-medium text-2xl'>See more </button>
            </div>

            <div className='about-skill border-1 border-gray-400  w-[50%] h-[55vh] px-6 py-6 md:rounded-lg bg-gray-900'>
                <div className='border-1 border-white w-[8vh] h-[8vh] rounded-full '></div>
                <h2 className='text-3xl py-4 font-medium text-white'>Wordpress degsiner</h2>
               <p className='py-4  text-gray-400'>I design intuitive, user-friendly, and visually engaging interfaces that
                 enhance user experiences, improve accessibility, and drive engagement by blending creativity, 
                 functionality, and usability to create seamless digital interactions that delight users</p>
                 <button className='border-1 border-white w-full h-[6.5vh] mt-6 text-white text-2xl font-medium'>See more </button>
            </div>

            <div className='about-skill  border-1 border-gray-400 w-[50%] h-[55vh] px-4 py-6 md:rounded-lg bg-gray-900'>
            <div className=' w-[8vh] h-[8vh] rounded-full border-1 border-white '></div>
                <h2 className='text-2xl py-4 font-medium text-white'>Full Stack Web Developer</h2>
               <p className='py-4  text-gray-400'>
               I build dynamic, scalable, and user-friendly web applications, 
               handling both front-end and back-end development. I create seamless, efficient, and 
               responsive digital experiences by combining strong coding skills with problem-solving and creativity."</p>
                 <button className='border-1 border-white w-full h-[6.5vh] mt-6 text-white text-2xl'>See more </button>
            </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Services