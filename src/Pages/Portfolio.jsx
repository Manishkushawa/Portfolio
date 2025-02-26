import React from 'react'

function Portfolio() {
  return (
    <div>
        <header className='border-1 border-gray-300'>
       <h2 className='flex justify-center items-center text-4xl py-4'>Portfolio</h2>
       <div className='two-div flex px-24 gap-4  border-1 border-amber-200 py-10'>
        <div className='w-[50%] h-[60vh] border-1 border-gray-400 md:rounded-lg'></div>
        <div className='w-[50%] h-[60vh] border-1 border-gray-400 md:rounded-lg'></div>

       </div>
        </header>
       
    </div>
  )
}

export default Portfolio
