export function calculateTick(state, action) {
  if (state.getIn(['player', 'currentCode']) + action.amount > state.getIn(['player', 'maxCode'])) {
    return state.updateIn(['player', 'currentCode'], 0, currentCode => state.getIn(['player', 'maxCode']))
  } else {
    return state.updateIn(['player', 'currentCode'], 0, currentCode => currentCode + action.amount)
  }
}