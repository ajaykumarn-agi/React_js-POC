import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TenGeneral() {
  return (
    <div>
        <fieldset>
            <legend>General</legend>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridHost">
                <Form.Label>Log File Path</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPor">
                <Form.Label>Log File Size</Form.Label>
                <Form.Control type="number" />
            </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPor">
                    <Form.Label>Expire Session</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridHost">
                <Form.Label>Document Types</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPor">
                    <Form.Label>Document Size(MB)</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridHost">
            </Form.Group>
            </Row>
        </fieldset>
    </div>
  );
}

export default TenGeneral;