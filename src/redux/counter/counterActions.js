import * as types from './counterTypes';

export function incrementCounter(payload) {
  return {
    type: types.INCREMENT_COUNTER,
    payload
  };
}

export function decrementCounter(payload) {
  return {
    type: types.DECREMENT_COUNTER,
    payload
  };
}

export function setIncrementCounter() {
  return {
    type: types.INCREMENT_COUNTER
  };
}

export function setDecrementCounter() {
  return {
    type: types.DECREMENT_COUNTER
  };
}

export function getAllMediaItems() {
  return {
    type: types.GET_MEDIA_ITEMS_ALL
  };
}

export function getMediaItemsByMedium({medium}) {
  return {
    type: types.GET_MEDIA_ITEMS_BY_MEDIUM,
    medium
  };
}

export function setMediaItems(payload) {
  return {
    type: types.SET_MEDIA_ITEMS,
    payload
  };
}