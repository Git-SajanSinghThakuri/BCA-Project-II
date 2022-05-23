import { Card, Col } from 'react-bootstrap'
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CardComponents = ({ post }) => {
  const PF = 'http://localhost:5000/images/'
  return (
    <Col>
      <Card className='my-3 p-3 rounded card' style={{ width: '16rem' }}>
        <Link to={`/post/${post._id}`}>
          <Card.Img
            variant='top'
            style={{ height: '18rem' }}
            src={PF + post.Image}
          />
          <Card.Body className='post-card-body'>
            <Card.Title className='post-cardtitle'>{post.title}</Card.Title>
            <Card.Text className='card-text'>
              <FaMapMarker className='icon' /> {post.location}
            </Card.Text>
            <Card.Text>Price: Rs.{post.price} (Negotiable)</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  )
}
export default CardComponents
