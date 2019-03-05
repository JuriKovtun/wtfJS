const rootElement = document.getElementById('root');
const element = React.createElement(
    'div',
    {id: 'greeting', className: 'active'},
    'Hello yellow'
);


const reducer = (state = 5) => {
    return state
};
const store = Redux.createStore(reducer);

class Counter extends React.Component {
    state = {
        counter: 0
    };

    incrementEvent = () => {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        });
        console.log('plus');
    };

    decrementEvent = () => {
        this.setState((state) => {
            return {counter: state.counter - 1}
        });
        console.log('minus');
    };


    render() {
        return (
            <div className='container'>
                <div className='output' children={this.state.counter} />
                <button onClick={this.incrementEvent} children='+' />
                <button onClick={this.decrementEvent} children='-' />
            </div>
        )
    }
}


ReactDOM.render(<Counter />, rootElement);

