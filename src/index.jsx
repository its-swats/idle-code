import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import {fromJS} from 'immutable';
import {createStore} from 'redux'
import {setState, updatePlayer} from './action_creators';
import {Provider} from 'react-redux';
import {MainContainer} from './components/main'


const store = createStore(reducer);
store.dispatch(setState(null))


// function decreaseSpeed() {
//   return state.updateIn(['player', 'totalSpeed'], totalSpeed => totalSpeed - 200)
// }

// const state = reducer(undefined, setState(undefined));
// startGame();
// export function startGame() {
//   setInterval(function(){

//   },state.getIn(['player', 'totalSpeed']))
// }

ReactDOM.render(<Provider store={store}><MainContainer /></Provider>, document.getElementById('app'));