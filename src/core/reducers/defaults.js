import { DATA_LOADED } from '../actions/constants'

export default function defaults(state = {}, action) {
  switch (action.type) {
    case DATA_LOADED:
      return action.data
    default:
      return state;
  }
}
