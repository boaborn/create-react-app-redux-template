import {
  EXAMPLE_ACTION
} from './types'

export const exampleAction = ({ prop, value }) => {
  console.log('<- example action')
  return {
    type: EXAMPLE_ACTION,
    payload: { example: 'example' }
  }
}
