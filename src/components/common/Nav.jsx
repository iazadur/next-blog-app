'use client'
import { userLoggedOut } from '@/redux/features/auth/authSlice'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)
    const { accessToken } = useSelector(state => state.auth)
    console.log(accessToken);
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(userLoggedOut())
    }
    return (
        <nav className="bg-white px-6 py-4 shadow">
            <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <div>
                        <Link className="text-gray-800 text-xl font-bold md:text-2xl" href="/">Blog <span className="text-blue-500">APP</span></Link>
                    </div>
                    <div>
                        <button onClick={() => setIsOpen((val) => !val)} type="button" className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row md:-mx-4 ${isOpen ? 'block' : 'hidden md:block'}`}>
                    <div className="flex flex-col md:items-center md:flex-row md:-mx-4">
                        <Link className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0" href="/">Home</Link>
                        {
                            !accessToken ? <>

                                <Link className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0" href="/login">Login</Link>
                                <Link className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0" href="/signup">Signup</Link>
                            </> : <>
                                <Link className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0" href="/profile">profile</Link>
                                <button onClick={handleLogout} className="my-1 bg-black text-white rounded-md px-4 transition-all duration-300 ease-linear hover:bg-sky-700 py-1 font-semibold w-fit  md:mx-4 md:my-0">Logout</button>

                            </>
                        }
                    </div>
                </div>
            </div >
        </nav >
    )
}
