import Navbar from "../components/Navbar" 
import about from '../assets/aboutpic.jpg'
import building from '../assets/building.jpg'
import Footer from "../components/footer"
import {FaEye, FaBullseye, FaStar} from 'react-icons/fa'
import { FaShieldAlt,FaStarAndCrescent } from "react-icons/fa"
import Principal_greetings from '../components/Principal _greetings'
import principal from '../assets/Principal.jpg'
function About() {
    return(
<>
<Navbar/>
<section className="relative overflow-hidden">

    <div className="hero h-64 bg-cover md:h-96 bg-no-repeat">
    </div>
    <div className="absolute h-64 md:h-96 inset-0 bg-black opacity-60"></div>
         <h1 className=" absolute inset-0 translate-y-15 text-center pt-15 font-bold text-2xl lg:text-4xl text-white">About Us</h1>
    <div className="absolute inset-0 translate-y-25  text-center pt-15 font-normal lg:text-2xl text-white">
        <span className="text-yellow-500">Home </span>
        <span className="">&gt;</span>
        <span className=""> About Us</span>
    </div>
<p className="text-start text-yellow-500 text-sm font-bold pl-7 mt-7 lg:text-lg">THE ORIGINS</p>
    <div className="pl-7  font-family text-start  text-blue-900 font-extrabold text-5xl flex flex-col lg:gap-2 lg:flex-row ">Founded in <span className="text-yellow-500"> Purpose. </span>Refined in Time.</div>
     <div className="flex flex-col md:flex-row px-15 gap-3 justify-evenly ">
        <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-yellow-500 first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 leading-relaxed text-start md:min-w-1/2 md:text-start lg:tracking-widest text-sm lg:pt-6 ">
            Crestview University was established with a 
            bold vision  to create an institution that 
            would stand as a beacon of academic excellence, 
            innovation and character development in Africa 
            and beyond.

            For over five decades we have remained 
            committed to providing world class education 
            across multiple faculties and disciplines. 
            Our programmes are designed to equip students 
            with both theoretical knowledge and practical 
            skills needed to thrive in a rapidly changing 
            world.

            We believe that true education goes beyond 
            the classroom. At Crestview University every 
            student is nurtured holistically  
            intellectually, socially and morally  to 
            become a well rounded individual capable of 
            making meaningful contributions to society.

            Our faculty comprises some of the finest 
            academics and industry professionals who bring 
            a wealth of knowledge and real world experience 
            into every lecture hall and laboratory.
        </p>
        <div className="md:min-w-1/2 mb-5">
            <img src={building} className="h-96 w-full"/>
        </div>
     </div>
     <div className="bg-[#1a237e] px-10 pb-10 lg:px-20">
      <pack className="lg:flex gap-2 items-end lg:gap-5 ">
        <div className="">
     <div className="font-bold font-serif tracking-wide text-white text-center text-4xl lg:flex lg:flex-col pt-15 md:gap-2 leading-none lg:text-6xl">The <span>Trust.</span> </div>
     <p className="text-sm text-center text-yellow-500 font-bold capitalize tracking-widest py-2">our universal mandate</p>
     </div>
     <h3 className="text-start border-l-2 pl-5 border-yellow-500 text-gray-400 mt-4 mb-8">"We govern our students not with rules, but with expectations of magnificence."</h3>
     </pack>
     <div className="lg:flex ">
     <div className="container">
        <div className="mb-5 relative  h-90 opacity-10  bg-black flex w-7/8  "></div>
        <div className="absolute  -translate-y-82">
     <div className=" pl-10 flex items-center text-white  ">
     < FaShieldAlt size={40} className="text-yellow-500"/>
     <h2 className="pl-6 text-white font-serif text-3xl tracking-widest font-bold">Integrity</h2>
      
     </div>
     <div className="flex mt-6 pl-10 flex-wrap flex-row container max-w-5/7 lg:w-1/2 px-4 md:pr-27 lg:pr-35 ">
     <p className="text-gray-400 ">We believe that Knowledge without ethics is a hollow shell.   
      At Crestview,integrity is thee bedrock of every equation, every poem, and every scientific discovery.
     </p></div>
     </div>
     </div>
       <div className="container">
        <div className="mb-5 relative  h-90 opacity-10  bg-black flex w-7/8 "></div>
        <div className="absolute  -translate-y-82">
     <div className=" pl-10 flex items-center text-white  ">
     < FaStar size={40} className="text-yellow-500"/>
     <h2 className="pl-6 text-white font-serif text-3xl tracking-widest font-bold ">Innovation</h2>
     
     </div>
     <p className="flex max-w-5/7 w-5/7 pl-10 text-gray-400 mt-6 px-4 flex-wrap">We believe that Knowlege without ethics is a hollow shell.
        At Crestview, integrity is thee bedrock of every equation, every poem, and every scientific discovery.
     </p>
     </div>
     </div>
     
     </div>
     </div>
     <div className="flex flex-col md:flex-row gap-8 lg:px-20 bg-gray-100 mx-auto px-5 pb-10  pt-10">
        <div className="flex flex-col shadow-2xl p-6 bg-white">
            <div className="flex gap-2 items-center text-center justify-center border-2">
            <FaEye size={25} className=""/>
            <h4 className="font-bold text-2xl md:text-4xl text-[#1a237e] ">Vision</h4>
            </div>
            <div className="border-b-2 border-black mb-2"></div>
            <p className="tracking-widest flex justify-around text-gray-500 ">
                To become a world class institution 
                recognized globally for academic excellence, 
                cutting edge research and innovation. We 
                aspire to produce graduates who are not only 
                professionally competent but are also morally 
                upright, socially responsible and ready to 
                lead their communities and nations into a 
                brighter and more prosperous future.
            </p>
           </div>
           <div className="flex flex-col shadow-2xl p-6 bg-white">
          <div className="flex gap-2 items-center text-center justify-center border-2">
            <FaBullseye size={25} className="text-red-700"/>
            <h4 className="font-bold text-2xl md:text-4xl text-[#1a237e] ">Mission</h4>
            </div>
            <div className="border-b-2 border-black mb-2"></div>
            <p className="tracking-widest flex justify-around text-gray-500 ">
              To provide an exceptional educational 
              experience that empowers every student with 
              the knowledge, skills and values needed to 
              thrive in a rapidly changing world. We are 
              committed to fostering a culture of 
              excellence, integrity and service in all 
              our academic programmes, research activities 
              and community engagements across all faculties.
              </p>
           </div>
           </div>
           <div className="flex flex-wrap-reverse m-2 w-full md:flex-nowrap">
           <div className="bg-white text-center md:p-2 md:max-w-1/2 p-5 tracking-widest m-1  mt-5 space-y-4">
               <h1 className="text-4xl flex flex-wrap font-serif justify-center text-center mb-5">A Word from the Vice Chancellor</h1>
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
                  
               </p>
                <p className="text-center tracking-widest font-light">
                 Our vision at Crestview University has always 
                 been simple  to raise a generation of 
                 confident, compassionate and competent leaders 
                 who will make a positive impact in their 
                 communities and beyond. We do not just teach 
                 subjects, we build futures. Every teacher, 
                 every facility and every programme in this 
                 institution exists for one purpose  the total 
                 development of our students in every area of 
                 their lives.
                  <br/><br/>
                   Prof. Emmanuel Okafor
                     Vice Chancellor, Crestview Academy
               </p>
               </div>
           
           <div className=" mt-5">
            <img src={principal} className='sm:w-7/8 w-1/2 min-w-7/8 mx-auto mt-25 lg:mt-15 max-w-7/8  lg:max-w-1/4 md:max-h-3/4'/>
           </div></div>

           <div className="relative mt-5 max-w-4xl md:p-0 px-4 mx-auto">
           <div className="absolute left-1/2 w-1 h-full bg-[#ffc107] top-0"></div>
           <div className="flex justify-between mb-12">
            <div className="w-1/2 pr-8 flex flex-col text-right">
            <h2 className="font-bold text-lg">1970</h2 >
            <span className="font-bold text-lg">University Founded</span>
           <p >
        
            Crestview University was established in 1970 
            with just three faculties and a vision to 
            provide quality education to students across 
            the nation. It began with a small but 
            dedicated team of academics committed to 
            excellence from day one.
           </p>
            </div>
            <div className="rounded-full w-4 h-4 bg-[#ffc107] absolute -translate-1/2 left-1/2"></div>
 <div className="w-1/2 pl-8 flex flex-col text-left">
            <h2 className="font-bold text-lg">1985</h2 >
            <span className="font-bold text-lg"> First Graduation Ceremony</span>
           <p >
          
           In 1985 Crestview University proudly held 
           its first graduation ceremony producing its 
           pioneer set of graduates who went on to 
           become leaders in various sectors including 
           medicine, law, engineering and public service.
           </p>
            </div>   
           </div>
         <div className="absolute left-1/2 w-1 h-full bg-[#ffc107] top-0"></div>

           <div className="flex justify-between mb-12">
            
            <div className="rounded-full w-4 h-4 bg-[#ffc107] absolute -translate-1/2 left-1/2"></div>
           <div className="w-1/2 pr-8 flex flex-col text-right">
            <h2 className="font-bold text-lg">2000</h2 >
            <span className="font-bold text-lg">Major Expansion</span>
           <p >
          
          By the year 2000 the university had grown 
          significantly expanding to 15 faculties and 
          welcoming thousands of students from across 
          the country and beyond. New facilities and 
          laboratories were built to support this 
          incredible growth.
           </p>
           
            </div>
             <div className="w-1/2 pl-8 flex flex-col text-left">
            <h2 className="font-bold text-lg">2024</h2 >
            <span className="font-bold text-lg">University Founded</span>
           <p >
           Ranked Top University in Africa
           In 2024 Crestview University was officially 
           ranked among the top universities in Africa 
           for academic excellence, research output and 
           student satisfaction. This achievement stands 
           as a testament to the hard work of our staff 
           students and management over the decades.
           </p>
            </div>
           </div>

           
        
                                                                                                                        </div>
           
</section>

<Footer/>
</>
    )
}

export default About