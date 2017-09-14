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

export const toggleFilters = (isOpen) => {
  return {
    type: 'TOGGLE_FILTERS',
    isOpen
  }
}

export const setIsActive = (isActive) => {
  return {
    type: 'SET_IS_ACTIVE',
    isActive
  }
}

export const toggleFilterOption = (payload) => {
  return {
    type: 'TOGGLE_FILTER_OPTION',
    payload: payload // { id: number, isChecked: boolean }
  }
}

export const resetFilters = () => {
  return {
    type: 'RESET_FILTERS'
  }
}

export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}