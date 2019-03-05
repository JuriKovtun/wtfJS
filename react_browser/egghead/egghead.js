const rootElement = document.getElementById('root');
/////////////
//  ~~~~~~~~   hoc

// const hoc = (BaseComponent) => (props) =>
//     <BaseComponent {...props} />;
//
// const User = ({ name }) =>
//     <h1>{ name }</h1>;
//
//     const User2 = hoc(User);
//
// const App = () =>
//     <div>
//         <User name='Jojo' />
//         <User2 name='Tim'/>
//     </div>;


/////////////////////////
// ~~~~~~~~~~~ mormonic component by Kent C. Dodds


class Toggle extends React.Component {
    state = {
        on: false
    };
    render() {
        return <Switch on={this.state.on} clickFunction={ () => { console.log('boo') }}/>
    }
}


class Switch extends React.Component {
    render() {
        const {clickFunction} = this.props;
        return (
            <div className="container">
                <label className="switch">
                    <input type="checkbox" defaultChecked={this.props.on} onClick={(e) => {
                        e.preventDefault();
                        clickFunction();
                    }}/>
                    <span className="slider round"/>
                </label>
            </div>
        )
    }

}

const App = () => {
    return <Toggle/>
};


ReactDOM.render(<App/>, rootElement);
