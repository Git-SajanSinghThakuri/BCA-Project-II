import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
// import { books } from '../books'
import axios from 'axios'

function Post() {
  // locating the post
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const [post, setPost] = useState({})
  // console.log(location)

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get('/posts/' + path)
      console.log(res)
      setPost(res.data)
    }
    getPost()
  }, [path])

  const PF = 'http://localhost:5000/images/'

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={5} className='d-flex'>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={PF + post.Image} />
            </Card.Body>
            <p>Created by: {post.username}</p>
            <p>Date: {new Date(post.createdAt).toDateString()}</p>
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
              <Card.Text>Disclaimer</Card.Text>
              <Card.Text>
                This book is not sold by Booklet. To buy this book, contact
                respective seller by messaging or direct call and buy the book
                with mutual understanding.
              </Card.Text>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Post
