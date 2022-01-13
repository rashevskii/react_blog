import React from 'react'
import MyButton from '../buttons/MyButton'

const ModalEmptyPost = ({ isEmptyPost, setIsEmptyPost }) => {

  return (
    <div className={isEmptyPost ? "emptyPost emptyPostActive" : "emptyPost"}>
      <p className="emptyPostText">Нельзя добавить пост с пустыми полями!</p>
      <MyButton onClick={() => setIsEmptyPost(false)}>OK</MyButton>
    </div>
  )
}

export default ModalEmptyPost
