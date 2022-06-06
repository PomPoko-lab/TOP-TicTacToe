const Players = ({ currentPlayer, error, setError, gameOn }) => {
  const formatPlayer = `${
    currentPlayer[0].toUpperCase() + currentPlayer.slice(1, 6)
  } ${currentPlayer.slice(-1)}`;

  const display = gameOn ? (error ? setError() : formatPlayer) : 'WINNER';
  // error ? setError() : formatPlayer

  return (
    <div
      className={`text-light text-center mx-auto flex-grow-0 fs-1 bg-success shadow-sm rounded-1 px-5 py-2 mt-3 ${
        error && 'bg-danger'
      }`}
    >
      {display}
    </div>
  );
};

export default Players;
