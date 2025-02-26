import React from 'react'

function About() {
  return (
    <div>
      <header className='px-24 bg-gray-800'>
        <div className='h-[10vh] w-full flex justify-center items-center'>
            <span className='text-white text-4xl'>About me</span>
        </div>
        <div className='flex'>
        <div className='w-[50%] h-[70vh] border-1 border-gray-500 flex justify-center items-center'>
            <img className='rounded-full border-10 border-amber-200 h-[60vh] w-[70%] ' src='/src/imges/portfolio-img.png'></img>
        </div>
        <div className='w-[50%] h-[70vh] border-1 border-gray-500'></div>
        </div>
        </header>  
    </div>
  )
}

export default About