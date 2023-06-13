'use client'

import SignupForm from '@/components/register/SignupForm'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'


export default function Signup() {
  const { accessToken } = useSelector(state => state.auth)
  const route = useRouter()

  return (
    <>
      {
        accessToken ? route.replace('/') :
          <div className='min-h-[calc(100vh-110px)]'>
            <SignupForm />
          </div>
      }
    </>
  )
}
