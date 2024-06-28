import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomeScreen from './HomeScreen';
import AboutUs from './AboutUs';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
