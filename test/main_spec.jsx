import React from 'react/addons'
import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';
import reducer from '../src/reducer';
import {tick, updatePlayer, setState} from '../src/action_creators';
import {newGameState} from '../src/initial_state';
import {Main} from '../src/components/Main';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, findRenderedDOMComponentWithClass, Simulate} = React.addons.TestUtils;

describe('main', () => {
  it('renders to the document', () => {
    const component = renderIntoDocument(<Main code={1} player={{'codeSpent': 0, 'totalSpeed': 5000}} upgrades={{'hardware': Map(), 'software': Map()}}/>);
    const title = scryRenderedDOMComponentsWithTag(component, 'h1');
    expect(title[0].textContent).to.contain('Idle');
  });

  it('tracks the users lines of code', () => {
    const component = renderIntoDocument(<Main code={1} player={{'codeSpent': 0, 'totalSpeed': 5000}} upgrades={{'hardware': Map(), 'software': Map()}}/>);
    const code = findRenderedDOMComponentWithClass(component, 'code');
    expect(code.textContent).to.equal('1')
  })

})