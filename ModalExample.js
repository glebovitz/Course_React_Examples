import React from 'react';
import Modal from 'react-modal';

const ModalExample = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={() => props.handleClearSelectedOption()}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title' >Select Option</h3>
    {props.selectedOption && <p className='model__body' >{props.selectedOption}</p>}
    <button  className='button' onClick={() => props.handleClearSelectedOption()}>
      Okay
    </button>
  </Modal>
);

export default ModalExample;
