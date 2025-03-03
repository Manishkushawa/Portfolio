import React from 'react'
import portfolio from '../imges/portfolio-img.png'
function Home() {
  return (
    <div>
        <header className='w-[100%] max-sm:w-[100%] h-[80vh] max-sm:h-[105vh] max-sm:bg-gray-800'>
            <div className='w-[100%] h-[80vh] text-2xl flex bg-gray-800 px-24 max-sm:px-4 max-sm:flex-col'>
               <div className='w-[55%] max-sm:w-[100%] h-[80vh]  text-white'>
                <h2 className='text-4xl mt-20 max-sm:mt-8 font-medium max-sm:text-amber-300 max-sm:text-center'>Hi</h2>
                <h1 className='font-serif text-6xl max-sm:text-5xl max-sm:text-center max-sm:py-2'>I' am Manish</h1>
                <h4 className='font-serif text-6xl mt-4 max-sm:text-5xl max-sm:mt-0 max-sm:text-center'>Full Stack <span className='text-blue-400'>Developer</span></h4>
                <div className=' mt-5 '>
                    <p className=' font-medium text-xl text-gray-300 max-sm:text-center max-sm:text-xl max-sm:font-normal max-sm:text-gray-400'>I build robust, scalable web applications from the ground up, specializing in both frontend and backend 
                        development. Let’s create something amazing together</p>
                </div>
                <div className='gap-4 mt-10 max-sm:mt-2 max-sm:flex flex-col items-center'>
                    <button className=' px-2 pb-2 rounded-lg bg-blue-500 text-white hover:bg-gray-500 max-sm:bg-amber-200 max-sm:text-gray-800 max-sm:text-xl max-sm:w-[50%]' >View My Profile</button>
                    <button className=' px-2 mx-4 pb-2 rounded md:rounded-lg bg-blue-500 text-white  max-sm:bg-amber-200 max-sm:text-gray-800 max-sm:text-xl  max-sm:w-[30%] max-sm:flex max-sm:justify-center items-center'>Hire Me</button>
                </div>
                </div>


               <div className='w-[45%] max-sm:w-[100%] h-[80vh] max-sm:h-[75vh] flex justify-center'>
                <div className=' w-[75%] max-sm:w-[100%]  h-[45vh] max-sm:px-2 '>
                  <img className='rounded-full max-sm:rounded-2xl h-[60vh] max-sm:h-[40vh] mt-24 max-sm:mt-2 border-10 border-amber-200 max-sm:border-hidden' src={portfolio}></img>
                  </div>
               </div>
               </div>
            
        </header>
    </div>
  )
}

export default Home