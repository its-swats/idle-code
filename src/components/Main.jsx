import React from 'react'
import {connect} from 'react-redux' 

export const Main = React.createClass({
  render: function() {
    return (
      <div><h1>Idle Coder</h1>
      <p>{this.props.code}</p>
      <p>{this.props.player['codeSpent']}</p>
      <p>{this.props.player.totalSpeed}</p>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    code: state.get('code'),
    player: state.getIn(['player']).toObject(),
    upgrades: state.getIn(['upgrades']).toObject
  };
}

export const MainContainer = connect(mapStateToProps)(Main);