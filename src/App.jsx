import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages & Components
import Home from './HomePage/Home';
import Navbar from './Navbar/Navbar';
import Result from './Result/Result';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import Faculty from './Faculty/Faculty';
import PageWrapper from './component/PageWrapper/PageWrapper';
import FacultyDetails from './Faculty/FacultyDetail/FacultyDetails';

// Faculty Departments

import EEE from './Faculty/Department/EEE/EEE';
import Bba from './Faculty/Department/BBA/Bba';
import Civil from './Faculty/Department/Ciivil/Civil';
import English from './Faculty/Department/English/English';
import THM from './Faculty/Department/THM/THM';
import Law from './Faculty/Department/Law/Law';
import Islamic from './Faculty/Department/Islamic/Islamic';
import PublicHealth from './Faculty/Department/Public Health/PublicHealth';
import Architecture from './Faculty/Department/Architecture/Architecture';
import CSE from './Faculty/Department/CSE/CSE';

const App = () => {
  const location = useLocation();

  // Hide layout on login and exact /faculty (but allow layout for nested like /faculty/cse)
  const noLayoutRoutes = ['/login'];
  const shouldShowLayout = !noLayoutRoutes.includes(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <div>
        {/* ✅ Navbar only if allowed */}
        {shouldShowLayout && <Navbar />}

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<Login />} />

          {/* ✅ Faculty routes with nested departments and details */}
          <Route path="/faculty" element={<PageWrapper><Faculty /></PageWrapper>}>
            <Route path="cse" element={<CSE></CSE>} />
            <Route path="eee" element={<EEE />} />
            <Route path="bba" element={<Bba />} />
            <Route path="civil" element={<Civil />} />
            <Route path="english" element={<English />} />
            <Route path="thm" element={<THM />} />
            <Route path="law" element={<Law />} />
            <Route path="islamicStudies" element={<Islamic />} />
            <Route path="publicHealth" element={<PublicHealth />} />
            <Route path="architecture" element={<Architecture />} />
            <Route path="facultyDetail/:id" element={<FacultyDetails />} />
          </Route>
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default App;
