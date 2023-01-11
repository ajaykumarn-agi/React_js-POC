import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function DataConfig() {
  return (
    
    <Form data-spy="scroll">
      <fieldset>
        <legend>Source Data Configuration</legend>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>AERS Data Directory</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>VAERS Data Directory</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Vigibase Data Directory</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>
      <fieldset>
        <legend>PMDA Details</legend>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>PMDA Database Username</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>PMDA Database Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>PMDA Data Directory</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>
    </Form>
  );
}

export default DataConfig;