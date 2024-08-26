import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';
import Donate from './Pages/Donate';
import LoaderComponent from './Components/Loader';


const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    handleStart();
    setTimeout(handleComplete, 500); 

    return () => handleComplete();
  }, [location]);

  return (
    <div>
      {loading && <LoaderComponent />}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
