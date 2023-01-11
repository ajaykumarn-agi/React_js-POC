import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import React,{Component, useState} from 'react';
import axios from 'axios';

import { Button } from 'react-bootstrap';


class DbDetail extends Component{
  constructor(props){
    super(props)
    this.state = this.props.selectedRow.tenantDbDetails;

    this.handleLssrmHostChange = this.handleLssrmHostChange.bind(this);
    this.handleLssrmPortChange=this.handleLssrmPortChange.bind(this);
    this.handleLssrmUserNameChange=this.handleLssrmUserNameChange.bind(this);
    this.handleLssrmPassChange=this.handleLssrmPassChange.bind(this);
    this.handleLssrmSchemaChange=this.handleLssrmSchemaChange.bind(this);

  }
  handleLssrmHostChange(e){
    this.setState({msHost: e.target.value});
    console.log(this.props.selectedRow)
  }
  handleLssrmPortChange(e){
    this.setState({msPort: e.target.value});
  }
  handleLssrmUserNameChange(e){
    this.setState({msUserName: e.target.value});
  }
  handleLssrmPassChange(e){
    this.setState({msPassword: e.target.value});
  }
  handleLssrmSchemaChange(e){
    this.setState({msSchemaName: e.target.value});

  }

 
 handleSubmit =(event)=>{
  event.preventDefault();

    console.log(this.props.selectedRow);

    axios.post('http://localhost:8080/agBalance-ConfigTool/servlet/rest/saveTeantDetails',this.props.selectedRow
    )
    .then(response => this.setState({ articleId: response.data.id }));

    console.log(this.props.selectedRow);
}
render(){
  return (
    <Form data-spy="scroll" onSubmit={this.handleSubmit}>
      <fieldset title='LSSRM DB'>
      <Card.Title>LSSRM DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridLSSRMHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.msHost} name ="msHost"  onChange={this.handleLssrmHostChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLSSRMPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" defaultValue={this.props.selectedRow.tenantDbDetails.msPort} name ="msPort"  onChange={this.handleLssrmPortChange} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserLSSRMName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.msUserName}  name ="msUserName"  onChange={this.handleLssrmUserNameChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLSSRMPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  defaultValue={this.props.selectedRow.tenantDbDetails.msPassword} name ="msPassword"  onChange={this.handleLssrmPassChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridLSSRMUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.msSchemaName} name ="msSchemaName"  onChange={this.handleLssrmSchemaChange}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridLSSRM">
        </Form.Group>
      </Row>
      </fieldset>

      <fieldset title='Company Safety DB' Label ="Company Safety DB">
      <Card.Title>Company Safety DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCsHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.csHost} name ="csHost"  onChange={this.handleLssrmChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCsPort">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" defaultValue={this.props.selectedRow.tenantDbDetails.csPort}  name ="csPort"  onChange={this.handleLssrmChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCsUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.csUserName} name ="csUserName"  onChange={this.handleLssrmChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCsPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" defaultValue={this.props.selectedRow.tenantDbDetails.csPassword} name ="csPassword"  onChange={this.handleLssrmChange} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCsSchemaName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.csSchemaName} name ="csSchemaName"  onChange={this.handleLssrmSchemaChange}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridCs">
        </Form.Group>
      </Row>
      </fieldset>

      <fieldset title='ML DB' Label ="ML DB">
      <Card.Title>ML DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMlHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.mlHost} name ="mlHost"  onChange={this.handleLssrmChange} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMlPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number"  defaultValue={this.props.selectedRow.tenantDbDetails.mlPort} name ="mlPort"  onChange={this.handleLssrmChange} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMlUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"  defaultValue={this.props.selectedRow.tenantDbDetails.mlUserName}  name ="mlUserName"  onChange={this.handleLssrmChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMlPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" defaultValue={this.props.selectedRow.tenantDbDetails.mlPassword}  name ="mlPassword"  onChange={this.handleLssrmChange} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridMlSchema">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.mlSchemaName} name ="mlSchemaName"  onChange={this.handleLssrmSchemaChange}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridMl">
        </Form.Group>
      </Row>
      </fieldset>

      {this.props.selectedRow.tenantDbDetails.studyHost !== undefined ?
      <fieldset title='Study DB' Label ="Study DB">
      <Card.Title>Study DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.studyHost} name ="studyHost"  onChange={this.handleLssrmChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" defaultValue={this.props.selectedRow.tenantDbDetails.studyPort} name ="studyPort"  onChange={this.handleLssrmChange} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"  defaultValue={this.props.selectedRow.tenantDbDetails.studyUserName} name ="studyUserName"  onChange={this.handleLssrmChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" defaultValue={this.props.selectedRow.tenantDbDetails.studyPassword} name ="studyPassword"  onChange={this.handleLssrmChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" defaultValue={this.props.selectedRow.tenantDbDetails.studySchemaName} name ="studySchemaName"  onChange={this.handleLssrmSchemaChange}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>
      : ""}
      <Button variant="primary" size="sm" onClick={this.handleSubmit} >Save</Button>
    </Form>
  );
}
}


export default DbDetail;