import React from 'react'

const  Navbar = () => {
  return (
    <div className='fixed w-[100vw] p-5 px-20 flex  justify-between items-center bg-black text-white'>
      <p>Crypto News</p>
      <div>
        <ul className="flex space-x-5">
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
