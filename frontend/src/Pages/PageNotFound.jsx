import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { IoIosArrowBack } from 'react-icons/io'

export default class PageNotFound extends Component {
  render() {
    return (
      <>
        <Container className='d-flex justify-content-center'>
          <div className='notfound'>
            <h1 className='notfound-404'>404</h1>
            <h2>Error PageNotFound</h2>
            <Link to='/' className='links'>
              <h3>
                <IoIosArrowBack />
                Go Home Instead
              </h3>
            </Link>
          </div>
        </Container>
      </>
    )
  }
}
