import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterComponent from './components/MasterComponent';
import Rules from './components/Rules';
import WelcomePage from './components/WelcomePage'

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
             <Route exact path='/master' component={MasterComponent}/>
             <Route exact path='/rules' component={Rules}/>
             {/* <Route exact path="/view" component={ViewPage} /> */}
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
