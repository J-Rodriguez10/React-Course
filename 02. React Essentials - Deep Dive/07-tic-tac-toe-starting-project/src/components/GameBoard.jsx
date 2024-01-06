

export default function GameBoard({ onSelectSquare, board }) {

  return (
    <ol id="game-board">
      {board.map((row, rowInd) => (
        <li key={rowInd}>
          <ol>
            {row.map((playerSym, colInd) => (
              <li key={colInd}>
                <button
                  onClick={() => onSelectSquare(rowInd, colInd)}
                  disabled={playerSym !== null}
                >
                  {playerSym}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
