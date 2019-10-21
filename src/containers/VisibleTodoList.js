import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  editTodo,
  addNoteToTodo
} from "../actions";
import TodoTable from "../components/TodoTable";
import { VisibilityFilters } from "../actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: (id, text) => dispatch(editTodo(id, text)),
  addNoteToTodo: (todoId, text) => dispatch(addNoteToTodo(todoId, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTable);
