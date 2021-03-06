import React, { useState } from 'react'
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import { MdAlternateEmail } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { GiSmartphone } from 'react-icons/gi'
import { RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri'
import axios from 'axios'

function CreateAccount() {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [password, setpassword] = useState('')
  const [validated, setValidated] = useState(false)
  const [error, setError] = useState(false)

  // Validation

  const handleSubmit = async (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post('/auth/register', {
        firstname,
        lastname,
        username,
        contact,
        email,
        password,
      })
      res.data && window.location.replace('/Login')
    } catch (err) {
      setValidated(true)
      setError(true)
    }
  }
  return (
    <Container className='d-flex justify-content-center'>
      <Form
        className='wrapperRegister'
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className='mb-3'>
          <h1>Sign Up</h1>
          <p className='font-weight-light'>It’s quick and easy.</p>
          <span className='border border-bottom-0 border-secondary w-100 mb-4'></span>
          <Form.Group as={Col} md='4'>
            <Form.Label>First name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type='text'
                placeholder='First name'
                required
                minLength='3'
                maxLength='10'
                pattern='^[A-Z]+[a-zA-Z]*$'
                title='Please enter only letters.'
                onChange={(e) => setfirstname(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                First name is a required field.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md='4'>
            <Form.Label>Last name</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type='text'
                placeholder='Last name'
                required
                minLength='3'
                maxLength='10'
                pattern='^[A-Z]+[a-zA-Z]*$'
                title='Please enter only letters.'
                onChange={(e) => setlastname(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Last name is a required field
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md='4'>
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>
                <MdAlternateEmail className='icon'></MdAlternateEmail>
              </InputGroup.Text>
              <Form.Control
                type='text'
                placeholder='Username'
                required
                pattern='^[-a-zA-Z0-9@\.+_]+$'
                onChange={(e) => setusername(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please choose a username.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group as={Col} md='3'>
            <Form.Label>Email address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>
                <IoMdMail className='icon'></IoMdMail>
              </InputGroup.Text>
              <Form.Control
                type='email'
                placeholder='@email'
                required
                onChange={(e) => setemail(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter valid email address.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md='3'>
            <Form.Label>Contact number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>
                <GiSmartphone className='icon' />
              </InputGroup.Text>
              <Form.Control
                type='phone'
                placeholder='Contact number'
                required
                maxLength='10'
                pattern='[9]{1}[8]{1}[0-9]{8}'
                onChange={(e) => setcontact(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Please enter exactly 10 digits.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md='3'>
            <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>
                <RiLockPasswordLine className='icon' />
              </InputGroup.Text>
              <Form.Control
                type='password'
                placeholder='Password'
                required
                pattern='(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$'
                onChange={(e) => setpassword(e.target.value)}
              />
              <Form.Control.Feedback type='invalid'>
                Required* Password (UpperCase, LowerCase, Number/SpecialChar and
                min 8 Chars)
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group as={Col} md='3'>
            <Form.Label>Confirm password</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text>
                <RiLockPasswordFill className='RiLockPasswordFill icon' />
              </InputGroup.Text>
              <Form.Control
                type='password'
                placeholder='Confirm password'
                required
              />
              <Form.Control.Feedback type='invalid'></Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Form.Group className='my-3'>
          <Form.Check
            required
            label='Agree to terms and conditions'
            feedback='You must agree before submitting.'
            feedbackType='invalid'
          />
        </Form.Group>

        <Row>
          <Col>
            <Button type='submit' className='custom-btn'>
              Submit form
            </Button>
          </Col>
          <Col>
            {' '}
            {error && (
              <span style={{ color: 'red', marginTop: '10px' }}>
                Something went wrong!
              </span>
            )}
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
export default CreateAccount
