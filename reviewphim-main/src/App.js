import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import './App.css';
import FilmDetailPage from './Pages/FilmDetailPage';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Container>
        {/* <HomePage /> */}
        <FilmDetailPage />
      </Container>

    </div>
  );
}

export default App;
