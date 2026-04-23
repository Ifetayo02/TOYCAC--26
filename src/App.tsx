import { BrowserRouter as Router, Routes, Route,useLocation} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PaymentPage } from "./components/PaymentPage";
import { Footer } from "./components/Footer";
import { Overview } from "./components/Overview";
import { Logistics } from "./components/Logistics";
import { FaqAccordion } from "./components/Faqs";

function AppContent() {
  const location = useLocation();

  // Define which paths should NOT show the main landing page navbar
  const hideMainNavbar = location.pathname === '/register';

  return (
    <>
      {/* Only show the main Navbar if we are NOT on the register page */}
      {!hideMainNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Overview />
            <Logistics />
            <FaqAccordion />
            <Footer />
          </>
        } />
        <Route path="/register" element={<PaymentPage />} />
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