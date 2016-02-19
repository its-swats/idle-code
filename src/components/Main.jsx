import React from 'react';
import Shop from './Shop';
import Rig from './Rig';
import CodeButton from './CodeButton';
import {connect} from 'react-redux' ;

export const Main = React.createClass({

  render: function() {
    return (
      <div className='container-fluid'>
        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <div className='well'>
            <h1 className='text-center'>Idle Coder</h1>
          </div>
        </div>
        <div className='col-xs-12 col-sm-10 col-sm-offset-1'>
          <div className='col-xs-12 col-sm-3 rig'>
            <div className='row'>
              <div className='well col-sm-11'>
                <CodeButton state={this.props}/>
              </div>
              <div className='well col-sm-11'>
                <Rig state={this.props}/>
              </div>
            </div>
            <div className='row'>

            </div>
          </div>
          <div className='shop col-xs-12 col-sm-9 well'>
            <Shop state={this.props}/>
          </div>
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