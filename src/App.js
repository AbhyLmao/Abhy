import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
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
    </div>
  );
}

export default App;
