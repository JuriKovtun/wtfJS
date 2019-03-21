const initState = {
  todo: [
    { id: 1, text: "Do Something", isComplete: true },
    { id: 2, text: "Do It Again!", isComplete: true },
    { id: 3, text: "Study Redux...", isComplete: false }
  ]
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todo: [
          ...state.todo,
          { id: action.id, text: action.text, isComplete: false }
        ]
      };
    default:
      return state;
  }
};

export default todoReducer;
