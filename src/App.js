import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterComponent from './components/MasterComponent';
import Rules from './components/Rules';
import WelcomePage from './components/WelcomePage'
import PictureRoundMaster from './components/Master/PictureRoundMaster';
import Container from 'react-bootstrap/Container'
class App extends Component {
  render() {
    return (      
<Container fluid>
       <BrowserRouter>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
             <Route exact path='/master' component={MasterComponent}/>
             <Route exact path='/rules' component={Rules}/>
             <Route exact path="/pc" component={PictureRoundMaster} />}
             {/* <Route exact path="/view" component={ViewPage} /> */}
           </Switch>
      </BrowserRouter>
      </Container>
    );
  }
}
 
export default App;
