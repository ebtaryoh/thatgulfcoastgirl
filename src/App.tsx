import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ListingsPage from "./pages/ListingsPage";
import BuyersPage from "./pages/BuyersPage";
import SellersPage from "./pages/SellersPage";
import ContactPage from "./pages/ContactPage";
import PropertyDetailsPage from "./pages/PropertyDetailsPage";

function App() {
  return (
    <div className="min-h-[100dvh] bg-ivory text-ink selection:bg-coastal-gold/30 flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[70] focus:bg-ink-deep focus:text-ivory focus:px-4 focus:py-2 focus:rounded-lg text-sm font-body">Skip to main content</a>
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/buyers" element={<BuyersPage />} />
          <Route path="/sellers" element={<SellersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/property/:id" element={<PropertyDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
