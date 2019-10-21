import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions'


export const visibilityFilterInitialState = VisibilityFilters.SHOW_ALL

const visibilityFilter = (state = visibilityFilterInitialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter