import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviews from './Pages/Dashboard/MyReviews';
import Payment from './Pages/Dashboard/Payment';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAdmin from './Pages/Login/RequireAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import Reviews from './Pages/Reviews/Reviews';
import Navbar from './Pages/Shared/Navbar/Navbar';
import HospitalInfo from './Pages/HospitalInfo/HospitalInfo';
import Hospitals from './Pages/Dashboard/Hospitals';
import Departments from './Pages/Dashboard/Departments';
import { useState } from 'react';
import AllAppointments from './Pages/Dashboard/AllAppointments';

function App() {
  // const [toggleModal, setToggleModal] = useState('')
  // const toggleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  return (
    <div className='px-12  max-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard ></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='allAppointments' element={<AllAppointments />}></Route>

          <Route path='review' element={<MyReviews></MyReviews>}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin>
            <Users></Users>
          </RequireAdmin>}>
          </Route>
          <Route path='hospital' element={<RequireAdmin>
            <Hospitals />
          </RequireAdmin>}>
          </Route>
          <Route path='departments' element={<RequireAdmin>
            <Departments />
          </RequireAdmin>}>
          </Route>
          <Route path='addDoctor' element={<RequireAdmin>
            <AddDoctor></AddDoctor>
          </RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin>
            <ManageDoctor></ManageDoctor>
          </RequireAdmin>}></Route>
        </Route>
        <Route path='/hospitalInfo' element={<HospitalInfo></HospitalInfo>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
