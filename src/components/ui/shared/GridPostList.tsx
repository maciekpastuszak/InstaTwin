import { useUserContext } from '@/context/AuthContext'
import { Models } from 'appwrite'
import React from 'react'

type GridPostsListProps = {
  post: Models.Document[]
}

const GridPostList = ({ posts }: GridPostsListProps) => {
  const { user } = useUserContext();
  return (
    <ul className="grid-container">
      {posts.map((post) => (
        <li key={post.$id}
        className="relative min-w-80 h-80">{post.caption}</li>
      ))}
    </ul>
  )
}

export default GridPostList