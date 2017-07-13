import { INPUT_CHANGE, CLEAR_UI } from './constants'

export function inputChange(data) {
  return {
    type: INPUT_CHANGE,
    data
  };
}

export function clear() {
  return {
    type: CLEAR_UI
  }
}
