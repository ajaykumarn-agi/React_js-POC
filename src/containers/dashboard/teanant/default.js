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
      this.handleChange = this.handleChange.bind(this);

 }


 handleSubmit = (event)=> {

    event.preventDefault();

    console.log(this.state);

    axios.post('http://localhost:8080/agBalance-ConfigTool/servlet/rest/saveTeantDetails', this.state)
    .then(response => this.setState({ articleId: response.data.id }));

    console.log(this.state);
}

// handleChange(e) {
//   this.setState({[e.target.name]: e.target.value});
//   // this.props.selectedRow.[e.target.name] = e.target.value;
//   this.props.selectedRow = this.state;
// }

handleTenaChange(e) {
  console.log( e.target.name)
  this.props.selectedRow.tenantId = e.target.value;
    this.setState({tenantId: e.target.value});

 }


 handleChange  = (event)=> {
  this.props.parentMethod(event);
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

      <Form.Control type="text" placeholder="Enter tenant id" name="tenantId" defaultValue={this.props.selectedRow.tenantId} 
 onChange={this.handleChange}
      
      />
     </Form.Group>



   <Form.Group as={Col} controlId="formGridTenantName">

      <Form.Label>Tenant Name</Form.Label>

      <Form.Control type="text" placeholder="Enter tenant name" defaultValue={this.props.selectedRow.name} name="name" onChange={this.handleChange}/>

     </Form.Group>

    </Row>

    <Row className="mb-3">

     <Form.Group as={Col} controlId="formGridStatus">

      <Form.Label>Status</Form.Label>

      <Form.Select defaultValue="Inactive" value={this.props.selectedRow.tenantStatus} name ="tenantStatus" onChange={this.handleChange}>

       <option value={1}>Active</option>

       <option value={0}>Inactive</option>

      </Form.Select>

     </Form.Group>



     <Form.Group as={Col} controlId="formGridDesc">

       <FloatingLabel controlId="floatingTextarea2">Description</FloatingLabel>

         <Form.Control
         as="textarea"
         style={{ height: '100px' }}
          name = "description"
         defaultValue={this.props.selectedRow.description} onChange={this.handleChange}

         />

      </Form.Group>

    </Row>

    </fieldset>

   </Form>

   

   );

  }

 }

export default DefaultTenCre;

