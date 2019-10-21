import { combineReducers } from "redux";
import todos, { todosInitialState } from "./todos";
import visibilityFilter, {
  visibilityFilterInitialState
} from "./visibilityFilter";

export const initialState = {
  todos: todosInitialState,
  visibilityFilter: visibilityFilterInitialState
};

export default combineReducers({
  todos,
  visibilityFilter
});
