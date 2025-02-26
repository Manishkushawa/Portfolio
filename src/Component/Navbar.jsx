import React from 'react'

function Navbar() {
  return (
    <div>
        <header className='flix justify-center'>
        <nav className='w-[100%] max-sm:h-[8vh]  h-[80px] flex justify-between items-center px-24 bg-gray-800 max-sm:px-1'>
            <div className='text-4xl text-white font-bold max-sm:text-amber-400 max-sm:px-2 max-sm:text-xl'>Portfolio</div>
            <ul className='flex gap-16 text-xl text-white max-sm:gap-2 max-sm:hidden'>
                <li>Home</li>
                <li>About me</li>
                <li>Skill</li>
                <li>Contect</li>
                <li>Portfolio</li>
            </ul>
            <div className='border-1 px-2 pb-2 rounded-3xl text-xl text-white'>
              <button className=' text-white'>Login</button>
            </div>
        </nav>
        <div>
          <p className='border-b border-white px-24'></p>
        </div>
        </header>
     
    </div>
  )
}

export default Navbar


//npm run dev -- --host