'use client'

import useAuthCheck from "@/hooks/useAuthCheck"

export default function AuthCheck({ children}) {
    const authchecked = useAuthCheck()
    return !authchecked ? <h3>Loading...</h3> :(
    <div>{children}</div>
  )
}
