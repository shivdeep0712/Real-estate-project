
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Companies from "./Components/Companies/Companies";
import Residencies from "./Components/Residencies/Residencies";
import Values from "./Components/Values/Values";
import Contact from "./Components/Contact/Contact";
import GetStarted from "./Components/GetStarted/GetStarted";
import Footer from "./Components/Footer/Footer";
import './App.css'

function App() {
  return (
   <div className="App">
    <div>
      <div className="white-gradient"/>
    <Header></Header>
    <Hero></Hero>
    </div>
    <Companies/>
    <Residencies/>
    <Values/>
    <Contact/>
    <GetStarted/>
    <Footer/>
   </div>
  );
}

export default App;
