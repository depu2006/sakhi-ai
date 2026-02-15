import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardLayout from "./layouts/DashboardLayout";
import UserDashboard from "./pages/UserDashboard";
import GuardianDashboard from "./pages/GuardianDashboard";
import AboutPage from "./pages/AboutPage";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import Empowerment from "./pages/Empowerment";
import Profile from "./pages/Profile";
import PremiumDashboardA from "./pages/PremiumDashboardA";
import PremiumDashboardB from "./pages/PremiumDashboardB";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route path="user" element={<UserDashboard />} />
              <Route path="empowerment" element={<Empowerment />} />
              <Route path="guardian" element={<GuardianDashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="premium-a" element={<PremiumDashboardA />} />
              <Route path="premium-b" element={<PremiumDashboardB />} />
            </Route>
          </Routes>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
