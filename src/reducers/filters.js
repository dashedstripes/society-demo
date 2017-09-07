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
    default:
      return state
  }
}

export default filters