import { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen,setIsOpen] = useState(false)
  const toggleMenu = () =>{
    setIsOpen(!isOpen)
  }
  const [drop,setDrop] = useState(false)

  return (
    <>
     <nav className="fixed z-50 border-b-yellow-500 border-b-4 w-full navbar-title px-1">
     <div className="flex justify-between">
     <div className="flex items-center">
        <img src="/logo.png" alt="logo" width="50"/>
        <p className="font-bold font-serif">Crestview <span className="academy">University</span></p>
     </div>
     <ul className="hidden text-sm md:flex md:justify-around space-x-2 items-center">
              <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/">Home</Link> </li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/about">About</Link> </li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/academics">Academics</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/admissions">Admissions</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal sm:hidden md:flex"><Link to="/news">News</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal relative" onClick={()=> setDrop(!drop)} >Login Pages</li>
         {drop && (
            <div className="absolute space-x-2  font-semibold bg-white shadow-lg rounded-lg p-2  z-50 top-13 left-1/2 ">
               <Link className=' hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal' to="/admin-login">Admin_login</Link>
               <Link className=' hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal' to="/staff_login">Staff_login</Link>
               <Link className=' hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal' to="/student-login">Student_login</Link>
               </div>
         )}
         
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/contact">Contact</Link></li>
     </ul>
     <button className="hidden md:flex my-auto py-1 px-3 rounded-sm cursor-pointer btn font-semibold">Login</button>
     <button className=" md:hidden font-bold text-2xl cursor-pointer" onClick={toggleMenu}> <GiHamburgerMenu size={24}/> </button>
     </div>
     </nav>

      <aside className={`fixed top-0 right-0 h-full w-64 bg-[#1a237e] z-50 p-4 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end"><button className=" text-white sm:hidden font-bold text-2xl cursor-pointer" onClick={toggleMenu}> <FaTimes size={24}/> </button>
           </div>
     <div className="">
        
        <div className="flex items-center">
        <img src="/logo.png" alt="logo" width="50"/>
        <p className="font-bold text-white font-serif">Crestview University</p>

    </div>
        
     <ul className='text-white  space-y-2 pl-2 pt-5 text-sm'>
              <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/">Home</Link> </li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/about">About</Link> </li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/academics">Academics</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/admissions">Admissions</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal sm:hidden md:flex"><Link to="/news">News</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal relative" onClick={()=> setDrop(!drop)} >Login Pages</li>
         {drop && (
            <div className="flex flex-col ml-4 space-y-2  font-semibold shadow-lg rounded-lg p-2 top-13 ">
               <Link className=' hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal' to="/admin-login">Admin_login</Link>
               <Link className=' hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal' to="/staff_login">Staff_login</Link>
               <Link className=' hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal' to="/student-login">Student_login</Link>
               </div>
         )}
         
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/contact">Contact</Link></li>
     </ul>
     </div>
     </aside>
     {isOpen && (
      <div className='fixed inset-0 bg-black opacity-50 z-40'onClick={toggleMenu}></div>
     )}
    </>
  )
}

export default Navbar