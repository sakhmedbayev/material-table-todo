import { connect } from "react-redux";
import { addNoteToTodo } from "../actions";
import NoteList from "../components/Notes";

const getTodoToNote = (todos, id) => {
  return todos.filter(todo => todo.id === id)[0];
};

const mapStateToProps = (state, ownProps) => ({
  todo: getTodoToNote(state.todos, ownProps.todoToNote.id)
});

const mapDispatchToProps = dispatch => ({
  addNoteToTodo: (todoId, text) => dispatch(addNoteToTodo(todoId, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
