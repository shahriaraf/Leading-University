import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './HomePage/Home';
import Navbar from './Navbar/Navbar';
import Login from './Login/Login';
import Footer from './Footer/Footer'; // if you have a Footer component

const App = () => {
  const location = useLocation();

  // Paths where you DON'T want Navbar and Footer
  const noLayoutPaths = ['/login'];

  const shouldShowLayout = !noLayoutPaths.includes(location.pathname);

  return (
    <div>
      {shouldShowLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {shouldShowLayout && <Footer />}
    </div>
  );
};

export default App;
