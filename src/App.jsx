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
import Course from './Navbar/Course/Course';
import Register from './Register/Register';
import ResultAnalytics from './Result/ResultAnalytics';
import StudentPortal from './StudentPortal/StudenntPortal';
import BusSchedule from './Bus/BusSchedule';


const App = () => {
  const location = useLocation();

  const noLayoutRoutes = ['/login', '/register', '/faculty', '/studentPortal'];
  const shouldShowLayout = !noLayoutRoutes.some(path => location.pathname.startsWith(path));

  return (
    <AnimatePresence mode="wait">
      <div>
        {shouldShowLayout && <Navbar />}

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/result" element={<Result />} />
          <Route path="/resultAnalytics" element={<ResultAnalytics />} />
          <Route path="/busSchedule" element={<BusSchedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentPortal" element={<StudentPortal />} />

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
            <Route path="architecture" element={<Architecture />} />
            <Route path="facultyDetail/:id" element={<FacultyDetails />} />
          </Route>
        </Routes>

        {shouldShowLayout && <Footer />}
      </div>
    </AnimatePresence>
  );
};


export default App;
