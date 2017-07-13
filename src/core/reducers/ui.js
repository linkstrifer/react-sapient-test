import { INPUT_CHANGE, CLEAR_UI } from '../actions/constants'

const initialState = {
  combinator: 'AND',
  entity: '',
  attribute: '',
  operator: '',
  value: '',
  queriesCount: 0
}

export default function ui(state = initialState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      const stateCopy = {...state}

      stateCopy[action.data.name] = action.data.value

      return stateCopy
    case CLEAR_UI:
      return initialState
    default:
      return state
  }
}
