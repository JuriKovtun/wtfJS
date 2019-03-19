import React, {Component} from 'react';
import { createStore } from 'redux';
// import './counter.scss';
import './counter_css.css';
// import './counter.sass'

// import logo from '../logo.svg';

const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);


class Counter extends Component {

    onIncrement = () => {
        store.dispatch({type: 'INCREMENT'})
    };




    render() {
        return (
            <div>
                <h1>{store.getState()}</h1>
                <button onClick={this.onIncrement}>+</button>
                <button>-</button>
            </div>
        )
    }
}

export default Counter;

// const Chichi = (props) => {
//     return (
//         <h1>Welcome {props.name}!</h1>
//     )
// };
//
// const App = () => {
//     return (
//         <Chichi name={'Jane'} />
//     )
// };

// export default App;


