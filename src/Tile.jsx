import { Container, Col } from 'react-bootstrap';
import { HiOutlineX } from 'react-icons/hi';

const Tile = () => {
  return (
    <Col xs={4}>
      <Container className='p-0 tile d-flex justify-content-center align-items-center h-100'>
        <HiOutlineX className='tile-icon' />
      </Container>
    </Col>
  );
};

export default Tile;
