import React, { useEffect } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/Home";
import Reset from "./pages/authentication/Reset";
import Forgot from "./pages/authentication/Forgot";
import Login from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import Dashboard from './pages/dashboard/Dashboard';
import MarkAttendance from './pages/Attendance/MarkAttendance';
import ViewAttendance from './pages/Attendance/ViewAttendance';
import Sidebar from './components/sidebar/Sidebar';
import Layout from './components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getLoginStatus } from './services/authService';
import { SET_LOGIN } from './redux/features/auth/authSlice';
import AddEmployee from "./pages/addEmployee/AddEmployee";
import EmployeeDetail from './components/employee/employeeDetail/EmployeeDetail';
import Profile from './pages/profile/Profile';
import EditEmployee from './pages/editEmployee/EditEmployee';
import EditProfile from './pages/profile/EditProfile';
import Contact from './pages/contact/Contact';
import EmployeeAttendance from './components/employee/employeeAttendance/EmployeeAttendance';

axios.defaults.withCredentials = true;

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus()
      dispatch(SET_LOGIN(status))
      // here status is passing as a payload
    }
    loginStatus()
  }, [dispatch])
  
  return (
    // browser router surrounds all our routes
    <BrowserRouter>  
    <ToastContainer/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/login" element = {<Login/>} />
        <Route path = "/register" element = {<Register/>} />
        <Route path = "/forgot" element = {<Forgot/>} />
        <Route path = "/resetpassword/:resetToken" element = {<Reset/>} />
        <Route path = "/dashboard" element = {
          <Sidebar>
            <Layout>
              <Dashboard/>
            </Layout>
          </Sidebar>
        } />
        <Route
          path="/add-employee" element={
            <Sidebar>
              <Layout>
                <AddEmployee />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/employee-detail/:id" element={
            <Sidebar>
              <Layout>
                <EmployeeDetail />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-employee/:id" element={
            <Sidebar>
              <Layout>
                <EditEmployee />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/profile" element={
            <Sidebar>
              <Layout>
                <Profile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/edit-profile" element={
            <Sidebar>
              <Layout>
                <EditProfile />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/contact-us" element={
            <Sidebar>
              <Layout>
                <Contact />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/mark-attendance" element={
            <Sidebar>
              <Layout>
                <MarkAttendance />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/view-attendance" element={
            <Sidebar>
              <Layout>
                <ViewAttendance />
              </Layout>
            </Sidebar>
          }
        />
        <Route
          path="/employee-attendance/:id" element={
            <Sidebar>
              <Layout>
                <EmployeeAttendance />
              </Layout>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
