'use client'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const dashboard = () => {
    const session = useSession();

    return (
    <div>dashboard</div>
  )
}

export default dashboard