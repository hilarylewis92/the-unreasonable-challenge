import React from 'react'

import { shallow, mount, render } from 'enzyme'
import { assert, expect } from 'chai'

import ChallengeForm from '../components/ChallengeForm';

const sinon = require('sinon')

describe('ChallengeForm | Unit Test', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<ChallengeForm />)
  })
  it('renders a "form" ', () => {
    const wrapper = mount(<ChallengeForm />)
    assert(wrapper.find('.form'))
  })
  it('renders "close-modal" ', () => {
    const wrapper = shallow(<ChallengeForm />)
    assert(wrapper.find('.close-modal'))
  })
  it('renders "form-title" ', () => {
    const wrapper = shallow(<ChallengeForm />)
    assert(wrapper.find('.form-title'))
  })
  it('renders "file inputfile" ', () => {
    const wrapper = shallow(<ChallengeForm />)
    assert(wrapper.find('.file'))
  })
  it('renders "input" ', () => {
    const wrapper = shallow(<ChallengeForm />)
    assert(wrapper.find('.input'))
  })
  it('renders "add-challenge-btn-form" ', () => {
    const wrapper = shallow(<ChallengeForm />)
    assert(wrapper.find('.add-challenge-btn-form'))
  })
  it('renders as a <form>', () => {
    const wrapper = shallow(<ChallengeForm />)
    assert.equal(wrapper.type(), 'form')
  })
})
