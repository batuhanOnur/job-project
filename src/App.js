import React from 'react';
import BookList from './components/BookList';
import Detail from './components/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <BookList />
        </Route>

        <Route exact path="/detail/:id">
          <Detail />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
