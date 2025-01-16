import React from 'react'
import CustomInput from '../Components/CustomInput'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4 ">
        <h3 className='text-center'>Forgot Password</h3>
        <p className='text-center'>Please Enter your register email to get reset password email</p>
        <form action="">
          <CustomInput type="email" label="Email Address" id="email" />

          <Link to="/reset-password" type='submit' className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5' style={{ background: "#ffd333" }}>Send Link</Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword