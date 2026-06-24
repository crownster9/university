import {FaStarOfDavid}  from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/good.avif";
import { FaArrowRight } from 'react-icons/fa';
import bicycle from "../assets/bicycle.avif"
function News(){
    return(
        <>
    <Navbar/>
    {/*hero Section*/}
     <div className=" bg-[#1a237e] h-screen">
        <div className="pt-20"></div>
       <div className="space-y-1">
        <div className="flex gap-2 items-center mx-auto mt-25 text-center justify-center border-yellow-00 border bg-yellow-500/30 tracking-widest w-1/2 lg:w-1/4 md:w-1/3">
            <FaStarOfDavid size={16}className='text-yellow-500  animate-pulse'/>
            <span className="text-yellow-500 lg:text-sm text-[11px] leading-loose font-bold uppercase">University chronicles</span>
        </div>    
        <h1 className="uppercase  text-white tracking-widest  text-3xl font-serif text-center pt-4 ">The beacon</h1>  
        <p className="text-yellow-500 text-center font-extralight text-2xl font-serif">press desk</p>
        <p className="text-center tracking-wide text-slate-400 w-2/3 mx-auto pt-5 pb-20">
            Your centralized portal for high-level announcements, research milestones,global academic
            accolades,and upcoming campus calendar activities.
        </p>
         </div>
        </div>
        {/* spotlight*/}
        <div className="bg-[#FFFFFF] border-gray-400 mb-10">
        <div className="space-y-1 pl-8 pt-10">
        <p className="tracking-[4px] uppercase text-yellow-500 text-sm font-bold">Spotlight Article</p>
        <p className="uppercase text-2xl text-[#1a237e]">Today's Prime Story</p>
        <div className="w-16 h-1 mt-2 bg-yellow-500"></div>
        </div>
        <div className="mt-5 w-[90%] mx-auto bg-[#F8FAFC] py-2 shadow-2xl relative hover:border-black hover:border group">
        <div className="md:flex gap items-center ">
        <div className="overflow-hidden m-6 ">
        <img src={img} alt="img" className="group-hover:scale-120 w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-25 h-8 z-5 top-12 left-12 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">research</div>
        </div>
        <div className="md:w-1/2">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 18, 2026•By Dr. Sarah Bennett</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">AI & Ethics Initiative: Beacon 
            Heights Launches Multi-Million Dollar DeepTech Lab</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">A massive blueprint to establish ethical guidelines and frameworks for modern artificial neural structures.
         The Beacon Heights Senate and Dean of Registry are proud to inaugurate our state-of-the-art Neural Ethics Lab. Aimed at establishing transparent frameworks for machine learning, the</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-sm flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>
        </div>
        </div>

        {/* Galleries of spotlight*/}
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        <div className="mt-5 w-[90%] mx-auto bg-[#FFFFFF] relative border-black border group">
        
        <div className="overflow-hidden">
        <img src={img} alt="img" className="group-hover:scale-120  w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-25 h-8 z-5 top-8 left-6 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">research</div>
        </div>
        <div className="">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 18, 2026</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">AI & Ethics Initiative: Beacon 
            Heights Launches Multi-Million Dollar DeepTech Lab</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">A massive blueprint to establish ethical guidelines and frameworks for modern artificial neural structures.</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-xs flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>
          <div className="mt-5 w-[90%] mx-auto bg-[#FFFFFF] relative border-black border group">
        
        <div className="overflow-hidden">
        <img src={img} alt="img" className="group-hover:scale-120  w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-25 h-8 z-5 top-8 left-6 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">research</div>
        </div>
        <div className="">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 18, 2026</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">Global Exchange: BHU Signs Strategic Partnership with European Consortium</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">Expanded semester programs and dual research placement pipelines start in the 2026 fall semester.</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-xs flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>
          <div className="mt-5 w-[90%] mx-auto bg-[#FFFFFF] relative border-black border group">
        
        <div className="overflow-hidden">
        <img src={bicycle} alt="img" className="group-hover:scale-120  w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-31 h-8 z-5 top-8 left-6 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">campus life</div>
        </div>
        <div className="">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 05, 2026</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">Zenith Athletics Pavillion: Construction Finalized on Multi-Use Arena</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">A modern beacon for sports, health sciences, and collegiate tournaments opens next month.</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-xs flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>
           <div className="mt-5 w-[90%] mx-auto bg-[#FFFFFF] relative border-black border group">
        
        <div className="overflow-hidden">
        <img src={bicycle} alt="img" className="group-hover:scale-120  w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-31 h-8 z-5 top-8 left-6 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">campus life</div>
        </div>
        <div className="">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 05, 2026</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">Zenith Athletics Pavillion: Construction Finalized on Multi-Use Arena</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">A modern beacon for sports, health sciences, and collegiate tournaments opens next month.</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-xs flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>

           <div className="mt-5 w-[90%] mx-auto bg-[#FFFFFF] relative border-black border group">
        
        <div className="overflow-hidden">
        <img src={bicycle} alt="img" className="group-hover:scale-120  w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-31 h-8 z-5 top-8 left-6 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">campus life</div>
        </div>
        <div className="">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 05, 2026</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">Zenith Athletics Pavillion: Construction Finalized on Multi-Use Arena</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">A modern beacon for sports, health sciences, and collegiate tournaments opens next month.</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-xs flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>

           <div className="mt-5 w-[90%] mx-auto bg-[#FFFFFF] relative border-black border group">
        
        <div className="overflow-hidden">
        <img src={bicycle} alt="img" className="group-hover:scale-120  w-100% transition-transform duration-1000"/>
        <div className="absolute bg-[#1a237e] w-31 h-8 z-5 top-8 left-6 px-4 uppercase text-yellow-500 text-sm font-bold items-center flex">campus life</div>
        </div>
        <div className="">
        <p className="text-slate-500 text-sm px-6 font-semibold">June 05, 2026</p>
        <p className="group-hover:text-yellow-500 px-6 text-2xl py-2 text-[#2A247E] font-serif">Zenith Athletics Pavillion: Construction Finalized on Multi-Use Arena</p>
        <p className="line-clamp-5 text-sm text-slate-500 px-6 tracking-wide leading-6">A modern beacon for sports, health sciences, and collegiate tournaments opens next month.</p>
         <button className="cursor-pointer text-[#1a237e] uppercase px-6 font-bold tracking-wider text-xs flex gap-2 items-center my-5">read full story <span className="group-hover:translate-x-2 transition-transform"><FaArrowRight/></span></button>
        </div>
        </div>
        </section>
        <section className="bg-[#F8FAFC] gap-4 md:flex  pt-8 mt-15 border-t-black border">
        <div className="">
            <p className="uppercase tracking-wider text-yellow-500 pl">Live Updates</p>
            <p className="text-2xl font-serif uppercase text-[#1a237e]">Collegiate Event Timelines</p>
            <p className="Tap  to record your participation attendance numbers. Counters update securely inside your browser state flow."></p>
        </div>

        </section>
        <Footer/>
        </>
       
    )
}
export default News