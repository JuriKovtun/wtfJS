import React, {Component} from 'react';
import './App.scss';
import TodoForm from './TodoForm'
import TodoList from './TodoList'


class App extends Component {
    render() {
        return (
            <div className="TodoApp">
                <TodoForm />
                <TodoList todo={this.props.todo} />
            </div>
        )
    }
}

export default App;