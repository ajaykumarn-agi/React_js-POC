import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TenGeneral from './tenantGenaral';

function TenaCacheManagement() {
  return (
    <div>
        <fieldset>
            <legend>Cache Management</legend>
            <Row className="mb-3">
                <Col>
                    <Form.Label>Cache Type:</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>File Path</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Max Element in Memory</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Control type="number"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Max Element on Disk</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Control type="number"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Disk Persistance</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Overflow to Disk</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Label>Eternal</Form.Label>
                </Col>
                <Col>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Control type="text"/>
                    </Form.Group>
                </Col>
            </Row>
        </fieldset>
    </div>
  );
}

export default TenaCacheManagement;