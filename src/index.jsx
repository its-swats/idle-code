import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {fromJS} from 'immutable';
import {createStore} from 'redux'
import {setState, updatePlayer, tick} from './action_creators';
import {Provider} from 'react-redux';
import {MainContainer} from './components/main'

//Maybe try making the tick counter a method of Main? 
const store = createStore(reducer);
store.dispatch(setState())

gameLoop();
function gameLoop(){
  var currentState = store.getState();
  setTimeout(function(){
    store.dispatch(tick(currentState))
    gameLoop();
  },currentState.getIn(['player', 'totalSpeed']))
}

ReactDOM.render(<Provider store={store}><MainContainer /></Provider>, document.getElementById('app'));