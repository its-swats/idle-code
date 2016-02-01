import React from 'react';

export default React.createClass({
  printStore: function() {
    return this.props.upgrades.map(function(item) {
      
      return (
        <div key={item.get('name')}>
          <p>{item.get('name')}</p>
          <p>{item.get('description')}</p>
          <p>{item.get('effects')}</p>
          <p>{item.get('cost')}</p>
          <p>{item.get('owned')}</p>
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