import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from "./Components/Hero";
import {SliderData,InformationData} from "./Components/Data/Information"
import Proyects from "./Components/Proyects";
function App() {
  return (
    <Router>
 <Navbar/>
   <Hero slides={SliderData} {...InformationData} /> 
   <Proyects/>
   
   </Router>);
}

export default App;
