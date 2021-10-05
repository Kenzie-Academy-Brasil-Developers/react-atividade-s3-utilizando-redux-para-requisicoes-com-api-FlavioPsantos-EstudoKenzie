import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import Digimons from './components/Digimons';
import { Container } from './components/style/styleDisplay';

function App() {
  return (
    <div className="App">
      <Container>
        <Search />
        <Digimons />
      </Container>

    </div>
  );
}

export default App;
