import { combineReducers } from 'redux'
import searchInput from './searchInput'
import currentRegion from './currentRegion'
import demos from './demos'

const reducer = combineReducers({
  searchInput,
  currentRegion,
  demos
})

export default reducer