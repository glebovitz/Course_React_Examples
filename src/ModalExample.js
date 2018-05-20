import React from 'react';
import Modal from 'react-modal';

const ModalExample = (props) => (
  <Modal
    isOpen={!!props.selectedItem}
    onRequestClose={() => props.handleClearSelectedItems()}
    contentLabel="Selected Item"
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title' >Select Item</h3>
    {props.selectedItem && <p className='model__body' >{props.selectedItem}</p>}
    <button  className='button' onClick={() => props.handleClearSelectedItems()}>
      Okay
    </button>
  </Modal>
);

export default ModalExample;
