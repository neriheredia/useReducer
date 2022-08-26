import { ACTION_TYPES_POST } from "../../constants/ActionsTypes";

export const INITIAL_STATE = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_POST.FETCH_START:
      return {
        loading: true,
        error: false,
        post: {},
      };
    case ACTION_TYPES_POST.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
      };
    case ACTION_TYPES_POST.FETCH_ERROR:
      return {
        loading: false,
        error: true,
        post: {},
      };
    default:
      return state;
  }
};
