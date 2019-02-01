import React, { Component } from 'react';
// import './App.css';
import ReactGA from 'react-ga';
import ComingSoon from './pages/ComingSoon';
import StartPage from './pages/StartPage';
import TestPage from './pages/TestPage';
import {BrowserRouter,Router, Switch, Route} from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import InstagramPage from './pages/InstagramPage';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
history.listen((location, action) => {
  ReactGA.pageview(location.pathname)
  console.log(action, location.pathname, location.state)
});
class App extends Component {
  componentDidMount(){
    
    ReactGA.initialize('UA-81492469-1');
    ReactGA.pageview('/');
  }

  render() {
    return (
      
      <Router history={history}>
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
      </Router>
    );
  }
}

export default App;
