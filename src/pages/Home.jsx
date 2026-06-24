import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import NewsTiker from "../components/NewsTiker";
import Principal_greetings from '../components/Principal _greetings';
import Highlights from "../components/Highlights";
import Quicklinks from "../components/Quicklinks";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Teacher from "../components/Principal_speech";

function Home() {
return(
  <>
  <Navbar/>
  <Hero/>
  <NewsTiker/>
  <Principal_greetings/>
  <Highlights/>
  <Quicklinks/>
  <Teacher/>
  <Testimonial/>
  <Footer/>
  </>
)

}

export default Home