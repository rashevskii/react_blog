import React from 'react';
import classes from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
	const myModalClass = [
		classes.myModal,
	];

	if (visible) {
		myModalClass.push(classes.active);
	}

	return (
		<div className={myModalClass.join(' ')} onClick={() => setVisible(false)}>
			<div
				className={classes.myModalContent}
				onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

export default MyModal;
