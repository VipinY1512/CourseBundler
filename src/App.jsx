import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Header from "./components/layout/header/Header.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Footer from "./components/layout/header/Footer/Footer.jsx";
import Login from "./components/Auth/Login.jsx";
import Register from "./components/Auth/Register.jsx";
import Forgetpassword from "./components/Auth/Forgetpassword.jsx";
import Resetpassword from "./components/Auth/Resetpassword.jsx";
import Contact from "./components/Contact/Contact.jsx"
import Request from "./components/Request/Request.jsx";
import About from "./components/About/About.jsx"
import NotFount from "./components/layout/NotFound/NotFound.jsx";
import Subscribe from "./components/Payment/Subscribe.jsx";
import PaymentSuccess from "./components/Payment/PaymentSuccess.jsx";
import PaymentFail from "./components/Payment/PaymentFail.jsx";
import NotFound from "./components/layout/NotFound/NotFound.jsx";
import CoursePage from "./components/CoursePage/CoursePage.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ChangePassword from "./components/Profile/ChangePassword.jsx";
import UpdateProfile from "./components/Profile/UpdateProfile.jsx";
import Dashboard from "./components/Admin/Dashboard/Dashboard.jsx";
import CreateCourse from "./components/Admin/createcourse/CreateCourse.jsx";
import AdminCourses from "./components/Admin/Courses/AdminCourses.jsx";
import Users from "./components/Admin/Users/Users.jsx";

function App() {
  // window.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // })
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/courses" element={<Courses/>} />
        <Route path="/course/:id" element={<CoursePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/request" element={<Request/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/updateprofile" element={<UpdateProfile />} />
        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/forgetpassword" element = {<Forgetpassword/>}/>
        <Route path="/resetpassword/:token" element = {<Resetpassword />}/>
        <Route path="/subscribe" element = {<Subscribe />} />
        <Route path="*" element = {<NotFound />} />
        <Route path="/paymentsuccess" element = {<PaymentSuccess />} />
        <Route path="/paymentfail" element = {<PaymentFail />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element = {<Dashboard />} />
        <Route path="/admin/createcourse" element = {<CreateCourse />} />
        <Route path="/admin/courses" element = {<AdminCourses />} />
        <Route path="/admin/users" element = {<Users />} />
      </Routes>
      <Footer/>
    </Router>
  )
}



export default App;
