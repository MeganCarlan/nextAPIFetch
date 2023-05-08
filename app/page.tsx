import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen">
      <h1>MegBook</h1>
      <p>None of the users on this site are real. The data on these profiles are fetched from an API with randomly generated names and posts.</p>
      <p>
        <Link href="/users">Users</Link>
      </p>
     
    </main>
  )
}
