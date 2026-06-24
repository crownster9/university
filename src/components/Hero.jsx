import hero from '../assets/hero.mp4';

function Hero(){
return (
<>

   <div className="relative h-screen overflow-hidden">

      <video autoPlay loop muted playsInline 
      className="opacity-100 top-0 left-0 w-full  h-full object-cover">
      <source src={hero} type="video/mp4"/></video>
    </div>
    <div className="bg-black opacity-40 absolute inset-0 h-screen mt-10  ">
    
     </div>
    <div className="font-serif absolute inset-0 flex flex-col justify-center items-center text-center px-4 ">
     <h1 className="font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-4">Shaping Tommorrow's Leaders</h1>   
        <p className="text-[#ffc107] font-bold text-lg md:text-base">Excellence in Education since 2005</p>
      <p className="text-white font-bold text-lg md:text-base">A place where knowledge meets Character</p>
      <div className="flex">
        <button className="py-1 px-7 mt-8 mr-2 md:mr-6 mx-auto rounded-sm cursor-pointer border-white border-2 text-white hover:bg-white hover:text-black font-semibold">Apply Now</button>
        <button className="py-1 px-10 mt-8  mx-auto rounded-sm cursor-pointer btn font-semibold">Login</button></div>
     </div>
</>
)

}

export default Hero