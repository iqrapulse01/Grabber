import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Deals from "./pages/Deals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UrbanEats from "./pages/UrbanEats";
import Mobilopoly from "./pages/Mobilopoly";
import Localopoly from "./pages/Localopoly";
import Dealopoly from "./pages/Dealopoly";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DealPages from "./pages/DealPages";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/urban-eats" element={<UrbanEats />} />
        <Route path="/mobilopoly" element={<Mobilopoly />} />
        <Route path="/localopoly" element={<Localopoly />} />
        <Route path="/dealopoly" element={<Dealopoly />} />
        <Route path="/deal-pages" element={<DealPages />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;