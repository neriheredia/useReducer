import { ACTION_TYPES_FORM } from "../../constants/ActionsTypes";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES_FORM.CHANGE_INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTION_TYPES_FORM.ADD_TAG:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    case ACTION_TYPES_FORM.REMOVE_TAG:
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.payload),
      };
    case ACTION_TYPES_FORM.INCREASE:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case ACTION_TYPES_FORM.DECREASE:
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
};
