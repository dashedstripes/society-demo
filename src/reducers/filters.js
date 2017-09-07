const filters = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS':
      return { ...state, isOpen: action.isOpen }
    case 'TOGGLE_FILTER_OPTION':
      return {
        ...state, options: state.options.map((option) => {
          if (option.id === action.payload.id) {
            option.isChecked = action.payload.isChecked
          }
          return option
        })
      }
    case 'SET_SEARCH_INPUT':
      return { ...state, searchInput: action.input }
    case 'CLEAR_SEARCH':
      return { ...state, searchInput: '' }
    default:
      return state
  }
}

export default filters