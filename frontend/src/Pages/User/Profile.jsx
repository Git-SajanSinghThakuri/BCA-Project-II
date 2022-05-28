import React, { useEffect, useState, useContext } from 'react'
import {
  Container,
  Image,
  Card,
  Button,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import { Context } from '../../context/Context'
import { FiClock } from 'react-icons/fi'
import { GoDeviceMobile } from 'react-icons/go'
import { FiMail } from 'react-icons/fi'
import { TiCamera } from 'react-icons/ti'
import ManageProduct from './ManageProduct'
import axios from 'axios'

export default function Profile() {
  const { user, dispatch } = useContext(Context)
  const [updateMode, setUpdateMode] = useState(false)
  const PF = 'http://localhost:5000/images/'

  // Update user
  const [file, setFile] = useState(null)
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [contact, setcontact] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/users/${user._id}`)
      setFile(res.data.file)
      setfirstname(res.data.firstname)
      setlastname(res.data.lastname)
      setemail(res.data.email)
      setcontact(res.data.contact)
    }
    getUser()
  }, [user._id])

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch({ type: 'UPDATE_START' })

    const updatedUser = {
      _id: user._id,
      firstname,
      lastname,
      contact,
      email,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      updatedUser.profilepic = filename
      try {
        await axios.post('/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axios.put('/users/' + user._id, updatedUser)
      setSuccess(true)
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data })
    } catch (err) {
      dispatch({ type: 'UPDATE_FAILURE' })
    }
  }
  return (
    <>
      <Container fluid>
        <Row>
          {updateMode ? (
            <>
              <Col className='profile-card' sm={12} md={6} lg={4} xl={3}>
                {' '}
                <Card
                  style={{ width: '18rem' }}
                  className='card border-0 profile-card'
                >
                  <form onSubmit={handleSubmit}>
                    <Card.Body>
                      <div className='d-flex justify-content-center pt-2'>
                        <label htmlFor='fileInput'>
                          <Image
                            className='profileImg'
                            src={
                              file
                                ? URL.createObjectURL(file)
                                : PF + user.profilepic
                            }
                            onError={(e) => {
                              e.target.onerror = null
                              e.target.src =
                                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png?20160527143724'
                            }}
                            type='file'
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                          />
                          <TiCamera />
                        </label>
                        <Form.Group className='mt-4 mb-3'>
                          <Form.Control
                            type='file'
                            id='fileInput'
                            className='d-none'
                            onChange={(e) => setFile(e.target.files[0])}
                            required
                          />
                        </Form.Group>
                      </div>

                      <div className='d-grid gap-2'>
                        <Button
                          type='submit'
                          className='btn btn-secondary mt-2 profile-edit-btn'
                        >
                          Update Profile Picture
                        </Button>
                      </div>
                    </Card.Body>
                  </form>

                  <form onSubmit={handleSubmit}>
                    <Card.Body>
                      <InputGroup className='mb-3'>
                        <FormControl
                          placeholder='First name'
                          value={firstname}
                          onChange={(e) => setfirstname(e.target.value)}
                        />
                        <FormControl
                          placeholder='Last name'
                          value={lastname}
                          onChange={(e) => setlastname(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className='mb-3'>
                        <FormControl
                          placeholder='email'
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className='mb-3'>
                        <FormControl
                          placeholder='contact'
                          value={contact}
                          onChange={(e) => setcontact(e.target.value)}
                        />
                      </InputGroup>
                      <div className='d-grid gap-2'>
                        <Button
                          type='submit'
                          className='btn btn-secondary mb-2 profile-edit-btn'
                        >
                          Update Profile
                        </Button>
                      </div>

                      {success && (
                        <span
                          style={{
                            color: 'green',
                            textAlign: 'center',
                            marginTop: '20px',
                          }}
                        >
                          Updated Successfully
                        </span>
                      )}

                      <Card.Text>
                        <FiClock /> Joined{' '}
                        {new Date(user.createdAt).toDateString()}
                      </Card.Text>
                    </Card.Body>
                  </form>
                </Card>
              </Col>
            </>
          ) : (
            <>
              <Col className='profile-card' sm={12} md={6} lg={4} xl={3}>
                {' '}
                <Card
                  style={{ width: '18rem' }}
                  className='card border-0 profile-card'
                >
                  <div className='d-flex justify-content-center pt-2'>
                    <Image
                      className='profileImg'
                      src={PF + user.profilepic}
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src =
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png?20160527143724'
                      }}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      {user.firstname} {user.lastname}
                    </Card.Title>
                    <Card.Text>{user.username}</Card.Text>
                    <div className='d-grid gap-2'>
                      <Button
                        className='btn btn-secondary mb-2 profile-edit-btn'
                        onClick={() => setUpdateMode(true)}
                      >
                        Edit Profile
                      </Button>
                    </div>
                    <Card.Text>
                      <FiMail /> {user.email}
                    </Card.Text>
                    <Card.Text>
                      <GoDeviceMobile /> {user.contact}
                    </Card.Text>
                    <Card.Text>
                      <FiClock /> Joined{' '}
                      {new Date(user.createdAt).toDateString()}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          )}

          <Col>
            <ManageProduct />
          </Col>
        </Row>
      </Container>
    </>
  )
}
