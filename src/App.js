import React, { Component } from 'react';
// import './App.css';
import ComingSoon from './pages/ComingSoon';
import StartPage from './pages/StartPage';
import TestPage from './pages/TestPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import InstagramPage from './pages/InstagramPage';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Navbar/> */}
          <Switch>
            <Route exact path='/' component={StartPage} />
            <Route exact path='/soon' component={ComingSoon} />
            <Route exact path='/projects' component={ProjectsPage} />
            <Route exact path='/instagram' component={InstagramPage} />
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
