import React, { Component } from "react";
import { Row, FormGroup, FormControl, FormLabel, Button, FormText } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import companyLogo from '../../shared/resources/aglogo_agBalance.png';
import './login.css';
import { isusername, isEmpty, isLength, isContainWhiteSpace } from '../../shared/validator';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.username)) {
            errors.username = "username can't be blank";
        } else if (!isusername(formData.username)) {
            errors.username = "Please enter a valid username";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        } else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();

        if (errors === true) {
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="LoginbackgroundImg">
                <div className="leftWhite_Bg">
                    <span class="agLogoLeft">
                        <img src={companyLogo} alt="ArisGlobal. logo" />
                    </span>
                    <div className="Login">
                        <Card style={{ border: "none", boxShadow: "none" }} >
                            <Card.Body>
                                <Card.Title className="CompName">ArisGlobal</Card.Title>
                                <Card.Text className="ProductNameSty">
                                    LifeSphere <span className="ProductNameStyRight">®</span>
                                </Card.Text>
                                <p style={{ fontSize: '.75rem', color: "#495f7b" }} >Signal and Risk Management-Tenant Config</p>

                                <Row>
                                    <form onSubmit={this.login}>
                                        <FormGroup controlId="username" validationState={formSubmitted ? (errors.username ? 'error' : 'success') : null}>
                                            <FormLabel>User Name</FormLabel>
                                            <FormControl type="text" name="username" placeholder="Enter your username" onChange={this.handleInputChange} />
                                            {errors.username &&
                                                <FormText>{errors.username}</FormText>
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
                                </Row>
                            </Card.Body>
                        </Card>

                    </div>

                    <div class="footerNew">
                        <div class="allRights">
                            <label >© ArisGlobal 2023 All rights reserved</label>
                        </div>
                        <div class="privacy">
                            <label >Privacy Policy  | </label>
                            <label class="arisglobalLink">www.ArisGlobal.com</label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;