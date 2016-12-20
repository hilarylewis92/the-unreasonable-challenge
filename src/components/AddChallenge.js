import React from 'react';
// var Modal = require('boron/DropModal');//
import Modal from 'boron/DropModal';

import { Link } from 'react-router'

const AddChallenge = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  hideModal(){
    this.refs.modal.hide();
  },

  callback(event){
    console.log(event);
  },

  render() {
    return (
      <div>
        <button
        className='add-challenge-btn'
        onClick={this.showModal}>
        +
        </button>
        <Modal
          className='model-form'
          ref="modal"
          keyboard={this.callback}>
          <form className='form'>
            <h2 className='form-title'>What is your unreasonable challenge?</h2>
            <input
              className='form-title-field input'
              type='text'
              placeholder='title'
            />
            <textarea
              className='form-body-field input'
              type='text'
              placeholder='write your challenge here...'
            />
            <button
              className='add-challenge-btn-form'
              onClick={this.hideModal}>
              Save challenge
            </button>
          </form>
        </Modal>
      </div>
    );
  }
});

export default AddChallenge
