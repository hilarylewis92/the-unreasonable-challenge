import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import { assert, expect } from 'chai';
import sinon from 'sinon';

import App from '../components/App';


describe('App | Unit Tests', () => {
  it('renders without crashing', () => {
    shallow(<App />)
  });

  it('has constructor that sets state of challengesList to an empty array', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('challengesList')).deep.equal([]);
  })

  it('has constructor that sets state of draftChallengeTitle to an empty string', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('draftChallengeTitle')).deep.equal('');
  })

  it('has constructor that sets state of draftChallengeBody to an empty string', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('draftChallengeBody')).deep.equal('');
  })

  it('has constructor that sets state of imagePreviewURL to an empty string', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('imagePreviewURL')).deep.equal('');
  })

  it('has constructor that sets state of file to an empty string', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('file')).deep.equal('');
  })

  it('has constructor that sets state of user to null', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('user')).deep.equal(null);
  })

  it('renders as a <div>', () => {
    const wrapper = shallow(<App />)
    assert.equal(wrapper.type(), 'div')
  })

  it('can call componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.componentDidMount.calledOnce, true)
  })

  it('renders xml elements', () => {
    sinon.spy(App.prototype, 'render')
    const wrapper = mount(<App />)
    assert.equal(App.prototype.render.calledOnce, true)
  })
})
