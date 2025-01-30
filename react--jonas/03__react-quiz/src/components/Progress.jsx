function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
	return (
		<header className="progress">
			<progress
				max={numQuestions}
				value={index + Number(answer !== null)}
				// trick to update progress bar as soon as user chooses an answer, instead of when they press 'next' and the index of the question changes
			/>
			<p>
				Question <strong>{index + 1}</strong> / {numQuestions}
			</p>
			<p>
				<strong>{points}</strong> / {maxPossiblePoints}
			</p>
		</header>
	);
}

export default Progress;
