import React, { useState, useContext } from 'react'
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap'
import { FaMapMarker, FaMoneyBill } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'
import { BiEdit, BiCategoryAlt } from 'react-icons/bi'
// import { AiOutlineStock } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import axios from 'axios'
import { Context } from '../context/Context'

export default function SellBooks() {
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
  const { user } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {
      username: user.username,
      contact: user.contact,
      title,
      edition,
      category,
      description,
      condition,
      originalprice,
      price,
      // stock,
      location,
    }
    if (file) {
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append('name', filename)
      data.append('file', file)
      newPost.Image = filename
      try {
        await axios.post('/upload', data)
      } catch (err) {}
    }
    try {
      const res = await axios.post('/posts', newPost)
      window.location.replace('/post/' + res.data._id)
    } catch (err) {}
  }
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <p className='d-flex justify-content-center mt-2'>
            Please feel free to post your old books so that needy one can get
            it.
          </p>
          <Row>
            <Col sm={6}>
              <InputGroup className='mt-4 mb-3'>
                <InputGroup.Text>
                  <ImBook className='icon' />
                </InputGroup.Text>
                <FormControl
                  placeholder='Bookname'
                  aria-label='Bookname'
                  required
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
                  onChange={(e) => setedition(e.target.value)}
                />
              </InputGroup>

              <Form.Group as={Col}>
                <InputGroup>
                  <InputGroup.Text>
                    <BiCategoryAlt className='icon'></BiCategoryAlt>
                  </InputGroup.Text>
                  <Form.Select onChange={(e) => setcategory(e.target.value)}>
                    <option>Select Category</option>
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
                      onChange={(e) => setprice(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group>

                {/* <Form.Group as={Col}>
                  <InputGroup className='mt-4'>
                    <InputGroup.Text>
                      <AiOutlineStock className='icon' />
                    </InputGroup.Text>
                    <FormControl
                      placeholder='Stock Books'
                      aria-label='Number Of Books'
                      type='number'
                      required
                      onChange={(e) => setstock(e.target.value)}
                    />
                  </InputGroup>
                </Form.Group> */}

                <Form.Group as={Col}>
                  <InputGroup className='mt-4'>
                    <InputGroup.Text>
                      <FaMapMarker className='icon' />
                    </InputGroup.Text>
                    <FormControl
                      placeholder='Location'
                      aria-label='Username'
                      required
                      type='text'
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
                      <option>Condition</option>
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
                      onChange={(e) => setoriginalprice(e.target.value)}
                      type='number'
                      required
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
          </Row>
          <div className='d-grid gap-2'>
            <Button className='btn custom-btn' size='lg' type='submit'>
              Post Book Online
            </Button>
          </div>
        </Form>
      </Container>
    </>
  )
}
