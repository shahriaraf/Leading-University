import { Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import Navbar from './Navbar/Navbar';
import Result from './Result/Result';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/result" element={<Result></Result>}/>
      </Routes>
    </div>
  );
};

export default App;
