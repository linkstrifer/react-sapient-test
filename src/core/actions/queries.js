import { ADD_QUERY, REMOVE_QUERY } from './constants'

export function add(data) {
  return {
    type: ADD_QUERY,
    data
  };
}

export function remove(data) {
  return {
    type: REMOVE_QUERY,
    data
  }
}
