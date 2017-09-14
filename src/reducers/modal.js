const modal = (state = [], action) => {
  switch (action.type) {
    case 'CLOSE_MODAL':
      return { ...state, isOpen: false }
    default:
      return state
  }
}

export default modal