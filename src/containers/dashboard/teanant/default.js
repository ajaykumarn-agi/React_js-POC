import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';

import Row from 'react-bootstrap/Row';

import FloatingLabel from 'react-bootstrap/FloatingLabel';

import React, { Component } from 'react';

import axios from "axios";
import { Button } from 'react-bootstrap';

class DefaultTenCre extends Component{

constructor(props) {
  super(props);

      this.myRef = React.createRef();

      this.state = props.selectedRow;

      this.handleTenaChange=this.handleTenaChange.bind(this);
      this.handleTenaNameChange = this.handleTenaNameChange.bind(this);
      this.handleStatusChange = this.handleStatusChange.bind(this);
      this.handleDescriChange = this.handleDescriChange.bind(this);

 }


 handleSubmit = (event)=> {

    event.preventDefault();

    console.log(this.state);

    axios.post('http://localhost:8080/agBalance-ConfigTool/servlet/rest/saveTeantDetails', this.state)
    .then(response => this.setState({ articleId: response.data.id }));

    console.log(this.state);
}

handleTenaChange(e) {

    this.setState({tenantId: e.target.value});

 }

handleTenaNameChange(e) {

    this.setState({name: e.target.value});

}

 handleStatusChange(e) {

     this.setState({status: e.target.value});

 }

 handleDescriChange(e) {

    this.setState({description: e.target.value});

 }

 render() {

return (

    <Form ref={this.myRef}>

    <fieldset title='Default'>

    <Row className="mb-3">

     <Form.Group as={Col} controlId="formGridTenantId">

      <Form.Label>Tenant ID</Form.Label>

      <Form.Control type="text" placeholder="Enter tenant id" defaultValue={this.props.selectedRow.tenantId} onChange={this.handleTenaChange}/>

     </Form.Group>



   <Form.Group as={Col} controlId="formGridTenantName">

      <Form.Label>Tenant Name</Form.Label>

      <Form.Control type="text" placeholder="Enter tenant name" defaultValue={this.props.selectedRow.name} onChange={this.handleTenaNameChange}/>

     </Form.Group>

    </Row>

    <Row className="mb-3">

     <Form.Group as={Col} controlId="formGridStatus">

      <Form.Label>Status</Form.Label>

      <Form.Select defaultValue="Inactive" value={this.props.selectedRow.tenantStatus} onChange={this.handleStatusChange}>

       <option value={1}>Active</option>

       <option value={0}>Inactive</option>

      </Form.Select>

     </Form.Group>



     <Form.Group as={Col} controlId="formGridDesc">

       <FloatingLabel controlId="floatingTextarea2">Description</FloatingLabel>

         <Form.Control

         as="textarea"

         style={{ height: '100px' }}

         value={this.props.selectedRow.description} defaultValue={this.handleDescriChange}

         />

      </Form.Group>

    </Row>

    <Button variant="primary" size="sm" onClick={this.handleSubmit} >Save</Button>

    </fieldset>

   </Form>

   

   );

  }

 }

export default DefaultTenCre;

