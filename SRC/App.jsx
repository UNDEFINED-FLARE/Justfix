import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MobileContactBar from "./components/MobileContactBar.jsx";
import ServiceRequestModal from "./components/ServiceRequestModal.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import About from "./pages/About.jsx";
import Fleet from "./pages/Fleet.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  const onRequestService = (serviceName) => {
    setModalService(serviceName || "");
    setModalOpen(true);
  };

  return (
    <div>
      <Navbar onRequestService={onRequestService} />

      <Routes>
        <Route path="/" element={<Home onRequestService={onRequestService} />} />
        <Route path="/services" element={<Services onRequestService={onRequestService} />} />
        <Route path="/gallery" element={<Gallery onRequestService={onRequestService} />} />
        <Route path="/about" element={<About onRequestService={onRequestService} />} />
        <Route path="/fleet" element={<Fleet onRequestService={onRequestService} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer onRequestService={onRequestService} />
      <MobileContactBar onRequestService={onRequestService} />

      <ServiceRequestModal
        open={modalOpen}
        initialService={modalService}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
