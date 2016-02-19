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
        <div className='col-xs-12 col-sm-6 well' key={item.get('id')}>
          <div className='row'>
            <div className='item-name col-sm-10 col-xs-12'>
              {item.get('name')}
            </div>
            <div className='item-cost col-sm-2 col-xs-12 text-left'>
              {item.get('cost')}ln
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
      <div>
        <h3 className='text-center'>The Shop</h3>
        {this.printStore()}
      </div>
    )
  }
})