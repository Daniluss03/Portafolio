import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'

import { SliderData} from "./Components/Data/Information"

import { PersonalInformation} from "./Components/Data/InfoSectionInformation";

import Proyects from "./Components/Proyects";
import Starts from "./Components/Starts";
import Hero from "./Components/Hero";
import React  from "react"

import Footer from "./Components/Fotter";
import InfoSection from "./Components/InfoSection";




function App() {
  

   return (
      <Router >


         <Navbar />

       
         <Hero />
         <InfoSection   personal={PersonalInformation}/>
         <Starts slides={SliderData} />
         <Proyects  />
      
         <Footer/>

      </Router>);
}

export default App;
