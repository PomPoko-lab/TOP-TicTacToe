import Header from './Header';
import GameArea from './GameArea';
import Footer from './Footer';

function App() {
  return (
    <div className='App bg-dark min-vh-100 d-flex flex-column'>
      <Header />
      <GameArea />
      <Footer />
    </div>
  );
}

export default App;
