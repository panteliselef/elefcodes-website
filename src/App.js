import React, { Component } from 'react';
import './App.css';
import ComingSoon from './pages/ComingSoon';
import StartPage from './pages/StartPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar/> */}
          <Switch>
            <Route exact path='/' component={StartPage} />
            <Route exact path='/soon' component={ComingSoon} />
            {/* <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
