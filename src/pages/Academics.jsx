import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react";
import { FaEnvelope,FaUserAlt,FaPhoneAlt, FaStar, FaGraduationCap, FaFirefoxBrowser,FaArrowRight, FaSearch, FaHeadphones, FaGlobe, FaCalendar } from "react-icons/fa"
function Academics(){
  const [activeSchool, setActiveSchool] = useState('all');
  const [levelFilter, setLevelFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
     const schools = [
    {
      id: "computing",
      title: "School of Computing & Intelligent Systems",
      tagline: "BUILDING COGNITIVE ARCHITECTURES",
      description: "Ranked as a premier center for AI research, bridging the gap between moral computational algorithms and human neural mapping.",
      dean: "Dr. Richard Vance, Ph.D.",
      stats: { students: "1,200+", funding: "$18.5M", rank: "Top 12" },
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800&h=600",
      colorTag: "computing",
    },
    {
      id: "engineering",
      title: "Academy of Sustainable Infrastructure",
      tagline: "DESIGNING URBAN HARMONY",
      description: "Pioneering green energy systems, bio-compatible architectural designs, and intelligent smart grid frameworks for urban life.",
      dean: "Prof. Cecilia Sterling, M.Arch",
      stats: { students: "950+", funding: "$14.2M", rank: "Top 15" },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600",
      colorTag: "engineering",
    },
    {
      id: "science",
      title: "Faculty of Neurological Biotech & Care",
      tagline: "HEALING THE HUMAN MATRIX",
      description: "At the frontier of brain-computer interface (BCI) technologies, bio-tech development, genetic therapies, and modern cellular medicine.",
      dean: "Dr. Evelyn Croft, MD, Ph.D.",
      stats: { students: "800+", funding: "$22.0M", rank: "Top 8" },
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800&h=600",
      colorTag: "science",
    },
    {
      id: "humanities",
      title: "College of Digital Humanism",
      tagline: "THE HUMAN ELEMENT IN COMPUTATION",
      description: "Exploring digital sociology, philosophical computational ethics, policy layout, and future creative communications.",
      dean: "Dr. Alistair Kane, Ph.D.",
      stats: { students: "1,100+", funding: "$8.9M", rank: "Top 20" },
      image: "https://images.unsplash.com/photo-1524178232363-1fb28f74b671?auto=format&fit=crop&q=80&w=800&h=600",
      colorTag: "humanities",
    }
  ];

  const degrees = [
    {
      id: "sys-int",
      schoolId: "computing",
      level: "undergraduate",
      name: "B.Sc. in Intelligent Systems & AI Architecture",
      short: "BS IS",
      duration: "4 Academic Years",
      credits: "120 Total Credits",
      tagline: "Build adaptive algorithms, advanced neural networks, and self-learning frameworks.",
      details: "This signature curriculum prepares graduates for elite computing roles. It balances deep algorithmic design with AI alignment rules, ensuring our scholars shape autonomous machines responsibly.",
      courses: ["Deep Learning & Neural Networks", "Computational Ethics & Decolonial Tech", "Advanced Probability and Calculus", "Sovereign Systems & Decentralized Agents"],
      careers: ["Lead Autonomous AI Architect", "Neural Systems Engineer", "AI Alignment Specialist"],
      tuition: "$32,000 / Year"
    },
    {
      id: "alg-gov",
      schoolId: "computing",
      level: "postgraduate",
      name: "M.Sc. in Algorithmic Governance & Ethics",
      short: "MS AGE",
      duration: "2 Academic Years",
      credits: "48 Total Credits",
      tagline: "Establish safety protocols, model auditing procedures, and computational risk policies.",
      details: "An elite program tailored for developers and policy minds defining international safety norms. Scholars conduct research alongside leading technology consortiums.",
      courses: ["System Sovereignty Laws", "Autonomous Model Auditing Frameworks", "Trust & Safety Verification", "Machine Ethics Seminar"],
      careers: ["Chief Technology Ethics Officer", "AI Policy Director", "Model Integrity Specialist"],
      tuition: "$28,500 / Year"
    },
    {
      id: "arch-bio",
      schoolId: "engineering",
      level: "undergraduate",
      name: "B.Sc. in Architectural Bio-Engineering",
      short: "BS ABE",
      duration: "4 Academic Years",
      credits: "128 Total Credits",
      tagline: "Fusing clean biology with future structural engineering and bio-materials.",
      details: "Students design active living infrastructure, incorporating bio-reactors, thermal airflow, smart-grids, and organic materials to reduce global urbanization impacts.",
      courses: ["Structural Thermodynamics", "Bio-mimetic Structural Systems", "Smart Grid Integration Metrics", "Ecological Design Studios"],
      careers: ["Ecological Infrastructure Specialist", "Sustainable Materials Researcher", "Bio-Architect"],
      tuition: "$31,000 / Year"
    },
    {
      id: "smart-grid",
      schoolId: "engineering",
      level: "postgraduate",
      name: "M.Sc. in Smart Grid & Sustainable Infrastructures",
      short: "MS SGSI",
      duration: "2 Academic Years",
      credits: "52 Total Credits",
      tagline: "Scale responsive city networks with automated system load routing.",
      details: "Designed to tackle zero-emission city design. High-level mathematical modelling of smart energy loops integrated with national and localized grid structures.",
      courses: ["Renewable Generation Systems", "Grid Security Protocols", "Smart-loop Microgrids", "Urban Expansion Logistics"],
      careers: ["Grid Modernization Consultant", "Municipal Green Lead", "Energy Grid Scientist"],
      tuition: "$29,000 / Year"
    },
    {
      id: "comp-neuro",
      schoolId: "science",
      level: "undergraduate",
      name: "B.Sc. in Computational Neuroscience",
      short: "BS CN",
      duration: "4 Academic Years",
      credits: "120 Total Credits",
      tagline: "Map clinical brain networks utilizing computational frameworks.",
      details: "A cutting-edge crossroads of computational modeling and cellular medicine. Program students model brain activation and work directly on neuro-prosthetic technology in our labs.",
      courses: ["Organic Neurobiology", "Bio-signal Processing and Python Integration", "Neural Informatics Systems", "Cognitive Machine Modeling"],
      careers: ["Brain-Computer Interface Developer", "Neurotech Device Specialist", "Prosthetics Engineer"],
      tuition: "$33,500 / Year"
    },
    {
      id: "md-phd-neuro",
      schoolId: "science",
      level: "postgraduate",
      name: "MD / Ph.D. in Neuro-Biotechnology (Combined)",
      short: "MD-PhD NBT",
      duration: "7 Academic Years (Combined)",
      credits: "240 Credits total",
      tagline: "Become a pathfinder clinician-scientist on the frontier of biotechnology.",
      details: "Highly competitive, fully integrated curriculum focusing on genetic therapies, deep-brain surgical tech, and neuro-diagnostics. Includes full residency simulation.",
      courses: ["Clinical Neurosurgery Principles", "Genetic Gene Therapy Methods", "Bio-medical Robotics Engineering", "Advanced Oncology Protocols"],
      careers: ["Surgical Scientist", "Biotech Lab Director", "Genomic Therapeutics Advisor"],
      tuition: "$42,000 / Year"
    },
    {
      id: "dig-soc",
      schoolId: "humanities",
      level: "undergraduate",
      name: "B.A. in Digital Sociology & Culture",
      short: "BA DSC",
      duration: "4 Academic Years",
      credits: "120 Total Credits",
      tagline: "Research digital networks, interface culture patterns, and public data bias.",
      details: "Provides scholars with elite quantitative data tools and qualitative ethnographic understanding to study dynamic networks and creative media environments.",
      courses: ["Data Justice and Ethics", "Digital Cultural Cartography", "Internet Platform Power", "Computational Sociology Fundamentals"],
      careers: ["UX Network Researcher", "Digital Media Architect", "Public Policy Strategist"],
      tuition: "$27,000 / Year"
    },
    {
      id: "phil-mind",
      schoolId: "humanities",
      level: "postgraduate",
      name: "M.A. in Cognitive Philosophy & Tech Ethics",
      short: "MA CPTE",
      duration: "2 Academic Years",
      credits: "45 Total Credits",
      tagline: "Conceptualize machine consciousness, aesthetics of digital tech, and post-humanism.",
      details: "A premium intellectual exploration of future intelligence, epistemology, and ethical systems. Graduates frequently place into top doctoral fellowships or global standard agencies.",
      courses: ["Models of Mind & Metaphysics", "Aesthetics & Power in Algorithmic Art", "Conscious Machine Epistemologies", "Ethics of Future Beings"],
      careers: ["Technology Ethics Advisor", "Academic Researcher", "Policy Consortium Writer"],
      tuition: "$25,000 / Year"
    }
  ];

  const filteredDegrees = degrees.filter(degree => {
    const matchesSchool = activeSchool === 'all' || degree.schoolId === activeSchool;
    const matchesLevel = levelFilter === 'all' || degree.level === levelFilter;
    const matchesSearch = 
      degree.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      degree.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      degree.short.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSchool && matchesLevel && matchesSearch;
  });
  return(
     <>
     <Navbar/>
    <section className="">
     <section className="pt-10 space-y-10">
                <main className="relative  main h-lvh bg-center bg-no-repeat  w-full"></main>
                <div className=" absolute inset-0 h-screen mt-10 opacity-90 bg-[#1a237e]"></div>
                <div className="inset-x-0 absolute mb-5 flex items-center gap-2 justify-center text-center -translate-y-130">
                    <div className="h-1 w-16 bg-yellow-500"></div>
                    <span className="text-sm font-bold tracking-widest uppercase text-yellow-500">Curriculum and innovation</span>
                   <div className="h-1 w-16 bg-yellow-500"></div>
                </div>
                <div className="absolute flex-col tracking-widest text-5xl font-serif lg:text-6xl gap-2 justify-center items-center text-center inset-x-0 -translate-y-120 uppercase text-white">Academics<span className="text-yellow-500"><br/>EXCELLENCE</span></div>
                <p className="absolute -translate-y-90 text-center lg:px-50 lg:tracking-widest lg:text-lg flex tracking-wide px-10 mt-5 text-gray-400 justify-center ">
                   At CrestView University,We reject default learning. Our intellectual pathways bridge deep scientific rigor with computational intelligence to cultivate the future standard of leadership.
                </p>
      </section>
    </section>
               <section className="grid gap-2 grid-cols-2 px-5 pb-5 text-start space-y-7">
               <div className="flex gap-4 items-center">
               <FaUserAlt size={40} className="text-yellow-500 border-0 p-2 bg-gray-200 shadow-2xl rounded-md"/>
               <div className="flex-colspace-x-2 font-semibold text-sm ">
                   <p className="text-lg text-[#1a237e]">
                       12:1 
                   </p>
                   <p className="uppercase text-xs tracking-wide text-gray-700">
                   student-faculty ratio
                   </p>
               </div>
               </div>
                <div className="flex gap-4 items-center">
               <FaGraduationCap size={40} className="text-yellow-500 border-0 p-2 bg-gray-200 shadow-2xl rounded-md"/>
               <div className="flex-colspace-x-2 font-semibold text-sm ">
                   <p className="text-lg text-[#1a237e]">
                       100% 
                   </p>
                   <p className="uppercase text-xs tracking-wide text-gray-700">
                   PH.D. term faculty focus
                   </p>
               </div>
               </div>
                <div className="flex gap-4 items-center">
               <FaStar size={40} className="text-yellow-500 border-0 p-2 bg-gray-200 shadow-2xl rounded-md"/>
               <div className="flex-colspace-x-2 font-semibold text-sm ">
                   <p className="text-lg text-[#1a237e]">
                       $45.5M
                   </p>
                   <p className="uppercase text-xs tracking-wide text-gray-700">
                   annual research funding
                   </p>
               </div>
               </div>
              <div className="flex gap-4 items-center">
               <FaFirefoxBrowser size={40} className="text-yellow-500 border-0 p-2 bg-gray-200 shadow-2xl rounded-md"/>
               <div className="flex-colspace-x-2 font-semibold text-sm ">
                   <p className="text-lg text-[#1a237e]">
                       40+
                   </p>
                   <p className="uppercase text-xs tracking-wide text-gray-700">
                   international study loops
                   </p>
               </div>
               </div>
              
               </section>   
               <section className="bg-slate-50 py-8 px-5">
                <div className="lg:flex gap-2 ">
                    <div className="w-1/2">
                <h1 className="border-b-1/2 text-4xl pb-1 font-serif gap-2 lg:flex uppercase">academic <div>Divisions</div></h1>
                <div className="bg-yellow-500 w-16 h-1"></div>
                </div>
                <p className="capitalize pt-2 lg:pt-0 pb-4  lg:w-1/2">
                    Four world-class institutions framing interdisciplinary knowledge.select a division 
                    below to isolate relevant degree options database
                </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-2 grid-cols-1 mt-5">
                  <div className="border-t-3 shadow-2xl border-[#1a237e] p-5 space-y-2">
                  <p className="text-yellow-500 uppercase font-bold text-xs ">building cognitive architectures</p>
                  <p className="font-serif text-[#1a237e]">School of Computing & Intelligent Systems</p>
                  <p className="text-xs">
                    Ranked as a premier center for AI research, bridging the gap between moral 
                    computational algorithms and human neural mapping
                  </p>
                  <div className="pt-28 space-y-2">
                    <div className="w-full h-px bg-gray-200"></div>
                    <h1 className="uppercase test-sm font-semibold">division summary</h1>
                    <div className="grid grid-cols-3 pt-2 gap-2">
                        <div className="bg-slate-200 space-y-0.5 py-2 items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">1,200+</p>
                            <p className="text-xs text-gray-500 ">scholars</p>
                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">$18.5M</p>
                            <p className="text-xs text-gray-500 ">Grants</p>

                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold text-yellow-500">Top 12</p>
                            <p className="text-xs text-gray-500 ">Global</p>

                        </div>
                    </div>

                  </div>
                  </div>
                   <div className="border-t-3 shadow-2xl border-[#1a237e] p-5 space-y-2">
                  <p className="text-yellow-500 uppercase font-bold text-xs ">Designing Urban harmony</p>
                  <p className="font-serif text-[#1a237e]">Academy of Sustainable infrastructure</p>
                  <p className="text-xs">
                   Pioneering green energy systems,bio-compatible architectural designs,
                    and intelligent smart grid frameworks for urban life.
                  </p>
                  <div className="pt-28 space-y-2">
                    <div className="w-full h-px bg-gray-200"></div>
                    <h1 className="uppercase test-sm font-semibold">division summary</h1>
                    <div className="grid grid-cols-3 pt-2 gap-2">
                        <div className="bg-slate-200 space-y-0.5 py-2 items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">950+</p>
                            <p className="text-xs text-gray-500 ">scholars</p>
                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">$14.2M</p>
                            <p className="text-xs text-gray-500 ">Grants</p>

                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold text-yellow-500">Top 15</p>
                            <p className="text-xs text-gray-500 ">Global</p>

                        </div>
                    </div>

                  </div>
                  </div>
                   <div className="border-t-3 shadow-2xl border-[#1a237e] p-5 space-y-2">
                  <p className="text-yellow-500 uppercase font-bold text-xs ">Healing the human matrix</p>
                  <p className="font-serif text-[#1a237e]">Faculty of Neurological Biotech & Care</p>
                  <p className="text-xs">
                    At the forntier of brain-computer  interface(Bci) technologies,bio-tech dvelopment,
                    genetic therapies,and modern cellular medicine.
                  </p>
                  <div className="pt-28 space-y-2">
                    <div className="w-full h-px bg-gray-200"></div>
                    <h1 className="uppercase test-sm font-semibold">division summary</h1>
                    <div className="grid grid-cols-3 pt-2 gap-2">
                        <div className="bg-slate-200 space-y-0.5 py-2 items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">800+</p>
                            <p className="text-xs text-gray-500 ">scholars</p>
                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">$22.0M</p>
                            <p className="text-xs text-gray-500 ">Grants</p>

                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold text-yellow-500">Top 8</p>
                            <p className="text-xs text-gray-500 ">Global</p>

                        </div>
                    </div>

                  </div>
                  </div>
                   <div className="border-t-3 shadow-2xl border-[#1a237e] p-5 space-y-2">
                  <p className="text-yellow-500 uppercase font-bold text-xs ">building cognitive architectures</p>
                  <p className="font-serif text-[#1a237e]">School of Computing & Intelligent Systems</p>
                  <p className="text-xs">
                    Exploring digital sociology,philosophical computational ethics,policy layout
                    ,and future creative communications.
                  </p>
                  <div className="pt-28 space-y-2">
                    <div className="w-full h-px bg-gray-200"></div>
                    <h1 className="uppercase test-sm font-semibold">division summary</h1>
                    <div className="grid grid-cols-3 pt-2 gap-2">
                        <div className="bg-slate-200 space-y-0.5 py-2 items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">1,100+</p>
                            <p className="text-xs text-gray-500 ">scholars</p>
                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold ">$8.5M</p>
                            <p className="text-xs text-gray-500 ">Grants</p>

                        </div>
                        <div className="bg-slate-200 space-y-0.5 py-2 container items-center flex flex-col w-27 h-13">
                            <p className="text-xs font-semibold text-yellow-500">Top 20</p>
                            <p className="text-xs text-gray-500 ">Global</p>

                        </div>
                    </div>

                  </div>
                  </div>
                </div>
               </section>

    <div className="pt-24 bg-white font-sans min-h-screen">

      {/* Schools and Divisions */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-[#1a237e] mb-2 uppercase tracking-tight">Academic Divisions</h2>
            <div className="w-16 h-1 bg-yellow-500 mt-3" />
          </div>
          <p className="text-slate-500 max-w-md font-light text-sm">
            Four world-class institutions framing interdisciplinary knowledge. Select a division below to isolate relevant degree options database.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {schools.map((school) => (
            <div 
              key={school.id}
              whileHover={{ y: -6 }}
              onClick={() => {
                setActiveSchool(school.id);
                const el = document.getElementById('search-catalog');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`bg-white border-t-4 ${activeSchool === school.id ? "border-yellow-500" : "border-[#1a237e]"} p-6 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-95 group`}
            >
              <div>
                <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-yellow-500 mb-3">
                  {school.tagline}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1a237e] mb-4 leading-snug group-hover:text-yellow-500 transition-colors">
                  {school.title}
                </h3>
                <p className="text-slate-500 text-xs font-light leading-relaxed">
                  {school.description}
                </p>
              </div>

              <div>
                <div className="border-t border-slate-100 pt-4 mt-6">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-2">DIVISION SUMMARY</div>
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-sans font-medium text-[#1a237e]">
                    <div className="bg-slate-50 p-1.5 rounded">
                      <div className="font-bold">{school.stats.students}</div>
                      <div className="text-[8px] text-slate-400 uppercase">Scholars</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded">
                      <div className="font-bold">{school.stats.funding}</div>
                      <div className="text-[8px] text-slate-400 uppercase">Grants</div>
                    </div>
                    <div className="bg-slate-50 p-1.5 rounded text-yellow-500font-bold">
                      <div>{school.stats.rank}</div>
                      <div className="text-[8px] text-slate-400 uppercase font-medium">Global</div>
                    </div>
                  </div>
                </div>
                <div className="text-right text-[10px] font-bold text-[#1a237e] uppercase tracking-wider mt-4 group-hover:text-yellow-500 transition-colors flex items-center justify-end">
                  Focus Programs <FaArrowRight size={12} className="ml-1 md:translate-x-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Program Catalog Engine */}
      <section id="search-catalog" className="py-24 bg-slate-50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">Live Catalog Search</span>
            <h2 className="text-4xl font-serif text-[#1a237e] font-bold uppercase tracking-tight">Interactive Program Finder</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
          </div>

          {/* Interactive Control Console */}
          <div className="bg-white p-6 shadow-md border-b-4 border-[#1a237e] mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* School Filter Pill Tabs */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto">
              {[
                { label: 'ALL DIVISIONS', id: 'all' },
                { label: 'COMPUTING', id: 'computing' },
                { label: 'ENGINEERING', id: 'engineering' },
                { label: 'NEUROLOGY', id: 'science' },
                { label: 'HUMANITIES', id: 'humanities' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSchool(tab.id)}
                  className={`text-[10px] font-bold py-2.5 px-5 transition-all uppercase tracking-widest cursor-pointer rounded-sm ${
                    activeSchool === tab.id 
                    ? 'bg-[#1a237e] text-white' 
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-[#1a237e]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Degree Level selectors & Search input */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <div className="flex bg-slate-100 p-1 rounded-sm shrink-0">
                {[
                  { label: "ALL LEVELS", id: "all" },
                  { label: "BACHELORS", id: "undergraduate" },
                  { label: "MASTERS/PH.D", id: "postgraduate" }
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    onClick={() => setLevelFilter(lvl.id )}
                    className={`text-[9px] font-bold px-3.5 py-1.5 rounded-sm uppercase tracking-wider transition-colors cursor-pointer ${
                      levelFilter === lvl.id 
                      ? "bg-white text-[#1a237e]shadow-sm" 
                      : "text-slate-500 hover:text-[#1a237e]"
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search programs e.g. neural..."
                  className="w-full bg-slate-100 py-2.5 pl-10 pr-4 text-xs font-sans rounded-sm outline-none border border-transparent focus:border-yellow-500 focus:bg-white transition-all text-slate-700 font-medium"
                />
                <FaSearch size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')} 
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-bold hover:text-slate-600"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Catalog Yield */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div mode="popLayout">
              {filteredDegrees.map((degree) => (
                <div
                  layout
                  key={degree.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-8 shadow-sm hover:shadow-lg transition-all border-l-4 border-yellow-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-yellow-500 font-bold text-[9px] tracking-[0.25em] uppercase bg-[#1a237e]/5 px-2 py-1">
                        {degree.short} • {degree.level === 'undergraduate' ? "UNDERGRADUATE" : "POSTGRADUATE"}
                      </span>
                      <span className="text-[10px] text-slate-400 font-semibold">{degree.duration}</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-serif font-bold text-[#1a237e] mb-3 leading-snug">
                      {degree.name}
                    </h4>
                    <p className="text-xs text-slate-500 italic mb-6">
                      "{degree.tagline}"
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-5 flex items-center justify-between">
                    <span className="text-[11px] font-sans font-medium text-slate-400">{degree.credits}</span>
                    <button 
                      onClick={() => setSelectedDegree(degree)}
                      className="text-xs font-bold text-[#1a237e] underline decoration-yellow-500 decoration-2 underline-offset-4 hover:text-yellow-500 cursor-pointer transition-colors"
                    >
                      Expand Syllabus & Outcomes
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDegrees.length === 0 && (
              <div className="col-span-1 md:col-span-2 bg-white border border-slate-200 py-16 px-8 text-center rounded-sm">
                <div className="w-16 h-16 bg-slate-50 flex items-center justify-center rounded-full mx-auto mb-4">
                  <GraduationCap size={32} className="text-slate-400 font-light" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1a237e] mb-2">No Matching Pathways Found</h4>
                <p className="text-slate-400 text-xs shrink-0 max-w-md mx-auto">
                  Adjust your criteria filters or clear search values to browse the comprehensive curriculum checklist.
                </p>
                <button
                  onClick={() => { setActiveSchool('all'); setLevelFilter('all'); setSearchQuery(''); }}
                  className="mt-6 bg-[#1a237e] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-yellow-500 px-6 py-3 rounded-sm transition-colors"
                >
                  Reset Catalog Console
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Degree Interactive Modal Showcase Portal */}
      <div>
        {selectedDegree && (
          <div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1a237e]/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-t-8 border-yellow-500 relative p-8 md:p-12"
            >
              {/* Reset Control */}
              <button 
                onClick={() => setSelectedDegree(null)}
                className="absolute right-6 top-6 w-10 h-10 bg-slate-100 hover:bg-yellow-500 hover:text-[#1a237e] text-slate-500 rounded-full flex items-center justify-center transition-all cursor-pointer font-bold"
              >
                ✕
              </button>

              <div className="mb-6 flex items-center space-x-3  text-[10px] font-bold tracking-widest text-yellow-500uppercase">
                <GraduationCap size={16} />
                <span>{selectedDegree.short} Academic Overview</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#1a237e] mb-2">
                {selectedDegree.name}
              </h3>
              <p className="text-slate-400 text-sm italic mb-8">"{selectedDegree.tagline}"</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-xs font-sans text-[#1a237e]">
                <div className="bg-slate-50 p-4 border-l-2 border-yellow-500">
                  <div className="text-slate-400 font-bold uppercase tracking-wider mb-1">Duration</div>
                  <div className="font-bold text-sm text-[#1a237e]">{selectedDegree.duration}</div>
                </div>
                <div className="bg-slate-50 p-4 border-l-2 border-yellow-500">
                  <div className="text-slate-400 font-bold uppercase tracking-wider mb-1">Volume credits</div>
                  <div className="font-bold text-sm text-[#1a237e]">{selectedDegree.credits}</div>
                </div>
                <div className="bg-slate-50 p-4 border-l-2 border-yellow-500">
                  <div className="text-slate-400 font-bold uppercase tracking-wider mb-1">Annual tuition</div>
                  <div className="font-bold text-sm text-[#1a237e]">{selectedDegree.tuition}</div>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-serif text-[#1a237e] font-bold text-xl mb-3 border-b border-slate-100 pb-2">Program Philosophy</h4>
                <p className="text-slate-600 font-sans text-sm leading-relaxed font-light">
                  {selectedDegree.details}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-serif text-[#1a237e] font-bold text-lg mb-3 pb-1 border-b border-slate-100">Core Subject Areas</h4>
                  <ul className="space-y-2 text-slate-600 text-xs">
                    {selectedDegree.courses.map((course, ind) => (
                      <li key={ind} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3 shrink-0" />
                        <span className="font-medium">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-serif text-[#1a237e] font-bold text-lg mb-3 pb-1 border-b border-slate-100">Target Career Paths</h4>
                  <ul className="space-y-2 text-slate-600 text-xs text-bold">
                    {selectedDegree.careers.map((career, ind) => (
                      <li key={ind} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[#1a237e] rounded-full mr-3 shrink-0" />
                        <span className="font-medium text-blue-500">{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 border-t border-slate-100 pt-8 justify-end">
                <button 
                  onClick={() => setSelectedDegree(null)}
                  className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-6 py-3 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Return to Catalog
                </button>
                <button 
                  onClick={() => {
                    setSelectedDegree(null);
                    // trigger navigate to contact or similar action
                  }}
                  className="bg-[#1a237e] text-white hover:bg-yellow-500 hover:text-[#1a237e] px-6 py-3 font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Contact Admissions Advisor
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Global Academic Loops */}
      <section className="bg-white py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-yellow-500 text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">Beacon Edge Programs</span>
            <h2 className="text-3xl font-serif text-[#1a237e] font-bold uppercase tracking-tight">Academic Resources & Standards</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Academic Support & Ethics Counselling",
                icon: <FaHeadphones size={24} className="text-yellow-500" />,
                desc: "We ensure every student receives personalized mentorship from our peer support advisors and technology advisory chairs."
              },
              {
                title: "Study Abroad International Loops",
                icon: <FaGlobe size={24} className="text-yellow-500" />,
                desc: "Spend terms conducting fully accredited research under senior fellows in London, Tokyo, Berlin, or Seattle."
              },
              {
                title: "2026 Academic Calendar Planning",
                icon: <FaCalendar size={24} className="text-yellow-500" />,
                desc: "Keep up-to-date with registrar deadlines, symposium timetables, and computational Hackathons."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-50 p-8 border-t-2 border-[#1a237e] relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{card.icon}</div>
                <h4 className="font-serif text-[#1a237e] font-bold text-xl mb-3">{card.title}</h4>
                <p className="text-slate-500 font-sans text-xs leading-relaxed font-light">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Canvas */}
      <section className="bg-[#1a237e] py-20 border-t-4 border-b-4 border-yellow-500">
        <div className="max-w-6xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl text-black md:text-5xl font-serif italic mb-4">
            Are You Ready to <span className="text-yellow-500 not-italic font-bold">Define the Standard</span>?
          </h2>
          <p className="text-[#1a237e]/60 text-sm max-w-xl mx-auto font-sans font-light leading-relaxed mb-8">
            Speak directly with our registrar team, explore global scholarship metrics, or secure your seat on the 2026 academic roster today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-yellow-500 text-[#1a237e] px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors cursor-pointer shadow-lg w-full sm:w-auto">
              Initiate Registration Flow
            </button>
            <button className="border border-blue-100/60 text-white hover:bg-white/10 px-8 py-3.5 rounded-sm font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer w-full sm:w-auto">
              Sponsor Research Program
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
</>
  )
}
export default Academics