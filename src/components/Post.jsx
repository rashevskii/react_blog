import React from 'react';
import Loader from './loader/Loader';

const Post = ({post, isLoading, error}) => {
	return (
		<div>
			{
				post ? <div>
					{
						isLoading ? <div
							style={{
								display        : 'flex',
								justifyContent : 'center',
								marginTop      : 30,
							}}>
							<Loader />
						</div> :
						<div>
							{error && <h1>Произошла ошибка {error}</h1>}
							<h1 className="title__postId">Post {post.title}</h1>
							<p>{post.body}</p>
						</div>}
				</div> :
				null}
		</div>
	);
};

export default Post;
