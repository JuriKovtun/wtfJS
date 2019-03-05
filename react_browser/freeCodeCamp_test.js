class Parent extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Child name={'Jane'} />
            </div>
        )
    }
}

class Child extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1>Hello, {props.name}</h1>
        )
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Parent />, rootElement);