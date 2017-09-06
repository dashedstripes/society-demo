import { combineReducers } from 'redux'
import currentRegion from './currentRegion'
import demos from './demos'

const reducer = combineReducers({
  currentRegion,
  demos
})

export default reducer