import { combineReducers } from 'redux'
import currentRegion from './currentRegion'
import modal from './modal'
import filters from './filters'
import demos from './demos'

const reducer = combineReducers({
  currentRegion,
  modal,
  filters,
  demos
})

export default reducer