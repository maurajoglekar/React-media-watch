import * as types from "./counterTypes";

const initialState = {
  counter: {
    value: 0
  },
  mediaItems: {
    list: []
  }
};

function counterReducer(state = initialState, action) {
  const {
    counter,
    mediaItems
  } = state;
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return {
        ...state, counter: {
          value: counter.value + 1
        }
      };
    case types.DECREMENT_COUNTER:
      return {
        ...state, counter: {
          value: counter.value - 1
        }
      };
    case types.SET_MEDIA_ITEMS: {
      const newItems = action.payload;
      return {
        ...state,
        mediaItems: {
          list: newItems
        }
      };
    }
    default:
      return state;
  }
}

export default counterReducer;