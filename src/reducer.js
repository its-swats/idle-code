import {Map, List} from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    case 'TICK':
      return state.updateIn(['player', 'currentCode'], 0, currentCode => currentCode + action.amount)
  }
}