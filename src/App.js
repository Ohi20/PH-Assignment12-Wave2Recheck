import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Appointment/Purchase';
import Dashboard from './Pages/Appointment/Dashboard';
import Requireauth from './Pages/Login/Requireauth';
import NotFound from './Pages/NotFound';
import Portfolio from './Pages/Portfolio/Portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='px-12'>

      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/purchase" element={<Requireauth><Purchase></Purchase></Requireauth>} />
        <Route path="/dashboard" element={<Requireauth><Dashboard/></Requireauth>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound/>} />
        </Routes>
        <ToastContainer />
    </div>
  );
}

export default App;
