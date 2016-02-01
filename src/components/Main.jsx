import React from 'react';
import Shop from './Shop';
import {connect} from 'react-redux' ;

export const Main = React.createClass({
  render: function() {
    return (
      <div><h1>Idle Coder</h1>
      <p className='code'>{this.props.code}</p>
      <p>{this.props.player.codeSpent}</p>
      <p>{this.props.player.totalSpeed}</p>
      <Shop code={this.props.code} upgrades={this.props.upgrades.hardware} />
      <Shop code={this.props.code} upgrades={this.props.upgrades.software} />
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    code: state.get('code'),
    player: state.getIn(['player']).toObject(),
    upgrades: state.getIn(['upgrades']).toObject()
  };
}

export const MainContainer = connect(mapStateToProps)(Main);