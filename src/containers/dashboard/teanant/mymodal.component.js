import { Button } from 'react-bootstrap';

import React from "react";

import Modal from 'react-modal';

import DefaultTenCre from './default';

import DbDetail from './dbDetail';

import License from './license';

import TenSchedulers from './tenant_schedulers';

import IdpTenant from './idpTenant';

import Tabs from '../../../components/Tabs';

import PropTypes from "prop-types";
import { computeStyles } from '@popperjs/core';




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



export default class MyModalComponent extends React.Component {

  constructor(props) {

     super(props)

      this.state =props.dynData.selectedRow;


      this.childRef = React.createRef();

     this.afterOpenModal = this.afterOpenModal.bind(this);

     this.onModalClose = this.onModalClose.bind(this);

     this.onClick = this.onClick.bind(this);

   }

 

 



  afterOpenModal(e) {

    console.log( this.props)

    const isNew =  this.props.dynData.isNew;

     this.props.onAfterOpen(e, 'After Modal Opened');

  }




  onModalClose = e => {
    console.log( this.props)
    let data = { name: 'example', type: 'closed from child' };

    this.props.onCloseModal && this.props.onCloseModal(e,data);

  };

  simplifiedFunction(e) {
    console.log(e)
  }

  onClick = e=> {
    console.log(this.state)
   
 }

 handleDefaultChange = e=> {
  this.setState({[e.target.name]: e.target.value});
}

handleDBDetailsChange = e=> {
  let dbDetail = this.state.tenantDbDetails;
  let key1 = e.target.name;
  let value = e.target.value;
  dbDetail[key1]= value;
  this.setState({tenantDbDetails:dbDetail})
}

handleLicenseChange = e=> {
  // this.setState({[e.target.name]: e.target.value});
}

handleSchedulerChange = e=> {
  // this.setState({[e.target.name]: e.target.value});
}

handleIDPchange = e=> {
  // this.setState({[e.target.name]: e.target.value});
}

 

 render() {

  if (!this.props.IsModalOpened) {

    return null;

  }

  return (

    <div>

      <Modal scrollable={true}

        isOpen={this.props.IsModalOpened}

        onAfterOpen={e => this.afterOpenModal(e)}

        style={customStyles}

        ariaHideApp={true}
>

        <div>

          <h2>{this.props.dynData.title} {this.props.dynData.selectedRow !== undefined ? ' - ' + this.props.dynData.selectedRow.tenantId : ''}

            <span class="btnRight">

              <Button variant="primary" size="sm" onClick={this.onClick} >Save</Button>

              &nbsp;

              <Button variant="outline-dark" size="sm" onClick={e => this.onModalClose(e)}>Close</Button>

            </span>

          </h2>

        </div>

        <div>

          <Tabs>

            <div label="Default">

              <div class="container">

                <DefaultTenCre selectedRow={this.props.dynData.selectedRow}  parentMethod={this.handleDefaultChange}>
                </DefaultTenCre>

              </div>

            </div>

            {this.props.dynData.isNew === false ?

              <div label="DB Details">

                <DbDetail selectedRow={this.props.dynData.selectedRow}  parentMethod={this.handleDBDetailsChange}/>

              </div>

              : ''}

            {this.props.dynData.isNew === false ?

              <div label="License">

                <License selectedRow={ this.props.dynData.selectedRow} parentMethod={this.handleLicenseChange}/>

              </div>

              : ''}

            { this.props.dynData.isNew === false ?

              <div label="Schedulers">

                <TenSchedulers selectedRow={ this.props.dynData.selectedRow} parentMethod={this.handleSchedulerChange} />

              </div> : ''}

            { this.props.dynData.isNew === false ?

              <div label="IdP">

                <IdpTenant selectedRow={ this.props.dynData.selectedRow} parentMethod={this.handleIDPchange}/>

              </div>

              : ''}



          </Tabs>

        </div>

      </Modal>

    </div>

  );

            }

}

Modal.propTypes = {

  // onClose: PropTypes.func.isRequired,

  // show: PropTypes.bool.isRequired,

  // afterOpenModal:

  dynData:PropTypes.array.isRequired,

  IsModalOpened:PropTypes.bool.isRequired,

  onCloseModal: PropTypes.func.isRequired,

  onAfterOpen: PropTypes.func.isRequired,

};