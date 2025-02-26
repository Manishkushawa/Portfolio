import React from 'react'
import portfolio from '../imges/portfolio-img.png'
function Home() {
  return (
    <div>
        <header className='w-[100%] max-sm:w-[100%] h-[80vh]'>
            <div className='w-[100%] h-[80vh] text-2xl flex bg-gray-800 px-24 max-sm:px-4 max-sm:flex-col'>
               <div className='w-[55%] max-sm:w-[100%] h-[80vh]  text-white'>
                <h2 className='text-4xl mt-20 max-sm:mt-2 font-medium max-sm:text-amber-300'>Hi</h2>
                <h1 className='font-semibold text-6xl max-sm:text-2xl'>I' am Manish</h1>
                <h4 className='font-semibold text-6xl mt-4 max-sm:text-2xl max-sm:mt-0'>Full Stack <span className='text-blue-400'>Developer</span></h4>
                <div className='border-b border-blue-700 mt-5 '>
                    <p className=' font-extralight text-gray-300 max-sm:hidden'>I build robust, scalable web applications from the ground up, specializing in both frontend and backend 
                        development. Let’s create something amazing together</p>
                </div>
                <div className='gap-4 mt-10'>
                    <button className=' px-2 pb-2 rounded-lg bg-blue-500 text-white hover:bg-gray-500' >Downdoad</button>
                    <button className=' px-2 mx-4 pb-2 rounded md:rounded-lg bg-blue-500 text-white'>Project</button>
                </div>
                </div>


               <div className='w-[45%] h-[80vh] flex justify-center max-sm:border-1 border-amber-100'>
                <div className=' w-[75%] max-sm:w-[80%] h-[50vh] '>
                  <img className='rounded-full  h-[60vh] max-sm:h-[40vh] mt-24 max-sm:mt-2 border-10 border-amber-200' src={portfolio}></img>
                  </div>
               </div>
               </div>
            
        </header>
    </div>
  )
}

export default Home