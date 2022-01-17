import React, { useEffect, useState } from 'react';
import PostService from '../API/PostService';
import Loader from '../components/loader/Loader';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/buttons/MyButton';
import ModalEmptyPost from '../components/UI/modals/ModalEmptyPost';
import MyModal from '../components/UI/modals/MyModal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/page';

function Posts() {
	const [
		posts,
		setPosts,
	] = useState([]);
	const [
		isEmptyPost,
		setIsEmptyPost,
	] = useState(false);
	const [
		filter,
		setFilter,
	] = useState({ sort: '', query: '' });
	const [
		modal,
		setModal,
	] = useState(false);
	const [
		limit,
		setLimit,
	] = useState(10);
	const [
		page,
		setPage,
	] = useState(1);
	const [
		totalPages,
		setTotalPages,
	] = useState(0);
	const [
		fetchPosts,
		isPostLoading,
		postError,
	] = useFetching(async () => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);
		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
	});

	useEffect(
		() => {
			fetchPosts();
		},
		[
			page,
		],
	);

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
	};

	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	return (
		<div className="App">
			<MyButton
				style={{ marginTop: 30, marginBottom: 30 }}
				onClick={() => setModal(true)}>
				Создать новый пост
			</MyButton>
			<ModalEmptyPost
				isEmptyPost={isEmptyPost}
				setIsEmptyPost={setIsEmptyPost}
			/>
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm
					posts={posts}
					setPosts={setPosts}
					setIsEmptyPost={setIsEmptyPost}
					closeForm={setModal}
				/>
			</MyModal>
			<PostFilter filter={filter} setFilter={setFilter} />
			{postError && <h1>Произошла ошибка {postError}</h1>}
			<PostList
				posts={sortedAndSearchedPosts}
				title="Список постов"
				remove={removePost}
			/>
			{isPostLoading && (
				<div
					style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
					<Loader />
				</div>
			)}
			<Pagination totalPages={totalPages} changePage={changePage} page={page} />
		</div>
	);
}

export default Posts;