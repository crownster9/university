import logo from "../assets/logo.png"
import { useState } from "react"
import {FaTachometerAlt,FaUserGraduate,FaUsers,FaCalendarCheck,FaMoneyBill,FaFileAlt,FaClock,FaBullhorn,FaChartBar,FaCog,FaSignOutAlt} from 'react-icons/fa'
function Sidebar({isOpen,toggleSidebar}) {
   return(
<>

<aside className={`fixed top-0 flex flex-col left-0 h-full w-64 bg-[#1a237e] z-50 transition-transform duration-300
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:translate-x-0`}
    >
<div className="px-6 text-center">
<img src={logo} alt="logo" className="w-15 mx-auto mb-2" />
<h2 className="text-white font-bold font-serif">CrestView University</h2>
<p className="text-[#ffc107] text-sm">Admin Portal</p>
<hr className="border-t border-[#ffc107]" />
<div className="text-sm p-2 flex-1 space-y-1 overflow-y-auto">
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaTachometerAlt className="text-[#ffc107]" size={18}/>
        <span>Dashboard</span>
    </a>  
    <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaUserGraduate className="text-[#ffc107]" size={18}/>
        <span>Students</span>
    </a>
    <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaUsers className="text-[#ffc107]" size={18}/>
        <span>Staff</span>
    </a>
 
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaCalendarCheck className="text-[#ffc107]" size={18}/>
        <span>Attendance</span>
    </a>
          <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaFileAlt className="text-[#ffc107]" size={18}/>
        <span>Fees</span>
    </a>
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaFileAlt className="text-[#ffc107]" size={18}/>
        <span>Exams</span>
    </a>
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaClock className="text-[#ffc107]" size={18}/>
        <span>Timetable</span>
    </a>
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaBullhorn className="text-[#ffc107]" size={18}/>
        <span>Notice Board</span>
    </a>
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaChartBar className="text-[#ffc107]" size={18}/>
        <span>Reports</span>
    </a>
     <a href="" className="flex items-center gap-3 px-4 py-2 text-white hover:border-l-2 hover:text-[#ffc107] border-[#ffc107] hover:bg-blue-900 rounded">
        <FaCog className="text-[#ffc107]" size={18}/>
        <span>Settings</span>
    </a>
<hr className="border-t border-[#ffc107]" />

   <a href="" className="flex items-center gap-3 px-4 py-3 text-red-400 rounded">
        <FaSignOutAlt size={18}/>
        <span>LogOut</span>
    </a>
</div>
</div>
</aside>
</>
   )
}
export default Sidebar