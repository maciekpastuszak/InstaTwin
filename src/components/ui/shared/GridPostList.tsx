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
      
    </ul>
  )
}

export default GridPostList