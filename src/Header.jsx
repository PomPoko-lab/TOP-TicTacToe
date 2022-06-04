import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container
      role='heading'
      fluid
      className='text-center p-5 bg-primary color-primary text-light shadow-lg'
    >
      <h1>Tic Tac Toe</h1>
    </Container>
  );
};

export default Header;
