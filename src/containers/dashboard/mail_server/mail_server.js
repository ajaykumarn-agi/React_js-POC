import React from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function MailServer() {
  return (
    <div>
      <Card>

        <Card.Title className="newSubHeading">Mail Server <span class="btnRight">
          <Button variant="primary" size="sm" >Save</Button>
        </span></Card.Title>
        <fieldset>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridHost">
              <Form.Label>User Id</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPor">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridHost">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPor">
              <Form.Label>Socket Factory Port</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridHost">
              <Form.Label>Host</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPor">
              <Form.Label>Port</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridUserName">
              <Form.Label>Authentication Required</Form.Label>
              <Form.Check type="checkbox" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPass">
              <Form.Label>Use TLS</Form.Label>
              <Form.Check type="checkbox" />
            </Form.Group>
          </Row>
        </fieldset>
      </Card>
    </div>
  );
}
export default MailServer;