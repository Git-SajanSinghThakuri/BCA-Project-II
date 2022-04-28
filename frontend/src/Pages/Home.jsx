import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import books from '../books'
import Cards from '../Components/Book'

export default function Home() {
  const Books = books.reduce((BookCategory, { category }, id, Book) => {
    if (!BookCategory[category]) {
      BookCategory[category] = []
    }
    BookCategory[category].push(Book[id])
    return BookCategory
  }, {})

  const [noOfElement] = useState(4)
  return (
    <Container>
      {
        // Maping Category of Books
        Object.entries(Books).map(([BooksCategory, Bundle], i) => {
          return (
            <Row className='ms-auto' key={i}>
              <Row className='pt-4'>
                <Col className='col-auto me-auto'>
                  <h3 className='book-category'>{BooksCategory}</h3>
                </Col>
                <Col className='col-auto'>
                  <Button className='btn custom-btn '>Show More</Button>
                </Col>
              </Row>

              {
                // Maping Books
                Bundle.slice(0, noOfElement).map((book, j) => {
                  return (
                    <Col sm={12} md={6} lg={4} xl={3} key={j}>
                      <Cards BooksCategory={j} post={book} />
                    </Col>
                  )
                })
              }
            </Row>
          )
        })
      }
    </Container>
  )
}
