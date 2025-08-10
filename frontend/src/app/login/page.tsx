import Navbar from '@/components/Navbar'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900'>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-white">Login</h1>
    </div>
  )
}

export default Login
