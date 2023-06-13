'use client'

import LoginForm from '@/components/login/LoginForm'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'


export default function Login() {
  const {accessToken} = useSelector(state => state.auth)
  const route = useRouter()

  return (
    <>
      {
        accessToken ? route.replace('/') :
          <div className='min-h-[calc(100vh-110px)]'>
            <LoginForm />
          </div>
      }
    </>
  )
}
