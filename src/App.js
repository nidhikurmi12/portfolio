import './App.css';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Work from './Components/Work/Work';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { themeContex } from './Contex';
import { useContext } from 'react';
function App() {
 const theme = useContext(themeContex);
 const darkMode = theme.state.darkMode;
  return (
    <div className="App"
    
    style={{background:darkMode?'black' : '' ,
    color:darkMode? 'white' : ''
    }}>

   <Navbar/>
   <Intro/>
   <Services/>
   <Experience/>
   <Work/>
   <Portfolio/>
   {/* <Testimonial/> */}
   <Contact/>
  <Footer/>
    </div>
  );
}

export default App;
