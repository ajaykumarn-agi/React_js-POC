import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TenaCacheManagement() {
    return (
        <div className='formTable'>
            <fieldset>
                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">Cache Type:</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Select className="inputfield" defaultValue="Choose...">
                                <option className="inputfield" >Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">File Path</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Control className="inputfield"  type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">Max Element in Memory</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Control className="inputfield"  type="number" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">Max Element on Disk</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Control className="inputfield"  type="number" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">Disk Persistance</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Control className="inputfield"  type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">Overflow to Disk</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Control className="inputfield"  type="text" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mb-3">
                    <Col>
                        <Form.Label className="applabel">Eternal</Form.Label>
                    </Col>
                    <Col>
                        <Form.Group as={Col} controlId="formGridHost">
                            <Form.Control className="inputfield"  type="text" />
                        </Form.Group>
                    </Col>
                </Row>
            </fieldset>
        </div>
    );
}

export default TenaCacheManagement;