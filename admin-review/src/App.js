import './App.css';
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import EmployeePage from './Feature/EmployeePage';
import AddEmployeePage from './Feature/AddEmployeePage';
import UpdateEmployeePage from './Feature/UpdateEmployeePage';
import Header from './Layout/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/list" />
          <Route exact path="/list" component={EmployeePage} />
          <Route exact path="/add" component={AddEmployeePage} />
          <Route exact path="/blog/:id" component={UpdateEmployeePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
