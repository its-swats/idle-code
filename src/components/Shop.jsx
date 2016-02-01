import React from 'react';

export default React.createClass({
  purchaseItem: function(event) {
    
  },

  printStore: function() {
    const self = this;
    return this.props.upgrades.map(function(item) {
      return (
        <div key={item.get('id')}>
          <p>{item.get('name')}</p>
          <p>{item.get('description')}</p>
          <p>{item.get('effects')}</p>
          <p>{item.get('cost')}</p>
          <p>{item.get('owned')}</p>
          <button id={item.get('id')} onClick={self.purchaseItem}><h3>Make it!</h3></button>
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