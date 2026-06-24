import {FaTrophy,FaUserGraduate,FaChartLine,FaSchool,FaArrowRight,FaClock,FaMapPin,FaCalendar} from 'react-icons/fa'
function Highlights() {
    const news = [
    { title: "National AI Research Hub Inaugurated at CrestView Campus", date: "May 12, 2026", tag: "Research", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500" },
    { title: "Innovation Team Secures $10M Grant for Sustainable Energy", date: "May 08, 2026", tag: "Innovation", img: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?auto=format&fit=crop&q=80&w=800&h=500" },
    { title: "Global Cultural Exchange Week Returns This November", date: "May 02, 2026", tag: "Campus Life", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800&h=500" },
  ];

  const events = [
    { day: "28", month: "MAY", title: "CrestView University", time: "18:00 PM", loc: "Main Auditorium" },
    { day: "12", month: "JUN", title: "International Tech Symposium", time: "10:00 AM", loc: "Science Block" },
    { day: "05", month: "JUL", title: "Summer Sports Championship", time: "08:30 AM", loc: "Olympic Field" },
    { day: "19", month: "AUG", title: "Alumni Homecoming Weekend", time: "All Day", loc: "University Grounds" },
  ];

return(
  <>
  <div className=" py-16 px-4 bg-[#f5f5f5]">
    <div className="flex gap-2 text-blue-900 w-full">
    <div className="tracking-widest font-semibold mb-12 md:text-6xl text-4xl text-start w-2/3 lg:w-full font-sans">Pioneering the Standard of Excellence </div>
    <div className="font-sans hidden  lg:flex items-center text-gray-500 tracking-wide text-end justify-end ">We don't just teach the future;we build it through a relentless commitment to research and discovery</div>
    </div>
    <div className="hover:transition-transform hover:translate-x-1 duration-300 text-end justify-end gap-2 items-center text-xs font-bold flex">EXPLORE OUR HISTORY<FaArrowRight className=''/></div>
    <div className="flex justify-between item  mt-6 gap-8 flex-wrap md:flex-nowrap lg:max-w-3/4 mx-auto">
    <div className="bg-white shadow-xl   border-t-2 bord text-center rounded-2xl border-[#ffc107] hover:translate-y-2 transition duration-300">
      <div className="w-20 h-20 font-extrabold rounded-full flex justify-center items-center flex-1 hover:translate-y-2 tansition duration-300 shadow-md mx-auto mb-6">
        <FaChartLine size={36} color='#1a237e'/>
      </div>
      <h1 className=" mb-4 font-extrabold text-4xl"><em className="">98%</em></h1>
      <h1 className="text-2xl font-extrabold ">Results</h1>
      <p className='p-4 text-gray-500'>Our students consistently achieve a 98% pass 
        rate in all major examinations. This is a 
        testament to the dedication of our teachers 
        and the hard work of our students who strive 
        for nothing but excellence in every subject 
        and every assessment they undertake.
      </p>
    </div>
    <div className="bg-white shadow-xl border-t-2 bord text-center rounded-2xl border-[#ffc107] hover:translate-y-2 transition duration-300">
      <div className="w-20 h-20 rounded-full flex justify-center items-center flex-1 hover:translate-y-2 tansition duration-300 shadow-md mx-auto mb-6">
        <FaTrophy size={36} color='#1a237e'/>
      </div>
      <h1 className=" mb-4 font-extrabold text-4xl"><em className="">20+</em></h1>
      <h1 className="text-2xl font-extrabold ">Achievements</h1>
      <p className='p-4 text-gray-500'>Our school is equipped with modern 
        laboratories, computer rooms, a well stocked 
        library, and excellent sports facilities. 
        Every space is carefully designed to give 
        students the best possible environment to 
        learn, grow and discover their full potential.
      </p>
    </div>
    <div className="bg-white  border-t-2 shadow-xl bord text-center rounded-2xl border-[#ffc107] hover:translate-y-2 transition duration-300">
      <div className="w-20 h-20 font-extrabold rounded-full flex justify-center items-center flex-1 hover:translate-y-2 tansition duration-300 shadow-md mx-auto mb-6">
        <FaSchool size={36} color='#1a237e'/>
      </div>
      <h1 className=" mb-4 font-extrabold text-4xl"><em className="">15+</em></h1>
      <h1 className="text-2xl font-extrabold ">Facilities</h1>
      <p className='p-4 text-gray-500'>Our students consistently achieve a 98% pass 
        rate in all major examinations. This is a 
        testament to the dedication of our teachers 
        and the hard work of our students who strive 
        for nothing but excellence in every subject 
        and every assessment they undertake.
      </p>
    </div>
   
    </div>
  </div>

    <section className="py-24 bg-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* News Column */}
          <div className="lg:w-8/12">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl  font-serif">University Press</h2>
                <div className="w-16 h-1 bg-[#ffc107] mt-3" />
              </div>
              <button className="text-[] text-xs font-bold tracking-widest uppercase hover:underline flex items-center group">
                All Stories <FaArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {news.map((item, idx) => (
                <div 
                  key={idx} 
                  whileHover={{ y: -5 }}
                  className={`group cursor-pointer ${idx === 0 ? "md:col-span-2 flex flex-col md:flex-row gap-10" : ""}`}
                >
                  <div className={`overflow-hidden relative ${idx === 0 ? "md:w-1/2 aspect-video shrink-0" : "aspect-video mb-6"}`}>
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-[#ffc107] text-[#1a237e] text-[9px] font-bold px-2 py-1 tracking-wider uppercase">
                      {item.tag}
                    </div>
                  </div>
                  <div className={idx === 0 ? "md:w-1/2 flex flex-col justify-center py-4" : ""}>
                    <div className="text-[#ffc107]/60 text-xs font-bold mb-3 flex items-center uppercase tracking-widest">
                      <FaClock size={12} className="mr-2" /> {item.date}
                    </div>
                    <h3 className={`font-serif leading-tight group-hover:text-[#ffc107] transition-colors ${idx === 0 ? "text-3xl md:text-4xl" : "text-xl"}`}>
                      {item.title}
                    </h3>
                    {idx === 0 && (
                      <p className="mt-6 text-white/50 font-sans text-sm leading-relaxed line-clamp-3">
                        CrestView University is proud to announce the next phase of its 5G-ready campus infrastructure...
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Events Column */}
          <div className="lg:w-4/12">
            <div className="mb-12">
              <h2 className="text-4xl font-serif">Campus Events</h2>
              <div className="w-16 h-1 bg-[#ffc107] mt-3" />
            </div>

            <div className="space-y-6">
              {events.map((event, idx) => (
                <div key={idx} className="flex items-center gap-6 group cursor-pointer border-b border-white/5 pb-6 last:border-0">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 flex flex-col items-center justify-center text-white group-hover:bg-[#ffc107] group-hover:text-[#1a237e] transition-all shrink-0">
                    <span className="text-2xl font-bold font-serif leading-none">{event.day}</span>
                    <span className="text-[9px] font-bold uppercase mt-1 tracking-widest">{event.month}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg group-hover:text-[#ffc107] transition-colors line-clamp-1">{event.title}</h3>
                    <div className="flex flex-col mt-1 text-[11px] text-white/40 font-medium">
                      <span className="flex items-center"><FaClock size={12} className="mr-2 opacity-50" /> {event.time}</span>
                      <span className="flex items-center mt-1"><FaMapPin size={12} className="mr-2 opacity-50" /> {event.loc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-10 py-4 border border-white/20 text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all flex items-center justify-center group">
              Full Calendar Access <FaCalendar size={14} className="ml-3 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
  </>
)

}

export default Highlights