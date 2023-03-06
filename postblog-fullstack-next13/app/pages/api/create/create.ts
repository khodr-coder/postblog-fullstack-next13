import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../prisma/client'

// POST /api/post
// Required fields in body: title, content, authorID

export default async function createPostInsidePrisma(
    t: string, c: string, id: number
) {
    try {
        console.log(prisma);
        
        const Post = await prisma.post.create({
            data: {
                title: "a",
                content: "b",
                authorId: 6,
            },
        });
        if (!Post) {
            throw Error;
        } else {
        return Post;
         }
    } catch (error) {
        console.log(error);
    }
}