import React from 'react';
import Button from '@material-ui/core/Button';

export default function CountdownTimer(props) {
	// const getColor = () => (minutes < 3 ? 'red' : 'primary');
	const [
		timeLeft,
		setTimeLeft
	] = React.useState({
		timeStarted : new Date().getTime(),
		isPlaying   : false,
		minutes     : 20,
		seconds     : 0
	});

	React.useEffect(
		() => {
			let timerInterval = null;
			timerInterval = setTimeout(() => {
				if (timeLeft.isPlaying && (timeLeft.minutes > 0 || timeLeft.seconds > 0)) {
					const timer = updateTime();
					setTimeLeft({ ...timeLeft, minutes: timer.minutes, seconds: timer.seconds });
				}
			}, 1000);
			return () => clearInterval(timerInterval);
		},
		[
			timeLeft
		]
	);

	const updateTime = () => {
		const currentTime = new Date().getTime();
		const difference = (currentTime - timeLeft.timeStarted) / 1000;
		const minutesPassed = Math.floor((difference - 1) / 60);
		const secondsPassed = Math.floor(difference - minutesPassed * 60);
		return { minutes: 19 - minutesPassed, seconds: 60 - secondsPassed };
	};

	const handleClick = (event) => {
		if (timeLeft.isPlaying) {
			setTimeLeft({ ...timeLeft, isPlaying: false });
		} else {
			setTimeLeft({ ...timeLeft, isPlaying: true, timeStarted: new Date().getTime() });
		}
	};

	return (
		<div>
			{timeLeft.isPlaying ? (
				<h1>
					{('0' + timeLeft.minutes).slice(-2)}:{('0' + timeLeft.seconds).slice(-2)}
				</h1>
			) : null}
			<Button
				variant="contained"
				color={timeLeft.isPlaying === true ? 'secondary' : 'primary'}
				onClick={(e) => handleClick(e)}
			>
				{timeLeft.isPlaying === true ? 'Finished' : 'Start'}
			</Button>

			{timeLeft.minutes === 0 && timeLeft.seconds === 0 ? alert('Time is up!') : null}
		</div>
	);
}
