import { ACTION_TYPES_LOGIN } from "../constants/ActionsTypes";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_LOGIN.LOGIN_START:
      return {
        user: null,
        loading: true,
        error: null,
      };
    case ACTION_TYPES_LOGIN.LOGIN_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case ACTION_TYPES_LOGIN.LOGIN_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case ACTION_TYPES_LOGIN.LOGOUT:
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
