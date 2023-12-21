import * as type from "../actions/types";
const initalState = {
  users: [],
  loading: false,
  error: null
}
export default function users(state = initalState, action:any) {
  switch (action.type) {
    case type.GET_ITEMS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case type.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
}
