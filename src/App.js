import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer";
// 
function App() {
  return (
    <div className="App">
      
        <Header />
        <div className="bodylol">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/About" element = {<About />} />
          <Route path="/Projects" element = {<Projects />} />
        </Routes>
        
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
