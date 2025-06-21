import { Routes, Route, Link } from 'react-router-dom';
import Home from './HomePage/Home';
import Navbar from './Navbar/Navbar';


const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
};

export default App;
