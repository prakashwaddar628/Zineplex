import Navbar from '@/components/Navbar'
import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900'>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-white">Profile</h1>
    </div>
  )
}

export default Profile
