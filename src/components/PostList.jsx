import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts, title }) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{ title }</h1>
      {posts.map((item, index) => {
        return (
          <PostItem key={item.id} id={index + 1} post={item} />
        )
      })}
    </div>
  )
}

export default PostList