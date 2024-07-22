import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginHome from './Component/LoginHome.jsx';


function App() {
  return (
    <BrowserRouter>
     <ToastContainer position='top-center'/>
    <Routes>
    <Route path='/' element={<LoginHome />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
