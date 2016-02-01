import React from 'react'
import {connect} from 'react-redux' 

export const Main = React.createClass({
  render: function() {
    return (
      <div><h1>Idle Coder</h1>
      <p>{this.props.code}</p>
      <p>{this.props.player}</p>
      <p>{this.props.player.maxCode}</p>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    code: state.get('code'),
    player: state.getIn(['player'])
  };
}

export const MainContainer = connect(mapStateToProps)(Main);