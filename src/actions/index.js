export const toggleRegion = (payload) => {
  return {
    type: 'TOGGLE_REGION',
    payload: payload // { region: string, isOpen: boolean }
  }
}