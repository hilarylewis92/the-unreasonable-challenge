import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import LogOut from '../components/LogOut';

describe('LogOut | Unit Tests', () => {
  it('renders without crashing', () => {
    shallow(<LogOut />)
  });

  it('should have a button to log out', function(){
    const wrapper = mount(<LogOut />)
    assert.equal(wrapper.find('.log-out-btn').length, 1)
  })

  it('should have display the users name', function(){
    const wrapper = mount(<LogOut />)
    assert.equal(wrapper.find('.user-display').length, 1)
  })

  it('renders as a <section>', () => {
    const wrapper = shallow(<LogOut />)
    assert.equal(wrapper.type(), 'section')
  })

})
