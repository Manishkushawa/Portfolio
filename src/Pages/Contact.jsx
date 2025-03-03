
import React from 'react'
import contact from '../imges/contact-img.jpg'

function Contact() {

  return (
    <div>
        <header className=' w-full h-full px-24 bg-gray-800 max-sm:px-4 max-sm:py-4 '>
           <h2 className='flex justify-center text-4xl py-4 text-white max-sm:text-4xl max-sm:py-2 '>Contact me</h2>
           <div className='flex  gap-4 max-sm:flex-col'>
           <div className=' w-[50%] h-[60vh] rounded-2xl max-sm:w-[100%] max-sm:h-[40vh] max-sm:hidden'>
            <img  className='w-full h-full rounded-sm' src='src\imges\contact-img.jpg'></img>
            </div>

           <div className=' w-[50%] h-[60vh] max-sm:h-[62vh] py-4 max-sm:py-1 px-14 bg-white rounded-sm max-sm:w-[100%] max-sm:px-4 '>
            <div className='input-div w-full py-2 flex gap-4 max-sm:gap-3 max-sm:flex-col'>
              <div className='first name w-[100%]  '>
              <table>First name</table>
            <input className='border-1 border-gray-400 py-1  w-[100%] px-1  rounded-sm max-sm:w-[100%]' type='text' placeholder='First Name'/>
            </div>
            <div className='last name w-[100%] max-sm:py-0 '>
            <table>Last name name</table>
            <input className='border-1 border-gray-400  py-1 w-[100%]  px-1 rounded-sm max-sm:w-[100%]' type='text' placeholder='Last Name'/>
            </div>
            </div>

            <div className='input-div w-full py-2  flex gap-4 max-sm:gap-3 max-sm:flex-col'>
              <div className='Email-address w-[100%] max-sm:py-0'>
            <table>Email address</table>
            <input className='border-1 border-gray-400 py-1 w-[100%] px-2 text-gray-950 rounded-sm' type='text' placeholder='Email address'/>
            </div>
            <div className='phone-number w-[100%]'>
            <table>Phone number</table>
            <input className='border-1 border-gray-400 py-1 w-[100%] px-1 rounded-sm' type='text' placeholder='Phone number'/>
            </div>
            </div>
            <div className='w-full '>
            <textarea className='border-1 border-gray-400 w-full px-1 'role='30'  rows={5}>Massge</textarea>
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