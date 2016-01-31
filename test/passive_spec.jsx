import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {tick} from '../src/action_creators';


describe('reducer', () => {
  describe('action TICK', () => {
    it('increments code by set amount', () => {
      const initialState = fromJS({player: {codePerTick: 1, currentCode: 9, maxCode: 10}});
      const action = tick(initialState)
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 1, currentCode: 10, maxCode: 10}});
      expect(nextState).to.equal(expectedState);
    });

    it('cannot increment beyond maxCode', () => {
      const initialState = fromJS({player: {codePerTick: 15, currentCode: 1, maxCode: 10}});
      const action = tick(initialState)
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 15, currentCode: 10, maxCode: 10}});
      expect(nextState).to.equal(expectedState);
    });
  });

  describe('action UPGRADE', () => {

  });

  describe('action UPDATE_PLAYER', () => {

  });
})