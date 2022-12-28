import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



function DbDetail() {
  return (
    <Form data-spy="scroll">
      <fieldset title='LSSRM DB'>
      <Card.Title>LSSRM DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>

      <fieldset title='Company Safety DB' Label ="Company Safety DB">
      <Card.Title>Company Safety DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>

      <fieldset title='ML DB' Label ="ML DB">
      <Card.Title>ML DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>

      <fieldset title='Study DB' Label ="Study DB">
      <Card.Title>Study DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>
    </Form>
  );
}

export default DbDetail;