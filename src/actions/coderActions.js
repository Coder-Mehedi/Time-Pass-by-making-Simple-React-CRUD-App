import {
  ADD_CODER,
  DELETE_CODER,
  UPDATE_CODER,
  CLEAR_CURRENT,
  SET_CURRENT
} from "./types";
export const addCoder = coder => {
  return { type: ADD_CODER, payload: coder };
};

export const updateCoder = coder => {
  return { type: UPDATE_CODER, payload: coder };
};

export const deleteCoder = id => {
  return { type: DELETE_CODER, payload: id };
};

export const setCurrent = coder => {
  return { type: SET_CURRENT, payload: coder };
};

export const clearCurrent = () => {
  return { type: CLEAR_CURRENT };
};
