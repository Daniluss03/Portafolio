import Navbar from "./Components/Navbar";
import { BrowserRouter as Router } from 'react-router-dom'

import { SliderData } from "./Components/Data/Information"
import Proyects from "./Components/Proyects";
import Starts from "./Components/Starts";
import Hero from "./Components/Hero";
import React, { useState } from "react"
import style, { ThemeProvider } from "styled-components";
import { lightTheme, darktheme, GlobalStyles } from "./Components/Themes"
import Footer from "./Components/Fotter";

function App() {
   const [theme, setTheme] = useState("dark");

   const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
   }

   return (
      <Router>


         <Navbar />
         <Hero />
         <Starts slides={SliderData} />
         <Proyects />
        
         <Footer/>

      </Router>);
}

export default App;
