import {fromJS} from 'immutable';

export const newGameState = fromJS({
  upgrades: {hardware: {}, software: {}},
  player: {codeSpent: 0, maxCode: 10, totalSpeed: 5000, codePerTick: 1},
  code: 0
})