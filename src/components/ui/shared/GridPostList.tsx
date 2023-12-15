import { useUserContext } from '@/context/AuthContext'
import { Models } from 'appwrite'
import React from 'react'
import { Link } from 'react-router-dom'

type GridPostsListProps = {
  post: Models.Document[]
}

const GridPostList = ({ posts }: GridPostsListProps) => {
  const { user } = useUserContext();
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li   
          key={post.$id}
          className="relative min-w-80 h-80"
        >
          <Link to={`/posts/${post.$id}`} className="grid-post_link">
            <img src={post.imageUrl} alt="post" className="h-full w-full object-cover" />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default GridPostList