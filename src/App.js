import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Blogs from './Pages/Blogs';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='px-12'>

      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Blogs/>} />

        
      </Routes>
    </div>
  );
}

export default App;
