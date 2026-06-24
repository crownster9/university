import { useState } from "react"
import {FaUserGraduate,FaUsers,FaMoneyBill,FaCalendar} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import Sidebar from "./Sidebar"
import Admin_nav from "./Admin_nav"
function AdminDashboard() {
    const [isOpen,setisOpen] = useState(false)
    const toggleSidebar = () =>{
        setisOpen(!isOpen)
    }
    const stats = [
          { title: 'Total Students', value: '12,482', icon: FaUserGraduate },
          { title: 'Total Staff', value: '843', icon: FaUsers },
          { title: 'Revenue YTD', value: '$4.2M', icon: FaMoneyBill },
          { title: 'Attendance Rate', value: '94.8%', icon: FaCalendar },
                ]
    return(
    <>
    <Sidebar toggleSidebar={toggleSidebar}
     isOpen={isOpen} />
     <Admin_nav toggleSidebar={toggleSidebar}
     isOpen={isOpen}/>
    {isOpen &&(
       <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div>
    )}
    <div className="">
     flex.justify-between

    </div>
    
    .
    </>
    )
}
export default AdminDashboard