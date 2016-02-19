import {Map, List} from 'immutable';
import {calculateTick} from './tick_events';
import {newGameState} from './initial_state';
import {purchaseUpgrade} from './purchase_upgrade';
import {codeHard} from './code_hard';

export default function(state = newGameState, action) {
  switch (action.type) {
    case 'TICK':
      return calculateTick(state, action);
    case 'PURCHASE':
    	return purchaseUpgrade(state, action.item);
    case 'CODE':
      return codeHard(state, action.amount);
    case 'UPDATE_PLAYER':
      return state.mergeDeep(action.state);
    case 'SET_STATE':
      return (!state ? newGameState : state)
  }
}