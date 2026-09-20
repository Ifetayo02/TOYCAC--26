import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeNavbar } from "./components/HomeNavbar";
import { Hero } from "./components/Hero";
import { HomeHero } from "./components/HomeHero";
import { PaymentPage } from "./components/PaymentPage";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Overview } from "./components/Overview";
import { Executives } from "./components/Executives";
import { Gallery } from "./components/Gallery";
import { Logistics } from "./components/Logistics";
import { FaqAccordion } from "./components/Faqs";
import { AdminPage } from "./components/AdminPage";

function AppContent() {
  const location = useLocation();

  // Register and Admin get no top navbar at all
  const hideNavbar = location.pathname === "/register" || location.pathname === "/admin";
  const isCampPage = location.pathname === "/camp";

  return (
    <>
      {!hideNavbar && (isCampPage ? <Navbar /> : location.pathname === "/" ? <HomeNavbar /> : null)}

      <Routes>
        {/* TIMSAN Oyo State — org homepage */}
        <Route path="/" element={
          <>
            <HomeHero />
            <About />
            <Executives />
            <Footer />
          </>
        } />

        {/* TCAC '26 — this year's camp + registration info */}
        <Route path="/camp" element={
          <>
            <Hero />
            <Overview />
            <Gallery />
            <Logistics />
            <FaqAccordion />
            <Footer />
          </>
        } />

        <Route path="/register" element={<PaymentPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;