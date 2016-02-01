export function calculateTick(state, action) {
  if (state.get('code') + action.amount > state.getIn(['player', 'maxCode'])) {
    return state.updateIn(['code'], 0, code => state.getIn(['player', 'maxCode']))
  } else {
    return state.updateIn(['code'], 0, code => code + action.amount)
  }
}