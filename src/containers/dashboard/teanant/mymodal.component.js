import { Button } from 'react-bootstrap';
import React from 'react';
import Modal from 'react-modal';
import Tabs from '../../../components/Tabs';

const customStyles = {
  content: {
    top: '20%',
    left: '50%',
    right: 'auto',
    width: '90%',
    innerHeight: '70%',
    outerHeight: '50%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function MyModalComponent(props) {
  function afterOpenModal(e) {
    props.onAfterOpen(e, 'After Modal Opened');
  }

  function onModalClose(event) {
    let data = { name: 'example', type: 'closed from child' };
    props.onCloseModal(event, data);
  }

  return (
    <div>
      <Modal
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={true}
      >
        <h2>{props.dynData.title}</h2>
        <div>
          <Tabs>
            <div label="Default">
              <p>this is default body</p>
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    One of two columns
                  </div>
                  <div class="col-sm">
                    One of two columns
                  </div>
                </div>
              </div>
            </div>
            <div label="DB Details">
              <p>this is DB Details body</p>
            </div>
            <div label="License">
              <p>this is License body</p>
            </div>
            <div label="Schedulers">
              <p>this is Schedulers body</p>
            </div>
            <div label="IdP">
              <p>this is IdP body</p>
            </div>
          </Tabs>
        </div>

        <span class="btnRight">
          <Button variant="primary" size="sm">Create</Button>
          &nbsp;
          <Button variant="outline-dark" size="sm" onClick={e => onModalClose(e)}>Close</Button>
        </span>

      </Modal>
    </div>
  );
}

export default MyModalComponent;
