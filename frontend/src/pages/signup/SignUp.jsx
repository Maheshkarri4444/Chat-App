import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup.js'

const SignUp = () => {

  const [inputs,setInupts] = useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const {loading, signup} = useSignup();

  const handleCheckboxChange = (gender)=>{
    setInupts({...inputs,gender});
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    await signup(inputs);

  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
        <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg'>

        <h1 className='text-3xl font-semibold text-center text-gray-300'>
            SignUp
            <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='Full Name'
              className='w-full h-10 input input-bordered'
              value={inputs.fullName}
              onChange={(e)=> setInupts({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='username'
              className='w-full h-10 input input-bordered'
              value={inputs.username}
              onChange={(e)=> setInupts({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='password'
              className='w-full h-10 input input-bordered'
              value={inputs.password}
              onChange={(e)=> setInupts({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='confirm password'
              className='w-full h-10 input input-bordered'
              value={inputs.confirmPassword}
              onChange={(e)=> setInupts({...inputs, confirmPassword: e.target.value})}
            />
          </div>
          
          <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>


          <Link to={'/login'} className='inline-block mt-2 text-sm hover:underline hover:text-blue-600'>
            Already Have an account?
          </Link>

          <div>
            <button className='mt-2 border btn btn-block btn-sm border-slate-700'
            disabled={loading}>
            { loading? <span className='loading loading-spinner'></span>: "Sign Up"}
            </button>
          </div>

        </form>
        </div>
    </div>
  )
}

export default SignUp

