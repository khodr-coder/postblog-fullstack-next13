import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import getPostsFromPrisma from '../pages/api/post'


// I am using the full URL when fetching due to a known bug on NextJS' side. This is a server 
// component, so In theory, simply fetching "/api/post/index" would be enough without having
// to specify the domain. if this were a client side component (A.K.A "use client") then 
// the full domain url would be required. Its not good practice, but I am awaiting a response 
// from the NextJS team.
async function getPosts() {

  try {
    const response = await getPostsFromPrisma(); 
    if (!response) {
      console.log(response);
      throw Error;
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
  }

}

// Ive seen implimentation of Data Queries that using prisma that involve fetching the 
// data externally using an endpoint, I did it this way 
export default async function About() {
  const data: {id: number; title: string; content: string}[] = await getPosts();// defining data 
  return (
    <div>
      <h1>About PAGE</h1>
      {data.map(singlePost => (
        <h1 className='py-2' key={singlePost.id}>{singlePost.title}</h1>
      ))}
    </div>
  )
}

// async function handleFindMany() {
//   const post = await prisma.post.findMany({})
//   return post;
// }