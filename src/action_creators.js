export function tick(state) {
  return {type: 'TICK', amount: state.getIn(['player', 'codePerTick'])}
}

export function upgrade(state, upgrade){

}