import Home from "./component/Home";
import NavBar from "./component/NavBar";
import SocialLinks from "./component/SocialLinks";
import About from './component/About';
import Portofolio from './component/Portofolio';
import Experience from './component/Experience';
import Contact from './component/Contact'

 function App() {
  return (
    <div >
      <NavBar />
      <Home />
      <About />
      <Portofolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
 }
 
 export default App;
