import { Container, Row, Col, Ratio } from 'react-bootstrap';
import Tile from './Tile';
// import './GameArea.css';

const GameArea = ({ clickTileHandler, gameState, checkValid }) => {
  return (
    <section className='mt-3'>
      <Container className='w-50 p-0'>
        <Ratio aspectRatio='1x1'>
          <Container className='bg-light text-center shadow-lg rounded-2 d-flex flex-column'>
            <Row>
              <Tile
                id='1'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
              <Tile
                id='2'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
              <Tile
                id='3'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
            </Row>
            <Row>
              <Tile
                id='4'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
              <Tile
                id='5'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
              <Tile
                id='6'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
            </Row>
            <Row>
              <Tile
                id='7'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
              <Tile
                id='8'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
              <Tile
                id='9'
                clickTileHandler={clickTileHandler}
                gameState={gameState}
                checkValid={checkValid}
              />
            </Row>
          </Container>
        </Ratio>
      </Container>
    </section>
  );
};

export default GameArea;
