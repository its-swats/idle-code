import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {tick, updatePlayer, setState, purchase} from '../src/action_creators';
import {newGameState} from '../src/initial_state';



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

  describe('action SET_STATE', () => {
    it('creates an initialState if one does not exist', () => {
      const initialState = null;
      const action = setState(initialState);
      const nextState = reducer(initialState, action)
      expect(nextState).to.equal(newGameState);
    });
  
    it('returns the current state if it exists', () => {
      const initialState = fromJS({player: {codePerTick: 7, maxCode: 10}});
      const action = setState(initialState);
      const nextState = reducer(initialState, action);
      expect(nextState).to.equal(initialState);
    });
  });
// Massive refactoring needed here
  describe('action PURCHASE', () => {
    it('adds increments the "owned" counter', () => {
      const action = setState(null);
      const purchaseAction = purchase("hard_0");
      const initialState = reducer(null, action);
      const tickAction = tick(initialState);
      let nextState = reducer(initialState, tickAction);
      nextState = reducer(nextState, purchaseAction)
      expect(nextState.getIn(['upgrades', 'purchasables', 'hard_0', 'owned'])).to.equal(1);
    });

    it('subtracts cost from player total', () => {
      const action = setState(null);
      const purchaseAction = purchase("hard_0");
      const initialState = reducer(null, action);
      const tickAction = tick(initialState);
      let nextState = reducer(initialState, tickAction);
      nextState = reducer(nextState, purchaseAction)
      expect(nextState.get('code')).to.equal(0);
    });
  });
});