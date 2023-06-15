
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import { Routes, Route} from "react-router-dom";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AdminRegistration from "./components/AdminRegistration";
import ClientRegistration from "./components/ClientRegistration";

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
        <Route path="/admin_registration" element={<AdminRegistration />} />
        <Route path="/client_registration" element={<ClientRegistration />} />
      </Routes>
    </>
  );
}

export default App;
