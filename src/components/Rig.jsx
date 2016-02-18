import React from 'react';

export default React.createClass({
	createRig: function() {
		return this.props.state.upgrades.get('purchasables').map(function(item){
			if (item.get('owned') > 0) {
				return (<p>{item.get('name')} - {item.get('owned')}</p>);
			}
		})
	},

	rigStats: function() {
		return(
			<div>
				<p>Codebank: {this.props.state.code} / {this.props.state.player.get('maxCode')}lns</p>
				<p>Compile Speed: {this.compileSpeed(this.props.state.player.get('totalSpeed'))}</p>
				<p>Code per Compile: {this.props.state.player.get('codePerTick')}</p>
				<p>Total Code Used: {this.props.state.player.get('codeSpent')}</p>
			</div>
		)
	},

	compileSpeed: function(speed) {
		return (speed / 1000) + " seconds"
	},

	render: function() {
		return(
			<div>
				{this.rigStats()}
				{this.createRig()}
			</div>
		)
	}
})