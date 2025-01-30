export default function Log({ turns }) {
	return (
		<ul id="log">
			{turns.map((turn) => (
				<li key={`${turn.square.ro + 1}${turn.square.cul + 1}`}>
					{turn.player} selected: row {turn.square.row} - column{" "}
					{turn.square.col}
				</li>
			))}
		</ul>
	);
}
