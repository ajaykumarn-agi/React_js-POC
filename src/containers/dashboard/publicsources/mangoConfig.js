import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function MangoConfig() {
  return (
    <Form data-spy="scroll">
      <fieldset title='LSSRM DB'>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Secondary Host</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Batch Size</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>AERS DB</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>AERS Default Suspect</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>AERS Exclude Duplicate Cases</Form.Label>
          <Form.Check type="checkbox"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>AERS Include Suspect Cases</Form.Label>
          <Form.Check  type="checkbox" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>MAUDE DB</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>VAERS DB</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>VIGIBASE DB</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Vigibase Default Suspect</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Vigibase Exclude Duplicate Cases</Form.Label>
          <Form.Check type="checkbox"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Vigibase Include Suspect Cases</Form.Label>
          <Form.Check  type="checkbox" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>PMDA DB</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>
    </Form>
  );
}

export default MangoConfig;