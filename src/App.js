import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Purchase from './Pages/Appointment/Purchase';
import Dashboard from './Pages/Appointment/Dashboard';

function App() {
  return (
    <div className='px-12'>

      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        
      </Routes>
    </div>
  );
}

export default App;
