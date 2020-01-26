import {
  ADD_CODER,
  DELETE_CODER,
  UPDATE_CODER,
  CLEAR_CURRENT,
  SET_CURRENT
} from "../actions/types";

const initialState = {
  coders: [
    { firstName: "Mehedi", lastName: "Hasan", id: 1 },
    { firstName: "Lancer", lastName: "Abir", id: 2 }
  ],
  current: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CODER:
      return {
        ...state,
        coders: [...state.coders, action.payload]
      };
    case UPDATE_CODER:
      return {
        ...state,
        coders: state.coders.map(coder =>
          coder.id === action.payload.id ? action.payload : coder
        )
      };
    case DELETE_CODER:
      return {
        ...state,
        coders: state.coders.filter(coder => coder.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};
