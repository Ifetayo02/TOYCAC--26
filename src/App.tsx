import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PaymentPage } from "./components/PaymentPage";
import { Footer } from "./components/Footer";
import { Overview } from "./components/Overview";
import { Logistics } from "./components/Logistics";
import { FaqAccordion } from "./components/Faqs";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Navbar stays here so it shows on every page */}
        <Navbar />
        
        <main className="pt-20">
          <Routes>
            {/* Home Route: Contains all your landing page sections */}
            <Route 
              path="/" 
              element={
                <>
                  <Hero />
                  <Overview />
                  <Logistics />
                  <FaqAccordion  />
                </>
              } 
            />

            {/* Payment Route: Only shows the PaymentPage */}
            <Route path="/register" element={<PaymentPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}