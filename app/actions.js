// @flow
import type { counterStateType } from './reducers/counter';

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './constants';

export function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: () => void, getState: () => counterStateType) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: () => void) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
