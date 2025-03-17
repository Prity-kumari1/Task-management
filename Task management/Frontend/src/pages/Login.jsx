import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (

        <div className='w-full bg-gray-500 h-full flex justify-center items-center'>
            <div className='p-4 w-2/6 bg-gray-700 text-xl' >
                <h1>Login</h1>
                <input type="text" placeholder='username' name='username' className='w-full py-2 px-3 text-xl rounded m-2' />
                <input type="password" name="password" placeholder='Password' className='w-full py-2 px-3 text-xl rounded m-2' />
                <div className='flex justify-between items-center'>
                <button className='px-4 py-2 bg-green-500'>Login</button>
                    <Link to="signup" className='text-gray-400 hover:text-gray-200'>Not having an account? Sign Up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login