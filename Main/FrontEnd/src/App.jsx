import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Login from './components/Login';
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Service from "./components/Service";
import Contact from "./components/Contact";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
