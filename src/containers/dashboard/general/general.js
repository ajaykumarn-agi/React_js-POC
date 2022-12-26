import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import {  FormGroup, FormControl, FormLabel, Button, FormText } from 'react-bootstrap';

class General extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (

                
                <div className="Login">
                    <Card style={{ border: "none", boxShadow: "none"}} >
                        <Card.Body>
                           
                          

                     
                                <form onSubmit={this.login}>
                                    <FormGroup controlId="email" validationState={formSubmitted ? (errors.email ? 'error' : 'success') : null}>
                                        <FormLabel>test</FormLabel>
                                        <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                                        {errors.email &&
                                            <FormText>{errors.email}</FormText>
                                        }
                                    </FormGroup>
                                    <br />
                                    <FormGroup controlId="password" validationState={formSubmitted ? (errors.password ? 'error' : 'success') : null}>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                                        {errors.password &&
                                            <FormText>{errors.password}</FormText>
                                        }
                                    </FormGroup>
                                    <br />
                                    <Button type="submit" bsStyle="primary">Sign-In</Button>
                                </form>
                     
                        </Card.Body>
                    </Card>

                </div>
          

        )
    }
}
export default General;