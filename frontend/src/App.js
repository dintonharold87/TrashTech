
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
