import React, { useState } from 'react';
import { Icon } from '@iconify/react';

function Services() {
  const [isHover, setIsHover] = useState(false)
  const onMouseHover = () => {
    setIsHover(true)
  }
  const leaveHandler = () => {
    setIsHover(false)
  }

  const leaveHandler_ = () =>{
    setIsHover(true)
  }
  const  onMouseHover_ = () =>{
    setIsHover(false)

  }
  return (
    <div>
      <div className='w-[100%] h-[70vh] bg-gray-800 max-sm:bg-gray-800 max-sm:h-[172vh]'>
        <div className='flex justify-between px-24 h-[10vh] max-sm:px-4 max-sm:py-2 max-sm:h-[8vh] max-sm:bg-gray-800'>
          <div className=''> <h5 className='text-4xl mt-6 font-semibold text-white max-sm:text-xl max-sm:mt-2 '>Serviser I provide</h5> </div>
          <div className=' '> <button className='bg-gray-800 px-6 py-3 mt-6  rounded-4xl text-white border border-white max-sm:mt-0 max-sm:px-2 max-sm:py-2 max-sm:'>View all Services</button></div>
        </div>
        <div className=' h-[60vh]'>
          <div className=' w-[100%] h-[60vh] px-24 flex items-center gap-4 max-sm:gap-4 max-sm:flex-col max-sm:px-4 '>
            <div
              onMouseLeave={leaveHandler}
              onMouseOver={onMouseHover}
              className='about-skill border-1 border-white w-[50%] max-sm:w-[100%] h-[55vh] px-6 py-6 md:rounded-lg bg-gray-900 max-sm:rounded-xl hover:bg-amber-200'>
              <div className=' '>
                <Icon width={20} className=' ' icon="simple-icons:nextui" />
              </div>
              <h2 className={`text-3xl py-4 font-medium  max-sm:py-1 ${isHover ? "text-black" : "text-gray-400"}`}>Ui/Ux degsiner</h2>
              <p className={`py-4  max-sm:py-1 ${isHover ? "text-gray-800" : "text-gray-400"}`}>I design intuitive, user-friendly, and visually engaging interfaces that
                enhance user experiences, improve accessibility, and drive engagement by blending creativity,
                functionality, and usability to create seamless digital interactions that delight users</p>
              <button className='border-1 border-white w-full h-[6.5vh] mt-6 text-white font-medium text-2xl hover:bg-gray-800'>See more </button>
            </div>

            <div
              onMouseLeave={leaveHandler_}
              onMouseOver={onMouseHover_}
            className='about-skill border-1 border-gray-400  w-[50%]  max-sm:w-[100%] h-[55vh] px-6 py-6 md:rounded-lg bg-gray-900 max-sm:rounded-xl  hover:bg-amber-200'>
              <div className='w-[8vh] h-[8vh] rounded-full flex justify-center items-center '>
                <Icon className='text-white text-8xl' icon='lineicons:wordpress' />
              </div>
              <h2 className={`text-3xl py-4 font-medium  max-sm:py-1  ${isHover ? "text-black" : "text-gray-400"}`}>Wordpress degsiner</h2>
              <p className={`py-4  text-gray-400 max-sm:py-1 ${isHover ? "text-gray-800" : "text-gray-400"}`}>I design intuitive, user-friendly, and visually engaging interfaces that
                enhance user experiences, improve accessibility, and drive engagement by blending creativity,
                functionality, and usability to create seamless digital interactions that delight users</p>
              <button className='border-1 border-white w-full h-[6.5vh] mt-6 text-white text-2xl font-medium'>See more </button>
            </div>

            <div className='about-skill  border-1 border-gray-400 w-[50%]  max-sm:w-[100%] h-[55vh] px-4 py-6 md:rounded-lg bg-gray-900 max-sm:rounded-xl  hover:bg-amber-200'>
              <div className=' w-[8vh] h-[8vh] rounded-full flex justify-center items-center '>
                <Icon className='text-white text-5xl' icon='logos:eta-icon' />
              </div>
              <h2 className='text-2xl py-4 font-medium text-white max-sm:py-1 hover:text-gray-800'>Full Stack Web Developer</h2>
              <p className='py-4  text-gray-400 max-sm:py-1'>
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