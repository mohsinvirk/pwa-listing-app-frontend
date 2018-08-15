import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, CLEAR_CURRENT_PROFILE } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
}
