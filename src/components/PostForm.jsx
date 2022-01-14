import React, { useState } from 'react';
import MyButton from './UI/buttons/MyButton';
import MyInput from './UI/inputs/MyInput';

const PostForm = ({ posts, setPosts, setIsEmptyPost, closeForm }) => {
	const [
		newPost,
		setNewPost,
	] = useState({
		id    : '',
		title : '',
		body  : '',
	});

	const addNewPost = (e) => {
		e.preventDefault();
		if (newPost.title.length && newPost.body.length) {
			setIsEmptyPost(false)
      closeForm(false)
			setPosts([
				...posts,
				{ ...newPost, id: Date.now() },
			]);
			setNewPost({
				id    : '',
				title : '',
				body  : '',
			});
		} else {
			setIsEmptyPost(true);
		}
	};

	return (
		<form>
			<MyInput
				value={newPost.title}
				onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
				type="text"
				placeholder="Название поста"
			/>
			<MyInput
				value={newPost.body}
				onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
				type="text"
				placeholder="Описание поста"
			/>
			<MyButton onClick={addNewPost}>Создать пост</MyButton>
		</form>
	);
};

export default PostForm;
