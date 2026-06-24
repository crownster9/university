import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaHandSparkles, FaStarHalfAlt, FaStarOfDavid, FaStarOfLife } from 'react-icons/fa'
function Admissions(){
    return(
        <>
    <Navbar/>
        {/* Admissions Content */}

        {/* hero */}
        <section className="pt-15 bg-[#1a237e] h-screen w-full text-slate-800 font-sans overflow-hidden">
            <div className="flex gap-2 items-center mx-auto mt-25  text-center justify-center border-yellow-00 border bg-yellow-500/30 tracking-widest w-[70%] lg:w-1/4 md:w-1/3">
                <FaStarOfDavid size={16} className='text-yellow-500  animate-pulse'/>
                <span className="text-yellow-500 lg:text-sm text-[11px] leading-loose font-bold uppercase">admissions portal 2026</span>
            </div>
            <div className="text-center pt-8 mx-auto ">
                <p className="uppercase text-4xl text-white font-serif tracking-widest font-bold">
                    cultivate your  <br className='hidden md:block'/><span className="font-thin italic text-yellow-500">Highest standard</span>
                </p>
            </div>
            <p className="text-center text-white/50 leading-7 tracking-wide w-2/3 mx-auto pt-5">
                    We prepare individuals to stand apart. Explore dynamic scholarship criteria, 
                    check off your admissions requirement checklist,
                     and lock in peer consultation meetings with our admissions task force.
                </p>
        </section>
        <section className="bg-white py-10">
        <div className="">
            <p className="text-yellow-500 font-bold text-sm text-center tracking-widest uppercase">dynamic evaluation</p>
            <div className="pt-2 font-serif">
                <p className="uppercase text-[#1a237e] text-center text-4xl">Interactive</p>
                <p className="uppercase text-[#1a237e] text-center text-4xl">Scholarship</p>
                <p className="uppercase text-[#1a237e] text-center text-4xl">estimator</p>
                <div className="w-16 h-1 bg-yellow-500 mx-auto mt-2"></div>
                <p className="text-center mx-10 mt-4 text-black/70">
                    Configure your credential metrics below and witness estimated merit aid allocations calculate 
                    dynamically.
                </p>
            </div>
        </div>
        </section>
        <Footer/>
        </>
    )
}
export default Admissions