import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';

import Header from '../components/Header';


describe('Header | Unit Tests', () => {
  it('renders without crashing', () => {
    shallow(<Header />)
  });

  it('should have a title', function(){
    const wrapper = render(<Header />)
    assert.equal(wrapper.find('.title').length, 1)
  })

  it('renders as a <section>', () => {
    const wrapper = shallow(<Header />)
    assert.equal(wrapper.type(), 'section')
  })

})
