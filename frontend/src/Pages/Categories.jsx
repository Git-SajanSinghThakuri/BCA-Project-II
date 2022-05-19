import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import axios from 'axios'
import Card from '../Components/CategoriesBook'

export default function Categories() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts')
      setPosts(res.data)
    }
    fetchPosts()
  }, [])
  return (
    <Row>
      {posts.map((post) => (
        <Card key={post._id} post={post} />
      ))}
    </Row>
  )
}
