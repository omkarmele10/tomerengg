import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./main/pages/Home";
import AboutUs from "./main/pages/AboutUs";
import Projects from "./main/pages/Projects";
import ProductsAndServices from "./main/pages/ProductsAndServices";
import Navbar from "./main/components/Navbar";
import Footer from "./main/components/Footer";
import Spacer from "./main/components/Spacer";
import ScrollToTop from "./main/components/ScrollToTop";
import ContactUs from "./main/pages/ContactUs";
import WhatsAppFloat from "./main/components/WhatsAppFloat";



const App = () => {
  return (
    <>
      <Navbar />
      <Spacer />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products-services" element={<ProductsAndServices />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <WhatsAppFloat />
      <Footer />
    </>


  )
}
export default App