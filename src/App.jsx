import Header from './Header';
import Players from './Players';
import GameArea from './GameArea';
import Footer from './Footer';
import { useEffect, useState } from 'react';

// Win Conditions: 123, 456, 789, 147, 258, 369, 159, 357

function App() {
  const [gameState, setGameState] = useState({
    turn: 'player1',
    winConditions: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ],
    player1Claim: [],
    player2Claim: [],
    error: false,
    gameOn: true,
  });

  useEffect(() => {
    checkVictory(gameState.player1Claim);
    checkVictory(gameState.player2Claim);
  }, [gameState.player1Claim, gameState.player2Claim]);

  const clickTileHandler = (id) => {
    setGameState((prev) => {
      return addClaim(prev, id);
    });
    swapPlayers();
  };

  const checkValid = (id) => {
    if (
      !gameState.player1Claim.includes(id) &&
      !gameState.player2Claim.includes(id)
    ) {
      return true;
    } else {
      if (!gameState.gameOn) return;
      setGameState((prev) => {
        return { ...prev, error: true };
      });
      return false;
    }
  };

  const addClaim = (state, id) => {
    const claimPlayer = state.turn + 'Claim';
    return { ...state, [claimPlayer]: [...state[claimPlayer], id] };
  };

  const swapPlayers = () => {
    setGameState((prev) => {
      return {
        ...prev,
        turn: `${prev.turn === 'player1' ? 'player2' : 'player1'}`,
      };
    });
  };
  const checkVictory = (player) => {
    const win = gameState.winConditions.some((condition) => {
      return condition.every((num) => {
        return player.includes('' + num);
      });
    });
    if (win) {
      setGameState((prevState) => {
        return { ...prevState, gameOn: false };
      });
    }
  };

  const setErrorHandler = () => {
    setTimeout(() => {
      setGameState((prev) => {
        return { ...prev, error: false };
      });
    }, 1000);
    return 'CLAIMED';
  };

  return (
    <div className='App bg-dark min-vh-100 d-flex flex-column'>
      <Header />
      <Players
        currentPlayer={gameState.turn}
        error={gameState.error}
        setError={setErrorHandler}
        gameOn={gameState.gameOn}
      />
      <GameArea
        clickTileHandler={clickTileHandler}
        gameState={gameState}
        checkValid={checkValid}
        checkVictory={checkVictory}
      />
      <Footer />
    </div>
  );
}

export default App;
