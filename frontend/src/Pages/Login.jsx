// import React from "react";
import React, { useState } from "react";

import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";
import axios from "axios";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {
    // user,
    dispatch,
    isFetching,
  } = useContext(Context);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      setError(true);
    }
  };
  //   console.log(user)
  //   console.log(isFetching)

  return (
    <div>
      <Container className="d-flex justify-content-center">
        <form className="wrapper p-5" onSubmit={handleSubmit}>
          {/* Input Username */}
          <InputGroup className="mt-4 mb-3">
            <InputGroup.Text>
              <FaUser className="icon" />
            </InputGroup.Text>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              required
              ref={userRef}
            />
          </InputGroup>

          {/* Password input */}
          <InputGroup className="mb-3">
            <InputGroup.Text>
              <GoKey className="icon" />
            </InputGroup.Text>
            <FormControl
              placeholder="Password"
              aria-label="Password"
              type="password"
              required
              ref={passwordRef}
            />
          </InputGroup>

          {/* column grid layout for inline styling */}
          {/* <div className='row mb-4'>
            <div className='col'>
              <div className='form-check'>
                <input
                  type='checkbox'
                  required
                  className='form-check-input'
                  id='formCheck'
                />
                <label className='form-check-label' htmlFor='formCheck'>
                  Remember me
                </label>
              </div>
            </div>

            <div className='col'>
              <Link as={Link} to='/ForgotPassword' className='links'>
                Forgot password?
              </Link>
            </div>
          </div> */}

          {/* Submit button  */}
          <div className="d-grid">
            <Button
              className="custom-btn"
              size="lg"
              type="submit"
              disabled={isFetching}
            >
              Sign in
            </Button>
          </div>
          <div>
            {" "}
            {error && (
              <span style={{ color: "red", marginTop: "10px" }}>
                Something went wrong!
              </span>
            )}
          </div>

          {/*  Register buttons  */}
          <div className="text-center mt-4">
            <p>
              Not a member?
              <Link as={Link} to="/CreateAccount" className="links">
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </Container>
    </div>
  );
}
