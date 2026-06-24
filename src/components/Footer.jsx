import { FaFacebook, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
    return(
    <>
    <footer className="">
    <div className="grid  grid-cols-1 md:grid-cols-2 bg-[#1a237e]  gap-8 lg:grid-cols-3">
   <div className="">
   <div >
        <img src="/logo.png" alt="logo" width="200" className="mx-auto"/>
        <p className="font-bold text-4xl text-white text-center font-serif">Crestview</p
        ><div className="font-bold text-2xl text-center font-serif academy">University</div>
     </div>
    <p className="font-normal mt-8 text-white text-center font-serif">A place where knowledge meets character.</p>
    <div className="flex gap-4 mt-4 text-center justify-center">

    <a href="#">
    <FaFacebook size={24} color="#ffffff" />
    </a>

    <a href="#">
    <FaTwitter size={24} color="#00000" />
    </a>

    <a href="#">
    <FaInstagram size={24} color="#ec4899" />
    </a>

    <a href="#">
    <FaGlobe size={24} color="#ffffff" />
    </a>

    </div>
    </div>
    <div className="">
        <div className="border-2 md:hidden border-white w-1/2 mx-auto"></div>
        <h4 className="text-center md:mt-20  text-2xl font-bold mt-7 font-serif text-yellow-500">Quick Links</h4>
       <ul className='text-white space-y-2 text-sm md:text- text-center pl-2 pt-5'>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/">Home</Link> </li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/about">About</Link> </li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/academics">Academics</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/admissions">Admissions</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/news">News</Link></li>
        <li className="cursor-pointer font-semibold hover:text-gray-500 active:text-shadow-yellow-500 hover:font-normal"><Link to="/contact">Contact</Link></li>
     </ul>
     </div>
    <div className="">
   <div className="border-2 md:hidden border-white w-1/2 mx-auto"></div>
        <h4 className="text-center text-2xl md:mt-20 font-bold mt-7 font-serif text-yellow-500">Contact Us</h4>
        <div className="flex flex-col justify center items-center gap-4 text-white text-sm">

        <div className="flex items-start  gap-3">
        <FaMapMarkerAlt size={18} className="text-[#ffc107] mt-1 shrink-0" />
        <p>No 5 Lagos Nigeria</p>
        </div>
        <div className="flex items-center gap-3">
        <FaPhone size={18} className="text-[#ffc107] shrink-0" />
        <p>+234 800 000 0000</p>
        </div>

        <div className="flex items-center gap-3">
        <FaEnvelope size={18} className="text-[#ffc107] shrink-0" />
        <p>info@peakford.com</p>
        </div>

        <div className="flex items-center gap-3">
        <FaClock size={18} className="text-[#ffc107] shrink-0" />
        <p>Mon - Fri: 8am - 4pm</p>
        </div>

        </div>
     </div>
    </div>
    <div className="flex-col text-sm flex text-center bg-[#1a237e] pt-10 text-white ">
        <em> &copy; 2026 Clifford Academy</em>
        <em>All Rights Reserved</em>
    </div>
    </footer>
    </>
    )
}
export default Footer