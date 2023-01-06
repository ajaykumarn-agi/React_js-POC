import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';



function DbDetail({selectedRow}) {
  return (
    <Form data-spy="scroll">
      <fieldset title='LSSRM DB'>
      <Card.Title>LSSRM DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.msHost}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" value={selectedRow.tenantDbDetails.msPort} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.msUserName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"  value={selectedRow.tenantDbDetails.msPassword}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.msSchemaName}/>
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
          <Form.Control type="text" value={selectedRow.tenantDbDetails.csHost}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPort">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" value={selectedRow.tenantDbDetails.csPort}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.csUserName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={selectedRow.tenantDbDetails.csPassword} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.csSchemaName}/>
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
          <Form.Control type="text" value={selectedRow.tenantDbDetails.mlHost}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number"  value={selectedRow.tenantDbDetails.mlPort} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"  value={selectedRow.tenantDbDetails.mlUserName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={selectedRow.tenantDbDetails.csPassword} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.mlSchemaName}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>

      {selectedRow.tenantDbDetails.studyHost != undefined ?
      <fieldset title='Study DB' Label ="Study DB">
      <Card.Title>Study DB</Card.Title>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridHost">
          <Form.Label>Host</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.studyHost}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPor">
          <Form.Label>Port</Form.Label>
          <Form.Control type="number" value={selectedRow.tenantDbDetails.studyPort} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"  value={selectedRow.tenantDbDetails.studyUserName}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" value={selectedRow.tenantDbDetails.studyPassword}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridUserName">
          <Form.Label>Schema Name</Form.Label>
          <Form.Control type="text" value={selectedRow.tenantDbDetails.studySchemaName}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridPass">
        </Form.Group>
      </Row>
      </fieldset>
      : ""}
    </Form>
  );
}

export default DbDetail;