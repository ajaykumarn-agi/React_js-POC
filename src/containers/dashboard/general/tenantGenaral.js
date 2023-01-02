import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TenGeneral() {
    return (
        <div className='formTable'>

            <fieldset>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Label className="applabel">Log File Path</Form.Label>
                        <Form.Control className="inputfield" type="text" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPor">
                        <Form.Label className="applabel">Log File Size</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPor">
                        <Form.Label className="applabel">Expire Session</Form.Label>
                        <Form.Control type="number" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridHost">
                        <Form.Label className="applabel">Document Types</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridPor">
                        <Form.Label className="applabel">Document Size(MB)</Form.Label>
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