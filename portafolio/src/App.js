import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'
import Hero from "./Components/Hero";
import {SliderData} from "./Components/Data/Information"
function App() {
  return (
    <Router>
   <Navbar/>
   <Hero slides={SliderData} />
   </Router>);
}

export default App;
