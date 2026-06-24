import life from '../assets/life.jpg';
import { Link } from 'react-router-dom';
function Principal_speech(){
    return(
<>
<div className="flex bg-[#1a237e] flex-wrap-reverse p-2 w-full md:flex-nowrap overflow-hidden">
<div className=" text-center md:p-2  p-5 tracking-widest m-1 min-w-1/2  mt-5 space-y-4">
    <h2 className="font-bold text-yellow-500 font-serif tracking-widest lg:mb-5">OUR</h2>
    <h1 className="text-4xl flex flex-wrap font-serif justify-center items-center flex-col text-white text-center ">VALUES</h1>
    <h2 className="text-2xl flex flex-wrap font-serif justify-center items-center flex-col 
     text-yellow-500 ">COURAGE, HONOUR, HUMILITY, FELLOWSHIP</h2>

    <p className="text-center tracking-widest text-white font-light">
     Our vision at Crestview Academy has always been 
     simple  to raise a generation of confident, 
     compassionate and competent leaders who will 
     make a positive impact in their communities and 
     beyond. We do not just teach subjects, we build 
     futures. Every teacher, every facility and every 
     programme in this institution exists for one 
     purpose  the total development of our students. 
     We invite you to be part of this great journey.
     <br/><br/>
      Prof. Emmanuel Okafor
        Vice Chancellor, Crestview Academy
    </p>
    <button className="cursor-pointer bg-transparent text-yellow-500 text-center" ><Link to="/about">Read More</Link></button>
</div>
<div className=" mt-5">
 <img src={life} className='sm:w-7/8 w-1/2 min-w-7/8 mx-auto mt-25 lg:mt-15 max-w-7/8  lg:max-w-1/4 md:max-h-3/4'/>
</div>
</div>

</>
    )
}
export default Principal_speech