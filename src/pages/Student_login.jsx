import { FaUserShield, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
function Student_login() {
    const [showPassword,setshowPassword] = useState(false)
    const togglePassword = ()=>{
        setshowPassword(!showPassword)
    }
    return (
<>
<section className=" ">
<div className="h-screen bg-cover bg-center student">
<div className="">
<img src="../src/assets/logo.png" alt="logo" width="150" className="mx-auto"/>
</div>

<div className="inset-8 inset-y-35 max-w-md bg-gray-100 flex justify-center items-center m-auto absolute w-1/2"></div>
<div className="font-serif absolute inset-x-0 flex flex-col justify-center text-center">
    <h1 className="text-blue-500 font-bold"> Student Login</h1>
        <div className=" border-yellow-500 border w-1/4 mt-4 mx-auto "></div>

    <div className="text-black mt-2 text-sm">Enter your Matric NO below</div>
    <form  className=" mt-5 space-y-5">
    <div className="text-gray-500"> 
        <input placeholder="Email or Matric No" type="email" className="w-1/3 max-w-sm relative border-yellow-500 border-2 text-sm font-bold focus:outline-none focus:border-green-700 bg-white" name="" id="" required/>
     <span className="" onClick={togglePassword}>{showPassword ? (<FaEye size={20} color="" className='cursor-pointer absolute
      flex justify-center mt-6 -ml-6 lg:-ml-8  inset-x-2/3'/>):(
       <FaEyeSlash size={20} color="" className='cursor-pointer absolute
      flex justify-center mt-6 -ml-6 lg:-ml-8  inset-x-2/3'/>
      )
    }
             

     </span>
    </div>
    <div className="text-gray-500">
    <input placeholder=" Password" type={showPassword ? 'text' : 'password'} className=" w-1/3 max-w-sm text-sm bg-white border-yellow-500 focus:outline-none focus:border-green-700 border-2 font-bold " name="" id="" required/>

    </div>
     <button className='cursor-pointer bg-blue-700 text-white max-w-sm w-1/3 py-1 active:bg-blue-900 active:text-white hover:border-black hover:border-2' type="button">Login </button>
    </form>
    <a href="#" className="mt-5 text-blue-800  text-sm flex m-10 px-15 md:font-bold md:px-10 mx-auto flex-wrap max-w-sm">
        Forgot your password?    </a>
</div>

<div className="text-center font-bold text-sm bottom-0 absolute mx-auto flex inset-x-0 justify-centertext-center flex-col text-white">2026 &copy; Computer Resource centre</div>

</div>
</section>
</>
    )
}

export default Student_login