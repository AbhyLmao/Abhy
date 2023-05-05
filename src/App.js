import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
// 
function App() {
  return (
    <div className="App">
        <Header />
        <div className="bodylol">
        <Routes>
          <Route path="/" element = {<Home />} />
        </Routes>
        </div>
    </div>
  );
}

export default App;
