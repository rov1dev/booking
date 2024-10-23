import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllHotels from "./pages/all hotels/AllHotels";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<AllHotels />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
