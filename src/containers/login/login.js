import React, { Component } from "react";
import { Row, FormGroup, FormControl, FormLabel, Button, FormText } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import companyLogo from '../../shared/resources/aglogo_agBalance.png';
import './login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from '../../shared/validator';

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

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
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
            <div class="leftWhite_Bg">
                <div class="agLogoLeft">
                    <img src={companyLogo} alt="ArisGlobal. logo" />
                </div>
                <div className="Login">
                    <Card style={{ border: "none", boxShadow: "none", width: '28rem' }} >
                        <Card.Body>
                            <Card.Title className="CompName">ArisGlobal</Card.Title>
                            <Card.Text className="ProductNameSty">
                                LifeSphere <span className="ProductNameStyRight">®</span>
                            </Card.Text>
                            <p style={{ fontSize: '.75rem', color: "#495f7b" }} >Signal and Risk Management-Tenant Config</p>

                            <Row>
                                <form onSubmit={this.login}>
                                    <FormGroup controlId="email" validationState={formSubmitted ? (errors.email ? 'error' : 'success') : null}>
                                        <FormLabel>Email</FormLabel>
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
                            </Row>
                        </Card.Body>
                    </Card>

                </div>
                <div class="footerNew">
                    <div class="allRights">
                        <label >© ArisGlobal 2022 All rights reserved</label>
                    </div>
                    <div class="privacy">
                        <label >Privacy Policy  | </label>
                        <label class="arisglobalLink">www.ArisGlobal.com</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;