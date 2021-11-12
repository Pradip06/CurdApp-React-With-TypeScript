import React from 'react';
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css'; 
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import HomeList from './component/Home'
import ListUpdate from './component/ListUpdate';
import Search from './component/Search';
import Login from './Login & Out/login';
import AddNewList from './component/AddList';
import Register from './Login & Out/Register';
import Logout from './Login & Out/Logout';

function App() {
  return (
    <div className="App">

      <Router>
        <div>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <HomeList />
            </Route>

            <Route path="/update/:id">
              <ListUpdate />
            </Route>

            <Route path="/search_function">
              <Search />
            </Route>

            <Route path="/add_list">
              <AddNewList />
            </Route>

            <Route path="/login_list"
              render={props => (
                <Login {...props} />
              )}></Route>

            <Route path="/register"
              render={props => (
                <Register {...props} />
              )}></Route>

            <Route path="/logout_list">
              <Logout />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
