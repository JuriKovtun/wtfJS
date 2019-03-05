const rootElement = document.getElementById('root');
// React: Create a Controlled Input
// ~~~~~~~~~~~~~

// const rootElement = document.getElementById('root');
//
// class ControlledInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             input: 'qwerty'
//         };
//         this.handleChange = this.handleChange.bind(this)
//     }
//
//     handleChange(event) {
//         this.setState({
//             input: event.target.value
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <input value={this.state.input} onChange={this.handleChange} />
//                 <h4>Controlled Input:</h4>
//                 <p>{this.state.input}</p>
//             </div>
//         );
//     }
// }
//
//
// ReactDOM.render(<ControlledInput/>, rootElement);


// ~~~~~~~
// React: Create a Controlled Form
// ~~~~~~~


// ~~~~~~~
// React and Redux: Manage State Locally First
// ~~~~~~~

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: ['a']
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    // add handleChange() and submitMessage() methods here
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    submitMessage() {
        this.setState({
            messages: [...this.state.messages, this.state.input],
            input: ''
        });
        console.log(this.state.messages)
    }

    // submitMessage = () => {
    //     this.setState(state => {
    //         const messages = [...state.messages, state.input];
    //         return {
    //             input: '',
    //             messages
    //         }
    //     });
    // };


    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */}
                <input onChange={this.handleChange} />
                <button onClick={this.submitMessage}>add</button>
                <p>{this.state.input}</p>
                <section>{this.state.messages.map(item => <h1 children={item} key={item}/>)}</section>
                <ul/>


                { /* change code above this line */}
            </div>
        );
    }
};

ReactDOM.render(<DisplayMessages/>, rootElement);
