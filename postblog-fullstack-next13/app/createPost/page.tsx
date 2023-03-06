"use client"

import React, { useState } from "react"
import { json } from "stream/consumers";
import createPostInsidePrisma from "../pages/api/create/create";

export default function formPost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [authId, setauthId] = useState(1);

    async function submitPost(e: React.FormEvent) {
        e.preventDefault()
        console.log("E", e);
        
        const data = await createPostInsidePrisma(
                title,
                content,
                authId,
        );
        return data;
    }
    return (
        
        <form onSubmit={submitPost}>
            <input name="postTitle" type="text" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <input name="postContent" type="text" value={content} onChange={(e) => {
                setContent(e.target.value);
            }} />
            <input name="postAuthID" type="text" value={authId} onChange={(e) => {
                setauthId(Number(e.target.value));
            }} />
            <button type="submit">make a new post</button>
        </form>
    )
}