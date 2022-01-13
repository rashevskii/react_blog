import React from 'react'
import MyButton from './UI/buttons/MyButton'

const PostItem = ({ post, id }) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton>Удалить</MyButton>
      </div>
    </div>
  )
}

export default PostItem