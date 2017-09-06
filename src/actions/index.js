export const toggleRegion = (payload) => {
  return {
    type: 'TOGGLE_REGION',
    payload: payload // { region: string, isOpen: boolean }
  }
}

export const setSearchInput = (input) => {
  return {
    type: 'SET_SEARCH_INPUT',
    input
  }
}

export const clearSearch = () => {
  return {
    type: 'CLEAR_SEARCH'
  }
}