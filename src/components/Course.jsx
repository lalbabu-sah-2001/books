import React from 'react'
import { Link } from 'react-router-dom'

// import { list } from '../../public/list.json'


function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you Lalu {" "}
          <span className='text-pink-500'>Here! :)</span></h1>
          <p className='max-w-screen-4xl container mx-auto md:px-20 px-4 mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, iusto reiciendis. Vel, dignissimos aspernatur, similique atque aliquam ad repellendus saepe cupiditate quam facilis dolor nulla corrupti quos dicta doloribus ratione?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim repellendus reprehenderit placeat vitae architecto veniam ad ex provident, voluptatibus, adipisci dolore saepe quam. Nemo, perspiciatis quos maiores odit omnis iure?</p>
          <div>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
            </Link>
          </div>
        </div>
        {/* <div>
              {list.map((item) =>(
                <Cards key={item.id} item={item} />
              ))}
        </div> */}
      </div>
    </>
  )
}

export default Course
