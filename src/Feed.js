import React, { useEffect, useState } from 'react'
import "./Feed.css"
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./Firebase"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

function Feed() {
    const [posts, setPosts] = useState([]);
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))
    useEffect(() => {
        onSnapshot(q, (querySnapshot) => {
            const postsData = [];
            querySnapshot.forEach((doc) => {
                postsData.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            setPosts(postsData)
        }, [])
    })

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image} />
            ))}
        </div>
    )
}

export default Feed

