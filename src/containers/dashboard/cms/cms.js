import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


function CMS() {
  return (
    <div>
      <fieldset>
          <legend>CMS</legend>
          <Card>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTenantId">
              <Form.Label>Repositary URL</Form.Label>
              <Form.Control type="text" placeholder="Enter Repositary URL" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTenantName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" />
            </Form.Group>
      </Row>

      <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridTenantId">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTenantName">
              <Form.Label>Default Workspace Name</Form.Label>
              <Form.Control type="text" placeholder="Enter tenant name" />
            </Form.Group>
      </Row>

      <Row className="mb-3">
        
        <Form.Group as={Col} controlId="formGridDesc">
            <FloatingLabel controlId="floatingTextarea2">Configuration</FloatingLabel>
                <Form.Control
                as="textarea"
                style={{ height: '100px' }}
                />
          </Form.Group>
      </Row>
          </Card>
      </fieldset>
    </div>
  );
}
export default CMS;