import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import './styles/index.css';

////// ~~~ default app
// import App from './components/App';

////// ~~~ counter
// import App from './counter/Counter';

////// ~~~ scroller
// import App from './scroller/App';

////// ~~~ Draft JS
// import App from './DraftJS/App';

////// ~~~ Test from coder to Boss
import App from './components/Testik/App'
ReactDOM.render(<App />, document.getElementById('root'));

////// ~~~ Tabs
// import App from './components/Tabs/App'
// ReactDOM.render(<App />, document.getElementById('root'));

////// ~~~ todo
// import App from './todo/Todo'

////// ~~~ Todo by Andy Van Slaars
/* import App from './components/TodoByAndy/App';
import store from './components/TodoByAndy/store';

store.dispatch({ type: 'ADD_TODO', id: '4', text: 'meet Smetana!' });

const state = store.getState();
ReactDOM.render(<App todo={state.todo} />, document.getElementById('root')); */

// const App = () => {
//     return (
//         <h1>Hello</h1>
//     )
// };

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
