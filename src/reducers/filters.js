const filters = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_FILTERS':
      return { ...state, isOpen: action.isOpen }
    default:
      return state
  }
}

export default filters