let nextTodoId = 0;
let nextTodoNoteId = 0;
export const addTodo = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});

export const editTodo = (id, text) => ({
  type: "EDIT_TODO",
  payload: { id, text }
});

export const addNoteToTodo = (todoId, text) => ({
  type: "ADD_NOTE_T0_TODO",
  payload: {
    todoId,
    id: nextTodoNoteId++,
    text,
    dateAdded: new Date()
  }
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
