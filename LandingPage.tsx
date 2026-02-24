import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Banner } from './components/Banner';
import { DataDashboard } from './components/DataDashboard';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustedInfrastructure } from './components/TrustedInfrastructure';
import { RegistrationProcess } from './components/RegistrationProcess';
import { CaseStudies } from './components/CaseStudies';
import { WasteExchange } from './components/WasteExchange';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { LoginModal } from './components/LoginModal';

export const LandingPage: React.FC = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);
  
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar onRegisterClick={openRegister} onLoginClick={openLogin} />
      
      <main className="flex-grow">
        <Banner onRegisterClick={openRegister} />
        <DataDashboard />
        
        {/* Section 1: Value Prop */}
        <WhyChooseUs />
        
        {/* Section 2: Technical Trust (New) */}
        <TrustedInfrastructure />
        
        {/* Section 3: Factory / Carbon Conversion (Includes Product Library) */}
        <RegistrationProcess onRegisterClick={openRegister} />
        
        {/* Section 4: Procurement / Benefits */}
        <CaseStudies onRegisterClick={openRegister} />
        
        {/* Section 5: Supply & Demand Market */}
        <WasteExchange onRegisterClick={openRegister} />
        
        <ContactUs />
      </main>
      
      <Footer />
      
      <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} />
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} onRegisterClick={openRegister} />
    </div>
  );
};