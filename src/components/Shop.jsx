import React from 'react';
import {purchase} from '../action_creators';
import reducer from '../reducer';
import {store} from '../index.jsx';

export default React.createClass({
  purchaseItem: function(event) {
    store.dispatch(purchase(event.target.id));
  },

  printStore: function() {
    const self = this;
    return this.props.state.upgrades.get('purchasables').map(function(item) {
      return (
        <div key={item.get('id')}>
          <p>{item.get('name')}</p>
          <p>{item.get('description')}</p>
          <p>{item.get('effects')}</p>
          <p>{item.get('cost')}</p>
          <p>{item.get('owned')}</p>
          <h3><button id={item.get('id')} onClick={self.purchaseItem}>Make it!</button></h3>
        </div>
      )
    })
  },

  render: function() {
    return (
      <div>{this.printStore()}</div>
    )
  }
})