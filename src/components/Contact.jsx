import React from 'react'
import { Link } from 'react-router-dom'


function Contact() {
  return (
    <>
    <div className='flex h-screen items-center justify-center p-5 runnded'>
   
        <div className=' '>
            
            <form action="#" className='mt-5' >
            <h1 className="font-bold text-4xl">Contact Us</h1>
   
             Name <br /> <input type="text" placeholder='Enter your name' /><br />

             Email Id <br /><input type="email" placeholder='Enter your email' /><br />

             Message <br /> <textarea cols={45} className='border-2' placeholder='Enter your message'></textarea>
            </form>

        <br /><br />
        <Link to="/">
            <button className=' bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>


       
    </div>
    </>
  )
}

export default Contact
