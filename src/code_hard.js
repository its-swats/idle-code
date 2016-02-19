export function codeHard(state, amount) {
	if (state.get('code') + amount > state.getIn(['player', 'maxCode'])) {
	  return state.update('code', val => state.getIn(['player', 'maxCode']))
	} else {
	  return state.update('code', val => val + amount);
	}
}

