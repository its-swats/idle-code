import {fromJS} from 'immutable';
import {upgrades} from './upgrades.js'

export const newGameState = fromJS({
  upgrades: upgrades,
  player: {codeSpent: 0, maxCode: 10, totalSpeed: 5000, codePerTick: 1},
  code: 0
})