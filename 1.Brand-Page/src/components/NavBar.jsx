import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className='flex justify-around py-4 items-center'>
          <img src="/brand_logo.png" alt="Logo" className='w-[76px] h-[42.75px]'/>
          <ul className='flex gap-4  uppercase font-semibold '>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className='bg-[#D01C28] text-white px-4 py-1 cursor-pointer flex justify-center items-center text-sm'>Login</button>
        </nav>
    </div>
  )
}

export default NavBar
