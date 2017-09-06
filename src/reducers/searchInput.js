const searchInput = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_INPUT':
      return action.input
    case 'CLEAR_SEARCH':
      return ''
    default:
      return state
  }
}

export default searchInput