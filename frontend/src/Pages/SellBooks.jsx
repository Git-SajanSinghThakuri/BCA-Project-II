import React, { Component } from 'react'
import { Container, Row, Col, Form, Carousel, FloatingLabel, InputGroup, FormControl, Button } from 'react-bootstrap'
import {FaMapMarker,FaMoneyBill} from 'react-icons/fa';
import { ImBook } from "react-icons/im";
import{BiEdit,BiCategoryAlt}from "react-icons/bi";
import{AiOutlineStock}from "react-icons/ai"
import{BsFillHeartFill}from"react-icons/bs"
import{MdSell}from"react-icons/md"


export default class SellBooks extends Component {

  fileObj = [];
  fileArray = [];

  constructor(props) {
    super(props)
    this.state = {
      file: [null]
    }
    this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
  }

  uploadMultipleFiles(e) {
    this.fileObj.push(e.target.files)
    for (let i = 0; i < this.fileObj[0].length; i++) {
      this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
    }
    this.setState({ file: this.fileArray })
  }

  render() {

    return (
      <>
        <Container>
          <Form>
            <p className='d-flex justify-content-center mt-2'>Please feel free to post your old books so that needy one can get it.</p>
            <Row>
              <Col sm={6}>
                <InputGroup className="mt-4 mb-3">
                  <InputGroup.Text><ImBook className="icon"/></InputGroup.Text>
                  <FormControl
                    placeholder="Bookname"
                    aria-label="Bookname"
                  />
                </InputGroup>
                <InputGroup className="mt-4 mb-3">
                  <InputGroup.Text><BiEdit className="icon"/></InputGroup.Text>
                  <FormControl
                    placeholder="Edition"
                    aria-label="Edition"
                  />
                </InputGroup>

                <Form.Group as={Col}>
                  <InputGroup>
                    <InputGroup.Text><BiCategoryAlt className="icon"></BiCategoryAlt></InputGroup.Text>
                    <Form.Select>
                      <option disabled selected>Select Category</option>
                      <option value="School">School</option>
                      <option value="+2">+2</option>
                      <option value="A Level">A Level</option>
                      <option value="Bachelors">Bachelor</option>
                      <option value="Master">Master</option>
                      <option value="Literature & Fiction">Literature & Fiction</option>
                    </Form.Select>
                  </InputGroup>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <InputGroup className="mt-4">
                      <InputGroup.Text><FaMoneyBill className="icon"/></InputGroup.Text>
                      <FormControl
                        placeholder="Price"
                        aria-label="Price"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <InputGroup className="mt-4">
                      <InputGroup.Text><AiOutlineStock className="icon"/></InputGroup.Text>
                      <FormControl
                        placeholder="Stock Books"
                        aria-label="Number Of Books"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <InputGroup className="mt-4">
                      <InputGroup.Text><FaMapMarker className='icon'/></InputGroup.Text>
                      <FormControl
                        placeholder="Location"
                        aria-label="Username"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
                <FloatingLabel label="Description">
                  <Form.Control
                    as="textarea"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>

                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <InputGroup className="mt-4 mb-3">
                      <InputGroup.Text><MdSell className="icon"></MdSell></InputGroup.Text>
                      <FormControl
                        placeholder="Sell"
                        aria-label="Sell"
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <InputGroup className="mt-4 mb-3">
                      <InputGroup.Text><BsFillHeartFill className='icon'/></InputGroup.Text>
                      <Form.Select aria-label="Floating label select example">
                        <option>Condition</option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                      </Form.Select>
                    </InputGroup>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <InputGroup className="mt-4">
                      <InputGroup.Text><FaMoneyBill className="icon"/></InputGroup.Text>
                      <FormControl
                        placeholder="Original Price"
                        aria-label="Original Price"
                      />
                    </InputGroup>
                  </Form.Group>
                </Row>
              </Col>

              <Col sm={6}>
                <Form.Group className="mt-4 mb-3" controlId="formFileMultiple">
                  <Form.Control type="file" onChange={this.uploadMultipleFiles} multiple />
                </Form.Group>
                <Carousel>
                  {(this.fileArray || []).map(url => (
                    <Carousel.Item>
                      <img className='img-fluid  PostBookImg' alt="" src={url} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <div className="d-grid gap-2">
              <Button className='btn custom-btn' size="lg">
                Post Book Online
              </Button>
            </div>
          </Form>
        </Container>
      </>
    )
  }
}