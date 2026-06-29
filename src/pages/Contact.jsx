import { FaMapMarkerAlt,FaEnvelope,FaPhoneAlt,FaRegArrowAltCircleRight } from "react-icons/fa"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function Contact(){
    return(
        <>
        <Navbar/>
        
        <div className="">
            <section className="pt-10 space-y-10">
                <main className="relative  main h-lvh bg-center bg-no-repeat  w-full"></main>
                <div className="absolute inset-0 h-screen mt-10 opacity-90 bg-[#1a237e]"></div>
                <div className="absolute -translate-y-20 inset-0 flex items-center gap-2 w-full text-center justify-center  z-10">
                    <div className="h-1 w-16 bg-yellow-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase text-yellow-500">Reach out to us</span>
                    <div className="h-1 w-16 bg-yellow-500"></div>
                </div>
                <div className="absolute inset-0 w-full  ">
                <div className="absolute translate-y-65 flex-col tracking-widest text-5xl font-serif lg:text-6xl gap-2 justify-center items-center text-center inset-x-0">Connect with <span className="text-yellow-500"><br/>Our Campus</span></div>
                <p className="absolute translate-y-90 text-center lg:px-50 lg:tracking-widest lg:text-lg flex tracking-wide px-10 mt-5 text-gray-400 justify-center ">
                    Whether you're a prospective student, a global researcher,or  a distinguished alum,
                    our team is here to assist your journey at Crestview University.
                </p>
                </div>
            </section>
            <section className="px-5 pb-5 text-start space-y-7">
            <h1 className="uppercase font-semibold text-[#1a237e] tracking-wide text-3xl lg:text-4xl flex ">institutional<br className="lg:hidden"/> directory</h1>
            <div className="flex gap-4">
            <FaMapMarkerAlt size={35} className="border-0 p-2 bg-gray-200"/>
            <div className="flex-col space-x-2 font-semibold text-sm ">
                <p className="uppercase pb-2 text-yellow-500">
                    main campus
                </p>
                <p className="capitalize tracking-wide text-gray-700">
                Valley Road,Tech District <br/>
                Crestview University,CU 94103
                </p>
            </div>
            </div>
             <div className="flex gap-4">
            <FaPhoneAlt size={35} className="border-0 p-2 bg-gray-200"/>
            <div className="flex-col space-x-2 font-semibold text-sm ">
                <p className="uppercase pb-2 text-yellow-500">
                general enquiries
                </p>
                <p className="capitalize tracking-wide text-gray-700">
                +2348168524709 <br/>
                +2348115058870
                </p>
            </div>
            </div>
             <div className="flex gap-4">
            <FaEnvelope size={35} className="border-0 p-2 bg-gray-200"/>
            <div className="flex-col space-x-2 font-semibold text-sm ">
                <p className="uppercase pb-2 text-yellow-500">
                    email channels
                </p>
                <p className="capitalize tracking-wide text-gray-700">
                Admissions: admissions@Crestview.edu <br/>
                Support:hello@Crestview.edu
                </p>
            </div>
            </div>
            <div className="border-l-yellow-500 border-l-2 pl-4 py-5 bg-gray-200 flex flex-col">
                <p className="capitalize font-semibold">Departmental Hours</p>
                <p className="capitalize">mon-fri:</p>
                <p className="capitalize">saturday:</p>
                <p className="capitalize">sunday:</p>


            </div>
            </section>
            <form action="" className="bg-gray-300 mx-4 mb-10">
            <div className=" border-[#1a237e] border-t-4 space-y-2 bg-white shadow-2xl mx-auto pb-5  px-4 lg:px-8">
             <h1 className="text-[#1a237e] font-semibold text-2xl pt-5">Send a Secure Message</h1>
             <p className="tracking-wide text-xs lg:text-sm text-[#1a237e]">
                Your inquiry will be rooted to the appropriate department within 24 Hours
             </p>
             <div className="flex flex-col lg:flex-row gap-4 pt-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="Full name" className="uppercase text-sm font-bold text-[#1a237e]">Full name</label>
                    <input required type="text" name="Fullname" id="" placeholder="e.g. Johnathan Sterling"
                     className=" w-full p-2 pl-4 bg-gray-200 focus:text-[#1a237e] focus:bg-white" />
                </div>
                <div className="flex flex-col w-full ">
                    <label htmlFor="Full name" className="uppercase text-sm font-bold text-[#1a237e]">institutional email</label>
                    <input required type="text" name="Fullname" id="" placeholder="name@gmail.com"
                     className=" w-full p-2 pl-4 bg-gray-200 focus:text-[#1a237e] focus:bg-white" />
                </div>
             </div>
             <div className="flex flex-col w-full pt-4">
                    <label htmlFor="Inquiry" className="uppercase text-sm font-bold text-[#1a237e]"
                    >Inquiry type</label>
                     <select  className=" w-full p-2 pl-4 bg-gray-200 focus:text-[#1a237e] focus:bg-white">
                        <option value="general">General Support</option>
                        <option value="Admission">Admissions Inquiry</option>
                        <option value="Research">Research Collaboration</option>
                        <option value="Media">Media & PR</option>
                     </select>
                </div>
                 <div className="flex flex-col w-full pt-4 ">
                    <label htmlFor="Full name" className="uppercase text-sm font-bold text-[#1a237e]">detailed message</label>
                    <textarea required className=" w-full p-2 pl-4 bg-gray-200 focus:text-[#1a237e] focus:bg-white"placeholder="How can our institution assists You Today?"name="message" id="" ></textarea>
                </div>
                <button className="flex mt-4 cursor-pointer active:font-normal justify-center items-center gap-2 text-white bg-[#1a237e] p-2 w-full uppercase text-center font-bold">Execute message delivery<FaRegArrowAltCircleRight className="duration-300 transition-transform hover:translate-x-2"/> </button>
            </div>

            </form>
            <section className="overflow-hidden lg:mx-auto space-y-5 mt-5 py-10 bg-gray-200">
                <h1 className="uppercase tracking-wide text-[#1a237e] font-semibold text-2xl text-center">Campus location</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5582718238165!2d5.151919877650382!3d7.290992313763523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478ec543883bdf%3A0x3294ddea9af5e616!2sFuta%20South%20Gate%2C%20Akure%20340110%2C%20Ondo%2C%20Nigeria!5e0!3m2!1sen!2sca!4v1779268626317!5m2!1sen!2sca" 
                width="100%" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </div>
        <Footer/>
        </>
    )
}
export default Contact