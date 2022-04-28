import React, { Component } from 'react'
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import{FaUser}from "react-icons/fa"
import{GoKey}from"react-icons/go"

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <Container className="d-flex justify-content-center">
                    <form className='wrapper p-5'>
                        {/* Input Username */}
                        <InputGroup className="mt-4 mb-3">
                            <InputGroup.Text><FaUser class="icon"/></InputGroup.Text>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                            />
                        </InputGroup>

                        {/* Password input */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text><GoKey class="icon"/></InputGroup.Text>
                            <FormControl
                                placeholder="Password"
                                aria-label="Password"
                            />
                        </InputGroup>

                        {/* column grid layout for inline styling */}
                        <div className="row mb-4">
                            <div className="col">
                                <div class="form-check">
                                    <input type="checkbox" required className="form-check-input" id="formCheck" />
                                    <label class="form-check-label" for="formCheck">Remember me</label>
                                </div>
                            </div>

                            <div className="col">
                                <Link as={Link} to="/ForgotPassword" className='links'>Forgot password?</Link>
                            </div>
                        </div>

                        {/* Submit button  */}
                        <div className="d-grid">
                            <Button className='custom-btn' size="lg">Sign in</Button>
                        </div>

                        {/*  Register buttons  */}
                        <div className="text-center mt-4">
                            <p>Not a member?<Link as={Link} to="/CreateAccount" className='links'>Create Account</Link></p>
                        </div>
                    </form>
                </Container>
            </div>
        )
    }
}