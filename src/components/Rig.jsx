import React from 'react';

export default React.createClass({
	createRig: function() {
		return this.props.state.upgrades.get('purchasables').map(function(item){
			if (item.get('owned') > 0) {
				return (<p><strong>{item.get('name')}:</strong><br />{item.get('owned')}</p>);
			}
		})
	},

	rigStats: function() {
		return(
			<div className='well'>
				<p><strong>Codebank:</strong><br />{this.props.state.code} / {this.props.state.player.get('maxCode')}lns</p>
				<p><strong>Compile Speed:</strong><br /> {this.compileSpeed(this.props.state.player.get('totalSpeed'))}</p>
				<p><strong>Code per Compile:</strong><br /> {this.props.state.player.get('codePerTick')} lines</p>
				<p><strong>Total Code Used:</strong><br /> {this.props.state.player.get('codeSpent')} lines</p>
			</div>
		)
	},

	compileSpeed: function(speed) {
		return (speed / 1000) + " seconds"
	},

	render: function() {
		return(
			<div>
				<strong><h3 className='text-center'>Your Rig</h3></strong>
				<div>
					{this.rigStats()}
					<div className='well'>
						{this.createRig()}
					</div>
				</div>
			</div>
		)
	}
})