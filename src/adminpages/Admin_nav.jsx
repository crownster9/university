import { useState } from "react"
import {GiHamburgerMenu} from 'react-icons/gi'
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'
function Admin_nav({toggleSidebar}) {

    return(
    <>
    <nav className="fixed w-full top-0 lg:left-64 lg:w-auto left-0 right-0 overflow-hidden z-30 shadow-sm bg-[#f5f7fa]">
     
   <div className="flex justify-between p-2 items-center">
    <div className="hidden lg:flex ml-2 bg-white text-black items-center">
        <input type="search" name="" placeholder="Search For Students,Records or Faculty"id="search" className="relative pl-8 p-2 w-md" />
        <span className="pl-1 absolute font-extralight text-gray-600"><FaSearch size={20}/></span>
    </div>
    <button><GiHamburgerMenu onClick={toggleSidebar} className="lg:hidden cursor-pointer text-black" size={30}/></button>
    <h2 className="lg:hidden font-serif font-semibold">CrestView Admin</h2>
   
   <div className="flex gap-2 items-center "> 
    <FaBell className="text-yellow-500" size={25}/>
    <div className="lg:border-l-2 lg:space-x-2 border-gray-200 flex pl-4 ">
        <div className="lg:flex flex-col px-1 hidden ">
            <h4 className="text-sm font-bold">
                DR. Alistair Vance
            </h4>
            <h6 className="text-xs ">ADMINISTRATOR</h6>
        </div>
    <FaUserCircle className="text-[#1a237e] my-auto lg:mx-2" size={25}/>
   </div>
   </div>
    
   </div>

    </nav>

    </>
   )
}
export default Admin_nav