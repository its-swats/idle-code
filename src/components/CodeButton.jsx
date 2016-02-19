import React from 'react';
import {store} from '../index.jsx';
import {codeHard} from '../action_creators.js';

export default React.createClass({
	codeHard: function() {
		let amount = this.props.state.upgrades.getIn(['purchasables', 'soft_1', 'owned'])
		let action = codeHard(amount)
		store.dispatch(action);
	},

	render: function() { 
		return (
			<button className='btn btn-large btn-danger btn-block btn-lg' onClick={this.codeHard}>CODE</button>
		)
	}
})