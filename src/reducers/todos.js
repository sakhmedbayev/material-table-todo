import { ADD_TODO, TOGGLE_TODO, EDIT_TODO, DELETE_TODO, ADD_NOTE_T0_TODO } from "../actions";

export const todosInitialState = [];

const todos = (state = todosInitialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          notes: []
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case EDIT_TODO:
      return state.map(todo => {
        return todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo;
      });

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    case ADD_NOTE_T0_TODO:
      return state.map(todo => {
        return todo.id === action.payload.todoId
          ? {
              ...todo,
              notes: [
                ...todo.notes,
                {
                  id: action.payload.id,
                  text: action.payload.text,
                  dateAdded: action.payload.dateAdded
                }
              ]
            }
          : todo;
      });
    default:
      return state;
  }
};

export default todos;
