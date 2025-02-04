import React from 'react'
import Post from './Posts/Post'
import { prisma } from '@/utils/prisma'

const Feed = async () => {

    // FETCH POSTS 
    const posts = await prisma.post.findMany()
    console.log(posts) // FOR DEBUGGING


    return (
        <div className=''>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Post />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Feed
