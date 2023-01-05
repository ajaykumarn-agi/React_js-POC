import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
function TenSchedulers( {selectedRow} ) {

    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Configuration</Card.Title>
                    <Card.Text>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        value = {selectedRow.schedulerConfig.configuration}
                        />
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>


    );
}

export default TenSchedulers;