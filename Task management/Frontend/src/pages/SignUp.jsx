import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='w-full bg-gray-500 h-full flex justify-center items-center'>
      <div className='p-4 w-2/6 bg-gray-700 text-xl' >
        <h1>Sign Up</h1>
        <input type="text" placeholder='username' name='username' className='w-full py-2 px-3 text-xl rounded m-2' />
        <input type="email" placeholder='Email' name='password' className='w-full py-2 px-3 text-xl rounded m-2' />
        <input type="password" name="password" placeholder='Password' className='w-full py-2 px-3 text-xl rounded m-2' />
        <div className='flex justify-between items-center'>
        <button className='px-4 py-3 bg-green-500'>Sign Up</button>
        <Link to="/login" className='text-gray-400 hover:text-gray-200'>Already have an account? Login</Link>

        </div>
      </div>
    </div>
  )
}

export default SignUp