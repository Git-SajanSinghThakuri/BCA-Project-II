import React, { useEffect, useState, useContext } from "react";
import { Container, Form, ListGroup, ButtonGroup } from "react-bootstrap";
import axios from "axios";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { CgMoreO } from "react-icons/cg";

export default function ManageProduct() {
  const { user } = useContext(Context);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      //   const res = await axios.get('/posts?user=Sajan')
      const res = await axios.get("/posts/?user=" + user.username);
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <>
      <Container>
        <h3 className="d-flex align-items-center justify-content-center">
          My Product
        </h3>
        <Form>
          <ListGroup>
            {posts.map((post) => (
              <ListGroup.Item
                className="d-flex justify-content-between"
                key={post.title}
              >
                <Link to={`/post/${post._id}`}>
                  <span className="item-text list-my-product">
                    {post.title}
                  </span>
                </Link>
                <ButtonGroup>
                  <Link to={`/EditPost/${post._id}`}>
                    <CgMoreO className="icon" />
                  </Link>
                </ButtonGroup>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Form>
      </Container>
    </>
  );
}
