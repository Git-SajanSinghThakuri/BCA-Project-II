import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { books } from '../books'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

function Post() {
  // locating the post
  const location = useLocation()
  const path = location.pathname.split('/')[2]
  const post = books.find((p) => p.id.toString() === path)
  console.log(location)

  // counts inc dec product quantity
  const [count, setCount] = useState(0)

  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={5} className='d-flex'>
          <Card>
            <Card.Body>
              <Card.Img variant='top' src={post.img} />
            </Card.Body>
          </Card>
        </Col>
        <Col sm={7} className='d-flex'>
          <Card>
            <Card.Header>
              <small className='text-muted'>{post.title}</small>
            </Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.desc}</Card.Text>
              <p className='card-text'>
                <i class=' icon fas fa-map-marker-alt me-1'></i>
                {post.location}
              </p>
              <p>Stock:{post.stock}</p>
              <p>Price: Rs.{post.price} (Negotiable)</p>
              <p>Contact: {post.contact} </p>
            </Card.Body>
            <Card.Footer className='d-flex align-items-center justify-content-end'>
              <div className='reserveOperatorContainer'>
                <span
                  className='reserveOperator'
                  onClick={() => setCount(count - 1)}
                >
                  <AiFillMinusCircle />
                </span>
                <span className='reserveOperatorCounter'>{count}</span>
                <span
                  className='reserveOperator'
                  onClick={() => setCount(count + 1)}
                >
                  <AiFillPlusCircle />
                </span>
              </div>
              <div>
                <Button type='button' className='custom-btn' size='lg'>
                  Reserve
                </Button>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Post
