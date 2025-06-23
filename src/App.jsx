import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './HomePage/Home';
import Navbar from './Navbar/Navbar';
import Result from './Result/Result';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Faculty from './Faculty/Faculty';
import PageWrapper from './component/PageWrapper/PageWrapper';

// Faculty Departments
import CSE from './Faculty/Department/CSE/CSE';
import EEE from './Faculty/Department/EEE/EEE';
import Bba from './Faculty/Department/BBA/bba';
import Civil from './Faculty/Department/Ciivil/Civil';
import English from './Faculty/Department/English/English';
import THM from './Faculty/Department/THM/THM';
import Law from './Faculty/Department/Law/Law';
import Islamic from './Faculty/Department/Islamic/Islamic';
import PublicHealth from './Faculty/Department/Public Health/PublicHealth';
import Architecture from './Faculty/Department/Architecture/Architecture';

const App = () => {
  const location = useLocation();

  // Hide layout on login and all faculty-related routes
  const noLayoutPaths = ['/login', '/faculty'];
  const shouldShowLayout = !noLayoutPaths.some(path =>
    location.pathname.startsWith(path)
  );

  return (
    <AnimatePresence mode="wait">
      <div>
        {/* ✅ Conditionally render Navbar */}
        {shouldShowLayout && <Navbar />}

        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />

          {/* ✅ Slide animation only on base /faculty route */}
          <Route path="/faculty" element={<PageWrapper><Faculty /></PageWrapper>}>
            <Route path="cse" element={<CSE />} />
            <Route path="eee" element={<EEE />} />
            <Route path="bba" element={<Bba />} />
            <Route path="civil" element={<Civil />} />
            <Route path="english" element={<English />} />
            <Route path="thm" element={<THM />} />
            <Route path="law" element={<Law />} />
            <Route path="islamicStudies" element={<Islamic />} />
            <Route path="publicHealth" element={<PublicHealth />} />
            <Route path="architecture" element={<Architecture></Architecture>} />
          </Route>
        </Routes>

        {/* ✅ Conditionally render Footer */}
        {shouldShowLayout && <Footer />}
      </div>
    </AnimatePresence>
  );
};

export default App;
