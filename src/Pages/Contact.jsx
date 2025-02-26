import { faHandshakeAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import contact from '../imges/contact-img.jpg'

function Contact() {

  return (
    <div>
        <header className=' w-full h-full px-24 bg-gray-800 '>
           <h2 className='flex justify-center text-4xl py-4 text-white'>Contact me</h2>
           <div className='flex  gap-4'>
           <div className=' w-[50%] h-[60vh] rounded-2xl'>
            <img  className='w-full h-full rounded-sm+++' src='src\imges\contact-img.jpg'></img>
             
           </div>

           <div className=' w-[50%] h-[60vh] py-4 px-14 bg-white rounded-sm'>
            <div className='input-div w-full py-2 flex gap-4'>
            <input className='border-1 border-gray-400 py-1 text-xl w-[50%] px-2 font-medium rounded-sm' type='text' placeholder='First Name'/>
            <input className='border-1 border-gray-400  py-1 text-xl w-[50%]  px-2 rounded-sm' type='text' placeholder='Last Name'/>
            </div>

            <div className='input-div w-full py-2  flex gap-4'>
            <input className='border-1 border-gray-400 py-1 text-xl w-[50%] px-2 text-gray-950 rounded-sm' type='text' placeholder='Email address'/>
            <input className='border-1 border-gray-400  py-1 text-xl w-[50%] px-2 rounded-sm' type='text' placeholder='Phone number'/>
            </div>
            <div className='w-full  '>
            <textarea className='border-1 border-gray-400 w-full px-2' role='40' rows={8}>Massge</textarea>
            <div className=' w-full py-2 flex justify-end'>
            <button  className='border-1 border-gray-400 px-3 py-1 bg-gray-800 text-white rounded-sm font-medium'> Subit</button>
            </div>
            </div>
           </div> 
           </div>
        </header>
    </div>
  )
}

export default Contact