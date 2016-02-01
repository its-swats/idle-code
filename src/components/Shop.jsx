import React from 'react';

export default React.createClass({
  printHardware: function() {
    return this.props.upgrades.hardware.map(function(item) {
      
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
      <div>{this.printHardware()}</div>
    )
  }
})