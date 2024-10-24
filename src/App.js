import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllHotels from "./pages/all hotels/AllHotels";
import Hotel from "./pages/hotel/Hotel";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/hotels' element={<AllHotels />} />
          <Route path='/hotels/:id' element={<Hotel/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
