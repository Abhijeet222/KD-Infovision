import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AIModel3D from "./components/AIModel3D";
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import DomainExpertise from './components/DomainExpertise';
import Industries from './components/Industries';
import Insights from './components/Insights';
import Partnership from './components/Partnership';
import WhoWeAre from './components/WhoWeAre';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Demo from "./pages/Demo";


function App() {
  const [showAI, setShowAI] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("ai3d_shown")) setShowAI(false);
    else sessionStorage.setItem("ai3d_shown", "yes");
  }, []);

  return (
  <>
   <AIModel3D/>  
    <div className="font-sans bg-[#151a2e] min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Solutions />
              <DomainExpertise />
              <Industries />
              <Insights />
              <Partnership />
              <WhoWeAre />
              <Contact />
            </>
          }
        />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </div>
          </>   
  );
}

export default App;
