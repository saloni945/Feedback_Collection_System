

import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MdFeedback } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmationModal from '../components/ConfirmationModal';
import { logout } from "../services/operations/authAPI";

const Navbar = () => {
  const ref = useRef(null);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('/');
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
   
    if (!token) {
      setConfirmationModal(null); // Ensure modal is closed when logged out
    }
  }, [token]);

  return (
    <div className='border-b-[1px] border-b-richblack-700'>
      <div className='flex flex-wrap justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto border-b-[1px] border-b-richblack-700 pb-4'>
        <Link to='/' onClick={() => setActiveLink('/')}>
          <div className='flex items-center space-x-2'>
            <MdFeedback className='text-4xl text-white' />
            <span className='text-2xl font-bold text-white'>Feedback System</span>
          </div>
        </Link>
        <nav>
          <ul className='text-richblack-100 flex flex-wrap gap-x-16'>
            <li>
              <Link
                to='/'
                className={`${
                  activeLink === '/' ? 'text-yellow-50' : 'text-richblack-100'
                } hover:text-yellow-50`}
                onClick={() => setActiveLink('/')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className={`${
                  activeLink === '/about' ? 'text-yellow-50' : 'text-richblack-100'
                } hover:text-yellow-50`}
                onClick={() => setActiveLink('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className={`${
                  activeLink === '/contact' ? 'text-yellow-50' : 'text-richblack-100'
                } hover:text-yellow-50`}
                onClick={() => setActiveLink('/contact')}
              >
                Contact
              </Link>
            </li>
          { token && (
            <li>
              <Link
                to='/submit-feedback'
                className={`${
                  activeLink === '/submit-feedback' ? 'text-yellow-50' : 'text-richblack-100'
                } hover:text-yellow-50`}
                onClick={() => setActiveLink('/submit-feedback')}
              >
                FeedBack-Form
              </Link>
            </li>
          )}
          
          { token && (
            <li>
              <Link
                to='/all-feedback'
                className={`${
                  activeLink === '/all-feedback' ? 'text-yellow-50' : 'text-richblack-100'
                } hover:text-yellow-50`}
                onClick={() => setActiveLink('/all-feedback')}
              >
                All-Feedbacks
              </Link>
            </li>
          )}
          </ul>
        </nav>

        {/* Login -SignUp -LogOut -DashBoard */}
        <div className='flex flex-wrap items-center gap-x-8'>
          {token === null && (
            <Link to='/login'>
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Log in
              </button>
            </Link>
          )}
          {token === null && (
            <Link to='/signup'>
              <button className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'>
                Sign up
              </button>
            </Link>
          )}
          {token && (
            <button
              onClick={() =>
                setConfirmationModal({
                  text1: "Are you sure?",
                  text2: "You will be logged out of your account.",
                  btn1Text: "Logout",
                  btn2Text: "Cancel",
                  btn1Handler: () => {
                    dispatch(logout(navigate));
                    setConfirmationModal(null);
                  },
                  btn2Handler: () => setConfirmationModal(null),
                })
              }
              //className="flex w-full items-center gap-x-1 py-[10px] px-[12px] text-sm text-richblack-100 hover:bg-richblack-700 hover:text-richblack-25"
              className='bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700'
            >
              <div className="flex items-center gap-x-2 ">
                <span>Logout</span>
              </div>
            </button>
          )}
          {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


