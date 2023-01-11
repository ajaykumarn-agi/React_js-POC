import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import DataSource from './dataSourceAccess';
class License extends Component {

    constructor(props){
        super(props)
       this.state = {
        license:[]
       }
        if(this.props.selectedRow.tenantLicense!==null)
            this.setState({license:Object.keys(this.props.selectedRow.tenantLicense.licenseManager.licModel.appLicenseModules)});
    }
   

     handleChange =(event) =>{
        this.props.parentMethod(event);
      }
    render(){
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
                                <Form.Label >{this.props.selectedRow.tenantLicense !== null ? this.props.selectedRow.tenantLicense.licenseManager.licModel.effectiveDate:""}</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Expiry Date :</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{this.props.selectedRow.tenantLicense !== null ? this.props.selectedRow.tenantLicense.licenseManager.licModel.expiryDate:""}</Form.Label>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <Form.Label>Max. Active Users :</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{this.props.selectedRow.tenantLicense !== null ?this.props.selectedRow.tenantLicense.licenseManager.licModel.maxActiveUsers : ""}</Form.Label>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>Data Source Access</Card.Title>
                    <Card.Text>
                        <DataSource dbSources = {this.state.license}/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>License</Card.Title>
                    <Card.Text>
                            <Form.Control type="file" multiple size='sm' name='' onChange={this.handleChange}/>
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>


    );
}
}

export default License;