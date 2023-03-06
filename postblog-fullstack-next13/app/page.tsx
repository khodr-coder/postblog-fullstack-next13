import Link from "next/link"

export default function Home() {
  return (
    <main className="py-4 px-48" >
      <Link className="bg-teal-500 text-white font-bold py-2 px-4 rounded-md" href={"/about"}>go to the about page</Link>
    </main>
  )
}
