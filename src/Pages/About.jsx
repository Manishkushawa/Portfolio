import React from 'react'
import { Icon } from '@iconify/react';


function About() {
  return (
    <div>
      <header className='px-24 bg-gray-800 max-sm:px-4'>
        <div className='h-[10vh] w-full flex justify-center items-center '>
            <span className='text-white text-4xl '>About me</span>
        </div>
        <div className='flex'>
        <div className='w-[50%] h-[70vh] border-1 border-gray-500 flex justify-center items-center max-sm:hidden'>
            <img className='rounded-full border-10 border-amber-200 h-[60vh] w-[70%] ' src='/src/imges/portfolio-img.png'></img>
        </div>
        <div className='w-[50%]  h-[70vh] max-sm:h-[40vh] border-1 border-gray-500 max-sm:w-[100%] max-sm:rounded-xl py-20 px-10 max-sm:py-2 max-sm:px-2 max-sm:bg-gray-900'>
          <p className='text-amber-300 text-2xl max-sm:mt-6'>About Me</p>
          <h4 className='text-white text-4xl mt-4 max-sm:text-3xl max-sm:mt-2'>Who is Olivio Smith</h4>
          <p className='text-gray-400'>I'm a full-stack web developer passionate about creating scalable, 
            user-friendly applications with seamless functionality, modern design, and efficient performance</p>
            <div className='px-2 max-sm:px-1 py-2 max-sm:py-1 bg-amber-300 w-[30%] max-sm:w-[55%] flex gap-2 rounded-full max-sm:bg-amber-200 max-sm:mt-4 mt-14'>
              <button className='bg-white py-2 px-2 rounded-full font-medium max-sm:bg-gray-900 max-sm:text-white'>downlode cv</button>
              <div className='Icon w-[24%] rounded-full max-sm:bg-white  flex justify-center items-center bg-gray-800 '>
                <Icon className='text-4xl  text-white rounded-full max-sm:text-gray-900' icon='material-symbols:arrow-right-alt-rounded'/>
              </div>
            </div>
        </div>
        </div>
        </header>  
    </div>
  )
}

export default About