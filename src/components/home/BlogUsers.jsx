'use client'
import { useGetAllUserQuery } from '@/redux/features/users/usersApi'
import React from 'react'

export default function BlogUsers() {
    const { data, isSuccess } = useGetAllUserQuery()
    const users = data?.data?.users
    return isSuccess && (
        <>
            <div className=" bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                {users?.length === 0 ? <p>No users Found</p> : <ul className="-mx-4 flex flex-col gap-5">
                    {users.slice(0, 5).map((user, key) => (<li key={key} className="flex items-center">
                        <img className="w-10 h-10 object-cover rounded-full mx-4" src={user?.thumbnail} alt="avatar" />
                        <p>
                            <a className="text-gray-700 font-bold mx-1 hover:underline" href="#">{user?.username}</a>
                            <span className="text-gray-700 text-sm font-light">Created 23 Posts</span>
                        </p>
                    </li>))}
                </ul>}
            </div>
        </>
    )
}
