export function tick(state) {
  return {type: 'TICK', amount: state.getIn(['player', 'codePerTick'])};
}

export function updatePlayer(newState){
  return {type: 'UPDATE_PLAYER', state: newState}
}

export function codeHard(amount){
	return {type: 'CODE', amount: amount}
}

export function setState(state){
  return {type: 'SET_STATE', state: state};
}

export function purchase(item){
	return {type: 'PURCHASE', item: item}
}