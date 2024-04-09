
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import Exist from './components/Exist';
import Features from './components/Features';
import Demo from './components/Demo';
import Supporters from './components/Supporters';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
function App() {
  return (
 <>
 
<Navbar />
{/* <HeroSection />
<Exist />
<Features />  
<Demo />
<Supporters />
<Testimonials />
<AboutUs /> */}


<Router>
      <div className="">
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/features" element={<Features />} /> 
          <Route path="/about" element={<AboutUs />} />  
          <Route path="/test" element={<Testimonials/>} />  
          <Route path="/demo" element={<Demo />} />  
          
          
      
         
        </Routes>
       
        
          </div>
      </Router>
      <Footer/>
 </>
  );
}

export default App;
