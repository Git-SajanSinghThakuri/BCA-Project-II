import React, { useEffect, useState } from 'react'
import { Container, Row, Navbar, Form, FormControl } from 'react-bootstrap'
import axios from 'axios'
import Card from '../../Components/Search'
import { useLocation } from 'react-router-dom'

export default function Categories() {
  const [posts, setPosts] = useState([])
  const [query, setQuery] = useState('')

  const find = useLocation()
  const path = find.pathname.split('/')[2]

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts/')

      setPosts(res.data)
    }
    fetchPosts()
    console.log('/posts/')
    console.log(path)
  }, [])

  return (
    <>
      <Navbar className='navbar'>
        <Container>
          <Form>
            <FormControl
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
            />
          </Form>
        </Container>
      </Navbar>
      <Container>
        <Row>
          {posts
            .filter((post) => post.title.toLowerCase().includes(query))
            .map((post) => (
              <Card key={post._id} post={post} />
            ))}
        </Row>
      </Container>
    </>
  )
}
