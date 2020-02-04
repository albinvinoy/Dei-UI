import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Timer from './components/Timer';
import QuestionView from './components/QuestionView';
import Answer from './components/Answer';
import RegularRoundMaster from './components/Master/RegularRoundMaster'

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Timer roundTime={10}/>, document.getElementById("timer"));
// ReactDOM.render(<Language />, document.getElementById("switch"));
ReactDOM.render(<RegularRoundMaster 
    englishQuestion="This is an english question"
    malayalamQuestion="This is malayalam question"
    multiView={true}
    answer="_4"
/>, document.getElementById("question"));
// ReactDOM.render(<Answer />, document.getElementById("answer"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
