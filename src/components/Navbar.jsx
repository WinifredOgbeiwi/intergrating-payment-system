import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <>
    <nav className=''> 
        <div className=' flex justify-around items-center font-semibold relative py-2 text-white bg-green-800'>
       <h3 className='hover:text-slate-200'><Link to = '/'> iCare Foundation</Link></h3>
        <ul className=' gap-10 hidden lg:flex'>
          <li className='hover:text-slate-200'><Link to='/'>Home</Link></li>
          <li className='hover:text-slate-200'><Link to='/'>About</Link></li>
          <li className='hover:text-slate-200'><Link to='/'>Resources</Link></li>
          <li className='hover:text-slate-200'><Link to='/'>Contact</Link></li>
        </ul>
        <button className=' px-4 py-2 rounded-md bg-green-500  hover:bg-green-900'>
          <Link to='/donate'>Donate</Link> 
          </button>
         
    


 <div
        className="cursor-pointer pr-4 text-black lg:hidden z-[200]"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* links for responsive navbar */ }
   {
    nav && (
      <ul className="flex flex-col items-center absolute top-0 right-0 w-full h-screen bg-main-color text-white lg:hidden z-[100] bg-green-700">

                <ul className=' gap-10 lg:hidden mt-20 items-center font-bold flex flex-col '>
                  <li className='hover:text-slate-200'><Link to='/'>Home</Link></li>
                  <li className='hover:text-slate-200'><Link to='/'>About</Link></li>
                  <li className='hover:text-slate-200'><Link to='/'>Resources</Link></li>
                  <li className='hover:text-slate-200'><Link to='/'>Contact</Link></li>
                </ul>
      </ul>
    )
  }
  </div>
</nav>
</>
  )
}

export default Navbar
