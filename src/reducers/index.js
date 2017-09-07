import { combineReducers } from 'redux'
import currentRegion from './currentRegion'
import searchInput from './searchInput'
import filters from './filters'
import demos from './demos'

const reducer = combineReducers({
  searchInput,
  currentRegion,
  filters,
  demos
})

export default reducer