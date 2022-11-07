import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../slices/postsslice'

function Postlist() {



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const post = useSelector((state) => state.posts.posts)
    return (
        <div>

            <ul>
                {post && post.map((data, key) =>
                    <li key={key}>{JSON.stringify(data)}</li>
                )}

            </ul>
        </div>
    )
}

export default Postlist``