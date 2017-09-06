const demos = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_REGION':
      return Object.assign([], state.map((demo) => {
        if (demo.region === action.payload.region) {
          demo.isOpen = action.payload.isOpen
        }
        return demo
      }))
    default:
      return state
  }
}

export default demos