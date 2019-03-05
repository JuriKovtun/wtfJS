//// by Dan Abramov

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            console.log('previous state: ' + state);
            console.log('action type: ' + action.type);
            state++;
            console.log('current state: ' + state);
            return state;
        case 'DECREMENT':
            console.log('previous state: ' + state);
            console.log('action type: ' + action.type);
            state--;
            console.log('current state: ' + state);
            return state;
        default:
            return state;
    }
};

const {createStore} = Redux;
const store = createStore(counter);

const Counter = ({value, onIncrement, onDecrement}) => {
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    )
};

const render = () => {
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={() =>
                store.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                store.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('root')
    );
};

render();
store.subscribe(render);