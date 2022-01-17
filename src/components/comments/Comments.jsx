import React from 'react';
import Loader from '../loader/Loader';

const Comments = ({ isComLoading, comError, comments }) => {
	return (
		<div>
			{
				isComLoading ? <div
					style={{
						display        : 'flex',
						justifyContent : 'center',
						marginTop      : 30,
					}}>
					<Loader />
				</div> :
				<div>
					{comError && <h1>Произошла ошибка {comError}</h1>}
					{comments.map((comment) => {
						return (
							<div key={comment.id} className="comment">
								<p className="comment__title">{comment.name}</p>
								<p className="comment__body">{comment.body}</p>
							</div>
						);
					})}
				</div>}
		</div>
	);
};

export default Comments;
