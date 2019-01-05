import {
  EXAMPLE_ACTION
} from '../actions/types'

const INITIAL_STATE = {
  value: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return { ...state, [action.payload.prop]: action.payload.value }
    default:
      return state
  }
}
