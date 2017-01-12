import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import LogIn from '../components/LogIn';


describe('LogIn | Unit Tests', () => {
  it('renders without crashing', () => {
    shallow(<LogIn />)
  });

  it('renders as a <section>', () => {
    const wrapper = shallow(<LogIn />)
    assert.equal(wrapper.type(), 'section')
  })

  it('should have a quote', () => {
    const wrapper = render(<LogIn />)
    assert.equal(wrapper.find('.quote').length, 1)
  })

  it('should have a author', () => {
    const wrapper = render(<LogIn />)
    assert.equal(wrapper.find('.quote-author').length, 1)
  })

  it('should have a sign in button', () => {
    const wrapper = render(<LogIn />)
    assert.equal(wrapper.find('.log-in-btn').length, 1)
  })

})
