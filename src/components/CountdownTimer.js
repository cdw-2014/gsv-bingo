import React from 'react';

export default function CountdownTimer(props) {
	// const getColor = () => (minutes < 3 ? 'red' : 'primary');
	const { minutes, seconds } = props;

	return (
		<div>
			<h1>
				{('0' + minutes).slice(-2)}:{('0' + seconds).slice(-2)}
			</h1>
		</div>
	);
}
