import React from 'react';
import Modal from 'boron/DropModal';


const EditForm = React.createClass({

  showModal() {
    this.refs.modal.show();
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  render() {
    const { challenge } = this.props
    return (
      <div>
        <img
          className='edit-btn'
          src={require('../images/edit-btn.png')}
          onClick={this.showModal}
        />

        <Modal
          className='modal-form edit-form'
          ref="modal">

          <form className='form'>
            <button
              className='close-modal'
              onClick={(e) => this.hideModal(e)}>
              x
            </button>

            <h2 className='form-title'>
              Edit Challenge
            </h2>

            <input
              className='form-title-field input'
              type='text'
              placeholder={challenge.title}
            />

            <textarea
              className='form-body-field input'
              type='text'
              placeholder={challenge.body}
            />

            <button
              className='add-challenge-btn-form'>
              Update challenge
            </button>
          </form>

        </Modal>
      </div>
    );
  }
});

export default EditForm
