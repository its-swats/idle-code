import {Map, List} from 'immutable';
import {calculateTick} from './tick_events';

export default function(state = Map(), action) {
  switch (action.type) {
    case 'TICK':
      return calculateTick(state, action)
  }
}