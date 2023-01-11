import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
class TenSchedulers extends Component {
    constructor(props){
        super(props)
    }
     handleChange =(event) =>{
        this.props.parentMethod(event);
      }
      render(){
    return (
        <div>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Configuration</Card.Title>
                    <Card.Text>
                    <Form.Control
                        as="textarea"
                        style={{ height: '100px' }}
                        defaultValue = {this.props.selectedRow.schedulerConfig !== null?this.props.selectedRow.schedulerConfig.configuration:""} name="configuration"
                        onChange={this.handleChange}
                        />
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>


    );
}
}

export default TenSchedulers;