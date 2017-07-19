import { ADD_QUERY, REMOVE_QUERY } from '../actions/constants'

export default function queries(state = [], action) {
  switch (action.type) {
    case ADD_QUERY:
      let copyState = [...state]

      if (copyState.length > 0 &&
          copyState[0].entity !== action.data.entity) {
        copyState = []
      }

      copyState.push(action.data)

      return copyState
    case REMOVE_QUERY:
      const newState = state.filter((query, index) => {
        return index !== action.data.index
      })

      return newState
    default:
      return state
  }
}
