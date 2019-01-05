import {
  EXAMPLE_ACTION
} from './types'

export const exampleAction = ({ prop, value }) => {
  return {
    type: EXAMPLE_ACTION,
    payload: { example: 'example' }
  }
}
