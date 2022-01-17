import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return (
			<h1 className="emptyListPosts">Посты не найдены!</h1>
		)
	}
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			<TransitionGroup>
				{posts.map((item) => {
					return (
						<CSSTransition
              key={item.id}
              timeout={500}
              classNames="post"
            >
							<PostItem remove={remove} post={item} />
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
};

export default PostList;
