import React from 'react'
import CustomInput from '../Components/CustomInput'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="py-5 d-flex align-items-center justify-content-center" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
        <h3 className='text-center title'>Login</h3>
        <p className='text-center'>Login to your account to continue</p>
        <form action="">
          <CustomInput type="email" label="Email Address" id="email" />
          <CustomInput type="password" label="Password" id="pass" />
          <div className='mb-3 text-end'>
            <Link to="forgot-password" className='text-decoration-none'>Forgot Password?</Link>
          </div>
          <Link to="/admin" type='submit' className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{ background: "#ffd333" }}>Login</Link>
        </form>
      </div>
    </div>
  );
};

export default Login