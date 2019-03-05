import React from 'react';
import ReactDOM from 'react-dom';


// import './styles/index.css';

////// ~~~ default app
// import App from './components/App';

////// ~~~ counter
// import App from './counter/Counter';

////// ~~~ scroller
// import App from './scroller/App';

////// ~~~ Draft JS
// import App from './DraftJS/App';

////// ~~~ Tabs
// import App from './App'

////// ~~~ todo
// import App from './todo/Todo'

////// ~~~ TodoComponent
import App from './components/TodoComponent/TodoComponent'


import * as serviceWorker from './serviceWorker';


// const App = () => {
//     return (
//         <h1>Hello</h1>
//     )
// };



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
