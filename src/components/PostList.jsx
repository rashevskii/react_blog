import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			{posts.map((item, index) => {
				return (
					<PostItem key={item.id} remove={remove} id={index + 1} post={item} />
				);
			})}
		</div>
	);
};

export default PostList;
