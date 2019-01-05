import { combineReducers } from 'redux'
import ExampleReducer from './ExampleReducer'

export default combineReducers({
  replaceMe: () => 'I am reducer',
  exampleState: ExampleReducer
})
