import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-violet-600 text-white p-4 px-7 justify-around text-lg'>
        <div className="logo hover:font-bold transition-all cursor-pointer">i Tasks</div>
        <ul className='flex gap-3'>
            <li className='hover:font-bold transition-all cursor-pointer mx-3'>Home</li>
            <li className='hover:font-bold transition-all cursor-pointer mx-3'>Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar
