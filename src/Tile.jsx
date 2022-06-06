import { Container, Col } from 'react-bootstrap';
import { HiOutlineX } from 'react-icons/hi';
import { FaRegCircle } from 'react-icons/fa';
import { useState } from 'react';

const Tile = ({ clickTileHandler, id, gameState, checkValid }) => {
  const [currentTile, setCurrentTile] = useState(
    <HiOutlineX
      className='flex-grow-1 h-100'
      style={{
        opacity: 0,
      }}
    />
  );

  const player1Tile = (
    <HiOutlineX
      className='flex-grow-1 h-100'
      style={{
        opacity: 1,
      }}
    />
  );

  const player2Tile = (
    <FaRegCircle
      className='flex-grow-1 h-100 p-4'
      style={{
        opacity: 1,
      }}
    />
  );

  const clickHandler = () => {
    if (!gameState.gameOn) return;
    if (!checkValid(id)) return;
    setCurrentTile(gameState.turn === 'player1' ? player1Tile : player2Tile);
    clickTileHandler(id);
  };

  return (
    <Col xs={4} className='p-0'>
      <Container
        fluid
        role='button'
        onClick={clickHandler}
        data-set-id={id}
        className='p-0 d-flex justify-content-center align-items-center'
      >
        {currentTile}
      </Container>
    </Col>
  );
};

export default Tile;
