import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import StudentLogin from './pages/Student_login'
import Staff_login from './pages/Staff_login'
import ParentLogin from './pages/ParentLogin'
import Admin_page from './pages/Admin_page'
function App() {
    return (
          <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/admissions" element={<Admissions />} />
                <Route path="/news" element={<News />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/student-login" element={<StudentLogin />} />
                <Route path="/Staff_login" element={<Staff_login />} />
                <Route path="/parent-login" element={<ParentLogin />} />
                <Route path='/admin_page' element={<Admin_page/>}/>
                </Routes>
           </BrowserRouter>
                )
                }

     export default App