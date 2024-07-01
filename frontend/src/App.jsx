import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer'
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
