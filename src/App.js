import React, { useMemo, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/inputs/MyInput";
import ModalEmptyPost from "./components/UI/modals/ModalEmptyPost";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Python', body: 'About' },
    { id: 3, title: 'C++', body: 'Content' }
  ])
  const [selectedSort, setSelectedSort] = useState("")
  const [isEmptyPost, setIsEmptyPost] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <ModalEmptyPost isEmptyPost={isEmptyPost} setIsEmptyPost={setIsEmptyPost} />
      <PostForm posts={posts} setPosts={setPosts} setIsEmptyPost={setIsEmptyPost} />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" }
          ]}
        />
      </div>
      <MyInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Поиск..." />
      {posts.length
        ? <PostList posts={sortedAndSearchedPosts} title='Список постов' remove={removePost} />
        : <h1 className="emptyListPosts">Список постов пуст!</h1>
      }
    </div>
  );
}

export default App;
