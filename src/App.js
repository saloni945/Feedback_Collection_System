import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/common/PrivateRoute"
import About from "./pages/About";
import FeedBack from "./pages/FeedBack";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Contact from "./pages/Contact";
import AllFeedback from "./pages/AllFeedback";



function App() {

  const [isLoggedIn , setIsLoggedIn]=useState(false);


  return (
    <div className="w-screen h-screen overflow-y-auto bg-richblack-900 flex flex-col">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/about" element={<About/>}/>
           <Route path="/signup" element={<Signup/>}/>
           <Route path ="/submit-feedback" element = {<PrivateRoute><FeedBack /></PrivateRoute>}/>
           <Route path="verify-email" element={<VerifyEmail />} />
           <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="update-password/:id" element={<UpdatePassword />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/all-feedback" element={<PrivateRoute><AllFeedback /></PrivateRoute>}/>
          

        </Routes>
        
    </div>
  )
}

export default App;
