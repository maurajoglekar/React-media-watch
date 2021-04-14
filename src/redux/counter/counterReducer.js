import * as types from "./counterTypes";

const initialState = {
  value: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { value: state.value + 1 };
    case types.DECREMENT_COUNTER:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

export default counterReducer;
