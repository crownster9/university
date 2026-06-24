import { FaBullhorn, FaGraduationCap, FaLinkedin,FaEnvelope,FaAmericanSignLanguageInterpreting, FaTrophy, FaBookOpen, FaMicrophone, FaMedal, FaArrowRight } from 'react-icons/fa'
function Quicklinks() {
 const staff = [
    { name: "Dr. Julian Vance", title: "Dean of Computing", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Prof. Sarah Chen", title: "Head of Medical Sciences", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Marcus Thorne", title: "Director of Research", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
    { name: "Dr. Amara Okoro", title: "Dean of Student Affairs", image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div className="text-left">
            <h2 className="text-4xl font-serif text-[#1a237e] uppercase font-bold">Academic Leadership</h2>
            <div className="w-16 h-1 border-[#ffc107] mt-4" />
          </div>
          <button className="text-[#1a237e]] font-bold text-xs uppercase tracking-widest hover:text-[#ffc107] transition-colors flex items-center">
            Full Faculty Directory <FaArrowRight size={14} className="ml-2" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {staff.map((s, idx) => (
            <div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 shadow-sm border-t-2 border-[#ffc107] group"
            >
              <div className="relative mb-6 aspect-square overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={s.image} alt={s.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="text-lg font-serif text-[#1a237e] font-bold mb-1">{s.name}</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em]">{s.title}</p>
              <div className="mt-4 flex space-x-3 text-slate-300">
                <FaLinkedin size={14} className="hover:text-[#1a237e] cursor-pointer transition-colors" />
                <FaEnvelope size={14} className="hover:text-[#1a237e] cursor-pointer transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}

export default Quicklinks