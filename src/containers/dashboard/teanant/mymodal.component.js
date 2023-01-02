import { Button } from 'react-bootstrap';
import React from 'react';
import Modal from 'react-modal';
import DefaultTenCre from './default';
import DbDetail from './dbDetail';
import License from './license';
import TenSchedulers from './tenant_schedulers';
import IdpTenant from './idpTenant';
import Tabs from '../../../components/Tabs';


const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    width: '90%',
    innerHeight: '120%',
    outerHeight: '80%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'scroll'

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
      <Modal scrollable={true}
        isOpen={props.IsModalOpened}
        onAfterOpen={e => afterOpenModal(e)}
        style={customStyles}
        ariaHideApp={true}
      >
        <div>
        <h2>{props.dynData.title}
        <span class="btnRight">
          <Button variant="primary" size="sm">Save</Button>
          &nbsp;
          <Button variant="outline-dark" size="sm" onClick={e => onModalClose(e)}>Close</Button>
        </span>
        </h2>
        </div>
        <div>
          <Tabs>
            <div label="Default">
              <div class="container">
               <DefaultTenCre/>
              </div>
            </div>
            <div label="DB Details">
              <DbDetail/>
            </div>
            <div label="License">
              <License/>
            </div>
            <div label="Schedulers">
              <TenSchedulers/>
            </div>
            <div label="IdP">
              <IdpTenant/>
            </div>
          </Tabs> 
        </div>
      </Modal>
    </div>
  );
}

export default MyModalComponent;
