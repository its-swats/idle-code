import React from 'react';
import Shop from './Shop';
import {connect} from 'react-redux' ;

export const Main = React.createClass({
  render: function() {
    return (
      <div><h1>Idle Coder</h1>
      <p className='code'>{this.props.code}</p>
      <p>{this.props.player.get('codeSpent')}</p>
      <p>{this.props.player.get('totalSpeed')}</p>
      <Shop state={this.props}/>
      </div>
    )
  }
})

function mapStateToProps(state) {
  return {
    code: state.get('code'),
    player: state.get('player'),
    upgrades: state.get('upgrades')
  };
}

export const MainContainer = connect(mapStateToProps)(Main);