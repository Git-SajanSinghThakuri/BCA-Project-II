import React, { useEffect, useState, useContext } from 'react'
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  InputGroup,
  FormControl,
  Button,
  ButtonGroup,
  FloatingLabel,
} from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../context/Context'

import { FaMapMarker, FaMoneyBill } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'
import { BiEdit, BiCategoryAlt } from 'react-icons/bi'
import { BsFillHeartFill } from 'react-icons/bs'

function EditPost() {
  // locating the post
  const find = useLocation()
  const path = find.pathname.split('/')[2]
  const [post, setPost] = useState({})

  // Edit-Get Post
  const { user } = useContext(Context)
  const [updateMode, setUpdateMode] = useState(false)
  const PF = 'http://localhost:5000/images/'
  const [title, setTitle] = useState('')
  const [edition, setedition] = useState('')
  const [category, setcategory] = useState('')
  const [description, setdescription] = useState('')
  const [condition, setcondition] = useState('')
  const [originalprice, setoriginalprice] = useState('')
  const [price, setprice] = useState('')
  // const [stock, setstock] = useState('')
  const [location, setlocation] = useState('')
  const [file, setFile] = useState(null)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path)
      setPost(res.data)
      setTitle(res.data.title)
      setedition(res.data.edition)
      setcategory(res.data.category)
      setdescription(res.data.description)
      setcondition(res.data.condition)
      setoriginalprice(res.data.originalprice)
      setprice(res.data.price)
      setlocation(res.data.location)
    }
    getPost()
  }, [path])

  const handleUpdate = async () => {
    const updatePost = {
      username: user.username,
      title,
      edition,
      category,
      description,
      condition,
      originalprice,
      price,
      location,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      updatePost.Image = filename
      try {
        await axios.post('/upload', data)
      } catch (err) {}
    }

    try {
      await axios.put(`/posts/${post._id}`, updatePost)
      window.location.reload()
      setUpdateMode(false)
    } catch (err) {}
  }

  // Handle Delete
  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      })
      window.location.replace('/')
    } catch (err) {}
  }
  console.log(`/posts/${post._id}`)

  return (
    <Container className='mt-5'>
      {updateMode ? (
        <form>
          <p className='d-flex justify-content-center mt-2'>
            You are on edit mode
          </p>
          <Row className='d-flex justify-content-center mt-2'>
            <Col sm={6}>
              <InputGroup className='mt-4 mb-3'>
                <InputGroup.Text>
                  <ImBook className='icon' />
                </InputGroup.Text>
                <FormControl
                  placeholder='Bookname'
                  aria-label='Bookname'
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </InputGroup>
              <InputGroup className='mt-4 mb-3'>
                <InputGroup.Text>
                  <BiEdit className='icon' />
                </InputGroup.Text>
                <FormControl
                  placeholder='Edition'
                  aria-label='Edition'
                  required
                  value={edition}
                  onChange={(e) => setedition(e.target.value)}
                />
              </InputGroup>

              <Form.Group as={Col}>
                <InputGroup>
                  <InputGroup.Text>
                    <BiCategoryAlt className='icon'></BiCategoryAlt>
                  </InputGroup.Text>
                  <Form.Select onChange={(e) => setcategory(e.target.value)}>
                    <option value={category}>{category}</option>
                    <option value='School'>School</option>
                    <option value='+2'>+2</option>
                    <option value='CTEVT'>CTEVT</option>
                    <option value='Entrance Preparation'>
                      Entrance Preparation
                    </option>
                    <option value='A Level'>A Level</option>
                    <option value='Bachelors'>Bachelors</option>
                    <option value='Masters'>Masters</option>
                    <option value='Novels And More'>Novels And More</option>
                  </Form.Select>
                </InputGroup>
              </Form.Group>

              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <InputGroup className='mt-4'>
                    <InputGroup.Text>
                      <FaMoneyBill className='icon' />
                    </InputGroup.Text>
                    <FormControl
                      placeholder='Price'
                      aria-label='Price'
                      type='number'
                      required
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col}>
                  <InputGroup className='mt-4'>
                    <InputGroup.Text>
                      <FaMapMarker className='icon' />
                    </InputGroup.Text>
                    <FormControl
                      type='text'
                      placeholder='Location'
                      aria-label='Username'
                      required
                      value={location}
                      onChange={(e) => setlocation(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
              <FloatingLabel label='Description'>
                <Form.Control
                  as='textarea'
                  style={{ height: '100px' }}
                  required
                  value={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
              </FloatingLabel>

              <Row className='mb-3'>
                <Form.Group as={Col}>
                  <InputGroup className='mt-4 mb-3'>
                    <InputGroup.Text>
                      <BsFillHeartFill className='icon' />
                    </InputGroup.Text>
                    <Form.Select
                      aria-label='Floating label select example'
                      onChange={(e) => setcondition(e.target.value)}
                    >
                      <option value={condition}>{condition}</option>
                      <option value='New'>New</option>
                      <option value='Used'>Used</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col}>
                  <InputGroup className='mt-4'>
                    <InputGroup.Text>
                      <FaMoneyBill className='icon' />
                    </InputGroup.Text>
                    <FormControl
                      placeholder='Original Price'
                      aria-label='Original Price'
                      type='number'
                      required
                      value={originalprice}
                      onChange={(e) => setoriginalprice(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>
              </Row>
            </Col>
            <Col sm={6}>
              <Form.Group className='mt-4 mb-3' controlId='formFileMultiple'>
                <Form.Control
                  type='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </Form.Group>
              {file && (
                <img
                  className='img-fluid  PostBookImg'
                  src={URL.createObjectURL(file)}
                  alt=''
                />
              )}
            </Col>

            {/* <div className='d-grid gap-2'> */}
            <Button
              type='submit'
              className='btn btn-secondary mb-2'
              onClick={handleUpdate}
            >
              Update Post
            </Button>
            {/* </div> */}
          </Row>
        </form>
      ) : (
        <>
          <Row>
            <Col sm={5} className='d-flex'>
              <Card>
                <Card.Body>
                  <Card.Img variant='top' src={PF + post.Image} />
                </Card.Body>
              </Card>
            </Col>
            <Col sm={7} className='d-flex'>
              <Card>
                <Card.Header>
                  <small className='text-muted'>Description</small>
                </Card.Header>

                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.desc}</Card.Text>
                  <p>Description: {post.description}</p>
                  <p>Condition: {post.condition}</p>
                  <p>Original Price: Rs.{post.originalprice}</p>
                  <p>Price: Rs.{post.price} (Negotiable)</p>
                  <p>Contact: {post.contact} </p>
                  <p className='card-text'>Location: {post.location}</p>
                </Card.Body>
                <Card.Footer>
                  <div className='d-grid gap-2'>
                    <ButtonGroup>
                      <Button
                        className='btn-secondary btn-sm'
                        onClick={() => setUpdateMode(true)}
                      >
                        Edit Post
                      </Button>

                      <Button
                        className='btn-danger btn-sm'
                        onClick={handleDelete}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  )
}

export default EditPost
