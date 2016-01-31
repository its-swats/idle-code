import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {tick} from '../src/action_creators';


describe('reducer', () => {
  describe('action INCREMENT', () => {
    const initialState = fromJS({player: {codePerTick: 1, currentCode: 0, maxCode: 10}});

    it('increments code by set amount', () => {
      const action = tick(initialState)
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 1, currentCode: 1, maxCode: 10}});
      expect(nextState).to.equal(expectedState);
    });
  });
})