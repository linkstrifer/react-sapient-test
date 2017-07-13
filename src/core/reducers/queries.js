import { ADD_QUERY, REMOVE_QUERY } from '../actions/constants'

export default function queries(state = [], action) {
  switch (action.type) {
    case ADD_QUERY:
      const copyState = [...state]

      copyState.push(action.data)

      return copyState
      break;
    case REMOVE_QUERY:
      const newState = state.filter((query, index) => {
        return index !== action.data.index
      })

      return newState
    default:
      return state
  }
}
