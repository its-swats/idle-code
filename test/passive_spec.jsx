import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {tick, updatePlayer} from '../src/action_creators';


describe('reducer', () => {
  describe('action TICK', () => {
    it('increments code by set amount', () => {
      const initialState = fromJS({player: {codePerTick: 1, maxCode: 10}, code: 0});
      const action = tick(initialState)
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 1, maxCode: 10}, code: 1});
      expect(nextState).to.equal(expectedState);
    });

    it('cannot increment beyond maxCode', () => {
      const initialState = fromJS({player: {codePerTick: 15, maxCode: 10}, code: 5});
      const action = tick(initialState)
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 15, maxCode: 10}, code: 10});
      expect(nextState).to.equal(expectedState);
    });

    // it('triggers at correct intervals', () => {
      
    // });
  });

  describe('action UPGRADE', () => {

  });

  describe('action UPDATE_PLAYER', () => {
    it('updates a single nested item', () => {
      const initialState = fromJS({player: {codePerTick: 1, maxCode: 10}, code: 0});
      const updatedState = fromJS({player: {codePerTick: 5}});
      const action = updatePlayer(updatedState);
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 5, maxCode: 10}, code: 0});
      expect(nextState).to.equal(expectedState);    
    });

    it('updates multiple items', () => {
      const initialState = fromJS({player: {codePerTick: 7, maxCode: 10}});
      const updatedState = fromJS({player: {codePerTick: 10, maxCode: 3, codeSpent: 45, totalSpeed: 2000}});
      const action = updatePlayer(updatedState);
      const nextState = reducer(initialState, action);
      const expectedState = fromJS({player: {codePerTick: 10, maxCode: 3, codeSpent: 45, totalSpeed: 2000}});
      expect(nextState).to.equal(expectedState);    
    });
  });
})