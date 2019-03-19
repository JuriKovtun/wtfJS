import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// const presentState = {
//     todos: [{
//         id: '0',
//         text: 'Do Something',
//         completed: false,
//     }],
//     visibilityFilter: undefined
// };
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
// const TOGGLE_TODO = 'TOGGLE_TODO';
let nextTodoId = 0;

////// actions
const addTodoAction = (id, text) => {
    return {
        type: ADD_TODO,
        id,
        text
    }
};
const removeTodoAction = (id) => {
    return {
        type: REMOVE_TODO,
        id,
    }
};


////// reducer
const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case REMOVE_TODO:
            const index = state.findIndex(todo => todo.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        // case TOGGLE_TODO:
        //     return state.map(todo => {
        //         if (todo.id !== action.id) {
        //             return todo;
        //         }
        //         return {
        //             ...todo,
        //             completed: !todo.completed
        //         };
        //     });
        default:
            return state;
    }
};

const store = createStore(todoReducer);

store.dispatch(addTodoAction(nextTodoId++, 'Learn Redux'));
store.dispatch(addTodoAction(nextTodoId++, 'Dan4ik Sooka'));

class TutuList extends Component {
    render() {
        return (
            <div>
                <input ref={node => {
                    this.input = node;
                }}/>
                <button onClick={() => {
                    store.dispatch(
                        addTodoAction(nextTodoId++, this.input.value)
                        // {
                        //     type: ADD_TODO,
                        //     id: nextTodoId++,
                        //     text: this.input.value
                        // }
                    );
                }}>add
                </button>
                <ul>
                    {this.props.store.getState().map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => {
                                store.dispatch(removeTodoAction(todo.id));
                                // store.dispatch({
                                //     type: REMOVE_TODO,
                                //     id: todo.id
                                // });
                            }} key={todo.id}>remove
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

store.subscribe(() =>
    console.log(store.getState())
);


// class TodoApp extends Component {
//
//     render() {
//         return (
//             <div>
//                 <h1>tutu list</h1>
//                 <button onClick={() => {
//                     store.dispatch({
//                         type: ADD_TODO,
//                         text: 'tutu text',
//                         id: nextTodoId++
//                     })
//                 }}
//                 >add tutu
//                 </button>
//                 <ul>
//                     {this.props.todos.map(todo =>
//                         <li key={todo.id}>
//                             {todo.text}
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         )
//     }
// }


// const render = () => {
//     ReactDOM.render(
//         <TodoApp
//             todos={todos}
//         />,
//         document.getElementById('Dan')
//     )
// };


const App = () => {
    return (
        <div>
            <TutuList store={store}/>
            <i>by Dan Abramov</i>
        </div>

    )
};


export default App;



