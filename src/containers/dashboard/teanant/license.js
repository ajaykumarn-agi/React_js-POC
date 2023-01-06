import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DataSource from './dataSourceAccess';
function License( {selectedRow}) {

    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>License Information</Card.Title>
                    <Card.Text>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Effective Date :</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{selectedRow.tenantLicense.licenseManager.licModel.effectiveDate}</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Expiry Date :</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{selectedRow.tenantLicense.licenseManager.licModel.expiryDate}</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Max. Active Users :</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{selectedRow.tenantLicense.licenseManager.licModel.maxActiveUsers}</Form.Label>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Data Source Access</Card.Title>
                    <Card.Text>
                        <DataSource/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>License</Card.Title>
                    <Card.Text>
                            <Form.Control type="file" multiple size='sm'/>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>


    );
}

export default License;