import { Link } from 'react-router-dom';
import principal from '../assets/principal.jpg';
function Principal_greetings(){
    return(
<>
<div className="flex flex-wrap-reverse m-2 w-full md:flex-nowrap">
<div className="bg-white text-center md:p-2 md:max-w-1/2 p-5 tracking-widest m-1  mt-5 space-y-4">
    <h2 className="font-bold text-blue-800 font-serif tracking-widest lg:mb-10">WELCOME</h2>
    <h1 className="text-4xl flex flex-wrap font-serif justify-center text-center mb-5">FROM THE VICE CHANCELLOR</h1>
    <p className="text-center tracking-widest font-light">
       Welcome to Crestview Academy  a place where 
       every child is seen, heard and given the tools 
       to become the best version of themselves. We 
       believe that education is not just about passing 
       examinations but about building character, 
       developing critical thinking and preparing our 
       students for the challenges of tomorrow. We are 
       proud of every student that walks through our 
       doors and we remain committed to providing the 
       highest standard of education in a safe and 
       nurturing environment.
       <br/><br/>
        Prof. Emmanuel Okafor
          Vice Chancellor, Crestview Academy
    </p>
    <button className="cursor-pointer bg-transparent text-yellow-500 text-center" ><Link to="/about">Read More</Link></button>
</div>
<div className=" mt-5">
 <img src={principal} className='sm:w-7/8 w-1/2 min-w-7/8 mx-auto mt-25 lg:mt-15 max-w-7/8  lg:max-w-1/4 md:max-h-3/4'/>
</div>
</div>

</>
    )
}
export default Principal_greetings