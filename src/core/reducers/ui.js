import { INPUT_CHANGE, CLEAR_UI } from '../actions/constants'

const defaultState = {
  combinator: 'AND',
  entity: '',
  attribute: '',
  operator: '',
  value: '',
  queriesCount: 0
}

export default function ui(state = defaultState, action) {
  switch (action.type) {
    case INPUT_CHANGE:
      const stateCopy = {...state}

      stateCopy[action.data.name] = action.data.value

      return stateCopy
      break;
    case CLEAR_UI:
      return defaultState
    default:
      return state
  }
}
