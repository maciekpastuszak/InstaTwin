import { Models } from 'appwrite'
import React from 'react'

type GridPostsListProps = {
  post: Models.Document[]
}

const GridPostList = ({ posts }: GridPostsListProps) => {
  return (
    <div>GridPostList</div>
  )
}

export default GridPostList