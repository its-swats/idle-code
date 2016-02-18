import React from 'react';
import Shop from './Shop';
import {connect} from 'react-redux' ;

export const Main = React.createClass({
  codePerSec: function () {
  let second = this.props.player.get('totalSpeed') / 1000
  let code = this.props.player.get('codePerTick')
  return (Math.round(code / second * 10) / 10)
  },

  render: function() {
    return (
      <div className='col-xs-12 col-sm-10 col-sm-offset-1 main'>
        <div className='well'>
          <h1 className='text-center'>Idle Coder</h1>
          <ul className='list-inline text-center'>
            <li className='code'>Lines of Code: {this.props.code}</li>
            <li>Code/second: {this.codePerSec()}</li>
            <li>Code Spent: {this.props.player.get('codeSpent')}</li>
          </ul>
          <Shop state={this.props}/>
        </div>
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