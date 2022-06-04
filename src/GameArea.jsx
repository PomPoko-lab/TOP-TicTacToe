import { Container, Row, Col } from 'react-bootstrap';
import Tile from './Tile';
import './GameArea.css';

const GameArea = () => {
  return (
    <Container fluid role='section' className='py-5 flex-grow-1'>
      <Container className='bg-light text-center d-flex flex-column shadow-lg rounded-2 play-area'>
        <Row className='flex-grow-1'>
          <Tile />
          <Tile />
          <Tile />
        </Row>
        <Row className='flex-grow-1'>
          <Tile />
          <Tile />
          <Tile />
        </Row>
        <Row className='flex-grow-1'>
          <Tile />
          <Tile />
          <Tile />
        </Row>
      </Container>
    </Container>
  );
};

export default GameArea;
