import React from 'react'

const Navbar = () => {
  return (
    <div className=' lg:flex md:flex flex-wrap justify-between items-center px-4 py-4 font-bold bg-[#F8EFBA] shadow-lg'>
        <div className='left'>
            <h1 className='text-2xl text-center'>FOODAPP</h1>
        </div>
        <div className='right'>
            <ul className='flex justify-center space-x-4 cursor-pointer '>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>SERVICES</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar