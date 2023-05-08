import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}

import React from 'react'

export default async function UsersPage() {

    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    console.log("hello")

    const content = (
        <section>
            <h1>
                Profiles
            </h1>
            <br />
            {users.map(user => {
                return(
                    <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br />
                    </>
                )
            } )}

             <h2>
                <Link href="/">Back to Home</Link>
            </h2>
        </section>
    )

  return content
}
