import { FaUserShield, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Admin_login() {
    const [showPassword,setshowPassword] = useState(false)
    const togglePassword = ()=>{
        setshowPassword(!showPassword)
    }
    return (
<>
<section className=" ">
<div className="h-screen bg-cover bg-bottom-right admin">
<div className="">
<img src="../src/assets/logo.png" alt="logo" width="150" className="mx-auto"/>
</div>

<div className="inset-8 inset-y-35 max-w-md  bg-white opacity-25 flex justify-center items-center m-auto absolute w-1/2"></div>
<div className="font-serif absolute inset-x-0 flex flex-col justify-center text-center">
        <h1 className="text-white font-bold text-md">CRESTVIEW Admin Login</h1>

    <div className="boder-b-2 border-yellow-500 border w-1/4 mt-4 mx-auto "></div>
    <form  className=" mt-5 space-y-5">
    <div className="text-gray-500"> 
        <input placeholder=" Email" type=" email" className="w-1/3 max-w-sm relative border-yellow-500 border-2 font-bold focus:outline-none focus:border-green-700 bg-white" name="" id="" required/>
     <span className="" onClick={togglePassword}>{showPassword ? (<FaEye size={20} color="" className='cursor-pointer absolute
      flex justify-center mt-6 -ml-6 lg:-ml-8  inset-x-2/3'/>):(
       <FaEyeSlash size={20} color="" className='cursor-pointer absolute
      flex justify-center mt-6 -ml-6 lg:-ml-8  inset-x-2/3'/>
      )
    }
             

     </span>
    </div>
    <div className="text-gray-500">
    <input placeholder="Password" type={showPassword ? 'text' : 'password'} className=" w-1/3 max-w-sm bg-white border-yellow-500 focus:outline-none focus:border-green-700 border-2 font-bold " name="" id="" required/>

    </div>
     <button className='cursor-pointer bg-blue-700 text-white max-w-sm w-1/3 py-1 active:bg-blue-900 active:text-white hover:border-black hover:border-2' type="button"><Link to="/admin_page">Login</Link> </button>
    </form>
    <p className="mt-5 text-white  flex px-15 md:font-bold text-xs  md:px-10 mx-auto flex-wrap max-w-86">
        Crestview Version 2.0 Build 202020 
        best view on mozilla/firefox/microsoft edge/google chrome broswers
    </p>
</div>

<div className="text-center font-bold text-sm bottom-0 absolute mx-auto flex inset-x-0 justify-centertext-center flex-col text-white">2026 &copy; Computer Resource centre</div>

</div>
</section>
</>
    )
}

export default Admin_login