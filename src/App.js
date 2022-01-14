import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/MyButton";
import ModalEmptyPost from "./components/UI/modals/ModalEmptyPost";
import MyModal from "./components/UI/modals/MyModal";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'About' },
    { id: 3, title: 'C++', body: 'Content' }
  ])
  const [isEmptyPost, setIsEmptyPost] = useState(false)
  const [filter, setFilter] = useState({ sort: "", query: "" })
  const [modal, setModal] = useState(false)

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])

  return (
    <div className="App">
      <MyButton style={{marginTop: 30, marginBottom: 30}} onClick={() => setModal(true)}>
        Создать новый пост
      </MyButton>
      <ModalEmptyPost isEmptyPost={isEmptyPost} setIsEmptyPost={setIsEmptyPost} />
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm posts={posts} setPosts={setPosts} setIsEmptyPost={setIsEmptyPost} closeForm={setModal} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList posts={sortedAndSearchedPosts} title='Список постов' remove={removePost} />
    </div>
  );
}

export default App;
