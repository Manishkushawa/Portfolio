import React from 'react'

function Portfolio() {
  return (
    <div>
        <header className='border-1 border-gray-300 max-sm:border-0 max-sm:bg-gray-800'>
       <h2 className='flex justify-center items-center text-4xl py-4 max-sm:text-white'>Portfolio</h2>
       <div className='two-div flex px-24 gap-4  border-1 border-amber-200 py-10 max-sm:flex-col max-sm:px-4'>
        <div className='w-[50%] h-[60vh] max-sm:h-[40vh] border-1 border-gray-400 md:rounded-lg max-sm:w-[100%] max-sm:rounded-xl'></div>
        <div className='w-[50%] h-[60vh] max-sm:h-[40vh] border-1 border-gray-400 md:rounded-lg max-sm:w-[100%] max-sm:rounded-xl'></div>

       </div>
        </header>
       
    </div>
  )
}

export default Portfolio
