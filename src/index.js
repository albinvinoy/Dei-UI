import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timer from './components/Timer';
import QuestionView from './components/QuestionView';
import Answer from './components/Answer';
import MasterComponent from './components/MasterComponent';
import { Router, hashHistory as history  } from 'react-router';
import routes from './components/routes';

ReactDom.render(
    <Router  routes={routes} history={history} />,
    document.getElementById('answer')
  );

// ReactDOM.render(
//     <MasterComponent 

//     />, document.getElementById("question"));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
