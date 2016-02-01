import {Map, Line, fromJS} from 'immutable';

export const initialState = fromJS({
  upgrades: {},
  player: {codeSpent: 0, maxCode: 10, totalSpeed: 1000, codePerTick: 1},
  code: 0
})

/*
upgrades: {hardware: {}, software{}},
player: {maxCode: x, totalSpeed:, codePerTick:, codeSpent:},
code: x


*/