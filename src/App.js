import React, { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import MyInput from "./components/UI/inputs/MyInput";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'Description' },
    { id: 3, title: 'C++', body: 'Description' }
  ])

  const [newPost, setNewPost] = useState({
    id: '',
    title: '',
    body: ''
  })

  const addNewPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {...newPost, id: Date.now()}])
    setNewPost({
      id: '',
      title: '',
      body: ''
    })
  }

  return (
    <div className="App">
      <form>
        <MyInput
          value={newPost.title}
          onChange={(e) => setNewPost({...newPost, title: e.target.value})} 
          type='text' 
          placeholder='Название поста' 
        />
        <MyInput 
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })} 
          type='text' 
          placeholder='Описание поста' 
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title='Список постов' />
    </div>
  );
}

export default App;
