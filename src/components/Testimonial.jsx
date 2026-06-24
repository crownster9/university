import { FaStar, FaUserCircle } from 'react-icons/fa'
function Testimonial() {
return(
<>
    <div className="py-16 px-4 bg-[#f5f5f5]">

    <div className="text-center mb-16">
    <h2 className="text-[#1a237e] text-4xl font-bold mb-4">
    What People Say About Us
    </h2>
    <p className="text-gray-500 text-lg max-w-xl mx-auto">
    Hear from our students and parents about their experience at Peakford Academy
    </p>
    <div className="w-16 h-1 bg-[#ffc107] mx-auto mt-4"></div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">

    
    <div className="bg-white p-8 rounded-lg shadow-md flex-1 border-t-4 border-[#ffc107] hover:-translate-y-2 transition duration-300">

    
    <div className="flex gap-1 mb-4">
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    </div>

    <p className="text-gray-500 text-sm leading-relaxed mb-6">
    Crestview Academy has been an incredible journey for me. 
    The teachers are dedicated, the environment is motivating 
    and I have grown so much both academically and personally 
    since joining this great institution.
    </p>

    <div className="flex items-center gap-3">
    <FaUserCircle size={40} color="#1a237e" />
    <div>
    <h4 className="text-[#1a237e] font-bold">John Adebayo</h4>
    <p className="text-gray-400 text-sm">Student</p>
    </div>
    </div>

    </div>
<div className="bg-white p-8 rounded-lg shadow-md flex-1 border-t-4 border-[#ffc107] hover:-translate-y-2 transition duration-300">

    
    <div className="flex gap-1 mb-4">
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    </div>

    {/* Quote */}
    <p className="text-gray-500 text-sm leading-relaxed mb-6">
    Crestview Academy has been an incredible journey for me. 
    The teachers are dedicated, the environment is motivating 
    and I have grown so much both academically and personally 
    since joining this great institution.
    </p>

    {/* Person */}
    <div className="flex items-center gap-3">
    <FaUserCircle size={40} color="#1a237e" />
    <div>
    <h4 className="text-[#1a237e] font-bold">John Adebayo</h4>
    <p className="text-gray-400 text-sm">Student</p>
    </div>
    </div>

    </div>

    
    <div className="bg-white p-8 rounded-lg shadow-md flex-1 border-t-4 border-[#ffc107] hover:-translate-y-2 transition duration-300">

    
    <div className="flex gap-1 mb-4">
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    </div>

    {/* Quote */}
    <p className="text-gray-500 text-sm leading-relaxed mb-6">
    Crestview Academy has been an incredible journey for me. 
    The teachers are dedicated, the environment is motivating 
    and I have grown so much both academically and personally 
    since joining this great institution.
    </p>

    {/* Person */}
    <div className="flex items-center gap-3">
    <FaUserCircle size={40} color="#1a237e" />
    <div>
    <h4 className="text-[#1a237e] font-bold">John Adebayo</h4>
    <p className="text-gray-400 text-sm">Student</p>
    </div>
    </div>

    </div>
    <div className="bg-white p-8 rounded-lg shadow-md flex-1 border-t-4 border-[#ffc107] hover:-translate-y-2 transition duration-300">

    
    <div className="flex gap-1 mb-4">
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    <FaStar color="#ffc107" />
    </div>

    {/* Quote */}
    <p className="text-gray-500 text-sm leading-relaxed mb-6">
    Crestview Academy has been an incredible journey for me. 
    The teachers are dedicated, the environment is motivating 
    and I have grown so much both academically and personally 
    since joining this great institution.
    </p>

    {/* Person */}
    <div className="flex items-center gap-3">
    <FaUserCircle size={40} color="#1a237e" />
    <div>
    <h4 className="text-[#1a237e] font-bold">John Adebayo</h4>
    <p className="text-gray-400 text-sm">Student</p>
    </div>
    </div>

    </div>

    </div>
    </div>
</>
)
}

export default Testimonial