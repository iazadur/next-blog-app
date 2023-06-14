'use client'
import ProfilePage from '@/components/profile/ProfileDetails'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const route = useRouter()
  const { accessToken } = useSelector(state => state.auth)
  return !accessToken ? route.replace('/login') : (
    <div className='min-h-[calc(100vh-110px)] flex justify-center items-center container'>
      {/* <AddPostFrom /> */}
      <ProfilePage />
    </div>
  )
}
