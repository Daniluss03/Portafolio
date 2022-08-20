import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'

import {SliderData} from "./Components/Data/Information"
import Proyects from "./Components/Proyects";
import Starts from "./Components/Starts";
import Hero from "./Components/Hero";
function App() {
  return (
    <Router>
 <Navbar/>
<Hero/>
   <Proyects/>
   <Starts slides={SliderData} />
   </Router>);
}

export default App;
