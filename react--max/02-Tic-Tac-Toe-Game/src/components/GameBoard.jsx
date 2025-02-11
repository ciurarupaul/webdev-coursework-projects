export default function GameBoard({ onSelectSquare, board }) {
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button
									onClick={() =>
										onSelectSquare(rowIndex, colIndex)
									}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

// initial logic

// const [gameBoard, setGameBoard] = useState(initialGameBoard);

// function handleSelectSquare(rowIndex, colIndex) {
// 	setGameBoard((prevGameBoard) => {
// 		const updatedBoard = [
// 			...prevGameBoard.map((innnerArray) => [...innnerArray]),
// 		];
// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
// 		return updatedBoard;
// 	});

// onSelectSquare();
// }

// MUST create a copy and not modify original beacause of how React works
