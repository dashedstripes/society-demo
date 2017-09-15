const modal = (state = [], action) => {
  switch (action.type) {
    case 'SET_MODAL':
      return { ...state, data: action.payload }
    case 'OPEN_MODAL':
      return { ...state, isOpen: true }
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export default modal