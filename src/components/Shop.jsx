import React from 'react';
import {purchase} from '../action_creators';
import reducer from '../reducer';
import {store} from '../index.jsx';

export default React.createClass({
  purchaseItem: function(event) {
    store.dispatch(purchase(event.target.id));
  },

  makeButton: function(item) {
    if (this.props.state.code >= item.get('cost')) {
      return (<button className='btn btn-lg btn-primary btn-block' id={item.get('id')} onClick={this.purchaseItem}>Make it!</button>);
    }else{
      return (<button className='btn btn-lg btn-primary btn-block' disabled="disabled">Not Enough Code</button>);
    };
  },

  printStore: function() {
    const self = this;
    return this.props.state.upgrades.get('purchasables').map(function(item) {
      return (
        <div className='shop-box col-xs-12 col-sm-6 col-lg-4 well' key={item.get('id')}>
          <div className='row'>
            <div className='item-name col-xs-10'>
              {item.get('name')}
            </div>
            <div className='item-cost col-xs-2'>
              {item.get('cost')}cd
            </div>
          </div>
          <div className='row'>
            <div className='item-desc col-xs-12'>
              {item.get('description')}
            </div>
          </div>
         {self.makeButton(item)}
        </div>
      )
    })
  },

  render: function() {
    return (
      <div className='row' >{this.printStore()}</div>
    )
  }
})