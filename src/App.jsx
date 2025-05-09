import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { CountryDetails } from "./components/Layout/CountryDetails";
import { Headers } from "./components/UI/Headers";
import { Footers } from "./components/UI/Footer";

// Create router with the basename for GitHub Pages
const App =() =>
  {
    return (
  <>
  <Headers  />
  <Routes>
  <Route  path="/world-atlas" element={<Home />} />
  <Route  path="/about" element={<About />} />
  <Route  path="/country" element={<Country />} />
  <Route  path="/country/:id" element={<CountryDetails />} />
  <Route  path="/contact" element={<Contact/>} />
  </Routes> 
  
  <Footers />     
  </>
    );
  };

export default App;
