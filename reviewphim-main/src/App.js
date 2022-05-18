import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import FilmDetailPage from './Pages/FilmDetailPage';
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/details/:id" component={FilmDetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
