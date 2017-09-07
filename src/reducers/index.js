import { combineReducers } from 'redux'
import currentRegion from './currentRegion'
import filters from './filters'
import demos from './demos'

const reducer = combineReducers({
  currentRegion,
  filters,
  demos
})

export default reducer