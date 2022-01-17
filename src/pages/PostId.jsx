import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import Comments from '../components/comments/Comments';
import Post from '../components/Post';

const PostId = () => {
	const params = useParams();
	const [
		post,
		setPost,
	] = useState(null);
	const [
		comments,
		setComments,
	] = useState([]);

	const [
		fetchPostById,
		isLoading,
		error,
	] = useFetching(async () => {
		const response = await PostService.getById(params.id);
		setPost(response.data);
	});
	const [
		fetchCommentsById,
		isComLoading,
		comError,
	] = useFetching(async () => {
		const response = await PostService.getCommentsById(params.id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById();
		fetchCommentsById();
	}, []);

	return (
		<div className="App">
			<Post post={post} isLoading={isLoading} error={error} />
			<h2 className="title__comment">Комментарии</h2>
			<Comments
				isComLoading={isComLoading}
				comError={comError}
				comments={comments}
			/>
		</div>
	);
};

export default PostId;
