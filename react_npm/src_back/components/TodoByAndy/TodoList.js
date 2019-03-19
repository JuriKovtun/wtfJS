import React from 'react';

const TodoItem = ({text, isComplete}) => (
    <li>
        <label className="TodoList__label">
            <input className="TodoList__checkbox" type="checkbox"
                   defaultChecked={isComplete}/>
            {text}
        </label>
    </li>
);

export default (props) => (
    <div className="TodoList">
        <ul>
            {props.todo.map( todo => <TodoItem {...todo} key={todo.id} /> )}
        </ul>
    </div>
)