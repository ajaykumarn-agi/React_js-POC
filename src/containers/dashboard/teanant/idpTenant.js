import { render } from '@testing-library/react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';

class IdpTenant extends Component {

  constructor(props){
    super(props)
  }
  handleChange =(event) =>{
    this.props.parentMethod(event);
  }
  render(){
  return (
    <Form>
      <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>SSO URL</Form.Label>
        <Form.Control type="text"  defaultValue={this.props.selectedRow.tenantSsoModel!== null ?this.props.selectedRow.tenantSsoModel.ssoUrl:""} name="ssoUrl" onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
        <Form.Label>Idp Entity Id</Form.Label>
        <Form.Control type="text" defaultValue={this.props.selectedRow.tenantSsoModel!== null ?this.props.selectedRow.tenantSsoModel.entityId:""} name="entityId"  onChange={this.handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>IdP File</Form.Label>
            <Form.Control type="file" multiple size='sm'/>
      </Form.Group>
    </Form>
  );
}
}

export default IdpTenant;
