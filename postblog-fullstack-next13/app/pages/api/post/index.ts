import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../prisma/client'

// GET /api/post
// Required fields in body: title, content, authorID

export default async function getPostsFromPrisma(
) {
    try {
        const data = await prisma.post.findMany();
        if (!data) {
            throw Error;
        } else {
            console.log("Successful retrival of data from prisma client");
            return data;
        }
    } catch (error) {
        console.log(error);

    }
}